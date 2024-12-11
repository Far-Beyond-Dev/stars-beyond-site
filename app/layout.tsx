'use client';

import localFont from "next/font/local";
import { Header, Footer } from "@/components/layout";
import "./globals.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";


// Snow effect component
const Snowflake = ({ style }: { style: React.CSSProperties }) => (
  <div
    className="fixed pointer-events-none text-slate-200 opacity-60"
    style={style}
  >
    •
  </div>
);

const Snow = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Generate initial snowflakes
    const initialSnowflakes = Array.from({ length: 50 }, (_, i) => createSnowflake(i));
    setSnowflakes(initialSnowflakes);

    // Add new snowflakes periodically
    const interval = setInterval(() => {
      setSnowflakes(prev => {
        const filtered = prev.filter(flake => 
          parseFloat(String(flake.style.top)) < window.innerHeight
        );
        return [...filtered, createSnowflake(Date.now())];
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  function createSnowflake(id: number) {
    const initialX = Math.random() * 100;
    const size = Math.random() * 0.5 + 0.5;
    
    return {
      id,
      style: {
        left: `${initialX}vw`,
        top: '-5px',
        transform: 'translate(-50%, -50%)',
        fontSize: `${size}rem`,
        animation: `fall ${Math.random() * 3 + 2}s linear forwards`,
        transition: 'top 2s linear'
      }
    };
  }

  return (
    <>
      <style jsx global>{`
        @keyframes fall {
          to {
            top: 105vh;
          }
        }
      `}</style>
      {snowflakes.map(flake => (
        <Snowflake key={flake.id} style={flake.style} />
      ))}
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="en">
      <body
        className={`antialiased relative overflow-x-hidden`}
      >
        <div className="fixed inset-0 pointer-events-none z-50">
        </div>
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              <span className="text-2xl">🌌</span>
            </div>
            <span className="text-2xl font-bold text-white">Stars Beyond</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-gray-300">
          <Link href="https://discord.gg/NM4awJWGWu" className="hover:text-white transition-colors">Join Discord</Link>
          </div>
          
          <button className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
            <Search className="w-5 h-5 text-white" />
          </button>
        </div>
      </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}