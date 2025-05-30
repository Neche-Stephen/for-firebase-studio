import Link from 'next/link';
import { Briefcase, Users, Zap, MessageSquare, ScrollText, Home } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Zap className="h-8 w-8 text-primary" />
          <span className="font-headline text-2xl font-bold">DesignFlow</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="#hero" className="text-foreground/70 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="#portfolio" className="text-foreground/70 hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="#process" className="text-foreground/70 hover:text-foreground transition-colors">
            Process
          </Link>
          <Link href="#team" className="text-foreground/70 hover:text-foreground transition-colors">
            Team
          </Link>
          <Link href="#ai-concept-generator" className="text-foreground/70 hover:text-foreground transition-colors">
            AI Concepts
          </Link>
          <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        {/* Mobile menu button can be added here if needed */}
      </div>
    </header>
  );
};

export default Header;
