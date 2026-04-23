'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Send, User } from 'lucide-react';

const conversations = [
  { id: '1', name: 'Sarah Mitchell', role: 'Funding Advisor', lastMessage: 'Your documents have been verified. We should have an offer for you by tomorrow.', time: '2 hours ago', unread: true },
  { id: '2', name: 'James Cooper', role: 'Underwriter', lastMessage: 'I have a few questions about your monthly revenue figures.', time: '1 day ago', unread: true },
  { id: '3', name: 'CapitalFlow Support', role: 'Support Team', lastMessage: 'Welcome to CapitalFlow! Your account has been set up successfully.', time: '5 days ago', unread: false },
];

const messages = [
  { id: '1', sender: 'advisor', text: 'Hi! I have reviewed your application and everything looks great.', time: '10:00 AM' },
  { id: '2', sender: 'borrower', text: 'Thank you! How long until I receive an offer?', time: '10:15 AM' },
  { id: '3', sender: 'advisor', text: 'Your documents have been verified. We should have an offer for you by tomorrow.', time: '10:20 AM' },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div>
      <DashboardHeader title="Messages" description="Communicate with your funding team" />
      <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        <Card className="lg:col-span-1 overflow-hidden">
          <CardContent className="p-0">
            <div className="p-3 border-b"><Input placeholder="Search messages..." className="h-9" /></div>
            <div className="divide-y">
              {conversations.map(conv => (
                <button key={conv.id} onClick={() => setSelectedConversation(conv)} className={cn('w-full text-left p-4 hover:bg-muted/50 transition-colors', selectedConversation.id === conv.id && 'bg-muted')}>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><User className="h-5 w-5 text-primary" /></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between"><span className="text-sm font-medium text-foreground">{conv.name}</span>{conv.unread && <span className="h-2 w-2 rounded-full bg-primary" />}</div>
                      <div className="text-xs text-muted-foreground">{conv.role}</div>
                      <div className="text-xs text-muted-foreground truncate mt-1">{conv.lastMessage}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="lg:col-span-2 flex flex-col overflow-hidden">
          <div className="p-4 border-b flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center"><User className="h-5 w-5 text-primary" /></div>
            <div><div className="font-medium text-foreground text-sm">{selectedConversation.name}</div><div className="text-xs text-muted-foreground">{selectedConversation.role}</div></div>
            <Badge variant="secondary" className="ml-auto text-xs">Online</Badge>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={cn('flex', msg.sender === 'borrower' ? 'justify-end' : 'justify-start')}>
                <div className={cn('max-w-[70%] rounded-2xl px-4 py-2.5', msg.sender === 'borrower' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground')}>
                  <p className="text-sm">{msg.text}</p>
                  <span className={cn('text-[10px] mt-1 block', msg.sender === 'borrower' ? 'text-primary-foreground/70' : 'text-muted-foreground')}>{msg.time}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <div className="flex gap-2"><Input placeholder="Type a message..." value={newMessage} onChange={e => setNewMessage(e.target.value)} className="h-10" /><Button size="icon" className="gradient-emerald text-white border-0 hover:opacity-90 h-10 w-10 shrink-0"><Send className="h-4 w-4" /></Button></div>
          </div>
        </Card>
      </div>
    </div>
  );
}
