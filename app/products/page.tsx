import Link from 'next/link';
import { PublicNavbar } from '@/components/public-navbar';
import { PublicFooter } from '@/components/public-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, TrendingUp, ChartBar as BarChart3, CreditCard, Wrench, Briefcase, Check } from 'lucide-react';

const products = [
  { id: 'mca', icon: TrendingUp, title: 'Merchant Cash Advance', desc: 'Get an advance on your future credit card sales. Repayment adjusts with your sales volume, so you pay less during slower months.', amount: '$5,000 - $500,000', term: '3 - 18 months', speed: 'Same day', features: ['No fixed monthly payment', 'Repayment tied to sales', 'No collateral required', 'Fast approval process'] },
  { id: 'rbf', icon: BarChart3, title: 'Revenue Based Financing', desc: 'Repay based on a fixed percentage of your monthly revenue. Perfect for businesses with consistent income streams.', amount: '$10,000 - $250,000', term: '6 - 24 months', speed: '1-2 days', features: ['Percentage-based repayment', 'Lower payments in slow months', 'Early payoff discounts', 'Renewal options available'] },
  { id: 'loc', icon: CreditCard, title: 'Line of Credit', desc: 'Access a revolving credit line and draw funds whenever you need them. Only pay interest on what you use.', amount: '$5,000 - $100,000', term: 'Revolving', speed: 'Instant draw', features: ['Draw funds on demand', 'Only pay for what you use', 'Revolving credit access', 'No draw fees'] },
  { id: 'equipment', icon: Wrench, title: 'Equipment Financing', desc: 'Finance new or used equipment with the equipment itself serving as collateral. Preserve your working capital.', amount: '$10,000 - $500,000', term: '12 - 60 months', speed: '2-3 days', features: ['Equipment as collateral', 'Preserve working capital', 'Tax advantages', 'Flexible terms'] },
  { id: 'working-capital', icon: Briefcase, title: 'Working Capital Loan', desc: 'Short-term funding to cover daily operational expenses like payroll, inventory, and rent during growth periods.', amount: '$5,000 - $250,000', term: '3 - 24 months', speed: 'Same day', features: ['Fixed payment schedule', 'Predictable costs', 'Quick access to funds', 'Build business credit'] },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Funding Products</h1>
            <p className="mt-4 text-lg text-muted-foreground">Flexible financing solutions designed for every stage of your business growth</p>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {products.map((p, i) => (
            <Card key={i} id={p.id} className="scroll-mt-24">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">{p.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div><div className="text-xs text-muted-foreground mb-1">Amount</div><div className="font-semibold text-foreground text-sm">{p.amount}</div></div>
                      <div><div className="text-xs text-muted-foreground mb-1">Term</div><div className="font-semibold text-foreground text-sm">{p.term}</div></div>
                      <div><div className="text-xs text-muted-foreground mb-1">Speed</div><div className="font-semibold text-foreground text-sm">{p.speed}</div></div>
                    </div>
                  </div>
                  <div className="lg:w-72">
                    <h4 className="font-semibold text-foreground mb-3">Key Benefits</h4>
                    <ul className="space-y-2">
                      {p.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/apply"><Button className="w-full mt-6 gradient-emerald text-white border-0 hover:opacity-90">Apply Now</Button></Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Not Sure Which Product Is Right?</h2>
          <p className="text-muted-foreground mb-8">Our funding advisors will help you find the best solution for your business. No obligation, no hard credit pull.</p>
          <Link href="/contact"><Button size="lg" variant="outline" className="text-base px-8 h-12">Talk to an Advisor</Button></Link>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
