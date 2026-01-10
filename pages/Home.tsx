import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

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
                  href="mailto:t44chen@uwaterloo.ca"
                  className="inline-block px-8 py-4 bg-[#1d1d1f] text-white rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all hover:shadow-xl active:scale-95 shadow-lg"
                >
                  Work with me
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn>
              <div className="relative group">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white apple-transition group-hover:scale-[1.02] group-hover:shadow-3xl transition-all duration-700">
                  <img src="Home/portrait.jpg" alt="Tracey Chen Portrait" className="w-full h-full object-cover" />
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
                <div className="w-10 h-10 mb-4 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 text-gray-400">{item.name}</span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Bento Grid */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Figma Card */}
          <div className="md:col-span-8">
            <FadeIn>
              <Link to="/figma" className="group block relative rounded-[2.5rem] overflow-hidden aspect-video shadow-sm hover:shadow-2xl transition-all duration-700 apple-transition hover:scale-[1.02]">
                <img src="Home/figma.jpg" alt="Figma Design" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-12 text-white">
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">UX & UI Design</span>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Figma Project</h2>
                  <p className="mt-4 text-gray-300 font-light max-w-md opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">Transforming complex problems into elegant, human-centered interfaces.</p>
                </div>
              </Link>
            </FadeIn>
          </div>

          {/* Photography Card */}
          <div className="md:col-span-4">
            <FadeIn>
              <Link to="/photography" className="group block relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-sm hover:shadow-2xl transition-all duration-700 apple-transition hover:scale-[1.02]">
                <img src="Home/photo.jpg" alt="Photography" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-10 text-white">
                  <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Visual Storytelling</span>
                  <h2 className="text-3xl font-bold tracking-tight">Photography</h2>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Visual Design Card */}
          <div className="md:col-span-12">
            <FadeIn>
              <Link to="/design" className="group block relative rounded-[2.5rem] overflow-hidden aspect-[21/9] shadow-sm hover:shadow-2xl transition-all duration-700 apple-transition hover:scale-[1.02]">
                <img src="Home/design.jpg" alt="Visual Design" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-12 text-white">
                  <div className="max-w-2xl">
                    <span className="text-blue-400 font-bold uppercase tracking-widest text-xs mb-3">Branding & Motion</span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Visual Design</h2>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
