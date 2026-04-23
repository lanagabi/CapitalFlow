'use client';

import React from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Download, TrendingUp, DollarSign, Users, ChartBar as BarChart3 } from 'lucide-react';

const monthlyData = [
  { month: 'Oct 2025', applications: 45, approved: 28, funded: 22, amount: '$1.8M' },
  { month: 'Nov 2025', applications: 52, approved: 35, funded: 30, amount: '$2.4M' },
  { month: 'Dec 2025', applications: 38, approved: 22, funded: 18, amount: '$1.5M' },
  { month: 'Jan 2026', applications: 58, approved: 40, funded: 35, amount: '$2.9M' },
  { month: 'Feb 2026', applications: 62, approved: 42, funded: 38, amount: '$3.1M' },
  { month: 'Mar 2026', applications: 55, approved: 38, funded: 32, amount: '$2.7M' },
];

const kpis = [
  { title: 'Total Funded YTD', value: '$14.4M', change: '+24%', icon: DollarSign },
  { title: 'Avg Approval Rate', value: '67%', change: '+3%', icon: TrendingUp },
  { title: 'New Applications', value: '310', change: '+18%', icon: Users },
  { title: 'Avg Deal Size', value: '$85K', change: '+8%', icon: BarChart3 },
];

export default function ReportsPage() {
  return (
    <div>
      <DashboardHeader title="Reports & Analytics" description="Track performance metrics and lending data" />
      <div className="flex items-center gap-3 mb-6">
        <Select defaultValue="6months"><SelectTrigger className="w-40 h-9"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="30days">Last 30 Days</SelectItem><SelectItem value="3months">Last 3 Months</SelectItem><SelectItem value="6months">Last 6 Months</SelectItem><SelectItem value="ytd">Year to Date</SelectItem></SelectContent></Select>
        <Button variant="outline" size="sm"><Download className="h-4 w-4 mr-1" /> Export CSV</Button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <Card key={i}><CardContent className="p-5"><kpi.icon className="h-5 w-5 text-primary mb-2" /><div className="text-2xl font-bold text-foreground">{kpi.value}</div><div className="text-sm text-muted-foreground">{kpi.title}</div><span className="text-xs text-emerald-600 font-medium">{kpi.change}</span></CardContent></Card>
        ))}
      </div>
      <Card className="mb-6">
        <CardHeader className="pb-3"><CardTitle className="text-lg">Monthly Performance</CardTitle></CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b"><th className="text-left py-3 px-4 font-medium text-muted-foreground">Month</th><th className="text-right py-3 px-4 font-medium text-muted-foreground">Applications</th><th className="text-right py-3 px-4 font-medium text-muted-foreground">Approved</th><th className="text-right py-3 px-4 font-medium text-muted-foreground">Funded</th><th className="text-right py-3 px-4 font-medium text-muted-foreground">Amount</th></tr></thead>
              <tbody>
                {monthlyData.map((row, i) => (
                  <tr key={i} className="border-b last:border-0 hover:bg-muted/50"><td className="py-3 px-4 font-medium text-foreground">{row.month}</td><td className="py-3 px-4 text-right">{row.applications}</td><td className="py-3 px-4 text-right">{row.approved}</td><td className="py-3 px-4 text-right">{row.funded}</td><td className="py-3 px-4 text-right font-semibold text-foreground">{row.amount}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      <div className="grid sm:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-lg">Funding by Product</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[{ name: 'Merchant Cash Advance', pct: 45, amount: '$6.5M' }, { name: 'Revenue Based Financing', pct: 25, amount: '$3.6M' }, { name: 'Line of Credit', pct: 15, amount: '$2.2M' }, { name: 'Equipment Financing', pct: 10, amount: '$1.4M' }, { name: 'Working Capital', pct: 5, amount: '$0.7M' }].map((item, i) => (
                <div key={i}><div className="flex items-center justify-between text-sm mb-1"><span className="text-foreground">{item.name}</span><span className="font-medium text-foreground">{item.amount} ({item.pct}%)</span></div><div className="w-full bg-muted rounded-full h-2"><div className="bg-primary rounded-full h-2" style={{ width: `${item.pct}%` }} /></div></div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-lg">Funding by Industry</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[{ name: 'Restaurant / Food', pct: 30, amount: '$4.3M' }, { name: 'Retail', pct: 22, amount: '$3.2M' }, { name: 'Construction', pct: 18, amount: '$2.6M' }, { name: 'Healthcare', pct: 15, amount: '$2.2M' }, { name: 'Other', pct: 15, amount: '$2.1M' }].map((item, i) => (
                <div key={i}><div className="flex items-center justify-between text-sm mb-1"><span className="text-foreground">{item.name}</span><span className="font-medium text-foreground">{item.amount} ({item.pct}%)</span></div><div className="w-full bg-muted rounded-full h-2"><div className="bg-primary rounded-full h-2" style={{ width: `${item.pct}%` }} /></div></div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
