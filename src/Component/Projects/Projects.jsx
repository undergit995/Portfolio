import React, { useEffect, useRef, useState } from 'react';

export const ALL_PROJECTS = [
  {
    id: 1,
    img: 'https://doodleipsum.com/600x400?random=1',
    title: 'E-Commerce',
    year: '2025',
    category: 'E-Commerce',
    tags: ['React', 'JavaScript', 'Tailwindcss'],
    desc: 'A full-featured online store with product catalog, shopping cart, and secure checkout functionality.',
    featured: false,
  },
  {
    id: 2,
    img: 'https://doodleipsum.com/600x400?random=2',
    title: 'App Store',
    year: '2026',
    category: 'App',
    tags: ['Prisma', 'PostgreSQL'],
    desc: 'A curated app marketplace where users can discover, download, and review mobile applications.',
    featured: false,
  },
  {
    id: 3,
    img: 'https://doodleipsum.com/600x400?random=3',
    title: 'Emoji Game',
    year: '2026',
    category: '3D / WebGL',
    tags: ['Three.js', 'GSAP', 'WebGL'],
    desc: 'An interactive web game where players match emojis in a fun 3D environment with animated effects.',
    featured: false,
  },
  {
    id: 4,
    img: 'https://doodleipsum.com/600x400?random=4',
    title: 'Tic-Tac-Toe',
    year: '2026',
    category: 'Fintech',
    tags: ['React', 'Node', 'Stripe'],
    desc: 'A classic Tic-Tac-Toe game with multiplayer support and an intuitive, responsive UI.',
    featured: false,
  },
  {
    id: 5,
    img: 'https://doodleipsum.com/600x400?random=5',
    title: 'Comments App',
    year: '2026',
    category: 'AI / ML',
    tags: ['Python', 'OpenAI', 'React'],
    desc: 'A smart commenting system that auto-suggests replies, detects spam, and organizes discussions.',
    featured: false,
  },
  {
    id: 6,
    img: 'https://doodleipsum.com/600x400?random=6',
    title: 'Book Appointments',
    year: '2026',
    category: 'Dashboard',
    tags: ['Tailwind', 'Recharts', 'REST'],
    desc: 'A scheduling dashboard for users to book, manage, and track appointments with visual analytics.',
    featured: false,
  },
  {
    id: 7,
    img: 'https://doodleipsum.com/600x400?random=7',
    title: 'StopWatch',
    year: '2026',
    category: 'Mobile',
    tags: ['React Native', 'Expo', 'Firebase'],
    desc: 'A mobile stopwatch app with lap tracking, timers, and cloud sync across devices.',
    featured: false,
  },
  {
    id: 8,
    img: 'https://doodleipsum.com/600x400?random=8',
    title: 'Expense Tracker',
    year: '2026',
    category: 'Web App',
    tags: ['MDX', 'Tailwind'],
    desc: 'A simple web app to track income and expenses, categorize spending, and visualize budgets.',
    featured: false,
  },
];

