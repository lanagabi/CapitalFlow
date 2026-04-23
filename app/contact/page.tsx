'use client';

import React, { useState } from 'react';
import { PublicNavbar } from '@/components/public-navbar';
import { PublicFooter } from '@/components/public-footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Get in Touch</h1>
            <p className="mt-4 text-lg text-muted-foreground">Our team is ready to help you find the right funding solution</p>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"><Mail className="h-8 w-8 text-primary" /></div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent</h3>
                      <p className="text-muted-foreground">We will get back to you within 24 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-medium text-foreground mb-1.5 block">First Name</label><Input placeholder="John" required /></div>
                        <div><label className="text-sm font-medium text-foreground mb-1.5 block">Last Name</label><Input placeholder="Smith" required /></div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div><label className="text-sm font-medium text-foreground mb-1.5 block">Email</label><Input type="email" placeholder="john@company.com" required /></div>
                        <div><label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label><Input type="tel" placeholder="(555) 123-4567" /></div>
                      </div>
                      <div><label className="text-sm font-medium text-foreground mb-1.5 block">Company</label><Input placeholder="Company name" /></div>
                      <div><label className="text-sm font-medium text-foreground mb-1.5 block">Message</label><Textarea placeholder="How can we help you?" rows={4} required /></div>
                      <Button type="submit" className="gradient-emerald text-white border-0 hover:opacity-90 w-full h-11">Send Message</Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="space-y-4">
              {[
                { icon: Phone, title: 'Phone', value: '(888) 555-0199', sub: 'Mon-Fri 9am-6pm EST' },
                { icon: Mail, title: 'Email', value: 'hello@capitalflow.com', sub: 'We respond within 24 hours' },
                { icon: MapPin, title: 'Office', value: '100 Financial District', sub: 'New York, NY 10004' },
              ].map((c, i) => (
                <Card key={i}><CardContent className="p-6 flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"><c.icon className="h-5 w-5 text-primary" /></div>
                  <div><div className="font-semibold text-foreground text-sm">{c.title}</div><div className="text-foreground">{c.value}</div><div className="text-xs text-muted-foreground">{c.sub}</div></div>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
