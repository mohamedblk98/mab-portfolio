'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useDesignSystem } from './DesignSystemContext';

// French page titles for transition headers
const getFrenchPageTitle = (path: string) => {
  if (path === '/') return 'ACCUEIL // STUDIO DE CRÉATION';
  if (path.startsWith('/portfolio')) return 'PORTFOLIO // DESIGN GRAPHIQUE & PACKAGING';
  if (path.startsWith('/about') || path.startsWith('/bio')) return 'À PROPOS // PHILOSOPHIE & BIO';
  if (path.startsWith('/contact')) return 'CONTACT // DISCUTONS DE VOS PROJETS';
  return 'STUDIO DE DESIGN // MOHAMED BELKACEMI';
};

// Inspiring design/art quotes for the elegant editorial transitions
const EDITORIAL_QUOTES = [
  "« Le design n'est pas seulement ce qu'il paraît, c'est comment ça fonctionne. »",
  "« La simplicité est la sophistication suprême. »",
  "« Créer, c'est vivre deux fois. »",
  "« Les détails ne sont pas les détails. Ils font le design. »",
  "« Le beau est aussi utile que l'utile. »"
];

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { archetype } = useDesignSystem();
  
  // State to handle the transition overlay duration
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [randomQuote, setRandomQuote] = useState('');

  useEffect(() => {
    // Defer state updates to prevent React cascade rendering warnings
    const frame = requestAnimationFrame(() => {
      setIsTransitioning(true);
      const randomIndex = Math.floor(Math.random() * EDITORIAL_QUOTES.length);
      setRandomQuote(EDITORIAL_QUOTES[randomIndex]);
    });

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700); // 700ms provides optimal time for rich overlays to play out beautifully

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname]);

  // Define page content motion settings matching current active archetype
  const getContentMotionProps = () => {
    switch (archetype) {
      case 'swiss':
        return {
          initial: { opacity: 0, y: 40 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -30 },
          transition: {
            type: 'spring',
            stiffness: 140,
            damping: 20,
            mass: 0.8,
          },
        };
      case 'editorial':
        return {
          initial: { opacity: 0, y: 20, scale: 0.99 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -15, scale: 0.99 },
          transition: {
            duration: 0.7,
            ease: [0.25, 1, 0.5, 1], // Silk deceleration curve
          },
        };
      case 'brutalist':
        return {
          initial: { opacity: 0, x: -20, scale: 0.99 },
          animate: { opacity: 1, x: 0, scale: 1 },
          exit: { opacity: 0, x: 20, scale: 0.99 },
          transition: {
            duration: 0.25,
            ease: 'linear', // Solid structural change
          },
        };
      case 'cosmic':
      default:
        return {
          initial: { opacity: 0, y: 30, scale: 0.96, filter: 'blur(10px)' },
          animate: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
          exit: { opacity: 0, y: -30, scale: 0.96, filter: 'blur(10px)' },
          transition: {
            duration: 0.75,
            ease: [0.16, 1, 0.3, 1], // Ethereal portal curve
          },
        };
    }
  };

  const motionProps = getContentMotionProps();

  return (
    <div className="relative w-full flex-grow flex flex-col">
      {/* 1. TOP PROGRESS STATUS INDICATOR */}
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key={`top-bar-${pathname}`}
            initial={{ width: '0%', opacity: 1 }}
            animate={{ width: '100%' }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed top-0 left-0 h-1.5 z-50 pointer-events-none shadow-md"
            style={{
              background: archetype === 'cosmic' 
                ? 'linear-gradient(to right, #FF5A1F, #EFFF00, #3B82F6)'
                : archetype === 'swiss'
                ? '#3B82F6'
                : archetype === 'editorial'
                ? '#CDA26B'
                : '#FAEA19'
            }}
            transition={{
              duration: 0.6,
              ease: archetype === 'brutalist' ? 'linear' : 'easeInOut',
            }}
          />
        )}
      </AnimatePresence>

      {/* 2. COSMIC ARCHETYPE TRANSITION (Multi-layered glass gradient slide with stars & status metrics) */}
      <AnimatePresence>
        {isTransitioning && archetype === 'cosmic' && (
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Primary Dark Cosmic Shroud */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: ['100%', '0%', '-100%'] }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-[#03010B] z-40"
            />
            
            {/* Secondary Neon Orange Shimmer Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: ['100%', '0%', '-100%'] }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0 bg-gradient-to-r from-[#FF5A1F]/30 via-[#EFFF00]/10 to-transparent backdrop-blur-md z-30"
            />

            {/* Glowing Monospace Transition Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.6, times: [0, 0.2, 0.8, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center z-50 font-mono text-center px-4"
            >
              <div className="p-8 bg-black/40 border border-white/10 backdrop-blur-xl rounded-2xl max-w-xl shadow-2xl relative overflow-hidden group">
                {/* Luminous cyber neon elements */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5A1F] via-[#EFFF00] to-[#3B82F6] animate-pulse" />
                <div className="flex items-center justify-center gap-2 text-xs text-[#FF5A1F] mb-3 font-semibold tracking-[0.25em]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-ping" />
                  WARP ENGAGED // V4
                </div>
                <h3 className="text-white text-lg tracking-[0.15em] font-medium uppercase mb-4">
                  {getFrenchPageTitle(pathname)}
                </h3>
                <div className="text-[10px] text-white/40 flex justify-center gap-6 mt-2 border-t border-white/5 pt-4">
                  <span>COORD: 48.8566° N</span>
                  <span>SYSTEM: OK</span>
                  <span>RENDER: COSMIC</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 3. BRUTALIST ARCHETYPE TRANSITION (Bold Heavy staggered industrial shutters) */}
      <AnimatePresence>
        {isTransitioning && archetype === 'brutalist' && (
          <div className="fixed inset-0 z-50 pointer-events-none flex">
            {/* 8 heavy vertical block stripes sliding with progressive delays */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`brut-strip-${i}`}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: [0, 1, 1, 0] }}
                style={{ originY: i % 2 === 0 ? 0 : 1 }}
                transition={{ 
                  duration: 0.6, 
                  times: [0, 0.4, 0.6, 1],
                  delay: i * 0.03, 
                  ease: 'easeInOut' 
                }}
                className={`flex-grow h-full ${i % 2 === 0 ? 'bg-[#050505]' : 'bg-[#FAEA19]'}`}
              />
            ))}

            {/* Huge aggressive typography overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: [0, 1, 1, 0], y: [30, 0, 0, -20] }}
              transition={{ duration: 0.6, times: [0, 0.2, 0.8, 1], ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center"
            >
              <div className="bg-[#050505] border-4 border-white text-[#FAEA19] font-mono p-6 uppercase font-black text-2xl tracking-tighter shadow-[8px_8px_0px_#FAEA19]">
                LOADING_PACK_ {pathname.toUpperCase() || 'INDEX'}
                <span className="animate-pulse">_</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. SWISS ARCHETYPE TRANSITION (Precision structural grid line wipe) */}
      <AnimatePresence>
        {isTransitioning && archetype === 'swiss' && (
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-white/5">
            {/* Grid-aligned geometric slide panels */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              style={{ originX: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[#0F172A] z-40 border-l border-r border-[#3B82F6]/30"
            />
            
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: [0, 1, 1, 0] }}
              style={{ originX: 1 }}
              transition={{ duration: 0.65, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-[#3B82F6]/10 z-30"
            />

            {/* Elegant Minimal blueprint metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{ duration: 0.6, times: [0, 0.2, 0.8, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center z-50 font-mono"
            >
              <div className="text-white border-b border-white/20 pb-4 mb-4 text-xs tracking-[0.3em] font-medium uppercase">
                {getFrenchPageTitle(pathname)}
              </div>
              <div className="flex gap-12 text-[10px] text-white/50">
                <span>GRID: SWISS v2.5</span>
                <span>STATUS: STABLE</span>
                <span>RATIO: LIQUID</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 5. EDITORIAL ARCHETYPE TRANSITION (Luxurious silk Alabaster drape with poetic typography) */}
      <AnimatePresence>
        {isTransitioning && archetype === 'editorial' && (
          <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
            {/* Luxurious Silk Curtain sliding up gracefully */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: ['100%', '0%', '-100%'] }}
              transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              className="absolute inset-0 bg-[#F6F3EE] shadow-2xl z-40"
            />

            {/* Poetic Quote / Editorial Title */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: [0, 1, 1, 0], y: [15, 0, 0, -10] }}
              transition={{ duration: 0.6, times: [0, 0.2, 0.8, 1], ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center z-50 px-8 text-center"
            >
              <p className="font-playfair text-xl md:text-2xl text-[#151210] italic max-w-2xl leading-relaxed mb-6">
                {randomQuote}
              </p>
              <div className="w-12 h-[1px] bg-[#CDA26B] mb-4" />
              <p className="font-sans text-[10px] tracking-[0.25em] text-[#967850] uppercase">
                {getFrenchPageTitle(pathname)}
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CORE PAGE CONTENT WRAPPER WITH ARCHETYPE ANIMATION */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={pathname}
          {...(motionProps as any)}
          className="w-full flex-grow flex flex-col"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
