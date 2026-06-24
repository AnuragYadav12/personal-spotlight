import { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: '01. ABOUT' },
  { id: 'skills', label: '02. SKILLS' },
  { id: 'experience', label: '03. EXPERIENCE' },
  { id: 'research', label: '04. RESEARCH' },
  { id: 'projects', label: '05. PROJECTS' },
  { id: 'education', label: '06. EDUCATION' },
  { id: 'writing', label: '07. WRITING' },
  { id: 'contact', label: '08. CONTACT' },
];

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { threshold: 0.3 }
    );
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav style={styles.nav}>
      <a href="#hero" style={styles.logo}>
        $ <span style={{ color: 'var(--accent)' }}>ANURAG.YADAV</span>_
      </a>

      <ul style={styles.links}>
        {sections.map(s => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              style={{ ...styles.link, color: active === s.id ? 'var(--text)' : 'var(--muted)' }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={styles.visitors}>
        <span style={styles.dot} /> VISITORS: 0089
      </div>

      <a href="/Anurag_Yadav_CV.pdf" download style={styles.resumeBtn}>
        ↓ RESUME.PDF
      </a>

      {/* Mobile hamburger */}
      <button style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
        {menuOpen ? '✕' : '☰'}
      </button>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {sections.map(s => (
            <a
              key={s.id}
              href={`#${s.id}`}
              style={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {s.label}
            </a>
          ))}
          <a href="/Anurag_Yadav_CV.pdf" download style={{ ...styles.mobileLink, color: 'var(--accent)' }}>
            ↓ RESUME.PDF
          </a>
        </div>
      )}
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0,
    zIndex: 100,
    display: 'flex', alignItems: 'center',
    padding: '0 2rem', height: '56px',
    background: 'rgba(13,13,13,0.95)',
    backdropFilter: 'blur(8px)',
    borderBottom: '1px solid var(--border)',
  },
  logo: {
    fontFamily: 'var(--mono)', fontSize: '.82rem',
    color: 'var(--text)', textDecoration: 'none',
    marginRight: 'auto', letterSpacing: '.05em',
  },
  links: {
    display: 'flex', gap: 0, listStyle: 'none',
    '@media(max-width:900px)': { display: 'none' },
  },
  link: {
    fontFamily: 'var(--mono)', fontSize: '.65rem',
    textDecoration: 'none', padding: '0 .75rem',
    letterSpacing: '.08em', transition: 'color .2s',
  },
  visitors: {
    fontFamily: 'var(--mono)', fontSize: '.62rem',
    color: 'var(--muted)', padding: '0 1rem',
    borderLeft: '1px solid var(--border)',
    display: 'flex', alignItems: 'center', gap: '.3rem',
  },
  dot: {
    display: 'inline-block', width: 6, height: 6,
    background: 'var(--green)', borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
  resumeBtn: {
    fontFamily: 'var(--mono)', fontSize: '.65rem',
    color: 'var(--accent)', border: '1px solid var(--accent)',
    padding: '.3rem .75rem', textDecoration: 'none',
    letterSpacing: '.08em', marginLeft: '1rem',
    transition: 'all .2s',
  },
  hamburger: {
    display: 'none', background: 'none', border: 'none',
    color: 'var(--text)', fontSize: '1.2rem', cursor: 'pointer',
    marginLeft: '1rem',
    '@media(max-width:900px)': { display: 'block' },
  },
  mobileMenu: {
    position: 'fixed', top: '56px', left: 0, right: 0,
    background: 'var(--bg)', borderBottom: '1px solid var(--border)',
    display: 'flex', flexDirection: 'column', zIndex: 99,
  },
  mobileLink: {
    fontFamily: 'var(--mono)', fontSize: '.75rem',
    color: 'var(--muted)', padding: '1rem 2rem',
    textDecoration: 'none', borderBottom: '1px solid var(--border)',
    letterSpacing: '.08em',
  },
};
