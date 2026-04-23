'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/components/auth-provider';

export default function SettingsPage() {
  const { profile } = useAuth();
  const [form, setForm] = useState({ firstName: profile?.first_name || '', lastName: profile?.last_name || '', email: profile?.email || '', phone: profile?.phone || '', company: profile?.company || '' });
  const [notifications, setNotifications] = useState({ email: true, sms: true, offers: true });

  return (
    <div>
      <DashboardHeader title="Settings" description="Manage your account preferences" />
      <div className="space-y-6 max-w-2xl">
        <Card>
          <CardHeader><CardTitle className="text-lg">Profile</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div><Label>First Name</Label><Input value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} /></div>
              <div><Label>Last Name</Label><Input value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} /></div>
            </div>
            <div><Label>Email</Label><Input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} /></div>
            <div><Label>Phone</Label><Input type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} /></div>
            <div><Label>Company</Label><Input value={form.company} onChange={e => setForm({...form, company: e.target.value})} /></div>
            <Button className="gradient-emerald text-white border-0 hover:opacity-90">Save Changes</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-lg">Notifications</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[{ key: 'email', label: 'Email Notifications', desc: 'Receive updates about your application via email' }, { key: 'sms', label: 'SMS Notifications', desc: 'Get text message alerts for important updates' }, { key: 'offers', label: 'Offer Alerts', desc: 'Be notified when new offers are available' }].map(item => (
              <div key={item.key} className="flex items-center justify-between">
                <div><div className="text-sm font-medium text-foreground">{item.label}</div><div className="text-xs text-muted-foreground">{item.desc}</div></div>
                <Switch checked={notifications[item.key as keyof typeof notifications]} onCheckedChange={(v) => setNotifications({...notifications, [item.key]: v})} />
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle className="text-lg">Security</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div><Label>Current Password</Label><Input type="password" placeholder="Enter current password" /></div>
            <div><Label>New Password</Label><Input type="password" placeholder="Enter new password" /></div>
            <div><Label>Confirm New Password</Label><Input type="password" placeholder="Confirm new password" /></div>
            <Button variant="outline">Update Password</Button>
            <Separator className="my-4" />
            <div className="flex items-center justify-between">
              <div><div className="text-sm font-medium text-foreground">Two-Factor Authentication</div><div className="text-xs text-muted-foreground">Add an extra layer of security to your account</div></div>
              <Button variant="outline" size="sm">Enable</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
