'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Search, Filter, Plus, GripVertical, MoveHorizontal as MoreHorizontal } from 'lucide-react';

const stages = [
  { id: 'new_lead', label: 'New Lead', color: 'bg-blue-500' },
  { id: 'contacted', label: 'Contacted', color: 'bg-amber-500' },
  { id: 'docs_pending', label: 'Docs Pending', color: 'bg-orange-500' },
  { id: 'under_review', label: 'Under Review', color: 'bg-violet-500' },
  { id: 'approved', label: 'Approved', color: 'bg-emerald-500' },
  { id: 'funded', label: 'Funded', color: 'bg-primary' },
  { id: 'declined', label: 'Declined', color: 'bg-red-500' },
  { id: 'renewal', label: 'Renewal', color: 'bg-teal-500' },
];

const leads = [
  { id: '1', name: 'Bloom Cafe', amount: 50000, stage: 'under_review', rep: 'Sarah M.', industry: 'Restaurant', time: '2h ago' },
  { id: '2', name: 'MJ Logistics', amount: 75000, stage: 'docs_pending', rep: 'James C.', industry: 'Transportation', time: '4h ago' },
  { id: '3', name: 'Verde Kitchen', amount: 30000, stage: 'approved', rep: 'Sarah M.', industry: 'Restaurant', time: '6h ago' },
  { id: '4', name: 'TechStart Inc', amount: 100000, stage: 'new_lead', rep: '', industry: 'Technology', time: '8h ago' },
  { id: '5', name: 'Sunrise Dental', amount: 45000, stage: 'funded', rep: 'James C.', industry: 'Healthcare', time: '1d ago' },
  { id: '6', name: 'Metro Retail', amount: 60000, stage: 'contacted', rep: 'Maria G.', industry: 'Retail', time: '1d ago' },
  { id: '7', name: 'QuickFix Auto', amount: 25000, stage: 'declined', rep: 'James C.', industry: 'Automotive', time: '2d ago' },
  { id: '8', name: 'GreenGrow LLC', amount: 80000, stage: 'renewal', rep: 'Sarah M.', industry: 'Agriculture', time: '3d ago' },
];

export default function LeadsPage() {
  const [view, setView] = useState<'kanban' | 'list'>('kanban');
  const [searchQuery, setSearchQuery] = useState('');
  const filteredLeads = leads.filter(l => l.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div>
      <DashboardHeader title="Lead Management" description="Track and manage your lending pipeline" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search leads..." className="pl-9 w-full sm:w-64 h-9" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /></div>
          <Button variant="outline" size="icon" className="h-9 w-9"><Filter className="h-4 w-4" /></Button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border p-0.5">
            <button onClick={() => setView('kanban')} className={cn('px-3 py-1 text-xs font-medium rounded-md transition-colors', view === 'kanban' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}>Kanban</button>
            <button onClick={() => setView('list')} className={cn('px-3 py-1 text-xs font-medium rounded-md transition-colors', view === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground')}>List</button>
          </div>
          <Button size="sm" className="gradient-emerald text-white border-0 hover:opacity-90"><Plus className="h-4 w-4 mr-1" /> Add Lead</Button>
        </div>
      </div>
      {view === 'kanban' ? (
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
          {stages.map(stage => {
            const stageLeads = filteredLeads.filter(l => l.stage === stage.id);
            return (
              <div key={stage.id} className="min-w-[260px] w-[260px] shrink-0">
                <div className="flex items-center gap-2 mb-3"><div className={cn('h-2 w-2 rounded-full', stage.color)} /><span className="text-sm font-medium text-foreground">{stage.label}</span><span className="text-xs text-muted-foreground ml-auto">{stageLeads.length}</span></div>
                <div className="space-y-2">
                  {stageLeads.map(lead => (
                    <Card key={lead.id} className="cursor-pointer hover:shadow-md transition-all duration-200">
                      <CardContent className="p-3">
                        <div className="flex items-start justify-between mb-2"><div className="text-sm font-medium text-foreground">{lead.name}</div><button className="text-muted-foreground hover:text-foreground"><GripVertical className="h-4 w-4" /></button></div>
                        <div className="text-lg font-bold text-foreground">${lead.amount.toLocaleString()}</div>
                        <div className="flex items-center justify-between mt-2"><span className="text-xs text-muted-foreground">{lead.industry}</span>{lead.rep && <span className="text-xs text-muted-foreground">{lead.rep}</span>}</div>
                        <div className="text-[10px] text-muted-foreground mt-1">{lead.time}</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <Card><CardContent className="p-0">
          <div className="divide-y">
            {filteredLeads.map(lead => {
              const stage = stages.find(s => s.id === lead.stage);
              return (
                <div key={lead.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors cursor-pointer">
                  <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0"><span className="text-xs font-bold text-muted-foreground">{lead.name.split(' ').map(w => w[0]).join('')}</span></div>
                  <div className="flex-1 min-w-0"><div className="text-sm font-medium text-foreground">{lead.name}</div><div className="text-xs text-muted-foreground">{lead.industry} &middot; {lead.time}</div></div>
                  <div className="text-sm font-semibold text-foreground">${lead.amount.toLocaleString()}</div>
                  <Badge variant="secondary" className="text-[10px]"><span className={cn('h-1.5 w-1.5 rounded-full mr-1', stage?.color)} />{stage?.label}</Badge>
                  <span className="text-xs text-muted-foreground w-20">{lead.rep || 'Unassigned'}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                </div>
              );
            })}
          </div>
        </CardContent></Card>
      )}
    </div>
  );
}
