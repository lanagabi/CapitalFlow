import { PublicNavbar } from '@/components/public-navbar';
import { PublicFooter } from '@/components/public-footer';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Heart, Users, Globe } from 'lucide-react';

const team = [
  { name: 'Michael Torres', role: 'CEO & Co-Founder', desc: 'Former VP at Goldman Sachs with 15+ years in alternative lending.' },
  { name: 'Jessica Park', role: 'CTO & Co-Founder', desc: 'Ex-Stripe engineering lead. Built payment systems processing $10B+ annually.' },
  { name: 'David Williams', role: 'Head of Underwriting', desc: '20 years in risk management. Previously led underwriting at Kabbage.' },
  { name: 'Aisha Patel', role: 'VP of Sales', desc: 'Scaled revenue 5x at OnDeck. Expert in SMB lending distribution.' },
];

const values = [
  { icon: Zap, title: 'Speed', desc: 'We move fast because your business cannot wait. 24-hour decisions, same-day funding.' },
  { icon: Shield, title: 'Transparency', desc: 'No hidden fees, no surprises. Every term is clear before you sign.' },
  { icon: Heart, title: 'Partnership', desc: 'We succeed when you succeed. Our renewal program rewards growing businesses.' },
  { icon: Users, title: 'Inclusion', desc: 'We look beyond credit scores. Revenue and potential matter more than FICO.' },
];

const stats = [
  { value: '$1B+', label: 'Total Funded' },
  { value: '10,000+', label: 'Businesses Served' },
  { value: '2018', label: 'Founded' },
  { value: '200+', label: 'Team Members' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground">About CapitalFlow</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">We believe every growing business deserves access to fast, fair, and transparent funding. Founded in 2018, CapitalFlow has helped over 10,000 businesses access the capital they need to thrive.</p>
          </div>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">Traditional banks take weeks to make decisions and often decline small businesses. We built CapitalFlow to change that. Our technology-driven approach analyzes your business health in real-time, not just your credit score.</p>
              <p className="text-muted-foreground leading-relaxed">We look at your revenue, cash flow, and growth trajectory to make fast, fair funding decisions. The result? Businesses get funded in days, not weeks, with terms that make sense for their unique situation.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <Card key={i}><CardContent className="p-6 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </CardContent></Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="text-center"><CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </CardContent></Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((t, i) => (
              <Card key={i}><CardContent className="p-6 text-center">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">{t.name}</h3>
                <div className="text-sm text-primary mb-2">{t.role}</div>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              </CardContent></Card>
            ))}
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
