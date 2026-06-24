import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" style={s.section}>
      <div style={s.wrap}>
        <SectionHeader num="05" eyebrow="> LS ./PROJECTS" title="Things I've" italic="built." />
        <div style={s.grid}>
          {projects.map((p, i) => (
            <div
              key={i}
              style={{ ...s.card, background: hovered === i ? 'var(--surface)' : 'var(--bg)', cursor: 'pointer' }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => p.github && window.open(p.github, '_blank')}
            >
              <div style={{ ...s.thumb, background: p.bg, position: 'relative' }}>
                {p.featured && <span style={s.featured}>FEATURED</span>}
                <span style={{ fontSize: '2.5rem' }}>{p.emoji}</span>
                <span style={s.views}>views: 000</span>
              </div>
              <div style={s.body}>
                <div style={s.idRow}>
                  <span style={s.icon}>{p.icon}</span>
                  <span style={s.projId}>{p.id}</span>
                </div>
                <div style={s.name}>{p.name}</div>
                <div style={s.desc}>{p.desc}</div>
                <div style={s.tagRow}>
                  {p.tags.map((t, j) => <span key={j} style={s.tag}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { position: 'relative', zIndex: 1 },
  wrap: { padding: '6rem 3rem', maxWidth: 1280, margin: '0 auto' },
  grid: {
    display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
    gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
  },
  card: { display: 'flex', flexDirection: 'column', transition: 'background .2s', cursor: 'default' },
  thumb: {
    width: '100%', aspectRatio: '16/9',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    overflow: 'hidden',
  },
  featured: {
    position: 'absolute', top: '.7rem', left: '.7rem',
    fontFamily: 'var(--mono)', fontSize: '.55rem',
    background: 'var(--accent)', color: '#000',
    padding: '.2rem .5rem', letterSpacing: '.1em', fontWeight: 700,
  },
  views: {
    position: 'absolute', bottom: '.5rem', right: '.5rem',
    fontFamily: 'var(--mono)', fontSize: '.58rem',
    background: 'rgba(0,0,0,.7)', color: 'var(--muted)', padding: '.2rem .4rem',
  },
  body: { padding: '1.3rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '.65rem' },
  idRow: { display: 'flex', alignItems: 'center', gap: '.5rem' },
  icon: { fontSize: '.9rem' },
  projId: { fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.08em' },
  name: { fontFamily: 'var(--sans)', fontSize: '.98rem', fontWeight: 600, lineHeight: 1.25 },
  desc: { fontSize: '.78rem', color: '#888', lineHeight: 1.5 },
  tagRow: { display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginTop: 'auto' },
  tag: {
    fontFamily: 'var(--mono)', fontSize: '.56rem',
    color: 'var(--muted)', border: '1px solid var(--border)',
    padding: '.15rem .42rem', letterSpacing: '.04em',
  },
};
