'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Plus, MoveHorizontal as MoreHorizontal } from 'lucide-react';

const users = [
  { id: '1', name: 'Sarah Mitchell', email: 'sarah@capitalflow.com', role: 'sales_rep', status: 'active', lastLogin: '2h ago' },
  { id: '2', name: 'James Cooper', email: 'james@capitalflow.com', role: 'underwriter', status: 'active', lastLogin: '4h ago' },
  { id: '3', name: 'Maria Garcia', email: 'maria@capitalflow.com', role: 'sales_rep', status: 'active', lastLogin: '1d ago' },
  { id: '4', name: 'Admin User', email: 'admin@capitalflow.com', role: 'super_admin', status: 'active', lastLogin: '30m ago' },
  { id: '5', name: 'David Lee', email: 'david@capitalflow.com', role: 'admin', status: 'inactive', lastLogin: '30d ago' },
];

const roleColors: Record<string, string> = {
  super_admin: 'bg-red-50 text-red-700 dark:bg-red-950/30 dark:text-red-400',
  admin: 'bg-blue-50 text-blue-700 dark:bg-blue-950/30 dark:text-blue-400',
  underwriter: 'bg-violet-50 text-violet-700 dark:bg-violet-950/30 dark:text-violet-400',
  sales_rep: 'bg-amber-50 text-amber-700 dark:bg-amber-950/30 dark:text-amber-400',
  borrower: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400',
};

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <DashboardHeader title="User Management" description="Manage users, roles, and permissions" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input placeholder="Search users..." className="pl-9 h-9" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} /></div>
        <Button className="gradient-emerald text-white border-0 hover:opacity-90"><Plus className="h-4 w-4 mr-1" /> Add User</Button>
      </div>
      <Card><CardContent className="p-0">
        <div className="divide-y">
          {users.filter(u => u.name.toLowerCase().includes(searchQuery.toLowerCase())).map(user => (
            <div key={user.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><span className="text-xs font-bold text-primary">{user.name.split(' ').map(w => w[0]).join('')}</span></div>
              <div className="flex-1 min-w-0"><div className="text-sm font-medium text-foreground">{user.name}</div><div className="text-xs text-muted-foreground">{user.email}</div></div>
              <Badge variant="secondary" className={`text-[10px] ${roleColors[user.role]}`}>{user.role.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</Badge>
              <Badge variant={user.status === 'active' ? 'secondary' : 'outline'} className={user.status === 'active' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' : ''}>{user.status}</Badge>
              <span className="text-xs text-muted-foreground hidden sm:block">{user.lastLogin}</span>
              <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
            </div>
          ))}
        </div>
      </CardContent></Card>
    </div>
  );
}
