import React from 'react';
import ImageComparison from '../components/ImageComparison';

const Design: React.FC = () => {
  const identityImages = [
    'Design/logo-1.jpg', 
    'Design/logo-2.jpg', // 将会被特殊处理缩小
    'Design/logo-3.jpg', 
    'Design/Banner-1.jpg', 
    'Design/Banner-2.jpg', 
    'Design/businesscard-1.jpg', 
    'Design/businesscard-2.jpg'
  ];
  
  const illustrationImages = [
    'Design/1.jpg', 'Design/9.jpg', 'Design/2.jpg', 'Design/4.jpg', 
    'Design/7.jpg', 'Design/3.jpg', 'Design/13.jpg', 'Design/12.jpg'
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
            // Check if this is logo-2 to apply specific styling
            const isTargetLogo = img.includes('logo-2');
            
            return (
              <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 apple-transition hover:scale-[1.02] bg-white">
                <img 
                  src={`/Tracey-Chen-Portfolio/${img}`} 
                  alt="Branding Asset" 
                  // 如果是 logo-2，添加 'p-12' (内边距) 让它看起来更小，且保持 object-contain
                  // 其他图片保持 object-cover 填满格子
                  className={`w-full h-full transition-transform duration-1000 group-hover:scale-110 
                    ${isTargetLogo ? 'object-contain p-12' : 'object-cover'}`} 
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Illustration & Visual Storytelling */}
      <section>
        <SectionHeader 
          title="Illustration & Visual Storytelling" 
          desc="Beyond brand design, I explore visual storytelling through digital illustration and short-form comics created in Procreate." 
        />
        <div className="space-y-12">
          {/* Illustrations - 使用 columns 布局来实现瀑布流（原尺寸显示） */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {illustrationImages.map((img, i) => (
              <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm group hover:shadow-xl transition-all duration-500 apple-transition">
                {/* 移除了 fixed height 和 aspect ratio，使用 w-full h-auto */}
                <img 
                  src={`/Tracey-Chen-Portfolio/${img}`} 
                  alt="Illustration" 
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
            ))}
          </div>
          
          {/* Comics - 同样使用 columns 布局以适应不同长度的漫画 */}
          <div className="columns-2 md:columns-4 gap-4 space-y-4">
            {comicImages.map((img, i) => (
              <div key={i} className="break-inside-avoid group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 apple-transition">
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
      </section>

      {/* Section 3: Brand Identity Concepts */}
      <section>
        <SectionHeader 
          title="Brand Identity Concepts" 
          desc="A strategic redesign modernizing The Body Shop’s identity through a cohesive visual system and high-fidelity digital packaging mockups." 
        />
        {/* 关于路径问题：
           代码逻辑 `/Tracey-Chen-Portfolio/${concept.img}` 会生成 `/Tracey-Chen-Portfolio/Design/design-1.jpg`。
           如果图片不显示，请检查：
           1. public/Design 文件夹下是否有 design-1.jpg
           2. 大小写是否完全匹配（Design vs design，jpg vs JPG）
        */}
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 space-x-8 scrollbar-hide snap-x">
          {brandConcepts.map((concept, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center">
              {/* 移除了 aspect-[16/10] 强制比例，改为 h-auto，允许图片展示原尺寸 */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group space-y-6">
              {/* 移除了 aspect-video 和 h-full，现在视频将按实际尺寸显示 */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg bg-black group-hover:shadow-2xl transition-all duration-700">
                <video 
                  className="w-full h-auto block" 
                  controls
                  poster="/Tracey-Chen-Portfolio/Design/video-poster-1.jpg"
                >
                  <source src="/Tracey-Chen-Portfolio/Design/Video-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="group space-y-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-lg bg-black group-hover:shadow-2xl transition-all duration-700">
                <video 
                  className="w-full h-auto block" 
                  controls
                  poster="/Tracey-Chen-Portfolio/Design/video-poster-2.jpg"
                >
                  <source src="/Tracey-Chen-Portfolio/Design/reel-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center py-20 border-t border-gray-100">
        <p className="text-xl text-gray-400 font-light">
          Want to explore more? <br/> Connect with me on <a href="https://www.linkedin.com/in/tracey-chen-313245290/" target="_blank" className="apple-link font-medium" rel="noreferrer">LinkedIn</a> or view my <a href="https://www.youtube.com/@traceychen2715" target="_blank" className="apple-link font-medium" rel="noreferrer">YouTube channel</a>.
        </p>
      </footer>
    </div>
  );
};

export default Design;
