import React from 'react';

const Design: React.FC = () => {
  const identityImages = [
    '/Design/logo-1.jpg', '/Design/logo-2.jpg', '/Design/logo-3.jpg', 
    '/Design/Banner-1.jpg', '/Design/Banner-2.jpg', 
    '/Design/business-card-1.jpg', '/Design/business-card-2.jpg'
  ];
  
  const illustrationImages = [
    '/Design/1.jpg', '/Design/9.jpg', '/Design/2.jpg', '/Design/4.jpg', 
    '/Design/7.jpg', '/Design/3.jpg', '/Design/13.jpg', '/Design/12.jpg'
  ];
  
  const comicImages = [
    '/Design/comic-1.jpg', '/Design/comic-2.jpg', '/Design/comic-3.jpg', 
    '/Design/comic-4.jpg', '/Design/comic-5.jpg'
  ];
  
  const brandConcepts = [
    { img: '/Design/design-1.jpg' },
    { img: '/Design/design-2.jpg' },
    { img: '/Design/design-3.jpg' }
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
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#1d1d1f]">Visual Design</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
          With extensive hands-on experience in visual design, I specialize in translating brand identities into diverse formats.
        </p>
      </header>

      {/* Section 1: Identity & Commercial Branding */}
      <section>
        <SectionHeader 
          title="Identity & Commercial Branding" 
          desc="Distinctive brand identities through custom logo design and professional marketing materials." 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {identityImages.map((img, i) => (
            <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 hover:scale-[1.02]">
              <img src={img} alt="Branding" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Illustration */}
      <section>
        <SectionHeader 
          title="Illustration & Visual Storytelling" 
          desc="Digital illustration and short-form comics created in Procreate." 
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {illustrationImages.map((img, i) => (
            <div key={i} className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm">
              <img src={img} alt="Illustration" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Post-Production (已移除 ImageComparison) */}
      <section>
        <SectionHeader 
          title="Post-Production & Retouching" 
          desc="Expertise in high-end retouching and color grading." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
             <img src="/Design/1-after.jpg" alt="Retouched 1" className="w-full h-auto" />
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-lg">
             <img src="/Design/2-after.jpg" alt="Retouched 2" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Section 5: Motion Media */}
      <section className="bg-gray-50 -mx-6 px-6 py-24 rounded-[4rem]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Motion Media & Video Production" 
            desc="Commercial video content and brand advertisements." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg bg-black aspect-video">
              <video className="w-full h-full object-cover" controls poster="/Design/video-poster-1.jpg">
                <source src="/Design/Video-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-lg bg-black aspect-video">
              <video className="w-full h-full object-cover" controls poster="/Design/video-poster-2.jpg">
                <source src="/Design/reel-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Footer：蓝色链接 */}
      <footer className="text-center py-20 border-t border-gray-100">
        <p className="text-xl text-gray-400 font-light">
          Want to explore more? <br/> 
          Connect with me on <a href="https://www.linkedin.com/in/tracey-chen-313245290/" target="_blank" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">LinkedIn</a> or view my <a href="https://www.youtube.com/@traceychen2715" target="_blank" className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors">YouTube channel</a>.
        </p>
      </footer>
    </div>
  );
};

export default Design;
