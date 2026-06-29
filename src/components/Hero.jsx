import { useEffect, useState, useRef } from 'react';
import { personal, stats } from '../data/portfolio';

function useTypewriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    const timer = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, ++i)); }
      else clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return displayed;
}

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const isFloat = target % 1 !== 0;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(isFloat ? parseFloat(current.toFixed(2)) : Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatItem({ st, i, started }) {
  const numStr = st.num.replace('+', '');
  const hasPlus = st.num.includes('+');
  const counted = useCountUp(parseFloat(numStr), 2000, started);
  return (
    <div style={s.stat}>
      <div style={s.statIdx}>0{i + 1} /</div>
      <div style={s.statNum}>{counted}{hasPlus ? '+' : ''}</div>
      <div style={s.statLabel}>{st.label}</div>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter('AI engineer.', 80);
  const [statsStarted, setStatsStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="hero" style={s.hero}>
        <div style={s.boot}>
          <span>[ SYSTEM.BOOT ]</span>
          <span style={{ color: 'var(--green)' }}>● ONLINE</span>
        </div>
        <div style={s.subtitle}>{personal.degree.toUpperCase()} · Researcher · Developer · CGPA {personal.cgpa}</div>
        <h1 style={s.name}>
          {personal.firstName}<br />
          <span style={s.nameLast}>{personal.lastName}.</span>
        </h1>
        <div style={s.role}>{typed}<span style={s.cursor}>_</span></div>
        <p style={s.desc}>{personal.tagline}</p>
        <div style={s.btns}>
          <a href="#contact" style={s.btnPrimary}>GET IN TOUCH ↗</a>
          <a href={personal.github} target="_blank" rel="noreferrer" style={s.btnGhost}>GITHUB</a>
          <a href={personal.linkedin} target="_blank" rel="noreferrer" style={s.btnGhost}>LINKEDIN</a>
          <a href={personal.instagram} target="_blank" rel="noreferrer" style={s.btnGhost}>INSTAGRAM</a>
        </div>
        <div style={s.tags}>
          <div style={s.tag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            {personal.location.toUpperCase()}
          </div>

          <div style={s.tag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 11 12 14 22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            ICCCNT 2025 PUBLISHED
          </div>

          <div style={s.tag}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            3 RESEARCH PAPERS
          </div>
        </div>
      </section>

      <div ref={statsRef} style={s.statsBar}>
        {stats.map((st, i) => <StatItem key={i} st={st} i={i} started={statsStarted} />)}
      </div>
    </>
  );
}

const s = {
  hero: {
    minHeight: '100vh',
    display: 'flex', flexDirection: 'column', justifyContent: 'center',
    padding: '80px 6rem 3rem',
    maxWidth: '100%',
    position: 'relative', zIndex: 1,
  },
  boot: {
    fontFamily: 'var(--mono)', fontSize: '.75rem',
    color: 'var(--muted)', letterSpacing: '.1em',
    marginBottom: '2rem', display: 'flex', justifyContent: 'space-between',
    maxWidth: 1280, width: '100%',
  },
  subtitle: {
    fontFamily: 'var(--mono)', fontSize: '.82rem',
    color: 'var(--muted)', letterSpacing: '.1em', marginBottom: '1rem',
  },
  name: {
    fontFamily: 'var(--sans)', fontSize: 'clamp(4rem,8vw,7.5rem)',
    fontWeight: 700, lineHeight: .92, letterSpacing: '-.02em', marginBottom: '.5rem',
  },
  nameLast: { color: 'var(--accent)', fontStyle: 'italic' },
  role: { fontFamily: 'var(--mono)', fontSize: '1.1rem', color: 'var(--accent)', margin: '1.5rem 0' },
  cursor: { animation: 'blink .8s step-end infinite' },
  desc: {
    fontSize: '1.1rem', color: '#aaa',
    maxWidth: 700, marginBottom: '2.5rem', lineHeight: 1.7,
  },
  btns: { display: 'flex', gap: '.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' },
  btnPrimary: {
    background: 'var(--accent)', color: '#000',
    fontFamily: 'var(--mono)', fontSize: '.8rem', fontWeight: 700,
    padding: '.75rem 1.5rem', textDecoration: 'none', letterSpacing: '.08em',
  },
  btnGhost: {
    border: '1px solid var(--border)', color: 'var(--text)',
    fontFamily: 'var(--mono)', fontSize: '.8rem',
    padding: '.75rem 1.5rem', textDecoration: 'none', letterSpacing: '.08em',
  },
  tags: { display: 'flex', gap: '.8rem', flexWrap: 'wrap' },
  tag: {
    fontFamily: 'var(--mono)', fontSize: '.78rem',
    color: 'var(--muted)', padding: '.65rem 1.4rem',
    border: '1px solid var(--border)',
    display: 'flex', alignItems: 'center', gap: '.5rem', letterSpacing: '.05em',
  },
  statsBar: {
    display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
    borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
    position: 'relative', zIndex: 1,
  },
  stat: { padding: '2.5rem 3rem', borderRight: '1px solid var(--border)' },
  statIdx: { fontFamily: 'var(--mono)', fontSize: '.65rem', color: 'var(--border)', marginBottom: '.5rem' },
  statNum: { fontFamily: 'var(--sans)', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1, marginBottom: '.4rem' },
  statLabel: { fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--muted)', letterSpacing: '.12em' },
};