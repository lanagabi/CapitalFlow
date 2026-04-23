'use client';

import React from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { DollarSign, Search, Calendar, TrendingUp } from 'lucide-react';

const deals = [
  { id: '1', business: 'Sunrise Dental', borrower: 'Dr. Smith', amount: 45000, factorRate: 1.25, totalPayback: 56250, balance: 22500, paidPercent: 60, status: 'active', fundedDate: 'Feb 1, 2026', maturityDate: 'Aug 1, 2026' },
  { id: '2', business: 'Metro Retail', borrower: 'Lisa Chen', amount: 60000, factorRate: 1.30, totalPayback: 78000, balance: 78000, paidPercent: 0, status: 'pending_funding', fundedDate: '--', maturityDate: '--' },
  { id: '3', business: 'GreenGrow LLC', borrower: 'Tom Green', amount: 80000, factorRate: 1.22, totalPayback: 97600, balance: 39040, paidPercent: 60, status: 'active', fundedDate: 'Dec 15, 2025', maturityDate: 'Jun 15, 2026' },
  { id: '4', business: 'QuickFix Auto', borrower: 'Mike Jones', amount: 25000, factorRate: 1.35, totalPayback: 33750, balance: 0, paidPercent: 100, status: 'paid_off', fundedDate: 'Sep 1, 2025', maturityDate: 'Mar 1, 2026' },
];

const statusColors: Record<string, string> = {
  pending_funding: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400',
  active: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
  paid_off: 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
  defaulted: 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400',
};

export default function DealsPage() {
  return (
    <div>
      <DashboardHeader title="Deals & Funding" description="Manage funded deals and payment tracking" />
      <div className="flex items-center gap-3 mb-6">
        <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search deals..." className="pl-9 h-9" /></div>
      </div>
      <div className="space-y-4">
        {deals.map(deal => (
          <Card key={deal.id}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3"><h3 className="text-lg font-semibold text-foreground">{deal.business}</h3><Badge variant="secondary" className={statusColors[deal.status]}>{deal.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</Badge></div>
                  <div className="text-sm text-muted-foreground mt-1">Borrower: {deal.borrower} &middot; Factor Rate: {deal.factorRate}</div>
                </div>
                <div className="text-right"><div className="text-2xl font-bold text-foreground">${deal.amount.toLocaleString()}</div><div className="text-sm text-muted-foreground">Total Payback: ${deal.totalPayback.toLocaleString()}</div></div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Balance</div><div className="text-sm font-medium">${deal.balance.toLocaleString()}</div></div></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Funded</div><div className="text-sm font-medium">{deal.fundedDate}</div></div></div>
                <div className="flex items-center gap-2"><Calendar className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Maturity</div><div className="text-sm font-medium">{deal.maturityDate}</div></div></div>
                <div className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-muted-foreground" /><div><div className="text-xs text-muted-foreground">Paid</div><div className="text-sm font-medium">{deal.paidPercent}%</div></div></div>
              </div>
              <Progress value={deal.paidPercent} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
