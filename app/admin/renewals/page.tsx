import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, ArrowRight } from 'lucide-react';

const renewals = [
  { id: '1', business: 'GreenGrow LLC', originalAmount: 80000, eligibleAmount: 100000, percentPaid: 60, status: 'eligible' },
  { id: '2', business: 'Sunrise Dental', originalAmount: 45000, eligibleAmount: 65000, percentPaid: 62, status: 'eligible' },
];

export default function AdminRenewalsPage() {
  return (
    <div>
      <DashboardHeader title="Renewals Queue" description="Manage renewal-eligible deals" />
      <div className="space-y-4">
        {renewals.map(renewal => (
          <Card key={renewal.id}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2"><RefreshCw className="h-5 w-5 text-primary" /><span className="text-lg font-semibold text-foreground">{renewal.business}</span><Badge className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">Eligible</Badge></div>
                  <p className="text-sm text-muted-foreground">{renewal.percentPaid}% paid on original ${renewal.originalAmount.toLocaleString()} advance. Eligible for up to ${renewal.eligibleAmount.toLocaleString()}.</p>
                </div>
                <div className="flex gap-2"><Button variant="outline" size="sm">Send Offer</Button><Button size="sm" className="gradient-emerald text-white border-0 hover:opacity-90">Process <ArrowRight className="ml-1 h-3 w-3" /></Button></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
