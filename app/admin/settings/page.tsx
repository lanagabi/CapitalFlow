'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    companyName: 'CapitalFlow', supportEmail: 'support@capitalflow.com', twilioPhone: '+1 (888) 555-0199',
    renewalThreshold: 60, maxAdvanceMultiplier: 1.5,
  });

  return (
    <div>
      <DashboardHeader title="Settings" description="Configure your platform settings and integrations" />
      <Tabs defaultValue="general" className="space-y-6">
        <TabsList>
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="automation">Automation</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card><CardHeader><CardTitle className="text-lg">General Settings</CardTitle></CardHeader>
            <CardContent className="space-y-4 max-w-lg">
              <div><Label>Company Name</Label><Input value={settings.companyName} onChange={e => setSettings({...settings, companyName: e.target.value})} /></div>
              <div><Label>Support Email</Label><Input value={settings.supportEmail} onChange={e => setSettings({...settings, supportEmail: e.target.value})} /></div>
              <div><Label>Twilio Phone Number</Label><Input value={settings.twilioPhone} onChange={e => setSettings({...settings, twilioPhone: e.target.value})} /></div>
              <Button className="gradient-emerald text-white border-0 hover:opacity-90">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="integrations">
          <div className="space-y-4">
            {[{ name: 'Stripe', desc: 'Payment processing' }, { name: 'SendGrid', desc: 'Email delivery' }, { name: 'DocuSign', desc: 'E-signature' }, { name: 'Twilio', desc: 'SMS notifications' }, { name: 'Plaid', desc: 'Bank account verification' }, { name: 'QuickBooks', desc: 'Accounting sync' }].map((integration, i) => (
              <Card key={i}><CardContent className="p-4 flex items-center justify-between">
                <div><div className="font-medium text-foreground text-sm">{integration.name}</div><div className="text-xs text-muted-foreground">{integration.desc}</div></div>
                <div className="flex items-center gap-3"><Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400">Connected</Badge><Button variant="outline" size="sm">Configure</Button></div>
              </CardContent></Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="automation">
          <Card><CardHeader><CardTitle className="text-lg">Automation Rules</CardTitle></CardHeader>
            <CardContent className="space-y-6">
              {[{ label: 'Auto-approve low-risk applications', desc: 'Automatically approve applications with risk score above 80' }, { label: 'Auto-remind for missing documents', desc: 'Send reminder emails and SMS for pending documents after 24 hours' }, { label: 'Auto-notify on approval', desc: 'Send offer notification when application is approved' }, { label: 'Auto-trigger contract signing', desc: 'Initiate DocuSign when offer is accepted' }, { label: 'Auto-renewal notification', desc: 'Notify when 60% of balance is paid' }].map((rule, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between"><div><div className="text-sm font-medium text-foreground">{rule.label}</div><div className="text-xs text-muted-foreground">{rule.desc}</div></div><Switch defaultChecked={i > 0} /></div>
                  {i < 4 && <Separator className="mt-4" />}
                </div>
              ))}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div><Label>Renewal Threshold (%)</Label><Input type="number" value={settings.renewalThreshold} onChange={e => setSettings({...settings, renewalThreshold: parseInt(e.target.value)})} /></div>
                <div><Label>Max Advance Multiplier</Label><Input type="number" step="0.1" value={settings.maxAdvanceMultiplier} onChange={e => setSettings({...settings, maxAdvanceMultiplier: parseFloat(e.target.value)})} /></div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="branding">
          <Card><CardHeader><CardTitle className="text-lg">Branding</CardTitle></CardHeader>
            <CardContent className="space-y-4 max-w-lg">
              <div><Label>Primary Color</Label><div className="flex items-center gap-3"><div className="h-10 w-10 rounded-lg bg-primary" /><Input defaultValue="#10B981" className="flex-1" /></div></div>
              <div><Label>Logo URL</Label><Input placeholder="https://..." /></div>
              <div><Label>Email From Name</Label><Input defaultValue="CapitalFlow" /></div>
              <Button className="gradient-emerald text-white border-0 hover:opacity-90">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
