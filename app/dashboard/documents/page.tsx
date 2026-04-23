'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Upload, FileText, CircleCheck as CheckCircle, Clock, X, Eye } from 'lucide-react';

const documents = [
  { id: '1', name: 'bank_statements_mar_2026.pdf', category: 'Bank Statement', status: 'verified', uploadedAt: 'Apr 10, 2026', size: '2.4 MB' },
  { id: '2', name: 'bank_statements_feb_2026.pdf', category: 'Bank Statement', status: 'verified', uploadedAt: 'Apr 10, 2026', size: '2.1 MB' },
  { id: '3', name: 'bank_statements_jan_2026.pdf', category: 'Bank Statement', status: 'pending', uploadedAt: 'Apr 10, 2026', size: '1.9 MB' },
  { id: '4', name: 'drivers_license_front.jpg', category: 'ID', status: 'verified', uploadedAt: 'Apr 8, 2026', size: '1.2 MB' },
  { id: '5', name: 'voided_check.pdf', category: 'Voided Check', status: 'verified', uploadedAt: 'Apr 8, 2026', size: '0.3 MB' },
];

const requiredDocs = [{ name: 'Tax Return (2025)', status: 'missing' }, { name: 'Tax Return (2024)', status: 'missing' }];

export default function DocumentsPage() {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div>
      <DashboardHeader title="Documents" description="Manage your uploaded documents" />
      {requiredDocs.length > 0 && (
        <Card className="mb-6 border-amber-200 bg-amber-50/50 dark:border-amber-900 dark:bg-amber-950/20">
          <CardContent className="p-4 flex items-center gap-3">
            <Clock className="h-5 w-5 text-amber-500 shrink-0" />
            <div><div className="font-medium text-foreground text-sm">Documents Needed</div><div className="text-sm text-muted-foreground">{requiredDocs.map(d => d.name).join(', ')}</div></div>
            <Button size="sm" className="ml-auto gradient-emerald text-white border-0 hover:opacity-90" onClick={() => setShowUpload(true)}><Upload className="h-4 w-4 mr-1" /> Upload</Button>
          </CardContent>
        </Card>
      )}
      {showUpload && (
        <Card className="mb-6"><CardContent className="p-6">
          <div className="flex items-center justify-between mb-4"><h3 className="font-semibold text-foreground">Upload Document</h3><Button variant="ghost" size="icon" onClick={() => setShowUpload(false)}><X className="h-4 w-4" /></Button></div>
          <div className="border-2 border-dashed rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer"><Upload className="h-8 w-8 text-muted-foreground mx-auto mb-3" /><p className="text-sm text-foreground font-medium">Drag and drop files here</p><p className="text-xs text-muted-foreground mt-1">or click to browse. PDF, JPG, PNG up to 10MB</p></div>
        </CardContent></Card>
      )}
      <Card><CardContent className="p-0">
        <div className="divide-y">
          {documents.map(doc => (
            <div key={doc.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0"><FileText className="h-5 w-5 text-muted-foreground" /></div>
              <div className="flex-1 min-w-0"><div className="text-sm font-medium text-foreground truncate">{doc.name}</div><div className="text-xs text-muted-foreground">{doc.category} &middot; {doc.size} &middot; {doc.uploadedAt}</div></div>
              <Badge variant={doc.status === 'verified' ? 'secondary' : 'outline'} className={doc.status === 'verified' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' : ''}>
                {doc.status === 'verified' ? <CheckCircle className="h-3 w-3 mr-1" /> : <Clock className="h-3 w-3 mr-1" />}
                {doc.status === 'verified' ? 'Verified' : 'Pending'}
              </Badge>
              <Button variant="ghost" size="icon" className="h-8 w-8"><Eye className="h-4 w-4" /></Button>
            </div>
          ))}
        </div>
      </CardContent></Card>
    </div>
  );
}
