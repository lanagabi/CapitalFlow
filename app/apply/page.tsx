'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';

export default function ApplyPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (user) router.push('/dashboard/apply');
      else router.push('/signup');
    }
  }, [user, loading, router]);

  return <div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-muted-foreground">Redirecting...</div></div>;
}
