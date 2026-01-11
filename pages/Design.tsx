import React, { useRef } from 'react';
import ImageComparison from '../components/ImageComparison';

const Design: React.FC = () => {
  const identityImages = [
    'Design/logo-1.jpg', 
    'Design/logo-2.jpg', // 特殊处理：缩小一点 (p-3)
    'Design/logo-3.jpg', 
    'Design/Banner-1.jpg', 
    'Design/Banner-2.jpg', 
    'Design/businesscard-1.jpg', 
    'Design/businesscard-2.jpg'
  ];
  
  // 排序：2(左), 1(中), 9(右), 然后是其他
  const illustrationImages = [
    'Design/2.jpg', 
    'Design/1.jpg', 
    'Design/9.jpg', 
    'Design/8.jpg', 
    'Design/4.jpg', 
    'Design/7.jpg', 
    'Design/3.jpg', 
    'Design/13.jpg', 
    'Design/12.jpg'
  ];
  
  const comicImages = [
    'Design/comic-1.jpg', 'Design/comic-2.jpg', 'Design/comic-3.jpg', 
    'Design/comic-4.jpg', 'Design/comic-5.jpg'
  ];
  
  const brandConcepts = [
    { img: 'Design/design-1.jpg' },
    { img: 'Design/design-2.jpg' },
    { img: 'Design/design-3.jpg' }
  ];

  // 用于插画部分的滚动引用
  const scrollRef = useRef<HTMLDivElement>(null);

  // 循环滚动逻辑
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth / 2; // 每次滚动半屏
      const maxScrollLeft = current.scrollWidth - current.clientWidth; // 最大滚动距离

      if (direction === 'left') {
        // 如果已经在最左边（容差10px），点击左箭头跳转到最后
        if (current.scrollLeft <= 10) {
           current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        } else {
           current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
      } else {
        // 如果已经在最右边（容差10px），点击右箭头跳转到最开始
        if (current.scrollLeft >= maxScrollLeft - 10) {
           current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
           current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }
  };

  const SectionHeader = ({ title, desc }: { title: string; desc: string }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-3">{title}</h2>
      <p className="text-lg text-gray-500 max-w-2xl font-light">{desc}</p>
    </div>
  );

  // 视频卡片组件
  const VideoCard = ({ src, poster, vertical = false }: { src: string; poster?: string; vertical?: boolean }) => (
    <div className="h-full bg-white p-3 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-700">
      <div className={`rounded-[2rem] overflow-hidden bg-black relative w-full ${vertical ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <video 
          className="w-full h-full object-cover" 
          controls
          poster={poster}
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-32">
      {/* Page Header */}
      <header className="py-20 text-center">
        <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Branded & Motion</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Visual Design</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          With extensive hands-on experience in visual design, I specialize in translating brand identities into diverse formats, from essential business collateral to expansive promotional campaign assets.
        </p>
      </header>

      {/* Section 1: Identity & Commercial Branding */}
      <section>
        <SectionHeader 
          title="Identity & Commercial Branding" 
          desc="I specialize in creating distinctive brand identities through custom logo design and professional marketing materials." 
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {identityImages.map((img, i) => {
            const isLogo2 = img.includes('logo-2');
            return (
              <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 apple-transition hover:scale-[1.02] bg-white">
                <img 
                  src={`/Tracey-Chen-Portfolio/${img}`} 
                  alt="Branding Asset" 
                  className={`w-full h-full transition-transform duration-1000 group-hover:scale-110 
                    ${isLogo2 ? 'object-contain p-3' : 'object-cover'}`} 
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Illustration & Visual Storytelling (Carousel) */}
      <section className="bg-gray-50 -mx-6 px-6 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Illustration & Visual Storytelling" 
            desc="Beyond brand design, I explore visual storytelling through digital illustration and short-form comics created in Procreate." 
          />
          
          <div className="space-y-20">
            {/* 1. Carousel Slider Area */}
            <div className="relative group">
              {/* Left Button */}
              <button 
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white cursor-pointer"
                aria-label="Scroll left"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              {/* Scroll Container */}
              <div 
                ref={scrollRef}
                className="flex overflow-x-auto gap-6 snap-x scrollbar-hide px-2 h-[30rem] items-center"
                style={{ scrollBehavior: 'smooth' }}
              >
                {illustrationImages.map((img, i) => (
                  <div key={i} className="flex-shrink-0 h-full w-auto snap-center py-2">
                    <div className="h-full w-auto rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 bg-white">
                      <img 
                        src={`/Tracey-Chen-Portfolio/${img}`} 
                        alt={`Illustration ${i}`} 
                        className="h-full w-auto hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Button */}
              <button 
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white cursor-pointer"
                aria-label="Scroll right"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* 2. Comics Area */}
            <div>
              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-8 px-2">Short Comics</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {comicImages.map((img, i) => (
                  <div key={i} className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 apple-transition">
                    <img 
                      src={`/Tracey-Chen-Portfolio/${img}`} 
                      alt="Comic Page" 
                      className="w-full h-auto block group-hover:brightness-110 transition-all" 
                    />
                    <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/40 to-transparent">
                      <span className="text-[10px] text-white font-bold tracking-widest uppercase">Page {i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Brand Identity Concepts */}
      <section>
        <SectionHeader 
          title="Brand Identity Concepts" 
          desc="A strategic redesign modernizing The Body Shop’s identity through a cohesive visual system and high-fidelity digital packaging mockups." 
        />
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 space-x-8 snap-x">
          {brandConcepts.map((concept, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center">
              <div className="group relative rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 apple-transition">
                <img 
                  src={`/Tracey-Chen-Portfolio/${concept.img}`} 
                  alt="Brand Concept" 
                  className="w-full h-auto object-cover" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Post-Production & Retouching */}
      <section>
        <SectionHeader 
          title="Post-Production & Retouching" 
          desc="Expertise in high-end retouching and color grading, focused on enhancing visual aesthetics through meticulous post-production." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <ImageComparison before="/Tracey-Chen-Portfolio/Design/1-before.jpg" after="/Tracey-Chen-Portfolio/Design/1-after.jpg" />
          </div>
          <div className="space-y-4">
            <ImageComparison before="/Tracey-Chen-Portfolio/Design/2-before.jpg" after="/Tracey-Chen-Portfolio/Design/2-after.JPG" />
          </div>
        </div>
      </section>

      {/* Section 5: Motion Media */}
      <section className="bg-gray-50 -mx-6 px-6 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Motion Media & Video Production" 
            desc="Delivering high-end commercial video content for startups, from brand advertisements to social media Reels." 
          />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Video 1 (Horizontal) */}
            <div className="md:col-span-6 w-full">
              <VideoCard 
                src="/Tracey-Chen-Portfolio/Design/Video-1.mp4" 
                poster="/Tracey-Chen-Portfolio/Design/video-poster-1.jpg"
                vertical={false} 
              />
            </div>

            {/* Video 2 (Vertical) */}
            <div className="md:col-span-3 w-full">
              <VideoCard 
                src="/Tracey-Chen-Portfolio/Design/Video-2.mp4" 
                poster="/Tracey-Chen-Portfolio/Design/video-poster-3.jpg"
                vertical={true}
              />
            </div>

            {/* Reel 1 (Vertical) */}
            <div className="md:col-span-3 w-full">
              <VideoCard 
                src="/Tracey-Chen-Portfolio/Design/reel-1.mp4" 
                poster="/Tracey-Chen-Portfolio/Design/video-poster-2.jpg"
                vertical={true}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-20 border-t border-gray-100">
        <p className="text-xl text-gray-400 font-light mb-2">
          Want to explore more?
        </p>
        <p className="text-xl text-gray-400 font-light">
          See more social media posts on my <a href="https://www.linkedin.com/in/tracey-chen-313245290/" target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline">LinkedIn</a> and watch more videos on my <a href="https://www.youtube.com/@traceychen2715" target="_blank" rel="noreferrer" className="text-blue-600 font-medium hover:underline">YouTube</a>.
        </p>
      </footer>
    </div>
  );
};

export default Design;
