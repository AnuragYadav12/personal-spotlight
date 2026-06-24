import SectionHeader from './SectionHeader';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" style={s.section}>
      <div style={s.wrap}>
        <SectionHeader num="03" eyebrow="// EXPERIENCE.LOG" title="Where I've" italic="worked." />
        <div style={s.layout}>
          <div style={s.sidebar}>
            <div style={s.sideLabel}>TIMELINE:</div>
            <div style={s.sideRange}>2022 → PRESENT</div>
            <ul style={s.sideList}>
              <li style={s.sideItem}>3 INTERNSHIPS</li>
              <li style={s.sideItem}>2 STATES</li>
              <li style={s.sideItem}>1 CSIR LAB</li>
            </ul>
          </div>
          <div>
            {experience.map((exp, i) => (
              <div key={i} style={{ ...s.item, paddingTop: i === 0 ? 0 : '2rem' }}>
                <div style={s.date}>
                  <span style={s.dateDot} />{exp.date}
                </div>
                <div style={s.role}>{exp.role}</div>
                <div style={s.company}>{exp.company} · {exp.location}</div>
                <ul style={s.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} style={s.bullet}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { position: 'relative', zIndex: 1 },
  wrap: { padding: '6rem 3rem', maxWidth: 1280, margin: '0 auto' },
  layout: { display: 'grid', gridTemplateColumns: '200px 1fr', gap: '4rem' },
  sidebar: { fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--muted)', position: 'sticky', top: 80, height: 'fit-content' },
  sideLabel: { marginBottom: '1rem' },
  sideRange: { color: 'var(--text)', fontSize: '.85rem', marginBottom: '1rem' },
  sideList: { listStyle: 'none' },
  sideItem: { marginBottom: '.4rem', paddingLeft: '.8rem', position: 'relative' },
  item: { borderBottom: '1px solid var(--border)', paddingBottom: '2rem' },
  date: {
    fontFamily: 'var(--mono)', fontSize: '.63rem',
    color: 'var(--muted)', letterSpacing: '.1em',
    marginBottom: '.8rem', display: 'flex', alignItems: 'center', gap: '.6rem',
  },
  dateDot: { display: 'inline-block', width: 8, height: 8, background: 'var(--accent)' },
  role: { fontFamily: 'var(--sans)', fontSize: '1.25rem', fontWeight: 600, marginBottom: '.3rem' },
  company: { fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--muted)', marginBottom: '1rem' },
  bullets: { listStyle: 'none' },
  bullet: {
    fontSize: '.9rem', color: '#aaa', marginBottom: '.45rem',
    paddingLeft: '1.2rem', position: 'relative',
  },
};
