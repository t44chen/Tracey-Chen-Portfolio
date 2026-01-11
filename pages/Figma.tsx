import React, { useState } from 'react';

const Figma: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // FIXED PATHS IN ARRAY BELOW
  const projects = [
    { 
      id: 1, 
      img: '/Tracey-Chen-Portfolio/Figma/PJ1.jpg', 
      title: 'Toronto Fertility Care - Website Redesign', 
      desc: 'Redesigned the official website for a fertility clinic to improve user navigation and modern medical branding.',
      tags: ['Web Redesign', 'Academic Project']
    },
    { 
      id: 2, 
      img: '/Tracey-Chen-Portfolio/Figma/PJ2.jpg', 
      title: 'MedSync - Walk-in Clinic Management App', 
      desc: 'A multifunctional healthcare app collaborating with engineering students, offering features such as appointment, waitlists, medication management, and clinic navigation.',
      tags: ['Collaboration', 'Mobile UI', 'Healthcare']
    },
    { 
      id: 3, 
      img: '/Tracey-Chen-Portfolio/Figma/PJ3.jpg', 
      title: 'Mediflect - Medication Tracker & Education', 
      desc: 'A group design project focused on medication schedules and providing detailed pharmaceutical information for patients.',
      tags: ['Group Project', 'HealthTech', 'UX Research']
    },
    { 
      id: 4, 
      img: '/Tracey-Chen-Portfolio/Figma/PJ4.jpg', 
      title: 'Little Lemon - Restaurant Ordering & Reservation', 
      desc: 'An end-to-end mobile interface design for a dining experience, including table booking, menu browsing, and ordering.',
      tags: ['E-commerce', 'Mobile UI', 'Case Study']
    },
    { 
      id: 5, 
      img: '/Tracey-Chen-Portfolio/Figma/PJ5.jpg', 
      title: 'VeniceGo - Multi-modal Transit App', 
      desc: 'A transportation app tailored for Venice, integrating waterbus (Vaporetto), taxi services, and urban navigation.',
      tags: ['Transportation', 'Travel UI', 'Location Services']
    },
    { 
      id: 6, 
      img: '/Tracey-Chen-Portfolio/Figma/PJ6.jpg', 
      title: 'Zoo - Gamified Fitness Motivation App', 
      desc: 'A collaborative project designing a gamified fitness app to encourage beginners to start their workout journey through social engagement.',
      tags: ['Group Project', 'Gamification', 'Fitness UI']
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24">
      <header className="py-20 text-center">
        <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4 block">UX & UI Design</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Figma Project</h1>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
          This portfolio highlights my expertise in UX/UI design, along with my past experiences. I aim to deliver superior digital experiences for users through user research, iterative prototyping, and high-fidelity solutions.
        </p>
      </header>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <section key={project.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 group`}>
            {/* Clickable Image Container */}
            <div 
              onClick={() => setSelectedImage(project.img)}
              className="flex-1 w-full rounded-[2.5rem] overflow-hidden shadow-sm apple-transition group-hover:shadow-2xl group-hover:-translate-y-2 cursor-zoom-in relative"
            >
              <img src={project.img} alt={project.title} className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold text-black shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-500">Click to expand</span>
              </div>
            </div>

            <div className="flex-1 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f]">{project.title}</h2>
                <p className="text-lg text-gray-500 leading-relaxed max-w-lg font-light">
                  {project.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Image Lightbox / Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl"></div>
          
          <button 
            className="absolute top-8 right-8 z-[110] w-12 h-12 bg-black/5 hover:bg-black/10 rounded-full flex items-center justify-center transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="relative z-[105] w-full max-w-6xl max-h-full overflow-hidden rounded-[2rem] shadow-3xl animate-in zoom-in-95 duration-500 cubic-bezier(0.2, 0, 0, 1)">
            <img 
              src={selectedImage} 
              alt="Project detail" 
              className="w-full h-auto max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Figma;
