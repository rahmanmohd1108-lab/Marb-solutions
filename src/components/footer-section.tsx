import { Github, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/rahmanmohd1108-lab', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/rahmanmohd/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://www.leetcode.com/in/rahmanmohd/', label: 'Twitter' },
];

export default function FooterSection() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold gradient-text">MARB</span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Delivering cutting-edge digital solutions that empower enterprises to innovate, scale, and succeed in the digital age.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-emerald-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-surface text-muted-foreground transition-all hover:border-emerald-accent/30 hover:text-emerald-accent hover:bg-emerald-accent/5"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Stay connected for the latest updates and insights.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 MARB Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
