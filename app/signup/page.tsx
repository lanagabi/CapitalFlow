'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { TrendingUp, Eye, EyeOff } from 'lucide-react';

export default function SignupPage() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '', role: 'borrower' });
  const [showPassword, setShowPassword] = useState(false);
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signUp } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) { setError('You must agree to the terms'); return; }
    setError('');
    setLoading(true);
    const { error } = await signUp(form.email, form.password, { first_name: form.firstName, last_name: form.lastName, role: form.role });
    if (error) { setError(error); setLoading(false); }
    else router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg gradient-emerald flex items-center justify-center"><TrendingUp className="h-5 w-5 text-white" /></div>
            <span className="text-xl font-bold text-foreground">CapitalFlow</span>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Create your account</CardTitle>
            <CardDescription>Start your funding application today</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="p-3 rounded-lg bg-destructive/10 text-destructive text-sm">{error}</div>}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2"><Label htmlFor="firstName">First Name</Label><Input id="firstName" placeholder="John" value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })} required /></div>
                <div className="space-y-2"><Label htmlFor="lastName">Last Name</Label><Input id="lastName" placeholder="Smith" value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })} required /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" placeholder="you@company.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required /></div>
              <div className="space-y-2"><Label htmlFor="password">Password</Label><div className="relative"><Input id="password" type={showPassword ? 'text' : 'password'} placeholder="Min 8 characters" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} required minLength={8} /><button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></div>
              <div className="space-y-2"><Label>Account Type</Label><Select value={form.role} onValueChange={v => setForm({ ...form, role: v })}><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="borrower">Business Owner / Borrower</SelectItem><SelectItem value="sales_rep">Sales Rep / ISO Broker</SelectItem></SelectContent></Select></div>
              <div className="flex items-start gap-2"><Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5" /><label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">I agree to the <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>. I consent to receive communications from CapitalFlow.</label></div>
              <Button type="submit" className="w-full gradient-emerald text-white border-0 hover:opacity-90 h-11" disabled={loading}>{loading ? 'Creating account...' : 'Create Account'}</Button>
            </form>
            <div className="mt-6 text-center text-sm text-muted-foreground">Already have an account? <Link href="/login" className="text-primary font-medium hover:underline">Sign in</Link></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
