'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, PenTool, Layout, Grid, Compass, Sparkles, Star, Quote } from 'lucide-react';
import { useDesignSystem } from '@/components/DesignSystemContext';
import { useLanguage } from '@/components/LanguageContext';

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 80, damping: 20 } },
};

const STAGGER_CHILDREN = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function Home() {
  const { showGridGuides, setShowGridGuides, archetype } = useDesignSystem();
  const { t, isRTL, language } = useLanguage();

  return (
    <div className="flex flex-col gap-32 md:gap-48">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col justify-center relative pt-12 md:pt-20">
        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-modern-blue/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-soft-purple/10 rounded-full blur-[100px] -z-10 animate-pulse pointer-events-none" />

        <motion.div
          variants={STAGGER_CHILDREN}
          initial="hidden"
          animate="show"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Hero Left Column */}
          <div className="space-y-8 lg:col-span-7 z-10">
            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS} 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-semibold text-neutral-gray backdrop-blur-md"
            >
              <Sparkles size={14} className="text-modern-blue animate-spin-slow" />
              <span>{t('hero.badge')}</span>
            </motion.div>
            
            <motion.h1 
              variants={FADE_UP_ANIMATION_VARIANTS} 
              className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-[1.05] font-heading font-extrabold text-soft-white tracking-tight"
            >
              {t('hero.title_welcome')} <br />
              <span className="text-gradient">{t('hero.title_portfolio')}</span>
            </motion.h1>
            
            <motion.p 
              variants={FADE_UP_ANIMATION_VARIANTS} 
              className="text-lg md:text-xl text-neutral-gray max-w-2xl leading-relaxed font-sans flex flex-col gap-3"
            >
              <span className="font-medium text-white/95">
                {t('hero.desc_p1')}
              </span>
              <span className="text-sm md:text-base opacity-90">
                {t('hero.desc_p2')}
              </span>
              <span className="text-sm md:text-base opacity-75 italic">
                {t('hero.desc_p3')}
              </span>
            </motion.p>
            
            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS} 
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link 
                href="/portfolio" 
                className="px-8 py-4 rounded-full bg-soft-white text-navy font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-white/5 cursor-pointer text-sm"
              >
                {t('hero.cta_explore')}
              </Link>
              <Link 
                href="/contact" 
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white font-semibold group flex items-center gap-2 cursor-pointer transform hover:-translate-y-1 text-sm"
              >
                {t('hero.cta_hire')} <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Interactive Blueprint Grid Controller */}
            <motion.div 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="pt-8 border-t border-white/5 max-w-lg flex items-center justify-between gap-6"
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-modern-blue/15 text-modern-blue border border-modern-blue/20">
                  <Grid size={20} />
                </div>
                <div>
                  <span className="block text-xs md:text-sm font-bold text-white">{t('hero.grid_title')}</span>
                  <span className="text-[10px] md:text-xs text-neutral-gray block">{t('hero.grid_desc')}</span>
                </div>
              </div>
              <button
                onClick={() => setShowGridGuides(!showGridGuides)}
                className={`px-5 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                  showGridGuides 
                    ? 'bg-modern-blue text-white border-modern-blue shadow-lg shadow-modern-blue/25' 
                    : 'bg-white/5 text-neutral-gray border-white/10 hover:text-white hover:bg-white/10'
                }`}
              >
                {showGridGuides ? t('hero.grid_active') : t('hero.grid_inactive')}
              </button>
            </motion.div>
          </div>
          
          {/* Hero Right Column (Portrait Mask) */}
          <motion.div 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            className="lg:col-span-5 relative h-[500px] md:h-[650px] w-full rounded-[2.5rem] overflow-hidden group glass-card p-4 transition-all duration-700 hover:rotate-1"
          >
            {/* Visual Grid Accents */}
            <div className="absolute top-6 left-6 font-mono text-[9px] text-modern-blue/40 z-20">01 / SEC_HERO</div>
            <div className="absolute bottom-6 right-6 font-mono text-[9px] text-modern-blue/40 z-20">[50.45, 30.12]</div>
            
            <div className="absolute inset-0 bg-gradient-to-br from-modern-blue/15 to-soft-purple/15 mix-blend-overlay z-10 transition-opacity duration-700 group-hover:opacity-0" />
            <div className="absolute -inset-4 bg-gradient-to-br from-modern-blue/20 to-soft-purple/20 blur-3xl opacity-50 z-0" />
            
            <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden">
              <Image
                src="/moi_profil.png"
                alt="Direction Artistique Portrait"
                fill
                priority
                className="object-cover z-0 scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Infinite Luxury Marquee */}
      <div className="relative w-full overflow-hidden border-y border-white/5 py-8 bg-white/[0.01] backdrop-blur-md -mx-4 md:-mx-8">
        <div className="animate-marquee gap-16 whitespace-nowrap font-heading text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest text-neutral-gray/15 select-none">
          <span>{t('marquee.branding')}</span>
          <span className="text-modern-blue">•</span>
          <span>{t('marquee.minimalism')}</span>
          <span className="text-soft-purple">•</span>
          <span>{t('marquee.typography')}</span>
          <span className="text-modern-blue">•</span>
          <span>{t('marquee.interaction')}</span>
          <span className="text-soft-purple">•</span>
          <span>{t('marquee.purism')}</span>
          <span className="text-modern-blue">•</span>
          <span>{t('marquee.branding')}</span>
          <span className="text-modern-blue">•</span>
          <span>{t('marquee.minimalism')}</span>
          <span className="text-soft-purple">•</span>
          <span>{t('marquee.typography')}</span>
        </div>
      </div>

      {/* About Preview Section */}
      <motion.section 
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CHILDREN}
        className="grid lg:grid-cols-12 gap-16 items-center"
      >
        <motion.div 
          variants={FADE_UP_ANIMATION_VARIANTS} 
          className="lg:col-span-5 relative aspect-[4/5] lg:aspect-auto lg:h-[600px] rounded-[2.5rem] overflow-hidden glass-card p-4 hover:-rotate-1 transition-all duration-700"
        >
          <div className="absolute top-6 left-6 font-mono text-[9px] text-soft-purple/40 z-20">02 / SEC_ABOUT</div>
          <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-navy">
            <Image
              src="/moi.png"
              alt="Atelier Créatif"
              fill
              className="object-cover opacity-75 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <div className="lg:col-span-7 space-y-8">
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="text-sm font-mono text-modern-blue tracking-widest uppercase">
            {t('phil.badge')}
          </motion.div>
          <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl xl:text-6xl font-heading font-extrabold leading-[1.1] text-white">
            {t('phil.title')}
          </motion.h2>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-neutral-gray text-lg md:text-xl leading-relaxed">
            {t('phil.desc')}
          </motion.p>
          
          <motion.div variants={STAGGER_CHILDREN} className="grid sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
            <div className="space-y-3">
              <div className="text-modern-blue"><PenTool size={32} /></div>
              <h3 className="text-xl font-heading font-bold text-white">{t('phil.service1_title')}</h3>
              <p className="text-sm text-neutral-gray leading-relaxed">{t('phil.service1_desc')}</p>
            </div>
            <div className="space-y-3">
              <div className="text-soft-purple"><Layout size={32} /></div>
              <h3 className="text-xl font-heading font-bold text-white">{t('phil.service2_title')}</h3>
              <p className="text-sm text-neutral-gray leading-relaxed">{t('phil.service2_desc')}</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Toolkit Section */}
      <motion.section 
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CHILDREN}
        className="py-16"
      >
        <div className="text-center mb-20 space-y-4">
          <span className="text-sm font-mono text-soft-purple tracking-widest uppercase">{t('tool.badge')}</span>
          <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl xl:text-6xl font-heading font-extrabold">{t('tool.title')}</motion.h2>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-neutral-gray max-w-xl mx-auto">{t('tool.desc')}</motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[
            { name: language === 'ar' ? 'أدوبي إليستريتور (الشعارات والرسوم المتجهة)' : language === 'en' ? 'Adobe Illustrator (Identities & Vectors)' : 'Adobe Illustrator (Identités & Vecteurs)', level: 98 },
            { name: language === 'ar' ? 'فيجما (أنظمة تصاميم واجهات المستخدم)' : language === 'en' ? 'Figma (UI/UX Design Systems)' : 'Figma (Systèmes de Design UI/UX)', level: 95 },
            { name: language === 'ar' ? 'أدوبي فوتوشوب (معالجة وتحرير الصور)' : language === 'en' ? 'Adobe Photoshop (Imaging & Retouching)' : 'Adobe Photoshop (Imagerie & Retouche)', level: 92 },
            { name: language === 'ar' ? 'أدوبي أفتر إفكتس (الموشن جرافيك والمؤثرات)' : language === 'en' ? 'Adobe After Effects (Motion Design & Rhythm)' : 'Adobe After Effects (Motion Design & Rythme)', level: 82 },
            { name: language === 'ar' ? 'أدوبي إن ديزاين (التنسيق المكتبي والمطبوعات)' : language === 'en' ? 'Adobe InDesign (Editorial & Grids)' : 'Adobe InDesign (Éditorial & Grilles)', level: 88 },
            { name: language === 'ar' ? 'بلندر ثلاثي الأبعاد (رندرة ومحاكاة العبوات)' : language === 'en' ? 'Blender 3D (Packaging Mockups)' : 'Blender 3D (Simulations de Packaging)', level: 78 },
          ].map((skill, i) => (
            <motion.div key={skill.name} variants={FADE_UP_ANIMATION_VARIANTS} className="space-y-4">
              <div className="flex justify-between text-sm font-semibold">
                <span className="text-soft-white">{skill.name}</span>
                <span className="text-modern-blue font-mono">{skill.level}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[2px]">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-modern-blue to-soft-purple rounded-full relative"
                >
                  <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite]" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Works Section */}
      <motion.section 
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CHILDREN}
        className="py-16"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="space-y-4 max-w-3xl">
            <span className="text-sm font-mono text-modern-blue tracking-widest uppercase">{t('works.badge')}</span>
            <motion.h2 variants={FADE_UP_ANIMATION_VARIANTS} className="text-4xl md:text-5xl xl:text-6xl font-heading font-extrabold">{t('works.title')}</motion.h2>
            <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-neutral-gray text-lg md:text-xl">{t('works.desc')}</motion.p>
          </div>
          <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2 text-white hover:text-modern-blue transition-colors font-bold pb-2 border-b-2 border-white/10 hover:border-modern-blue text-sm cursor-pointer"
            >
              {t('works.cta_all')} <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {[
            {
              id: 1,
              title: language === 'ar' ? 'عطر شات' : 'Parfum Chath',
              category: language === 'ar' ? 'التعبئة والتغليف والإدارة الفنية' : language === 'en' ? 'Packaging & Art Direction' : 'Packaging & Direction Artistique',
              image: "/parfumchath.jpg",
            },
            {
              id: 2,
              title: language === 'ar' ? 'ميدينيلا' : 'Medenila',
              category: language === 'ar' ? 'التعبئة والتغليف والهوية البصرية' : language === 'en' ? 'Packaging & Branding' : 'Packaging & Branding',
              image: "/médinila.jpg",
            },
            {
              id: 3,
              title: language === 'ar' ? 'مفهوم قائمة الطعام' : 'Menu Concept',
              category: language === 'ar' ? 'المطبوعات الورقية والتصميم التحريري' : language === 'en' ? 'Print Media & Editorial Design' : 'Supports Imprimés & Design Éditorial',
              image: "/menu_2.jpg",
            },
            {
              id: 7,
              title: language === 'ar' ? 'تعبئة زيت المحركات الفاخر' : "Packaging d'Huile Moteur Premium",
              category: language === 'ar' ? 'التعبئة والتغليف والأداء' : language === 'en' ? 'Packaging & Performance' : 'Packaging & Performance',
              image: "/huile_de_moteur.png",
            }
          ].map((project) => (
            <motion.div 
              key={project.id} 
              variants={FADE_UP_ANIMATION_VARIANTS} 
              className="group block relative rounded-[2.5rem] overflow-hidden glass-card p-2 aspect-[4/5] hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-navy">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-xs font-bold text-modern-blue uppercase tracking-widest mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-heading font-extrabold text-white mb-3">{project.title}</h3>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm text-soft-white hover:text-modern-blue transition-colors font-semibold">
                    {t('works.case_study')} <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials (Awwwards design) */}
      <motion.section 
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CHILDREN}
        className="py-16 relative"
      >
        <div className="text-center mb-20 space-y-4">
          <span className="text-sm font-mono text-soft-purple tracking-widest uppercase">{t('test.badge')}</span>
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold">{t('test.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote: t('test.quote1', "Travail professionnel, sérieux, Bonne continuation."),
              author: "Sarah Bhd",
              role: t('test.role_client')
            },
            {
              quote: t('test.quote2', "Merci pour votre professionnalisme ! Toujours satisfaite de votre service."),
              author: "Ba Sma",
              role: t('test.role_client')
            },
            {
              quote: t('test.quote3', "Travail professionnel, sérieux, Bonne continuation."),
              author: "Meriem Kessoum",
              role: t('test.role_client')
            },
            {
              quote: t('test.quote4', "Une personne très sérieuse, très honnête, il m'a fait cette conception et j'étais très satisfaite. Un vrai professionnel à l'écoute."),
              author: "Hende Mesbah",
              role: t('test.role_client')
            }
          ].map((test, index) => (
            <motion.div 
              key={index} 
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="glass-card p-8 md:p-12 relative flex flex-col justify-between hover:bg-white/[0.04] transition-all"
            >
              <Quote className="text-modern-blue/20 absolute top-8 left-8" size={48} />
              <p className="text-neutral-gray text-lg italic leading-relaxed relative z-10 pt-8 mb-8">
                &ldquo;{test.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white/10">
                  <Image 
                    src={`https://picsum.photos/seed/user${index + 1}/100/100`} 
                    alt={test.author} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{test.author}</h4>
                  <span className="text-xs text-neutral-gray">{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Metrics / Statistics */}
      <motion.section 
        initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        variants={STAGGER_CHILDREN}
        className="py-16 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
      >
        {[
          { label: t('stat.expertise'), value: '8+' },
          { label: t('stat.projects'), value: '150+' },
          { label: t('stat.satisfied'), value: '98%' },
          { label: t('stat.awards'), value: '12' },
        ].map((stat, i) => (
          <motion.div 
            key={i} 
            variants={FADE_UP_ANIMATION_VARIANTS} 
            className="text-center glass-card p-8 md:p-12 hover:-translate-y-1 transition-all"
          >
            <h3 className="text-4xl md:text-6xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-3 font-heading">
              {stat.value}
            </h3>
            <p className="text-neutral-gray text-xs md:text-sm uppercase tracking-widest font-bold font-sans">{stat.label}</p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}
