import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { skills } from '../data/portfolio';
import useScrollReveal from './useScrollReveal';

export default function Skills() {
  const [ref, visible] = useScrollReveal();
  const [hoveredTag, setHoveredTag] = useState(null);

  return (
    <section id="skills" style={s.section}>
      <div ref={ref} style={{ ...s.wrap, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all .7s ease' }}>
        <SectionHeader num="02" eyebrow="> ./TOOLKIT --LIST" title="Technical" italic="toolkit." />
        <div style={s.grid}>
          {skills.map((grp, i) => (
            <div key={i} style={s.group}>
              <div style={s.groupHeader}>
                <span style={s.groupName}>&gt; {grp.group}</span>
                <span style={s.groupCount}>{String(grp.items.length).padStart(2, '0')}</span>
              </div>
              <div style={s.tags}>
                {grp.items.map((tag, j) => {
                  const key = `${i}-${j}`;
                  return (
                    <span key={j}
                      style={{ ...s.tag, borderColor: hoveredTag === key ? 'var(--accent)' : 'var(--border)', color: hoveredTag === key ? 'var(--accent)' : 'var(--text)', boxShadow: hoveredTag === key ? '0 0 10px rgba(245,197,24,0.2)' : 'none' }}
                      onMouseEnter={() => setHoveredTag(key)}
                      onMouseLeave={() => setHoveredTag(null)}
                    >{tag}</span>
                  );
                })}
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
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginTop: '1rem' },
  group: { background: 'var(--bg)', padding: '2rem 2.5rem' },
  groupHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' },
  groupName: { fontFamily: 'var(--mono)', fontSize: '.63rem', color: 'var(--muted)', letterSpacing: '.12em' },
  groupCount: { fontFamily: 'var(--mono)', fontSize: '.63rem', color: 'var(--border)' },
  tags: { display: 'flex', flexWrap: 'wrap', gap: '.5rem' },
  tag: { fontFamily: 'var(--mono)', fontSize: '.68rem', border: '1px solid', padding: '.28rem .65rem', letterSpacing: '.04em', cursor: 'default', transition: 'all .2s' },
};