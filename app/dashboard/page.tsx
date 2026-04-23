'use client';

import React from 'react';
import Link from 'next/link';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, CreditCard, FolderOpen, MessageSquare, RefreshCw, ArrowRight, Clock, CircleCheck as CheckCircle, CircleAlert as AlertCircle, DollarSign, TrendingUp } from 'lucide-react';

const applicationStatus = { status: 'Under Review', progress: 65, submittedDate: 'Apr 15, 2026', nextStep: 'Document verification in progress' };

const widgets = [
  { icon: FileText, title: 'Application Status', value: applicationStatus.status, detail: applicationStatus.nextStep, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30', href: '/dashboard/apply' },
  { icon: CreditCard, title: 'Available Offers', value: '2', detail: 'Review your offers', color: 'text-primary', bg: 'bg-emerald-50 dark:bg-emerald-950/30', href: '/dashboard/offers' },
  { icon: FolderOpen, title: 'Documents Needed', value: '2 pending', detail: 'Bank statements, Tax return', color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/30', href: '/dashboard/documents' },
  { icon: MessageSquare, title: 'Messages', value: '3 unread', detail: 'From your advisor', color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30', href: '/dashboard/messages' },
];

const recentActivity = [
  { icon: CheckCircle, text: 'Application submitted successfully', time: '2 hours ago', color: 'text-primary' },
  { icon: AlertCircle, text: 'Additional documents requested', time: '1 day ago', color: 'text-amber-500' },
  { icon: MessageSquare, text: 'New message from funding advisor', time: '2 days ago', color: 'text-blue-500' },
  { icon: FileText, text: 'Application started', time: '5 days ago', color: 'text-muted-foreground' },
];

export default function BorrowerDashboard() {
  return (
    <div>
      <DashboardHeader title="Dashboard" description="Welcome back! Here is your funding overview." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {widgets.map((w, i) => (
          <Link key={i} href={w.href}>
            <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer h-full">
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className={`h-10 w-10 rounded-lg ${w.bg} flex items-center justify-center`}><w.icon className={`h-5 w-5 ${w.color}`} /></div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="text-2xl font-bold text-foreground">{w.value}</div>
                <div className="text-sm text-muted-foreground">{w.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{w.detail}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-lg">Application Progress</CardTitle></CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <Badge variant="secondary" className="bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400"><Clock className="h-3 w-3 mr-1" /> {applicationStatus.status}</Badge>
                <span className="text-sm text-muted-foreground">Submitted {applicationStatus.submittedDate}</span>
              </div>
              <Progress value={applicationStatus.progress} className="h-2 mb-3" />
              <p className="text-sm text-muted-foreground">{applicationStatus.nextStep}</p>
              <Link href="/dashboard/apply"><Button variant="outline" size="sm" className="mt-4">View Application</Button></Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3"><CardTitle className="text-lg">Funding Summary</CardTitle></CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-muted/50"><DollarSign className="h-5 w-5 text-primary mx-auto mb-1" /><div className="text-xl font-bold text-foreground">$0</div><div className="text-xs text-muted-foreground">Total Funded</div></div>
                <div className="text-center p-4 rounded-lg bg-muted/50"><TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" /><div className="text-xl font-bold text-foreground">$0</div><div className="text-xs text-muted-foreground">Balance</div></div>
                <div className="text-center p-4 rounded-lg bg-muted/50"><RefreshCw className="h-5 w-5 text-primary mx-auto mb-1" /><div className="text-xl font-bold text-foreground">--</div><div className="text-xs text-muted-foreground">Renewal</div></div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="h-full">
            <CardHeader className="pb-3"><CardTitle className="text-lg">Recent Activity</CardTitle></CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((a, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <a.icon className={`h-4 w-4 mt-0.5 ${a.color} shrink-0`} />
                    <div><div className="text-sm text-foreground">{a.text}</div><div className="text-xs text-muted-foreground">{a.time}</div></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
