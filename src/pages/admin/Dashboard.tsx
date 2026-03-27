import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, 
  LineChart, Line, Cell
} from 'recharts';
import { Loader2, ChevronDown, ChevronUp, Calendar } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { quizSteps } from '@/data/quizData';

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  
  // Independent periods
  const [summaryPeriod, setSummaryPeriod] = useState<'today' | '7d' | '30d' | '90d' | 'all'>('30d');
  const [funnelPeriod, setFunnelPeriod] = useState<'today' | '7d' | '30d' | '90d' | 'all'>('30d');
  const [volumePeriod, setVolumePeriod] = useState<'today' | '7d' | '30d' | '90d' | 'all'>('30d');
  
  const navigate = useNavigate();

  useEffect(() => {
    loadAllMetrics();
  }, [summaryPeriod, funnelPeriod, volumePeriod]);

  const getDates = (p: string) => {
    const now = new Date();
    let fromDate: Date;
    switch (p) {
      case 'today': fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate()); break;
      case '7d': fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); break;
      case '30d': fromDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000); break;
      case '90d': fromDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000); break;
      default: fromDate = new Date(2024, 0, 1);
    }
    return { from_date: fromDate.toISOString(), to_date: now.toISOString() };
  };

  async function loadAllMetrics() {
    if (!metrics) setLoading(true);
    else setUpdating(true);
    setErrorMsg(null);
    
    try {
      // Parallel fetches for independent periods
      const [summaryRes, funnelRes, volumeRes] = await Promise.all([
        supabase.rpc('get_admin_metrics', getDates(summaryPeriod)),
        supabase.rpc('get_admin_metrics', getDates(funnelPeriod)),
        supabase.rpc('get_admin_metrics', getDates(volumePeriod))
      ]);

      if (summaryRes.error) throw summaryRes.error;
      
      const sData = summaryRes.data as any;
      const fData = funnelRes.data as any;
      const vData = volumeRes.data as any;

      setMetrics({
        summary: sData.summary,
        topUtmSources: sData.topUtmSources,
        stepFunnel: fData.stepFunnel,
        sessionsByDay: vData.sessionsByDay
      });
    } catch (error: any) {
      console.error("Dashboard error:", error);
      setErrorMsg(error.message || JSON.stringify(error));
    } finally {
      setLoading(false);
      setUpdating(false);
    }
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate('/admin/login');
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background items-center justify-center flex flex-col gap-4 text-primary">
        <Loader2 className="w-12 h-12 animate-spin" />
        <h2 className="text-xl font-bold animate-pulse">Calculando métricas visuais...</h2>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="min-h-screen bg-background items-center justify-center flex flex-col p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-500">Erro no Banco de Dados</h2>
        <p className="text-white max-w-xl">{errorMsg}</p>
        <Button onClick={loadAllMetrics} variant="outline">Tentar Novamente</Button>
      </div>
    );
  }

  if (!metrics || !metrics.summary) {
    return (
      <div className="min-h-screen bg-background items-center justify-center flex flex-col text-white space-y-4">
        <p>O painel de métricas está vazio. Navegue pelo quiz para gerar os primeiros dados!</p>
        <Button onClick={loadAllMetrics} variant="outline" className="mr-2">Tentar Carregar</Button>
        <Button onClick={handleLogout} variant="destructive">Sair</Button>
      </div>
    );
  }

  // Helper to get step title
  const getStepTitle = (stepId: string) => {
    if (stepId === 'result') return 'Página de Resultado';
    const step = quizSteps.find(s => s.id.toString() === stepId);
    return step?.question || step?.headline || 'Etapa sem título';
  };

  // Pre-process funnel data for chart
  const activeStepIds = [...quizSteps.map(s => String(s.id)), 'result']; // ensure result step is valid
  const validFunnelSteps = metrics.stepFunnel?.filter((s:any) => activeStepIds.includes(String(s.step_id))) || [];

  const funnelData = validFunnelSteps.map((s: any) => ({
    name: s.step_id,
    views: s.viewed,
    dropoff: s.dropoff_pct,
    time: s.avg_seconds,
  }));

  return (
    <div className="min-h-screen bg-[#0a0a0a] p-4 xl:p-8 font-sans selection:bg-primary/30">
      <div className="max-w-[1400px] mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-card/50 p-6 rounded-2xl border border-white/5">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
              Dashboard de Inteligência
              <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] uppercase tracking-widest rounded">Admin</span>
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={loadAllMetrics} variant="outline" className="border-white/10 text-white hover:bg-white/10">Atualizar</Button>
            <Button onClick={handleLogout} variant="destructive">Sair</Button>
          </div>
        </div>
        
        {/* Executive Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Acessos Iniciais" value={metrics.summary.totalSessions} icon="👥" />
          <MetricCard title="Leads " value={metrics.summary.totalCompletions} subtitle={`${metrics.summary.completionRate}% completaram o quiz`} icon="✅" />
          <MetricCard title="Cliques no Checkout" value={metrics.summary.ctaClicks} subtitle={`${metrics.summary.ctaRate}% clicaram em comprar`} icon="🛒" />
          <MetricCard title="Tempo Global" value={`${metrics.summary.avgTimeToCtaSeconds}s`} subtitle="Tempo médio total do fluxo" icon="⏱️" />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Funnel Dropoff Chart */}
          <Card className="bg-card/40 border-white/5 shadow-2xl xl:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl text-white">Funil de Retenção Visual</CardTitle>
                <CardDescription>Performance por etapa da operação.</CardDescription>
              </div>
              <PeriodSelector current={funnelPeriod} onChange={setFunnelPeriod} />
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
                    <XAxis type="number" stroke="#ffffff50" />
                    <YAxis dataKey="name" type="category" stroke="#ffffff80" fontSize={11} width={100} tickFormatter={(val) => String(val).substring(0, 15)} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#ffffff20', borderRadius: '8px' }}
                      itemStyle={{ color: 'white' }}
                      labelStyle={{ color: 'white', fontWeight: 'bold', marginBottom: '4px' }}
                      formatter={(value: any, name: string) => [value, name === 'views' ? 'Visualizações' : name]}
                    />
                    <Bar dataKey="views" radius={[0, 4, 4, 0]}>
                      {funnelData.map((entry: any, index: number) => {
                        const isFriction = entry.time > 8;
                        const isDanger = entry.dropoff > 20;
                        let color = '#22c55e'; // Green
                        if (isDanger) color = '#ef4444'; // Red
                        else if (isFriction) color = '#f97316'; // Orange
                        return <Cell key={`cell-${index}`} fill={color} opacity={0.8} />;
                      })}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Traffic History */}
          <Card className="bg-card/40 border-white/5 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-xl text-white">Volume Diário</CardTitle>
                <CardDescription>Acessos (session_start) por dia.</CardDescription>
              </div>
              <PeriodSelector current={volumePeriod} onChange={setVolumePeriod} />
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={metrics.sessionsByDay} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                    <XAxis 
                      dataKey="date" 
                      stroke="#ffffff50" 
                      fontSize={10} 
                      tickFormatter={(val) => {
                        if (val.includes(':')) return val; // Formato HH:00
                        const parts = val.split('-');
                        if (parts.length === 3) return `${parts[2]}/${parts[1]}`; // Formato DD/MM
                        return val;
                      }} 
                    />
                    <YAxis stroke="#ffffff50" fontSize={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#ffffff20', borderRadius: '8px' }}
                      itemStyle={{ color: 'white' }}
                      labelStyle={{ color: 'white', fontWeight: 'bold', marginBottom: '4px' }}
                    />
                    <Line type="monotone" dataKey="sessions" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', r: 4 }} activeDot={{ r: 6 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actionable Data Table */}
        <Card className="bg-card/40 border-white/5 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl text-white">Análise de Fricção e Perfil Vencedor</CardTitle>
            <CardDescription>O Raio-X detalhado de cada tela do quiz para te ajudar a otimizar criativos.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Accordion type="single" collapsible className="w-full">
              <div className="text-xs uppercase bg-[#111] text-muted-foreground border-y border-white/10 grid grid-cols-12 gap-4 px-6 py-4">
                <div className="col-span-1">ID</div>
                <div className="col-span-4">Etapa (Conteúdo)</div>
                <div className="col-span-1 text-center">Abandono</div>
                <div className="col-span-1 text-center">Tempo</div>
                <div className="col-span-3 text-center">Status</div>
                <div className="col-span-2 text-right">Ação</div>
              </div>
              
              {validFunnelSteps.map((step: any, i: number) => {
                const isFriction = step.avg_seconds > 8;
                const isDanger = step.dropoff_pct > 20;
                const title = getStepTitle(step.step_id);
                return (
                  <AccordionItem key={i} value={`step-${i}`} className="border-white/5 px-6">
                    <div className="grid grid-cols-12 gap-4 py-4 items-center">
                      <div className="col-span-1 font-mono font-medium text-white/30 text-[10px]">#{step.step_id}</div>
                      <div className="col-span-4 font-medium text-white/90 truncate pr-4 text-xs" title={title}>{title}</div>
                      <div className="col-span-1 text-center font-bold text-xs">
                        <span className={isDanger ? 'text-red-400' : 'text-emerald-400'}>{step.dropoff_pct}%</span>
                      </div>
                      <div className="col-span-1 text-center text-xs">
                        <span className={isFriction ? 'text-orange-400 font-bold' : 'text-white/60'}>{step.avg_seconds}s</span>
                      </div>
                      <div className="col-span-3 flex justify-center">
                        {isDanger ? <span className="text-[9px] font-bold bg-red-500/10 text-red-500 px-2 py-0.5 rounded border border-red-500/20 uppercase tracking-tighter">Gargalo</span> : 
                         isFriction ? <span className="text-[9px] font-bold bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20 uppercase tracking-tighter">Análise</span> : 
                         <span className="text-[9px] font-bold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-tighter">Fluido</span>}
                      </div>
                      <div className="col-span-2 text-right">
                        <AccordionTrigger className="inline-flex p-1 hover:bg-white/5 rounded-md transition-colors h-auto py-0">
                          <span className="text-[10px] font-bold text-primary mr-2">VER DADOS</span>
                        </AccordionTrigger>
                      </div>
                    </div>
                    
                    <AccordionContent className="pb-6">
                      <div className="bg-black/40 rounded-xl border border-white/5 p-4 space-y-3">
                        <h4 className="text-[10px] font-black text-muted-foreground uppercase tracking-wider mb-2">Distribuição de Respostas (%)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {step.answers && step.answers.length > 0 ? step.answers.map((ans: any, idx: number) => (
                            <div key={idx} className="space-y-1">
                              <div className="flex justify-between text-[11px] mb-1">
                                <span className="text-white/80 font-medium truncate max-w-[80%]">
                                  {typeof ans.option === 'object' ? JSON.stringify(ans.option) : String(ans.option)}
                                </span>
                                <span className="text-primary font-bold">{ans.percentage}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-primary/60 transition-all duration-500" 
                                  style={{ width: `${ans.percentage}%` }}
                                />
                              </div>
                              <div className="text-[9px] text-muted-foreground">{ans.count} votos</div>
                            </div>
                          )) : (
                            <p className="text-[11px] text-muted-foreground italic">Nenhuma resposta registrada nesta etapa.</p>
                          )}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                )
              })}
            </Accordion>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

function PeriodSelector({ current, onChange }: { current: string, onChange: (p: any) => void }) {
  return (
    <div className="flex bg-black/40 p-1 rounded-lg border border-white/5 h-fit">
      {[
        { id: 'today', label: '1D' },
        { id: '7d', label: '7D' },
        { id: '30d', label: '30D' },
        { id: 'all', label: 'Total' }
      ].map((p) => (
        <button
          key={p.id}
          onClick={() => onChange(p.id)}
          className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-all ${
            current === p.id 
              ? 'bg-primary text-primary-foreground' 
              : 'text-muted-foreground hover:text-white hover:bg-white/5'
          }`}
        >
          {p.label}
        </button>
      ))}
    </div>
  );
}

function MetricCard({ title, value, subtitle, icon }: any) {
  return (
    <div className="bg-card/40 p-6 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group hover:border-primary/30 transition-colors">
      <div className="absolute -right-4 -top-4 text-7xl opacity-5 group-hover:scale-110 transition-transform origin-center">{icon}</div>
      <h3 className="text-sm font-semibold text-muted-foreground mb-3 tracking-wide">{title}</h3>
      <p className="text-4xl font-black text-white relative z-10">{value}</p>
      {subtitle && <p className="text-xs font-medium text-primary mt-2 relative z-10">{subtitle}</p>}
    </div>
  )
}
