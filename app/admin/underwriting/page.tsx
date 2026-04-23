'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { Shield, TrendingUp, TrendingDown, TriangleAlert as AlertTriangle, CircleCheck as CheckCircle, Circle as XCircle, DollarSign, ArrowRight } from 'lucide-react';

const applications = [
  { id: '1', businessName: 'Bloom Cafe', amount: 50000, riskScore: 72, revenueConsistency: 85, debtBurden: 0.15, maxAdvance: 60000, monthlyRevenue: 45000, avgDeposits: 42000, nsfCount: 0, existingDebt: 0 },
  { id: '2', businessName: 'MJ Logistics', amount: 75000, riskScore: 58, revenueConsistency: 62, debtBurden: 0.35, maxAdvance: 50000, monthlyRevenue: 68000, avgDeposits: 55000, nsfCount: 2, existingDebt: 25000 },
  { id: '3', businessName: 'TechStart Inc', amount: 100000, riskScore: 45, revenueConsistency: 40, debtBurden: 0.55, maxAdvance: 30000, monthlyRevenue: 35000, avgDeposits: 28000, nsfCount: 4, existingDebt: 50000 },
];

function RiskGauge({ score }: { score: number }) {
  const color = score >= 70 ? 'text-emerald-500' : score >= 50 ? 'text-amber-500' : 'text-red-500';
  const bg = score >= 70 ? 'bg-emerald-50 dark:bg-emerald-950/30' : score >= 50 ? 'bg-amber-50 dark:bg-amber-950/30' : 'bg-red-50 dark:bg-red-950/30';
  return <div className={cn('h-16 w-16 rounded-full flex items-center justify-center', bg)}><span className={cn('text-xl font-bold', color)}>{score}</span></div>;
}

export default function UnderwritingPage() {
  const [selectedApp, setSelectedApp] = useState(applications[0]);
  const app = selectedApp;
  const riskLevel = app.riskScore >= 70 ? 'Low Risk' : app.riskScore >= 50 ? 'Medium Risk' : 'High Risk';
  const riskColor = app.riskScore >= 70 ? 'text-emerald-600' : app.riskScore >= 50 ? 'text-amber-600' : 'text-red-600';

  return (
    <div>
      <DashboardHeader title="Underwriting Center" description="Review applications and make funding decisions" />
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card><CardContent className="p-0">
            <div className="divide-y">
              {applications.map(a => (
                <button key={a.id} onClick={() => setSelectedApp(a)} className={cn('w-full text-left p-4 hover:bg-muted/50 transition-colors', selectedApp.id === a.id && 'bg-muted')}>
                  <div className="text-sm font-medium text-foreground">{a.businessName}</div>
                  <div className="text-lg font-bold text-foreground">${a.amount.toLocaleString()}</div>
                  <div className="flex items-center gap-2 mt-1"><RiskGauge score={a.riskScore} /><span className={cn('text-xs font-medium', riskColor)}>{riskLevel}</span></div>
                </button>
              ))}
            </div>
          </CardContent></Card>
        </div>
        <div className="lg:col-span-3 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div><CardTitle className="text-xl">{app.businessName}</CardTitle><div className="text-sm text-muted-foreground mt-1">Requested: ${app.amount.toLocaleString()}</div></div>
                <RiskGauge score={app.riskScore} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Risk Score', value: `${app.riskScore}/100`, icon: Shield, color: app.riskScore >= 70 ? 'text-emerald-500' : app.riskScore >= 50 ? 'text-amber-500' : 'text-red-500' },
                  { label: 'Revenue Consistency', value: `${app.revenueConsistency}%`, icon: TrendingUp, color: app.revenueConsistency >= 70 ? 'text-emerald-500' : 'text-amber-500' },
                  { label: 'Debt Burden', value: `${(app.debtBurden * 100).toFixed(0)}%`, icon: app.debtBurden > 0.3 ? TrendingDown : CheckCircle, color: app.debtBurden <= 0.2 ? 'text-emerald-500' : 'text-red-500' },
                  { label: 'Max Advance', value: `$${app.maxAdvance.toLocaleString()}`, icon: DollarSign, color: 'text-primary' },
                ].map((metric, i) => (
                  <div key={i} className="p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-2 mb-2"><metric.icon className={cn('h-4 w-4', metric.color)} /><span className="text-xs text-muted-foreground">{metric.label}</span></div>
                    <div className={cn('text-xl font-bold', metric.color)}>{metric.value}</div>
                  </div>
                ))}
              </div>
              <Separator className="my-6" />
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Financial Summary</h4>
                  <div className="space-y-3">
                    {[['Monthly Revenue', `$${app.monthlyRevenue.toLocaleString()}`], ['Avg Deposits', `$${app.avgDeposits.toLocaleString()}`], ['Existing Debt', `$${app.existingDebt.toLocaleString()}`], ['NSF Count', `${app.nsfCount}`]].map(([label, value], i) => (
                      <div key={i} className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{label}</span><span className="text-sm font-medium text-foreground">{value}</span></div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Fraud Flags</h4>
                  {app.nsfCount > 3 ? <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-700 dark:text-red-400"><AlertTriangle className="h-4 w-4" /> High NSF count detected</div>
                  : app.nsfCount > 0 ? <div className="flex items-center gap-2 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400"><AlertTriangle className="h-4 w-4" /> {app.nsfCount} NSF(s) detected</div>
                  : <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400"><CheckCircle className="h-4 w-4" /> No fraud flags</div>}
                </div>
              </div>
              <Separator className="my-6" />
              <h4 className="font-semibold text-foreground mb-3">AI Recommendations</h4>
              <div className="grid sm:grid-cols-3 gap-3 mb-6">
                {app.riskScore >= 70 && <Card className="border-emerald-200 dark:border-emerald-800 cursor-pointer hover:shadow-md transition-all"><CardContent className="p-4 text-center"><CheckCircle className="h-6 w-6 text-emerald-500 mx-auto mb-2" /><div className="font-semibold text-foreground">Approve $50K</div><div className="text-xs text-muted-foreground mt-1">Standard terms</div></CardContent></Card>}
                {app.riskScore >= 50 && <Card className="border-amber-200 dark:border-amber-800 cursor-pointer hover:shadow-md transition-all"><CardContent className="p-4 text-center"><AlertTriangle className="h-6 w-6 text-amber-500 mx-auto mb-2" /><div className="font-semibold text-foreground">Approve $30K</div><div className="text-xs text-muted-foreground mt-1">Reduced amount</div></CardContent></Card>}
                <Card className="border-red-200 dark:border-red-800 cursor-pointer hover:shadow-md transition-all"><CardContent className="p-4 text-center"><XCircle className="h-6 w-6 text-red-500 mx-auto mb-2" /><div className="font-semibold text-foreground">Decline</div><div className="text-xs text-muted-foreground mt-1">High risk profile</div></CardContent></Card>
              </div>
              <div className="flex gap-3">
                <Button className="gradient-emerald text-white border-0 hover:opacity-90">Approve</Button>
                <Button variant="outline">Counter Offer</Button>
                <Button variant="outline" className="text-destructive hover:text-destructive">Decline</Button>
                <Button variant="outline" className="ml-auto">Request Docs</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
