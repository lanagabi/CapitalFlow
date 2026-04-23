import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { DollarSign, Calendar, TrendingUp } from 'lucide-react';

const deals = [
  { id: '1', amount: 50000, factorRate: 1.25, totalPayback: 62500, balanceRemaining: 37500, status: 'active', fundedDate: 'Jan 15, 2026', maturityDate: 'Jul 15, 2026', paidPercent: 40 },
  { id: '2', amount: 25000, factorRate: 1.30, totalPayback: 32500, balanceRemaining: 0, status: 'paid_off', fundedDate: 'Jun 1, 2025', maturityDate: 'Dec 1, 2025', paidPercent: 100 },
];

export default function HistoryPage() {
  return (
    <div>
      <DashboardHeader title="Funding History" description="View your past and current funding deals" />
      {deals.length === 0 ? (
        <Card><CardContent className="p-12 text-center"><DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><h3 className="text-lg font-semibold text-foreground mb-2">No Funding History</h3><p className="text-muted-foreground">Your funding history will appear here once you have active deals.</p></CardContent></Card>
      ) : (
        <div className="space-y-4">
          {deals.map(deal => (
            <Card key={deal.id}>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3"><span className="text-2xl font-bold text-foreground">${deal.amount.toLocaleString()}</span><Badge variant={deal.status === 'active' ? 'secondary' : 'outline'} className={deal.status === 'active' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' : ''}>{deal.status === 'active' ? 'Active' : 'Paid Off'}</Badge></div>
                    <div className="text-sm text-muted-foreground mt-1">Factor Rate: {deal.factorRate}</div>
                  </div>
                  <div className="text-right"><div className="text-sm text-muted-foreground">Total Payback</div><div className="text-lg font-semibold text-foreground">${deal.totalPayback.toLocaleString()}</div></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Balance</div><div className="text-sm font-medium">${deal.balanceRemaining.toLocaleString()}</div></div></div>
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Funded</div><div className="text-sm font-medium">{deal.fundedDate}</div></div></div>
                  <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Maturity</div><div className="text-sm font-medium">{deal.maturityDate}</div></div></div>
                  <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Paid</div><div className="text-sm font-medium">{deal.paidPercent}%</div></div></div>
                </div>
                <div className="w-full bg-muted rounded-full h-2"><div className="bg-primary rounded-full h-2 transition-all" style={{ width: `${deal.paidPercent}%` }} /></div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
