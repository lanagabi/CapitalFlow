'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  TrendingUp, LayoutDashboard, FileText, CreditCard, FolderOpen,
  MessageSquare, History, RefreshCw, Settings, LogOut, Menu, X,
  Users, Shield, ChartBar as BarChart3, DollarSign, Bell, Moon, Sun,
  ChevronDown
} from 'lucide-react';
import { useTheme } from 'next-themes';

const borrowerLinks = [
  { href: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/dashboard/apply', icon: FileText, label: 'Apply for Funding' },
  { href: '/dashboard/offers', icon: CreditCard, label: 'Offers' },
  { href: '/dashboard/documents', icon: FolderOpen, label: 'Documents' },
  { href: '/dashboard/messages', icon: MessageSquare, label: 'Messages' },
  { href: '/dashboard/history', icon: History, label: 'Funding History' },
  { href: '/dashboard/renewals', icon: RefreshCw, label: 'Renewals' },
  { href: '/dashboard/settings', icon: Settings, label: 'Settings' },
];

const adminLinks = [
  { href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/admin/leads', icon: Users, label: 'Lead Management' },
  { href: '/admin/underwriting', icon: Shield, label: 'Underwriting' },
  { href: '/admin/deals', icon: DollarSign, label: 'Deals & Funding' },
  { href: '/admin/renewals', icon: RefreshCw, label: 'Renewals' },
  { href: '/admin/brokers', icon: Users, label: 'ISO / Brokers' },
  { href: '/admin/reports', icon: BarChart3, label: 'Reports' },
  { href: '/admin/users', icon: Users, label: 'Users' },
  { href: '/admin/settings', icon: Settings, label: 'Settings' },
  { href: '/admin/audit', icon: Shield, label: 'Audit Logs' },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  const { profile, signOut } = useAuth();
  const { theme, setTheme } = useTheme();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isAdmin = profile?.role && ['admin', 'super_admin', 'underwriter', 'sales_rep'].includes(profile.role);
  const links = isAdmin ? adminLinks : borrowerLinks;

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-emerald flex items-center justify-center shrink-0">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          {!collapsed && <span className="text-lg font-bold text-foreground">CapitalFlow</span>}
        </Link>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-1 px-2">
          {links.map(link => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                  active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground',
                  collapsed && 'justify-center'
                )}>
                <link.icon className="h-4 w-4 shrink-0" />
                {!collapsed && link.label}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="border-t p-4 space-y-2">
        <div className={cn('flex items-center gap-3', collapsed && 'justify-center')}>
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
            <span className="text-xs font-bold text-primary">
              {profile?.first_name?.[0]}{profile?.last_name?.[0]}
            </span>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-foreground truncate">{profile?.first_name} {profile?.last_name}</div>
              <div className="text-xs text-muted-foreground capitalize">{profile?.role?.replace('_', ' ')}</div>
            </div>
          )}
        </div>
        <div className={cn('flex gap-1', collapsed && 'flex-col')}>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => signOut()}>
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-background border-b h-14 flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg gradient-emerald flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold">CapitalFlow</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8"><Bell className="h-4 w-4" /></Button>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-background border-r">
            <SidebarContent />
          </div>
        </div>
      )}

      <aside className={cn(
        'hidden lg:flex flex-col fixed left-0 top-0 bottom-0 z-30 bg-background border-r transition-all duration-200',
        collapsed ? 'w-16' : 'w-64'
      )}>
        <SidebarContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 h-6 w-6 rounded-full bg-background border shadow-sm flex items-center justify-center hover:bg-muted transition-colors"
        >
          <ChevronDown className={cn('h-3 w-3 transition-transform', collapsed && 'rotate-180')} />
        </button>
      </aside>
    </>
  );
}
