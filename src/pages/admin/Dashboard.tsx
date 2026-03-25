import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthAndLoad();
  }, []);

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
    // Filtrar últimos 30 dias por padrão
    const toDate = new Date().toISOString();
    const fromDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const { data, error } = await (supabase.rpc as any)('get_admin_metrics', {
      from_date: fromDate,
      to_date: toDate
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
    return <div className="min-h-screen bg-background items-center justify-center flex text-primary text-xl font-bold animate-pulse">Carregando métricas confidenciais...</div>;
  }

  if (errorMsg) {
    return (
      <div className="min-h-screen bg-background items-center justify-center flex flex-col p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-500">Erro na leitura do Banco</h2>
        <p className="text-white max-w-xl">{errorMsg}</p>
        <p className="text-muted-foreground text-sm">Parece que o arquivo supabase_setup.sql não foi rodado corretamente no banco, ou a função get_admin_metrics não existe.</p>
        <Button onClick={loadMetrics} variant="outline">Tentar Novamente</Button>
      </div>
    );
  }

  if (!metrics || !metrics.summary) {
    return <div className="min-h-screen bg-background items-center justify-center flex flex-col text-white space-y-4">
      <p>O painel de métricas está vazio. Navegue pelo quiz para gerar os primeiros dados!</p>
      <Button onClick={handleLogout} variant="outline">Sair</Button>
    </div>;
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-white">Painel Analítico <span className="text-primary text-sm uppercase align-top ml-2">Admin</span></h1>
            <p className="text-muted-foreground mt-1">Visão geral dos últimos 30 dias</p>
          </div>
          <Button onClick={handleLogout} variant="destructive">Sair do Painel</Button>
        </div>
        
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Total de Sessões" value={metrics.summary.totalSessions} />
          <MetricCard title="Quizzes Completos" value={metrics.summary.totalCompletions} subtitle={`${metrics.summary.completionRate}% do total chegam no Result`} />
          <MetricCard title="Cliques no CTA Checkout" value={metrics.summary.ctaClicks} subtitle={`${metrics.summary.ctaRate}% do total clicam em comprar`} />
          <MetricCard title="Tempo Médio até CTA" value={`${metrics.summary.avgTimeToCtaSeconds}s`} subtitle="Tempo médio desde o 'session_start'" />
        </div>

        {/* Funnel & Dropoff */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-card border-white/10 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-black/20 border-b border-white/5">
              <CardTitle className="text-xl font-bold text-white">Drop-off por Etapa (Abandono)</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-muted-foreground">
                  <thead className="text-xs uppercase bg-black/40 text-white/70">
                    <tr>
                      <th className="px-6 py-4">Etapa (ID)</th>
                      <th className="px-6 py-4">Visualizações</th>
                      <th className="px-6 py-4">Conclusões</th>
                      <th className="px-6 py-4 font-bold text-red-400">Taxa Drop-off</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.dropoffByStep?.map((step: any, i: number) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="px-6 py-4 font-mono font-medium text-white">{step.step_id}</td>
                        <td className="px-6 py-4">{step.viewed}</td>
                        <td className="px-6 py-4">{step.completed}</td>
                        <td className="px-6 py-4 font-bold text-red-500">{step.dropoff_pct}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-white/10 shadow-xl rounded-2xl overflow-hidden">
            <CardHeader className="bg-black/20 border-b border-white/5">
              <CardTitle className="text-xl font-bold text-white">Top UTM Sources</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-muted-foreground">
                  <thead className="text-xs uppercase bg-black/40 text-white/70">
                    <tr>
                      <th className="px-6 py-4">Origem (Source)</th>
                      <th className="px-6 py-4">Campanha</th>
                      <th className="px-6 py-4">Sessões Iniciais</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.topUtmSources?.map((utm: any, i: number) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="px-6 py-4 font-medium text-white uppercase">{utm.source || 'N/A'}</td>
                        <td className="px-6 py-4 text-white/70">{utm.campaign || 'N/A'}</td>
                        <td className="px-6 py-4 font-bold text-primary">{utm.sessions}</td>
                      </tr>
                    ))}
                    {(!metrics.topUtmSources || metrics.topUtmSources.length === 0) && (
                      <tr><td colSpan={3} className="px-6 py-8 text-center">Nenhuma UTM capturada no período.</td></tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function MetricCard({ title, value, subtitle }: any) {
  return (
    <div className="bg-card p-6 rounded-2xl border border-white/10 shadow-lg shrink-0">
      <h3 className="text-sm font-semibold text-muted-foreground mb-3 tracking-wide">{title}</h3>
      <p className="text-4xl font-black text-white">{value}</p>
      {subtitle && <p className="text-xs font-medium text-primary mt-2">{subtitle}</p>}
    </div>
  )
}
