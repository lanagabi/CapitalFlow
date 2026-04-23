import Link from 'next/link';
import { PublicNavbar } from '@/components/public-navbar';
import { PublicFooter } from '@/components/public-footer';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar } from 'lucide-react';

const posts = [
  { title: '5 Ways to Use a Merchant Cash Advance for Growth', category: 'Guides', date: 'Apr 15, 2026', excerpt: 'Discover the most effective strategies to leverage MCA funding for sustainable business expansion.' },
  { title: 'Understanding Factor Rates vs. APR', category: 'Education', date: 'Apr 10, 2026', excerpt: 'A clear breakdown of how factor rates work and how they compare to traditional APR calculations.' },
  { title: 'How to Prepare Your Business for Funding', category: 'Tips', date: 'Apr 5, 2026', excerpt: 'Step-by-step guide to getting your documents and finances ready for a smooth application process.' },
  { title: 'Revenue Based Financing: Is It Right for You?', category: 'Products', date: 'Mar 28, 2026', excerpt: 'Learn when revenue based financing makes sense and how it differs from other funding options.' },
  { title: 'Building Business Credit: A Complete Guide', category: 'Education', date: 'Mar 20, 2026', excerpt: 'Everything you need to know about establishing and improving your business credit profile.' },
  { title: 'Seasonal Business Funding Strategies', category: 'Guides', date: 'Mar 15, 2026', excerpt: 'How seasonal businesses can use flexible funding to manage cash flow during off-peak periods.' },
];

const categories = ['All', 'Guides', 'Education', 'Tips', 'Products'];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <PublicNavbar />
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">Blog</h1>
          <p className="mt-4 text-lg text-muted-foreground">Insights and guides to help your business grow</p>
        </div>
      </section>
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat, i) => (
              <span key={i} className={`px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}>{cat}</span>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <Card key={i} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 cursor-pointer overflow-hidden">
                <div className="h-48 bg-muted flex items-center justify-center"><span className="text-4xl font-bold text-muted-foreground/20">CF</span></div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary">Read more <ArrowRight className="h-3.5 w-3.5" /></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <PublicFooter />
    </div>
  );
}
