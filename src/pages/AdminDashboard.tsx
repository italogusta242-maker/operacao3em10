import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LogOut, Users, CheckCircle, MousePointer, Clock } from "lucide-react";

interface Metrics {
  summary: {
    totalSessions: number;
    totalCompletions: number;
    completionRate: number;
    ctaClicks: number;
    ctaRate: number;
    avgTimeToCtaSeconds: number;
  };
  sessionsByDay: Array<{ date: string; sessions: number }>;
  stepFunnel: Array<{ step_id: string; step_index: number; sessions: number }>;
  dropoffByStep: Array<{ step_id: string; viewed: number; completed: number; dropoff_pct: number }>;
  avgTimeByStep: Array<{ step_id: string; avg_seconds: number }>;
}

const AdminDashboard = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    fetchMetrics();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/admin/login");
      return;
    }
    const { data: roles } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin");

    if (!roles || roles.length === 0) {
      await supabase.auth.signOut();
      navigate("/admin/login");
    }
  };

  const fetchMetrics = async () => {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const { data, error } = await supabase.rpc("get_admin_metrics", {
      from_date: thirtyDaysAgo.toISOString(),
      to_date: now.toISOString(),
    });

    if (!error && data) {
      setMetrics(data as unknown as Metrics);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    );
  }

  const s = metrics?.summary;

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Dashboard Admin</h1>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 mr-2" /> Sair
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Users className="w-4 h-4" /> Sessões
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{s?.totalSessions || 0}</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> Completaram
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{s?.totalCompletions || 0}</p>
              <p className="text-xs text-muted-foreground">{s?.completionRate || 0}%</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <MousePointer className="w-4 h-4" /> Cliques CTA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">{s?.ctaClicks || 0}</p>
              <p className="text-xs text-muted-foreground">{s?.ctaRate || 0}%</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground flex items-center gap-2">
                <Clock className="w-4 h-4" /> Tempo médio
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-foreground">{s?.avgTimeToCtaSeconds || 0}s</p>
            </CardContent>
          </Card>
        </div>

        {/* Dropoff Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Dropoff por Etapa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground">Etapa</th>
                    <th className="text-right py-2 text-muted-foreground">Viram</th>
                    <th className="text-right py-2 text-muted-foreground">Completaram</th>
                    <th className="text-right py-2 text-muted-foreground">Dropoff</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics?.dropoffByStep?.map((step) => (
                    <tr key={step.step_id} className="border-b border-border/50">
                      <td className="py-2 text-foreground">{step.step_id}</td>
                      <td className="text-right py-2 text-foreground">{step.viewed}</td>
                      <td className="text-right py-2 text-foreground">{step.completed}</td>
                      <td className="text-right py-2">
                        <span className={step.dropoff_pct > 30 ? "text-destructive" : "text-primary"}>
                          {step.dropoff_pct}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Avg Time by Step */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Tempo Médio por Etapa</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {metrics?.avgTimeByStep?.map((step) => (
                <div key={step.step_id} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{step.step_id}</span>
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${Math.min(step.avg_seconds * 5, 200)}px` }}
                    />
                    <span className="text-sm text-muted-foreground w-12 text-right">
                      {step.avg_seconds}s
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
