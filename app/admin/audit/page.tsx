import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, User, FileText, DollarSign, Settings } from 'lucide-react';

const logs = [
  { id: '1', user: 'Admin User', action: 'Updated application status', entity: 'Application #1042', type: 'application', time: '10 min ago', ip: '192.168.1.1' },
  { id: '2', user: 'Sarah Mitchell', action: 'Created offer', entity: 'Offer #5023', type: 'offer', time: '25 min ago', ip: '192.168.1.45' },
  { id: '3', user: 'James Cooper', action: 'Approved application', entity: 'Application #1041', type: 'application', time: '1 hour ago', ip: '192.168.1.32' },
  { id: '4', user: 'Admin User', action: 'Updated user role', entity: 'User: David Lee', type: 'user', time: '2 hours ago', ip: '192.168.1.1' },
  { id: '5', user: 'System', action: 'Auto-reminder sent', entity: 'Application #1038', type: 'automation', time: '3 hours ago', ip: '--' },
  { id: '6', user: 'Admin User', action: 'Updated platform settings', entity: 'Settings', type: 'settings', time: '5 hours ago', ip: '192.168.1.1' },
  { id: '7', user: 'Sarah Mitchell', action: 'Uploaded document', entity: 'Document #8012', type: 'document', time: '6 hours ago', ip: '192.168.1.45' },
  { id: '8', user: 'System', action: 'Deal funded', entity: 'Deal #3021', type: 'deal', time: '8 hours ago', ip: '--' },
];

const typeIcons: Record<string, typeof Shield> = { application: FileText, offer: DollarSign, user: User, automation: Shield, settings: Settings, document: FileText, deal: DollarSign };

export default function AuditPage() {
  return (
    <div>
      <DashboardHeader title="Audit Logs" description="Track all system activity and changes" />
      <Card><CardContent className="p-0">
        <div className="divide-y">
          {logs.map(log => {
            const Icon = typeIcons[log.type] || Shield;
            return (
              <div key={log.id} className="flex items-start gap-4 p-4 hover:bg-muted/50 transition-colors">
                <div className="h-9 w-9 rounded-lg bg-muted flex items-center justify-center shrink-0 mt-0.5"><Icon className="h-4 w-4 text-muted-foreground" /></div>
                <div className="flex-1 min-w-0"><div className="text-sm text-foreground"><span className="font-medium">{log.user}</span> {log.action}</div><div className="text-xs text-muted-foreground mt-0.5">{log.entity}</div></div>
                <div className="text-right shrink-0"><div className="text-xs text-muted-foreground">{log.time}</div><div className="text-[10px] text-muted-foreground">{log.ip}</div></div>
              </div>
            );
          })}
        </div>
      </CardContent></Card>
    </div>
  );
}