const CATEGORIES = ['All', ...Array.from(new Set(ALL_PROJECTS.map((p) => p.category)))];
function ProjectCard({ project, index, layout }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);  
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) io.observe(ref.current);

    return () => io.disconnect();
  }, []);

  const isLarge = layout === 'large';

  return (
    <div
      ref={ref}

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative overflow-hidden border border-[#1e1c19] hover:border-[#e8b86d]/40 transition-all duration-500 cursor-pointer
        ${isLarge ? 'md:col-span-2' : ''}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${index * 70}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 70}ms, border-color 0.3s`,
      }}
    >
      <div className={`overflow-hidden ${isLarge ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}>
        <img
          src={`https://picsum.photos/id/${project.imgId}/900/600`}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          style={{
            filter: hovered ? 'none' : 'grayscale(0.65) sepia(0.12)',
            transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.6s ease',
          }}
        />
      </div>

      {project.featured && (
        <div className="absolute top-3 left-3 bg-[#e8b86d] text-[#0f0e0c] text-[9px] tracking-[0.25em] uppercase px-2 py-0.5 font-['DM_Mono',monospace]">
          Featured
        </div>
      )}

      <div className="p-5 bg-[#0f0e0c]">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-['DM_Serif_Display',serif] text-xl text-[#e8e3d9] leading-tight italic group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-[9px] text-[#3a3530] font-['DM_Mono',monospace] tracking-widest mt-1 shrink-0 ml-4">
          </span>
        </div>

        <p className="text-[11px] text-[#6b6560] font-['DM_Mono',monospace] leading-relaxed mb-4 line-clamp-2">
          {project.desc}
        </p>

        

        <div className="mt-4 text-[#e8b86d] text-[10px] tracking-[0.2em] uppercase font-['DM_Mono',monospace] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2">
          View Project <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
        </div>
      </div>
    </div>
  );
}

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-[10px] tracking-[0.25em] uppercase px-4 py-2 border transition-all duration-200 font-['DM_Mono',monospace]
        ${active
          ? 'bg-[#e8b86d] text-[#0f0e0c] border-[#e8b86d]'
          : 'border-[#2a2520] text-[#6b6560] hover:border-[#e8b86d]/50 hover:text-[#e8e3d9]'
        }`}
    >
      {label}
    </button>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);


  const filtered = activeFilter === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeFilter);    
  const visible = showAll ?
   filtered : filtered.slice(0, 6);

   
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
      `}</style>

      <div className="min-h-screen bg-[#0f0e0c] text-[#e8e3d9]" style={{ fontFamily: "'DM Mono', monospace" }}>

        <div className="border-b border-[#1e1c19] pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-8">

            <div className="flex items-center gap-3 mb-10 text-[10px] tracking-[0.3em] uppercase text-[#3a3530] font-['DM_Mono',monospace]">
              <span>Portfolio</span>
              <span>/</span>
              <span className="text-[#e8b86d]">Projects</span>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-[#e8b86d] font-['DM_Mono',monospace] text-[10px] tracking-[0.3em] uppercase">01</span>
                  <div className="w-16 h-px bg-[#1e1c19]" />
                </div>

                <h1 className="font-['Bebas_Neue',sans-serif] text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-wide text-[#e8e3d9]">
                  Selected
                </h1>
                <h1 className="font-['Bebas_Neue',sans-serif] text-[clamp(3.5rem,10vw,7rem)] leading-none tracking-wide"
                    style={{ WebkitTextStroke: '1.5px #e8b86d', color: 'transparent' }}>
                  Work
                </h1>
              </div>

              <div className="text-right">
                <div className="text-[10px] tracking-[0.3em] uppercase text-[#3a3530] font-['DM_Mono',monospace] mb-2">
                  Total projects
                </div>
                <div className="font-['Bebas_Neue',sans-serif] text-5xl text-[#e8b86d]">
                  {ALL_PROJECTS.length}
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-[#6b6560] max-w-lg leading-relaxed font-['DM_Mono',monospace]">
              A curated collection of products, tools, and experiments — built with care across full-stack, design systems, and interactive interfaces.
            </p>
          </div>
        </div>


        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {visible.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                layout={i === 0 && activeFilter === 'All' ? 'large' : 'normal'}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-32 text-center">
              <p className="text-[#3a3530] font-['DM_Mono',monospace] text-sm tracking-[0.2em] uppercase">
                No projects in this category
              </p>
            </div>
          )}

          {filtered.length > 6 && (
            <div className="mt-14 flex justify-center">
              <button
                onClick={() => setShowAll(p => !p)}
                className="px-10 py-4 border border-[#2a2520] hover:border-[#e8b86d] hover:text-[#e8b86d]
                  text-[10px] tracking-[0.3em] uppercase font-['DM_Mono',monospace] transition-all duration-300"
              >
                {showAll ? '← Show Less' : `Load More (${filtered.length - 6} remaining)`}
              </button>
            </div>
          )}
        </div>

        <div className="border-t border-[#1e1c19] py-16">
                    <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-['DM_Serif_Display',serif] text-2xl italic text-[#e8e3d9]">
              Have a project in mind?
            </p>
            
            <a
              href="mailto:avinash.avi7a@gmail.com"
              className="px-8 py-3 bg-[#e8b86d] text-[#0f0e0c] text-[10px] tracking-[0.3em] uppercase
                font-['DM_Mono',monospace] hover:bg-[#f0c97a] transition-colors duration-200 inline-flex items-center gap-3"
            >
              Let's Talk →
            </a>
          </div>
        </div>

      </div>
    </>
  );
}