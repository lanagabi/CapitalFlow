import Link from 'next/link';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, ArrowRight } from 'lucide-react';

const renewals = [{ id: '1', originalAmount: 50000, eligibleAmount: 75000, percentPaid: 62, status: 'eligible' }];

export default function RenewalsPage() {
  return (
    <div>
      <DashboardHeader title="Renewals" description="Check your eligibility for additional funding" />
      {renewals.length === 0 ? (
        <Card><CardContent className="p-12 text-center"><RefreshCw className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><h3 className="text-lg font-semibold text-foreground mb-2">No Renewals Available</h3><p className="text-muted-foreground">You will become eligible for renewal after paying 60% of your current balance.</p></CardContent></Card>
      ) : (
        <div className="space-y-4">
          {renewals.map(renewal => (
            <Card key={renewal.id} className="border-primary/20">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2"><RefreshCw className="h-5 w-5 text-primary" /><span className="text-lg font-semibold text-foreground">Renewal Eligible</span><Badge className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">Eligible</Badge></div>
                    <p className="text-sm text-muted-foreground">You have paid {renewal.percentPaid}% of your original ${renewal.originalAmount.toLocaleString()} advance. You are eligible for up to ${renewal.eligibleAmount.toLocaleString()} in additional funding.</p>
                  </div>
                  <Link href="/dashboard/apply"><Button className="gradient-emerald text-white border-0 hover:opacity-90">Reapply Now <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
