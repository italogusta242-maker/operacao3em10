import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (authError) {
      setError('Credenciais incorretas.');
      setLoading(false);
    } else {
      navigate('/admin/dashboard');
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-card border border-white/10 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-black text-white text-center mb-2">Admin</h1>
        <p className="text-muted-foreground text-center mb-8">Operação -3kg em 10</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="bg-black/50 border-white/10 text-white placeholder:text-white/30 h-12"
              required
            />
          </div>
          <div>
            <Input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="bg-black/50 border-white/10 text-white placeholder:text-white/30 h-12"
              required
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <Button 
            type="submit" 
            disabled={loading}
            className="w-full h-12 font-bold bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>
        </form>
      </div>
    </div>
  );
}
