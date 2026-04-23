import Link from 'next/link';
import { TrendingUp } from 'lucide-react';

const footerLinks = {
  Products: [
    { href: '/products#mca', label: 'Merchant Cash Advance' },
    { href: '/products#rbf', label: 'Revenue Based Financing' },
    { href: '/products#loc', label: 'Line of Credit' },
    { href: '/products#equipment', label: 'Equipment Financing' },
    { href: '/products#working-capital', label: 'Working Capital' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
    { href: '/about#careers', label: 'Careers' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/disclosures', label: 'Disclosures' },
  ],
};

export function PublicFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-9 w-9 rounded-lg gradient-emerald flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">CapitalFlow</span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Fast, flexible funding solutions for growing businesses. Trusted by thousands of companies nationwide.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">&copy; {new Date().getFullYear()} CapitalFlow. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/40">NMLS #123456</span>
            <span className="text-xs text-white/40">Equal Housing Lender</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
