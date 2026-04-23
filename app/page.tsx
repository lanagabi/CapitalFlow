import Link from 'next/link';
import { PublicNavbar } from '@/components/public-navbar';
import { PublicFooter } from '@/components/public-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import {
  ArrowRight, FileText, CircleCheck as CheckCircle, DollarSign, TrendingUp,
  ChartBar as BarChart3, CreditCard, Wrench, Briefcase, Star, Shield, Clock
} from 'lucide-react';

const steps = [
  { icon: FileText, title: 'Apply Online', desc: 'Complete a simple application in minutes. No hard credit pull required.' },
  { icon: CheckCircle, title: 'Get Approved', desc: 'Receive a decision within 24 hours with transparent terms.' },
  { icon: DollarSign, title: 'Get Funded', desc: 'Funds deposited directly into your account as soon as same day.' },
];

const products = [
  { icon: TrendingUp, title: 'Merchant Cash Advance', desc: 'Get an advance on your future credit card sales with flexible repayment.', href: '/products#mca' },
  { icon: BarChart3, title: 'Revenue Based Financing', desc: 'Repay based on a percentage of your monthly revenue.', href: '/products#rbf' },
  { icon: CreditCard, title: 'Line of Credit', desc: 'Access funds when you need them. Only pay for what you use.', href: '/products#loc' },
  { icon: Wrench, title: 'Equipment Financing', desc: 'Finance new equipment with the equipment as collateral.', href: '/products#equipment' },
  { icon: Briefcase, title: 'Working Capital Loan', desc: 'Short-term funding to cover daily operational expenses.', href: '/products#working-capital' },
];

const stats = [
  { value: '$1B+', label: 'Funded to Businesses' },
  { value: '10,000+', label: 'Businesses Served' },
  { value: '24hr', label: 'Average Decision Time' },
  { value: '95%', label: 'Client Satisfaction' },
];

const testimonials = [
  { name: 'Sarah Chen', role: 'CEO, Bloom Cafe', text: 'CapitalFlow funded our expansion in just 3 days. The process was incredibly smooth and transparent.', rating: 5 },
  { name: 'Marcus Johnson', role: 'Owner, MJ Logistics', text: 'After being turned down by banks, CapitalFlow gave us the working capital we needed to fulfill a major contract.', rating: 5 },
  { name: 'Elena Rodriguez', role: 'Founder, Verde Kitchen', text: 'The renewal process was seamless. We have now been funded three times and each experience has been excellent.', rating: 5 },
];

const faqs = [
  { q: 'How fast can I get funded?', a: 'Most applications are reviewed within 24 hours. Once approved, funds can be deposited into your account as soon as the same business day.' },
  { q: 'What are the requirements to qualify?', a: 'You need at least 6 months in business, $10,000+ in monthly revenue, and a valid business bank account. No collateral required for most products.' },
  { q: 'Will applying affect my credit score?', a: 'No. Our initial application uses a soft credit pull that does not impact your credit score. A hard pull only occurs if you choose to proceed with an offer.' },
  { q: 'How does repayment work?', a: 'Repayment varies by product. MCA uses a daily percentage of sales, RBF uses a fixed percentage of revenue, and loans use fixed weekly or monthly payments.' },
  { q: 'Can I get additional funding after paying off my advance?', a: 'Yes! Most clients become eligible for renewal after paying 60% of their balance. Renewals are processed even faster than initial applications.' },
  { q: 'What industries do you work with?', a: 'We fund businesses across all industries including retail, restaurants, construction, healthcare, e-commerce, professional services, and more.' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <PublicNavbar />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-light/30 via-transparent to-secondary/50 dark:from-emerald/5 dark:to-secondary/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Shield className="h-3.5 w-3.5" /> Trusted by 10,000+ businesses
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
              Fast Business Funding for{' '}
              <span className="text-gradient">Growing Companies</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Apply in minutes. Decisions in 24 hours. Funding from $5,000 to $500,000.
              Transparent terms, no hidden fees, and flexible repayment options.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/apply">
                <Button size="lg" className="gradient-emerald text-white border-0 hover:opacity-90 text-base px-8 h-12">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/products">
                <Button size="lg" variant="outline" className="text-base px-8 h-12">Check Eligibility</Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> 24hr Decisions</span>
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-primary" /> No Hard Credit Pull</span>
              <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4 text-primary" /> Same-Day Funding</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground">Three simple steps to get the funding your business needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl gradient-emerald text-white mb-5">
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="text-sm font-bold text-primary mb-2">Step {i + 1}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Funding Products</h2>
            <p className="mt-4 text-lg text-muted-foreground">Flexible solutions tailored to your business needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <Link key={i} href={product.href}>
                <Card className="h-full hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 gradient-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Trusted by Thousands</h2>
            <p className="mt-4 text-lg text-muted-foreground">Hear from business owners who have grown with CapitalFlow</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Card key={i} className="h-full">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-foreground leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border px-6">
                <AccordionTrigger className="text-left font-medium hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust CapitalFlow for fast, flexible funding. Apply today and get a decision within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/apply">
              <Button size="lg" className="gradient-emerald text-white border-0 hover:opacity-90 text-base px-8 h-12">
                Apply Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="text-base px-8 h-12">Talk to an Advisor</Button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
}
