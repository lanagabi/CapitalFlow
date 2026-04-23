'use client';

import React from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, FileText, CircleCheck as CheckCircle, DollarSign, TrendingUp, ChartBar as BarChart3, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const kpis = [
  { title: 'New Leads Today', value: '12', change: '+18%', up: true, icon: Users, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { title: 'Applications Submitted', value: '8', change: '+5%', up: true, icon: FileText, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { title: 'Approval Rate', value: '67%', change: '-2%', up: false, icon: CheckCircle, color: 'text-primary', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { title: 'Funded This Month', value: '$1.2M', change: '+24%', up: true, icon: DollarSign, color: 'text-primary', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { title: 'Pipeline Value', value: '$4.8M', change: '+12%', up: true, icon: TrendingUp, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { title: 'Avg Deal Size', value: '$85K', change: '+8%', up: true, icon: BarChart3, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30' },
];

const recentLeads = [
  { name: 'Bloom Cafe', amount: '$50,000', stage: 'Under Review', rep: 'Sarah M.', time: '2h ago' },
  { name: 'MJ Logistics', amount: '$75,000', stage: 'Docs Pending', rep: 'James C.', time: '4h ago' },
  { name: 'Verde Kitchen', amount: '$30,000', stage: 'Approved', rep: 'Sarah M.', time: '6h ago' },
  { name: 'TechStart Inc', amount: '$100,000', stage: 'New Lead', rep: 'Unassigned', time: '8h ago' },
  { name: 'Sunrise Dental', amount: '$45,000', stage: 'Funded', rep: 'James C.', time: '1d ago' },
];

const repLeaderboard = [
  { name: 'Sarah Mitchell', deals: 12, funded: '$890K', commission: '$44.5K' },
  { name: 'James Cooper', deals: 9, funded: '$675K', commission: '$33.8K' },
  { name: 'Maria Garcia', deals: 7, funded: '$520K', commission: '$26K' },
];

const stageColors: Record<string, string> = {
  'New Lead': 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
  'Contacted': 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400',
  'Docs Pending': 'bg-orange-50 text-orange-700 dark:bg-orange-950/30 dark:text-orange-400',
  'Under Review': 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400',
  'Approved': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
  'Funded': 'bg-primary/10 text-primary',
  'Declined': 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400',
};

export default function AdminDashboard() {
  return (
    <div>
      <DashboardHeader title="Admin Dashboard" description="Overview of your lending pipeline and performance" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {kpis.map((kpi, i) => (
          <Card key={i}><CardContent className="p-5">
            <div className="flex items-start justify-between mb-3">
              <div className={`h-10 w-10 rounded-lg ${kpi.bg} flex items-center justify-center`}><kpi.icon className={`h-5 w-5 ${kpi.color}`} /></div>
              <span className={`flex items-center gap-0.5 text-xs font-medium ${kpi.up ? 'text-emerald-600' : 'text-red-500'}`}>{kpi.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}{kpi.change}</span>
            </div>
            <div className="text-2xl font-bold text-foreground">{kpi.value}</div>
            <div className="text-sm text-muted-foreground">{kpi.title}</div>
          </CardContent></Card>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-lg">Recent Leads</CardTitle></CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {recentLeads.map((lead, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0"><span className="text-xs font-bold text-muted-foreground">{lead.name.split(' ').map(w => w[0]).join('')}</span></div>
                    <div className="flex-1 min-w-0"><div className="text-sm font-medium text-foreground">{lead.name}</div><div className="text-xs text-muted-foreground">{lead.rep} &middot; {lead.time}</div></div>
                    <div className="text-right"><div className="text-sm font-semibold text-foreground">{lead.amount}</div><Badge variant="secondary" className={`text-[10px] ${stageColors[lead.stage] || ''}`}>{lead.stage}</Badge></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader className="pb-3"><CardTitle className="text-lg">Rep Leaderboard</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {repLeaderboard.map((rep, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold ${i === 0 ? 'bg-amber-100 text-amber-700' : i === 1 ? 'bg-gray-100 text-gray-700' : 'bg-orange-100 text-orange-700'}`}>{i + 1}</div>
                  <div className="flex-1"><div className="text-sm font-medium text-foreground">{rep.name}</div><div className="text-xs text-muted-foreground">{rep.deals} deals &middot; {rep.funded} funded</div></div>
                  <div className="text-sm font-semibold text-primary">{rep.commission}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
