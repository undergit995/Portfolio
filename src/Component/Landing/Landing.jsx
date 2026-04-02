
import React, { useEffect, useRef, useState } from 'react';

export default function Landing() {
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
    <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden font-sans">

      
      <section
        id="home"
        ref={(el) => (sections.current.home = el)}
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#4f46e510_0%,transparent_70%)]" />

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs uppercase tracking-[3px]">Open to new opportunities</span>
          </div>

          <h1 className="text-7xl md:text-[5.5rem] font-bold tracking-tighter leading-none mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">B Venkata Avinash</span>
          </h1>

          <p className="text-2xl md:text-3xl text-neutral-400 mb-10 max-w-2xl mx-auto">
            Full-Stack Developer &amp; UI Engineer building immersive digital experiences.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 border border-white/30 hover:border-white/60 rounded-2xl transition-all backdrop-blur-md text-lg"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs tracking-widest text-neutral-400">
          SCROLL TO EXPLORE
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </section>

      <section
        id="about"
        ref={(el) => (sections.current.about = el)}
        className="py-32 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold tracking-tight mb-10">Let me introduce myself</h2>
              <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                <p>
                  I'm a passionate MERN stack developer with over 3 years of experience creating beautiful,
                  high-performance web applications.
                </p>
                <p>
                  I specialize in modern JavaScript ecosystems, especially React, Next.js, and Tailwind CSS.
                  I love turning ideas into pixel-perfect, interactive experiences.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-mono font-bold text-cyan-400">10+</div>
                  <div className="text-sm uppercase tracking-widest mt-1 text-neutral-500">Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-mono font-bold text-purple-400">15</div>
                  <div className="text-sm uppercase tracking-widest mt-1 text-neutral-500">Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-mono font-bold text-pink-400">∞</div>
                  <div className="text-sm uppercase tracking-widest mt-1 text-neutral-500">Coffees</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-neutral-900 p-3">
                <img
                  src="https://img.freepik.com/free-vector/businessman-entrepreneur-working-office-desk_3446-678.jpg?t=st=1717649200~exp=1717652800~hmac=11e25d5949af2d68f259a20f0adfd9fc427c4f931c2718324aa07eb34a800078&w=740"
                  alt="B Venkata Avinash"
                  className="w-full h-full object-cover rounded-2xl hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        ref={(el) => (sections.current.contact = el)}
        className="py-32 border-t border-white/10 bg-neutral-950"
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Let's create something amazing together
          </h2>
          <p className="text-xl text-neutral-400 mb-14">
            I'm currently available for freelance projects and full-time opportunities.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { name: 'Twitter', link: 'https://x.com/Avi7aAvinash' },
              { name: 'LinkedIn', link: 'https://www.linkedin.com/in/avinash-b-v-9752501a6' },
              { name: 'GitHub', link: 'https://github.com/undergit995' },              
            ].map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-6 border border-white/10 hover:border-white/40 rounded-3xl text-lg transition-all hover:-translate-y-1 flex items-center gap-3"
              >
                {social.name}
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">↗</span>
              </a>
            ))}
          </div>

          <p className="mt-24 text-neutral-500 text-sm">
            © 2026 B Venkata Avinash 
          </p>
        </div>
      </section>
    </div>
  );
}


