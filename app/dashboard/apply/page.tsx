'use client';

import React, { useState } from 'react';
import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, ArrowLeft, ArrowRight, Upload, X } from 'lucide-react';

const steps = [
  { id: 1, title: 'Business Info' },
  { id: 2, title: 'Financial Info' },
  { id: 3, title: 'Owner Info' },
  { id: 4, title: 'Documents' },
  { id: 5, title: 'Review & Submit' },
];

const industries = ['Restaurant / Food Service', 'Retail', 'Construction', 'Healthcare', 'E-commerce', 'Professional Services', 'Manufacturing', 'Transportation', 'Real Estate', 'Technology', 'Other'];

export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({ legalName: '', dba: '', ein: '', industry: '', yearsInBusiness: '', website: '', monthlyRevenue: '', averageDeposits: '', existingLoans: '', requestedAmount: '', purposeOfFunds: '', ownerFirstName: '', ownerLastName: '', ownerDob: '', ownerSsn4: '', ownerEmail: '', ownerPhone: '', ownershipPercent: '' });
  const [uploadedFiles, setUploadedFiles] = useState<{name: string; category: string}[]>([]);

  const updateField = (field: string, value: string) => setFormData({ ...formData, [field]: value });
  const handleFileUpload = (category: string) => setUploadedFiles([...uploadedFiles, { name: `${category}_document.pdf`, category }]);
  const removeFile = (index: number) => setUploadedFiles(uploadedFiles.filter((_, i) => i !== index));

  return (
    <div>
      <DashboardHeader title="Apply for Funding" description="Complete all steps to submit your application" />
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          {steps.map(step => (
            <div key={step.id} className="flex items-center">
              <div className={cn('h-8 w-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors', step.id < currentStep ? 'bg-primary text-primary-foreground' : step.id === currentStep ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground')}>
                {step.id < currentStep ? <Check className="h-4 w-4" /> : step.id}
              </div>
              <span className={cn('ml-2 text-sm hidden sm:block', step.id <= currentStep ? 'text-foreground font-medium' : 'text-muted-foreground')}>{step.title}</span>
              {step.id < steps.length && <div className={cn('w-8 sm:w-16 lg:w-24 h-0.5 mx-2', step.id < currentStep ? 'bg-primary' : 'bg-muted')} />}
            </div>
          ))}
        </div>
      </div>
      <Card>
        <CardContent className="p-6 sm:p-8">
          {currentStep === 1 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground mb-4">Business Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2"><Label>Legal Business Name</Label><Input placeholder="Acme Corporation" value={formData.legalName} onChange={e => updateField('legalName', e.target.value)} /></div>
                <div><Label>DBA (Doing Business As)</Label><Input placeholder="Acme Corp" value={formData.dba} onChange={e => updateField('dba', e.target.value)} /></div>
                <div><Label>EIN</Label><Input placeholder="XX-XXXXXXX" value={formData.ein} onChange={e => updateField('ein', e.target.value)} /></div>
                <div><Label>Industry</Label><Select value={formData.industry} onValueChange={v => updateField('industry', v)}><SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger><SelectContent>{industries.map(ind => <SelectItem key={ind} value={ind}>{ind}</SelectItem>)}</SelectContent></Select></div>
                <div><Label>Years in Business</Label><Input type="number" placeholder="5" value={formData.yearsInBusiness} onChange={e => updateField('yearsInBusiness', e.target.value)} /></div>
                <div className="sm:col-span-2"><Label>Website</Label><Input placeholder="https://www.example.com" value={formData.website} onChange={e => updateField('website', e.target.value)} /></div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground mb-4">Financial Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>Monthly Revenue</Label><Input type="number" placeholder="50000" value={formData.monthlyRevenue} onChange={e => updateField('monthlyRevenue', e.target.value)} /></div>
                <div><Label>Average Monthly Deposits</Label><Input type="number" placeholder="45000" value={formData.averageDeposits} onChange={e => updateField('averageDeposits', e.target.value)} /></div>
                <div><Label>Existing Loan Balance</Label><Input type="number" placeholder="0" value={formData.existingLoans} onChange={e => updateField('existingLoans', e.target.value)} /></div>
                <div><Label>Requested Amount</Label><Input type="number" placeholder="100000" value={formData.requestedAmount} onChange={e => updateField('requestedAmount', e.target.value)} /></div>
                <div className="sm:col-span-2"><Label>Purpose of Funds</Label><Textarea placeholder="Describe how you plan to use the funds..." value={formData.purposeOfFunds} onChange={e => updateField('purposeOfFunds', e.target.value)} /></div>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground mb-4">Business Owner Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label>First Name</Label><Input placeholder="John" value={formData.ownerFirstName} onChange={e => updateField('ownerFirstName', e.target.value)} /></div>
                <div><Label>Last Name</Label><Input placeholder="Smith" value={formData.ownerLastName} onChange={e => updateField('ownerLastName', e.target.value)} /></div>
                <div><Label>Date of Birth</Label><Input type="date" value={formData.ownerDob} onChange={e => updateField('ownerDob', e.target.value)} /></div>
                <div><Label>SSN (Last 4)</Label><Input placeholder="1234" maxLength={4} value={formData.ownerSsn4} onChange={e => updateField('ownerSsn4', e.target.value)} /></div>
                <div><Label>Email</Label><Input type="email" placeholder="john@company.com" value={formData.ownerEmail} onChange={e => updateField('ownerEmail', e.target.value)} /></div>
                <div><Label>Phone</Label><Input type="tel" placeholder="(555) 123-4567" value={formData.ownerPhone} onChange={e => updateField('ownerPhone', e.target.value)} /></div>
                <div><Label>Ownership %</Label><Input type="number" placeholder="100" value={formData.ownershipPercent} onChange={e => updateField('ownershipPercent', e.target.value)} /></div>
              </div>
            </div>
          )}
          {currentStep === 4 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground mb-4">Upload Documents</h2>
              <p className="text-sm text-muted-foreground mb-4">Upload the required documents to complete your application. All files are encrypted and securely stored.</p>
              {['Bank Statements (Last 3 months)', 'Government-issued ID', 'Voided Check', 'Business Tax Returns'].map((doc, i) => (
                <div key={i} className="border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div><div className="font-medium text-foreground text-sm">{doc}</div><div className="text-xs text-muted-foreground">PDF, JPG, or PNG up to 10MB</div></div>
                    <Badge variant="secondary" className="text-xs">{uploadedFiles.some(f => f.category === doc.split(' ')[0]) ? 'Uploaded' : 'Required'}</Badge>
                  </div>
                  {uploadedFiles.some(f => f.category === doc.split(' ')[0]) ? (
                    <div className="flex items-center gap-2 bg-muted/50 rounded-lg p-2"><span className="text-sm text-foreground">{doc.split(' ')[0]}_document.pdf</span><Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => { const idx = uploadedFiles.findIndex(f => f.category === doc.split(' ')[0]); if (idx >= 0) removeFile(idx); }}><X className="h-3 w-3" /></Button></div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => handleFileUpload(doc.split(' ')[0])} className="mt-2"><Upload className="h-4 w-4 mr-2" /> Upload File</Button>
                  )}
                </div>
              ))}
            </div>
          )}
          {currentStep === 5 && (
            <div className="space-y-5">
              <h2 className="text-xl font-semibold text-foreground mb-4">Review & Submit</h2>
              <div className="space-y-4">
                {[
                  { title: 'Business Info', items: [['Legal Name', formData.legalName || 'Not provided'], ['Industry', formData.industry || 'Not selected'], ['Years in Business', formData.yearsInBusiness || 'Not provided']] },
                  { title: 'Financial Info', items: [['Monthly Revenue', formData.monthlyRevenue ? `$${Number(formData.monthlyRevenue).toLocaleString()}` : 'Not provided'], ['Requested Amount', formData.requestedAmount ? `$${Number(formData.requestedAmount).toLocaleString()}` : 'Not provided'], ['Purpose', formData.purposeOfFunds || 'Not provided']] },
                  { title: 'Owner Info', items: [['Name', `${formData.ownerFirstName} ${formData.ownerLastName}`.trim() || 'Not provided'], ['Email', formData.ownerEmail || 'Not provided'], ['Ownership', formData.ownershipPercent ? `${formData.ownershipPercent}%` : 'Not provided']] },
                ].map((section, i) => (
                  <div key={i} className="border rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-3">{section.title}</h3>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {section.items.map(([label, value], j) => (
                        <div key={j}><div className="text-xs text-muted-foreground">{label}</div><div className="text-sm text-foreground font-medium">{value}</div></div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border rounded-xl p-4"><h3 className="font-semibold text-foreground mb-3">Documents</h3><div className="text-sm text-muted-foreground">{uploadedFiles.length} of 4 documents uploaded</div></div>
              </div>
              <div className="flex items-start gap-2 p-4 bg-muted/50 rounded-xl"><input type="checkbox" className="mt-1" /><span className="text-sm text-muted-foreground">I certify that the information provided is accurate and complete. I authorize CapitalFlow to verify the information provided.</span></div>
            </div>
          )}
          <div className="flex items-center justify-between mt-8 pt-6 border-t">
            <Button variant="outline" onClick={() => setCurrentStep(Math.max(1, currentStep - 1))} disabled={currentStep === 1}><ArrowLeft className="h-4 w-4 mr-2" /> Previous</Button>
            {currentStep < 5 ? (
              <Button onClick={() => setCurrentStep(Math.min(5, currentStep + 1))} className="gradient-emerald text-white border-0 hover:opacity-90">Next <ArrowRight className="h-4 w-4 ml-2" /></Button>
            ) : (
              <Button className="gradient-emerald text-white border-0 hover:opacity-90">Submit Application</Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
