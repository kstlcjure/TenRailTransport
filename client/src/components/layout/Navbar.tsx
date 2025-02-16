import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Train, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/jobs", label: "Jobs" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLinks = ({ className, onClick }: { className?: string, onClick?: () => void }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={cn(
            "text-base font-medium transition-colors hover:text-primary px-3 py-2",
            location === item.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90">
          <Train className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">TenRail</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <NavLinks />
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden" aria-label="Open Menu">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <div className="flex flex-col space-y-4 mt-8">
              <NavLinks onClick={() => {
                const closeButton = document.querySelector('[data-radix-collection-item]') as HTMLButtonElement;
                closeButton?.click();
              }} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}