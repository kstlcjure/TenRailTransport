import { Facebook, Twitter, Linkedin, Phone } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/tenrail", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/tenrail", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/tenrail", label: "LinkedIn" }
  ];

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">TenRail</h3>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/about" className="text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary">Services</Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">Contact</Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} TenRail. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}