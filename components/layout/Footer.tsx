import React from 'react';
import { Heart, Twitter, Youtube, Instagram } from 'lucide-react';

const FooterLink = ({ href, children }) => (
  <a 
    href={href} 
    className="group relative text-gray-400 hover:text-white transition-colors"
  >
    <span className="relative z-10">{children}</span>
    <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
  </a>
);

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold mb-4">
      {title}
    </h3>
    <ul className="space-y-3">
      {links.map(({ href, label }) => (
        <li key={href}>
          <FooterLink href={href}>{label}</FooterLink>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLinks = () => (
  <div className="flex gap-4">
    {[
      { icon: <Youtube className="w-5 h-5" />, href: "#" },
      { icon: <Twitter className="w-5 h-5" />, href: "#" },
      { icon: <Instagram className="w-5 h-5" />, href: "#" }
    ].map((social, index) => (
      <a
        key={index}
        href={social.href}
        className="group relative p-2 hover:text-white text-gray-400 transition-colors"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 rounded transition-all duration-300" />
        {social.icon}
      </a>
    ))}
  </div>
);

const FooterLove = () => (
  <div className="text-center text-gray-400">
    <p className="group relative inline-flex items-center gap-2">
      Created with 
      <span className="relative">
        <Heart className="w-4 h-4 text-red-500 animate-pulse" />
        <span className="absolute inset-0 blur-sm bg-red-500/30 animate-pulse" />
      </span>
      by Far Beyond LLC
    </p>
  </div>
);

export const Footer = () => {
  return (
    <footer className="relative">
      {/* Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity blur" />
              <img 
                src="/logo.png" 
                className="relative w-60"
                alt="Stars Beyond Logo"
              />
            </div>
            <p className="text-sm text-gray-400 pr-4">
              Experience the next evolution of space exploration and conquest in our revolutionary MMO.
            </p>
            <SocialLinks />
          </div>
      
          {/* Game Section */}
          <FooterSection 
            title="Game" 
            links={[
              { href: "/buy", label: "Buy Now" },
              { href: "/editions", label: "Game Editions" },
              { href: "/patches", label: "Patch Notes" },
              { href: "/servers", label: "Server Status" },
              { href: "/roadmap", label: "Development Roadmap" }
            ]} 
          />
      
          {/* Community Section */}
          <FooterSection 
            title="Community" 
            links={[
              { href: "/news", label: "Latest News" },
              { href: "/forums", label: "Forums" },
              { href: "/discord", label: "Join Discord" },
              { href: "/events", label: "Events" },
              { href: "/leaderboards", label: "Leaderboards" }
            ]} 
          />
      
          {/* Support Section */}
          <FooterSection 
            title="Support" 
            links={[
              { href: "/help", label: "Help Center" },
              { href: "/account", label: "Account Management" },
              { href: "/faq", label: "FAQ" },
              { href: "/contact", label: "Contact Support" },
              { href: "/report", label: "Report Issues" }
            ]} 
          />
        </div>
      
        {/* Bottom Bar */}
        <div className="relative pt-8 mt-8">
          {/* Gradient Border */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Far Beyond LLC. All rights reserved.
            </div>
            <FooterLove />
            <div className="flex gap-6 text-sm">
              <FooterLink href="/privacy">Privacy</FooterLink>
              <span className="text-gray-700">•</span>
              <FooterLink href="/terms">Terms</FooterLink>
              <span className="text-gray-700">•</span>
              <FooterLink href="/cookies">Cookies</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;