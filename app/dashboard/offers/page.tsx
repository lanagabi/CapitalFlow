'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, DollarSign } from 'lucide-react';

const offers = [
  { id: '1', amount: 75000, factorRate: 1.28, apr: 34.5, paymentFrequency: 'Daily', paymentAmount: 267, termDays: 180, totalPayback: 96000, status: 'pending', expiresAt: 'Apr 30, 2026' },
  { id: '2', amount: 50000, factorRate: 1.22, apr: 26.8, paymentFrequency: 'Weekly', paymentAmount: 1525, termDays: 180, totalPayback: 61000, status: 'pending', expiresAt: 'Apr 30, 2026' },
];

export default function OffersPage() {
  const [acceptedId, setAcceptedId] = useState<string | null>(null);

  return (
    <div>
      <DashboardHeader title="Funding Offers" description="Review and accept your available funding offers" />
      {offers.length === 0 ? (
        <Card><CardContent className="p-12 text-center"><DollarSign className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><h3 className="text-lg font-semibold text-foreground mb-2">No Offers Available</h3><p className="text-muted-foreground">Complete your application to receive funding offers.</p></CardContent></Card>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {offers.map(offer => (
            <Card key={offer.id} className={acceptedId === offer.id ? 'ring-2 ring-primary' : ''}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold text-primary">${offer.amount.toLocaleString()}</CardTitle>
                  <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400"><Clock className="h-3 w-3 mr-1" /> Expires {offer.expiresAt}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {[['Factor Rate', offer.factorRate.toFixed(2)], ['APR', `${offer.apr}%`], ['Payment', `${offer.paymentFrequency} $${offer.paymentAmount.toLocaleString()}`], ['Term', `${offer.termDays} days`], ['Total Payback', `$${offer.totalPayback.toLocaleString()}`], ['Payment Freq', offer.paymentFrequency]].map(([label, value], i) => (
                    <div key={i} className="p-3 rounded-lg bg-muted/50"><div className="text-xs text-muted-foreground">{label}</div><div className="text-sm font-semibold text-foreground">{value}</div></div>
                  ))}
                </div>
                {acceptedId === offer.id ? (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 text-primary"><Check className="h-4 w-4" /> Offer accepted! We will be in touch shortly.</div>
                ) : (
                  <div className="flex gap-3"><Button className="flex-1 gradient-emerald text-white border-0 hover:opacity-90" onClick={() => setAcceptedId(offer.id)}>Accept Offer</Button><Button variant="outline" className="flex-1">Decline</Button></div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
