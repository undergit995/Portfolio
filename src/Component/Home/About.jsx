import React, { useEffect, useRef, useState } from 'react'


export default function About() {
  const [activeSection, setActiveSection] = useState('home');
  const sections = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sections.current).forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    sections.current[id]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };
  return (
    <div>
        <div>
          
        </div>
        <div>
          <section
        id="skills"
        ref={(el) => (sections.current.skills = el)}
        className="py-32 bg-neutral-900/50 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold tracking-tight text-center mb-16">Skills &amp; Technologies</h2>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              { name: "React.js", level: 95 },
              { name: "JavaScript", level: 92 },
              { name: "Tailwind CSS", level: 98 },
              { name: "Node.js", level: 85 },
              { name: "MongoDB ", level: 78 },
              { name: "Express.js", level: 82 },
            ].map((skill, index) => (
              <div key={index} className="group border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-colors duration-300">
                <div className="flex justify-between mb-3 text-sm">
                  <span className="font-medium">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
        </div>
    </div>
  )
}
