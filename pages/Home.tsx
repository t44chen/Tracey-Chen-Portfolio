import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { publicAsset } from '../utils/assets';

const FadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </div>
  );
};

const Home: React.FC = () => {
  const software = [
    { name: 'Photoshop', icon: 'Logo/PS.jpg' },
    { name: 'Illustrator', icon: 'Logo/AI.jpg' },
    { name: 'Premiere Pro', icon: 'Logo/PR.jpg' },
    { name: 'Figma', icon: 'Logo/Figma.jpg' },
    { name: 'Procreate', icon: 'Logo/Procreate.jpg' },
    { name: 'Final Cut Pro', icon: 'Logo/FCP.jpg' },
    { name: 'Canva', icon: 'Logo/Canva.jpg' },
    { name: 'CapCut', icon: 'Logo/CapCut.jpg' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
      {/* Hero Section */}
      <section className="min-h-[70vh] flex flex-col justify-center pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-10">
            <FadeIn>
              <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] text-[#1d1d1f]">
                Hello, I’m <br />
                <span className="text-blue-600">Tracey Chen</span>
              </h1>
            </FadeIn>
            <FadeIn>
              <p className="text-xl md:text-2xl text-gray-500 max-w-xl leading-relaxed font-light">
                I didn’t start out thinking I’d be a designer—I just loved capturing small moments through a lens. Whether I’m wireframing an app or shooting photos on the weekend, I bring the same curiosity and visual thinking to everything I do.
              </p>
            </FadeIn>
            <FadeIn>
              <div className="pt-4">
                <a 
                  href={publicAsset('Tracey Chen-Resume.pdf')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-xl active:scale-95 shadow-lg"
                >
                  View Resume
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn>
              <div className="relative group">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white apple-transition group-hover:scale-[1.02] group-hover:shadow-3xl transition-all duration-700">
                  <img src={publicAsset('Home/portrait.jpg')} alt="Tracey Chen Portrait" className="w-full h-full object-cover" />
                </div>
                {/* Abstract shape decoration */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-purple-50 rounded-full blur-3xl opacity-60"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Software Display */}
      <FadeIn>
        <section className="py-16 border-y border-gray-100">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-12 text-center">Design Toolstack</h3>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            {software.map((item) => (
              <div key={item.name} className="flex flex-col items-center group cursor-default">
                {/* Modified: Removed grayscale classes so icons are always colored */}
                <div className="w-10 h-10 mb-4 group-hover:scale-110 transition-all duration-500 ease-out">
                  <img src={publicAsset(item.icon)} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Featured Work */}
      <section className="relative -mr-6 overflow-hidden md:-mr-0">
        <div className="mb-8 flex items-end justify-between pr-6 md:pr-0">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600">Design &amp; Creative</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1d1d1f]">Explore My Work</h2>
          </div>
          <span className="hidden text-xs font-medium text-gray-400 md:block">Swipe to explore</span>
        </div>
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pr-6 scrollbar-hide md:pr-0">
          <Link to="/figma" className="group relative block w-[84vw] flex-none snap-start overflow-hidden rounded-[2.5rem] bg-[#101828] shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-700 apple-transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:w-[44rem]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={publicAsset('Home/figma.jpg')} alt="UX/UI Design" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07101f]/85 via-[#07101f]/15 to-transparent" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/30 blur-3xl transition-transform duration-1000 group-hover:scale-125" />
                <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-violet-400/25 blur-3xl" />
                <span className="absolute left-7 top-7 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-xl">01</span>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/25 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-200">Product &amp; Experience Design</p>
                    <h3 className="text-2xl font-semibold tracking-tight">UX/UI Design</h3>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-lg text-[#1d1d1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
                </div>
              </div>
          </Link>

          <Link to="/photography" className="group relative block w-[84vw] flex-none snap-start overflow-hidden rounded-[2.5rem] bg-[#101828] shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-700 apple-transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:w-[44rem]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={publicAsset('Home/Photo2.JPG')} alt="Photography" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061921]/85 via-[#061921]/10 to-transparent" />
                <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl transition-transform duration-1000 group-hover:scale-125" />
                <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
                <span className="absolute left-7 top-7 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-xl">02</span>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/25 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-100">Visual Storytelling</p>
                    <h3 className="text-2xl font-semibold tracking-tight">Photography</h3>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-lg text-[#1d1d1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
                </div>
              </div>
          </Link>

          <Link to="/design" className="group relative block w-[84vw] flex-none snap-start overflow-hidden rounded-[2.5rem] bg-[#101828] shadow-[0_24px_60px_rgba(15,23,42,0.18)] transition-all duration-700 apple-transition hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.28)] md:w-[44rem]">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={publicAsset('Home/design.jpg')} alt="Visual Design" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111a12]/85 via-[#111a12]/10 to-transparent" />
                <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-lime-200/30 blur-3xl transition-transform duration-1000 group-hover:scale-125" />
                <div className="absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
                <span className="absolute left-7 top-7 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-xl">03</span>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 rounded-[1.5rem] border border-white/25 bg-white/15 p-5 text-white shadow-2xl backdrop-blur-xl">
                  <div>
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-lime-100">Branding &amp; Motion</p>
                    <h3 className="text-2xl font-semibold tracking-tight">Visual Design</h3>
                  </div>
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white text-lg text-[#1d1d1f] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">↗</span>
                </div>
              </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
