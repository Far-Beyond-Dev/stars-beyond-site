"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Star, Sparkles, Server, Atom } from 'lucide-react';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black/10 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 -z-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyaWQtZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMDU2RkY7c3RvcC1vcGFjaXR5OjAuMSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwRkZBMztzdG9wLW9wYWNpdHk6MC4xIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0idXJsKCNncmlkLWdyYWRpZW50KSIvPjwvc3ZnPg==')] opacity-20" />

      {/* Video Background with Gradient Overlay */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Hero Section */}
      <section className="pt-64 pb-14 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-cyan-500/50 rounded-lg blur-lg opacity-75" />
            <div className="relative bg-black/70 p-8 rounded-lg border border-white/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                Forge Alliances and Rule the Stars
              </h1>
              <p className="text-gray-300 mb-8 text-lg">
                Step into a universe where your imagination knows no bounds. Build, explore, and conquer in a vast, immersive galaxy.
              </p>
              <div className="flex gap-6">
                <Link href="/explore">
                  <button className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 transition-opacity group-hover:opacity-100 opacity-0" />
                    <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:border-white/40 transition-colors" />
                    <span className="relative text-white font-medium">Explore More</span>
                  </button>
                </Link>
                <Link href="/launch">
                  <button className="group relative px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 transition-opacity opacity-0 group-hover:opacity-100" />
                    <span className="relative text-white font-medium flex items-center gap-2">
                      Launch Game <Sparkles className="w-4 h-4" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto p-0 pb-20">
        <div className="relative backdrop-filter backdrop-blur-sm bg-black bg-opacity-50 rounded-xl overflow-hidden border border-gray-800">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5"></div>
            
            <div className="relative p-8">
                <div className="flex items-center justify-between mb-6">
                    <div className="space-y-1">
                        <h2 className="text-4xl font-mono text-gray-100">HORIZON</h2>
                        <p className="text-gray-400 text-sm">Open Source Game Server Framework</p>
                    </div>
                    <a href="https://github.com/far-beyond-dev/horizon" target="_blank" className="flex items-center space-x-2 text-gray-400 hover:text-gray-200 transition-colors">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                        <span>View on GitHub</span>
                    </a>
                </div>
                
                <div className="space-y-6">
                    <p className="text-gray-300 text-lg leading-relaxed">
                        A next-gen multiplayer game server built by the community, for the community. Written in Rust with love for performance and reliability. Perfect for indie devs and small teams looking to add multiplayer to their games.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                        <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                            <h3 className="text-gray-200 font-semibold mb-2">What's Inside</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>🔌 Hot-reloadable Plugin System</li>
                                <li>🌐 WebSocket-based Networking</li>
                                <li>🎮 Actor-Component Framework</li>
                                <li>⚡ Multi-threaded Architecture</li>
                            </ul>
                        </div>
                        <div className="bg-black bg-opacity-40 p-4 rounded-lg">
                            <h3 className="text-gray-200 font-semibold mb-2">Built With</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li>🦀 Pure Rust Implementation</li>
                                <li>📦 Zero-cost Abstractions</li>
                                <li>🛠️ Easy Plugin Development</li>
                                <li>💻 Cross-platform Support</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                        <a href="https://horizon.farbeyond.dev" target="_blank" className="inline-flex items-center px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-200 transition-colors duration-200">
                            Get Started
                        </a>
                        <a href="https://discord.gg/NM4awJWGWu" target="_blank" className="inline-flex items-center px-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-200 transition-colors duration-200">
                            Join Discord
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center text-gray-500 text-sm">
                    Made with ❤️ by the Horizon community
                </div>
            </div>
        </div>
    </div>

      <div className="bg-black">
      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Server className="w-6 h-6" />,
                number: "01",
                title: "Cutting-Edge Server Tech",
                description: "Our modular-based server platform provides a smooth, reliable, and secure foundation for collaborative space games."
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                number: "02",
                title: "Next Generation VFX",
                description: "From high-definition nebulae to dynamic particle trails, we provide users with an immersive and believable visualization."
              },
              {
                icon: <Atom className="w-6 h-6" />,
                number: "03",
                title: "Quantum Processing",
                description: "Advanced algorithms and quantum-inspired processing enable complex real-time calculations and simulations."
              }
            ].map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/70 p-6 rounded-lg border border-white/10">
                  <div className="text-cyan-400 mb-4 flex items-center gap-3">
                    {feature.icon}
                    <span className="text-xl">{feature.number}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur-lg opacity-75" />
            <div className="relative bg-black/70 p-8 rounded-lg border border-white/10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <img 
                  src="/open-source-code.jpg" 
                  alt="Code Preview" 
                  className="w-full max-w-2xl rounded-lg relative z-10 md:w-1/2"
                  style={{ height: '496px', width: 'auto' }}
                />
                <div className="md:w-1/2 align-top">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
                  We support open source!
                  </h2>
                  <p className="text-gray-400 mb-6">
                  Open source software is integral to our product. By contributing back to the community, we're helping build a stronger foundation for the future of space exploration games.
                  </p>
                </div>
                </div>
              <div className="relative rounded-lg overflow-hidden">
              </div>
            </div>
          </div>
        </div>
      </section>


      </div>
    </div>
  );
};

export default HomePage;