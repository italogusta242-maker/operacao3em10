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

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [period, setPeriod] = useState<'today' | '7d' | '30d' | '90d' | 'all'>('30d');
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthAndLoad();
  }, [period]);

  async function checkAuthAndLoad() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin/login');
      return;
    }
    loadMetrics();
  }

  async function loadMetrics() {
    setLoading(true);
    setErrorMsg(null);
    
    const now = new Date();
    let fromDate: Date;

    switch (period) {
      case 'today':
        fromDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        break;
      case '7d':
        fromDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
        break;
      case '30d':
        fromDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
        break;
      case '90d':
        fromDate = new Date(Date.now() - 90 * 24 * 60 * 60 * 1000);
        break;
      case 'all':
      default:
        fromDate = new Date(2024, 0, 1); // Early start date
    }

    const { data, error } = await (supabase.rpc as any)('get_admin_metrics', {
      from_date: fromDate.toISOString(),
      to_date: now.toISOString()
    });

    if (error) {
      console.error("Dashboard falhou ao carregar métricas:", error);
      setErrorMsg(error.message || JSON.stringify(error));
    } else {
      setMetrics(data);
    }
    setLoading(false);
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
        <h2 className="text-2xl font-bold text-red-500">Aviso do Banco de Dados</h2>
        <p className="text-white max-w-xl">{errorMsg}</p>
        <p className="text-muted-foreground text-sm">Atualize a sua função SQL rodando o novo script `supabase_setup.sql` no painel do Supabase.</p>
        <Button onClick={loadMetrics} variant="outline">Tentar Novamente</Button>
      </div>
    );
  }

  if (!metrics || !metrics.summary) {
    return (
      <div className="min-h-screen bg-background items-center justify-center flex flex-col text-white space-y-4">
        <p>O painel de métricas está vazio. Navegue pelo quiz para gerar os primeiros dados!</p>
        <Button onClick={handleLogout} variant="outline">Sair</Button>
      </div>
    );
  }

  // Pre-process funnel data for chart
  const funnelData = metrics.stepFunnel?.map((s: any) => ({
    name: s.step_id,
    views: s.viewed,
    dropoff: s.dropoff_pct,
    time: s.avg_seconds,
  })) || [];

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
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <div className="flex bg-black/40 p-1 rounded-lg border border-white/5">
                {[
                  { id: 'today', label: 'Hoje' },
                  { id: '7d', label: '7D' },
                  { id: '30d', label: '30D' },
                  { id: '90d', label: '90D' },
                  { id: 'all', label: 'Total' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPeriod(p.id as any)}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                      period === p.id 
                        ? 'bg-primary text-primary-foreground shadow-lg' 
                        : 'text-muted-foreground hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={loadMetrics} variant="outline" className="border-white/10 text-white hover:bg-white/10">Atualizar</Button>
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
                <CardDescription>Volume de pessoas que visualizaram cada etapa da operação.</CardDescription>
              </div>
              <PeriodSelector current={period} onChange={setPeriod} />
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
                    <XAxis type="number" stroke="#ffffff50" />
                    <YAxis dataKey="name" type="category" stroke="#ffffff80" fontSize={11} width={100} tickFormatter={(val) => String(val).substring(0, 15)} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#111', borderColor: '#ffffff20', borderRadius: '8px', color: 'white' }}
                      formatter={(value: any, name: string) => [value, name === 'views' ? 'Visualizações' : name]}
                    />
                    <Bar dataKey="views" radius={[0, 4, 4, 0]}>
                      {funnelData.map((entry: any, index: number) => (
                        <Cell key={`cell-${index}`} fill={entry.dropoff > 30 ? '#ef4444' : '#22c55e'} opacity={0.8} />
                      ))}
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
              <PeriodSelector current={period} onChange={setPeriod} />
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
                        // val is YYYY-MM-DD string from SQL
                        const parts = val.split('-');
                        return `${parts[2]}/${parts[1]}`;
                      }} 
                    />
                    <YAxis stroke="#ffffff50" fontSize={10} />
                    <Tooltip contentStyle={{ backgroundColor: '#111', borderColor: '#ffffff20', borderRadius: '8px' }} />
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
                <div className="col-span-4">Etapa ID</div>
                <div className="col-span-2">Abandono</div>
                <div className="col-span-2 text-center">Tempo</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Ação</div>
              </div>
              
              {metrics.stepFunnel.map((step: any, i: number) => {
                const isFriction = step.avg_seconds > 8;
                const isDanger = step.dropoff_pct > 20;
                return (
                  <AccordionItem key={i} value={`step-${i}`} className="border-white/5 px-6">
                    <div className="grid grid-cols-12 gap-4 py-4 items-center">
                      <div className="col-span-4 font-mono font-medium text-white/90 truncate">{step.step_id}</div>
                      <div className="col-span-2 font-bold">
                        <span className={isDanger ? 'text-red-400' : 'text-emerald-400'}>{step.dropoff_pct}%</span>
                      </div>
                      <div className="col-span-2 text-center">
                        <span className={isFriction ? 'text-orange-400 font-bold' : 'text-white/60'}>{step.avg_seconds}s</span>
                      </div>
                      <div className="col-span-2">
                        {isDanger ? <span className="text-[10px] bg-red-500/10 text-red-500 px-2 py-0.5 rounded border border-red-500/20">Gargalo</span> : 
                         isFriction ? <span className="text-[10px] bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded border border-orange-500/20">Lento</span> : 
                         <span className="text-[10px] bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded border border-emerald-500/20">Fluido</span>}
                      </div>
                      <div className="col-span-2 text-right">
                        <AccordionTrigger className="inline-flex p-1 hover:bg-white/5 rounded-md transition-colors h-auto py-0">
                          <span className="text-[10px] font-bold text-primary mr-2">DETALHES</span>
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
