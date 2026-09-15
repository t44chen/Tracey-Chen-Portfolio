import React, { useRef } from 'react';
import ImageComparison from '../components/ImageComparison';
import { publicAsset } from '../utils/assets';

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

  const motionVideos = [
    {
      title: 'Event Highlight Reel',
      type: 'EVENT / SOCIAL MEDIA',
      url: 'https://youtube.com/shorts/BaZNxTdrY50?si=sie-z3Dwm0Oh7X2W',
      thumbnail: 'https://i.ytimg.com/vi/BaZNxTdrY50/hqdefault.jpg',
    },
    {
      title: 'Professional Interview Video',
      type: 'INTERVIEW',
      url: 'https://youtu.be/QNGew-YaW_I?si=Oq6276N_-fp8xJRr',
      thumbnail: 'https://i.ytimg.com/vi/QNGew-YaW_I/hqdefault.jpg',
    },
    {
      title: 'Customer Review Video',
      type: 'INTERVIEW',
      url: 'https://youtu.be/LtkNSS4YSKw?si=C36u3go7cYRYaGa8',
      thumbnail: 'https://i.ytimg.com/vi/LtkNSS4YSKw/hqdefault.jpg',
    },
    {
      title: 'The Body Shop Product Ad',
      type: 'COMMERCIAL',
      url: 'https://youtu.be/jI3nUqJexWI?si=RBkBa3jffh-C8Ox4',
      thumbnail: 'https://i.ytimg.com/vi/jI3nUqJexWI/hqdefault.jpg',
    },
    {
      title: 'The Body Shop Motion Ad',
      type: 'MOTION DESIGN',
      url: 'https://youtube.com/shorts/Wpu2XyELWL4?si=BK3gmiEGyNIDV0qC',
      thumbnail: 'https://i.ytimg.com/vi/Wpu2XyELWL4/hqdefault.jpg',
    },
  ];

  // 用于插画部分的滚动引用
  const scrollRef = useRef<HTMLDivElement>(null);
  const motionScrollRef = useRef<HTMLDivElement>(null);

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

  const scrollMotionVideos = (direction: 'left' | 'right') => {
    if (motionScrollRef.current) {
      const firstCard = motionScrollRef.current.firstElementChild as HTMLElement | null;
      const scrollAmount = firstCard ? firstCard.offsetWidth + 24 : motionScrollRef.current.clientWidth;
      motionScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const SectionHeader = ({ title, desc }: { title: string; desc: string }) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-[#1d1d1f] mb-3">{title}</h2>
      <p className="text-lg text-gray-500 max-w-2xl font-light">{desc}</p>
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
                  src={publicAsset(img)}
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
                        src={publicAsset(img)}
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
                      src={publicAsset(img)}
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

      {/* Section 3: Brand Identity Concepts — temporarily hidden; retain for future use. */}
      <section hidden>
        <SectionHeader 
          title="Brand Identity Concepts" 
          desc="A strategic redesign modernizing The Body Shop’s identity through a cohesive visual system and high-fidelity digital packaging mockups." 
        />
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 space-x-8 snap-x">
          {brandConcepts.map((concept, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center">
              <div className="group relative rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 apple-transition">
                <img 
                  src={publicAsset(concept.img)}
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
            <ImageComparison before={publicAsset('Design/1-before.jpg')} after={publicAsset('Design/1-after.jpg')} />
          </div>
          <div className="space-y-4">
            <ImageComparison before={publicAsset('Design/2-before.jpg')} after={publicAsset('Design/2-after.JPG')} />
          </div>
        </div>
      </section>

      {/* Section 5: Motion Media */}
      <section className="bg-gray-50 -mx-6 px-6 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Motion Media & Video Production" 
            desc="Creating engaging video content across interviews, commercial projects, and short-form social media."
          />
          <div className="group relative">
            <button
              onClick={() => scrollMotionVideos('left')}
              className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#1d1d1f] shadow-lg transition-all hover:bg-white md:-left-6"
              aria-label="Previous video"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <div
              ref={motionScrollRef}
              className="flex gap-6 snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide px-2"
            >
              {motionVideos.map((video) => (
                <a
                  key={video.url}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/card w-[82vw] flex-none snap-center overflow-hidden rounded-[2rem] bg-white shadow-sm transition-all duration-700 hover:shadow-2xl md:w-[calc((100%-3rem)/3)]"
                  aria-label={`Watch ${video.title} on YouTube`}
                >
                  <div className="relative aspect-video overflow-hidden bg-gray-200">
                    <img
                      src={video.thumbnail}
                      alt={`${video.title} YouTube thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover/card:bg-black/25" />
                    <span className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-red-600 shadow-lg transition-transform duration-500 group-hover/card:scale-110" aria-hidden="true">
                      <svg className="ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 px-6 py-5">
                    <div>
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">{video.type}</p>
                      <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">{video.title}</h3>
                    </div>
                    <svg className="h-5 w-5 flex-none text-gray-400 transition-transform duration-300 group-hover/card:translate-x-1 group-hover/card:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
            <button
              onClick={() => scrollMotionVideos('right')}
              className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-[#1d1d1f] shadow-lg transition-all hover:bg-white md:-right-6"
              aria-label="Next video"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
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
