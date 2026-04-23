import { DashboardHeader } from '@/components/dashboard-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, DollarSign, FileText } from 'lucide-react';

const brokers = [
  { id: '1', name: 'Apex Capital Group', type: 'ISO', deals: 24, funded: '$1.8M', commission: '$90K', status: 'active' },
  { id: '2', name: 'National Funding Partners', type: 'ISO', deals: 18, funded: '$1.2M', commission: '$60K', status: 'active' },
  { id: '3', name: 'Direct Lending Solutions', type: 'Broker', deals: 12, funded: '$800K', commission: '$40K', status: 'active' },
  { id: '4', name: 'Quick Capital Brokers', type: 'Broker', deals: 5, funded: '$250K', commission: '$12.5K', status: 'inactive' },
];

export default function BrokersPage() {
  return (
    <div>
      <DashboardHeader title="ISO / Broker Management" description="Manage your broker relationships and commissions" />
      <div className="flex justify-end mb-6"><Button className="gradient-emerald text-white border-0 hover:opacity-90"><Plus className="h-4 w-4 mr-1" /> Add Broker</Button></div>
      <div className="space-y-4">
        {brokers.map(broker => (
          <Card key={broker.id}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-1"><h3 className="text-lg font-semibold text-foreground">{broker.name}</h3><Badge variant="secondary">{broker.type}</Badge><Badge variant={broker.status === 'active' ? 'secondary' : 'outline'} className={broker.status === 'active' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400' : ''}>{broker.status}</Badge></div>
                </div>
                <div className="flex items-center gap-6">
                  {[{ icon: FileText, label: 'Deals', value: broker.deals.toString() }, { icon: DollarSign, label: 'Funded', value: broker.funded }, { icon: DollarSign, label: 'Commission', value: broker.commission }].map((stat, i) => (
                    <div key={i} className="text-center"><stat.icon className="h-4 w-4 text-muted-foreground mx-auto mb-1" /><div className="text-sm font-semibold text-foreground">{stat.value}</div><div className="text-[10px] text-muted-foreground">{stat.label}</div></div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
