import SectionHeader from './SectionHeader';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" style={s.section}>
      <div style={s.wrap}>
        <SectionHeader num="06" eyebrow="// EDUCATION.HISTORY" title="Academic" italic="background." />
        <div style={s.grid}>
          {education.map((e, i) => (
            <div key={i} style={s.card}>
              <div style={s.header}>
                <span style={s.years}>{e.years}</span>
                <span style={{ color: 'var(--muted)', fontSize: '1.1rem' }}>🎓</span>
              </div>
              <div style={s.degree}>{e.degree}</div>
              <div style={s.school}>{e.school}</div>
              <div style={s.details}>{e.details}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div style={s.certsWrap}>
          <div style={s.certsHeader}>
            <span style={{ color: 'var(--accent)' }}>+</span> COURSES &amp; CERTIFICATIONS
          </div>
          <div style={s.certList}>
            {certifications.map((c, i) => (
              <span key={i} style={s.cert}>{c}</span>
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
  grid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr',
    gap: '1px', background: 'var(--border)', border: '1px solid var(--border)',
  },
  card: {
    background: 'var(--bg)', padding: '1.8rem',
    transition: 'background .2s',
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' },
  years: { fontFamily: 'var(--mono)', fontSize: '.63rem', color: 'var(--muted)', letterSpacing: '.08em' },
  degree: { fontFamily: 'var(--sans)', fontSize: '1.05rem', fontWeight: 600, marginBottom: '.4rem', lineHeight: 1.3 },
  school: { fontFamily: 'var(--mono)', fontSize: '.63rem', color: 'var(--muted)', marginBottom: '.8rem' },
  details: { fontSize: '.85rem', color: '#888' },
  certsWrap: { marginTop: '2rem', border: '1px solid var(--border)', padding: '1.5rem' },
  certsHeader: {
    fontFamily: 'var(--mono)', fontSize: '.63rem',
    color: 'var(--muted)', letterSpacing: '.1em', marginBottom: '1rem',
  },
  certList: { display: 'flex', flexWrap: 'wrap', gap: '.5rem' },
  cert: {
    fontFamily: 'var(--mono)', fontSize: '.62rem',
    border: '1px solid var(--border)', padding: '.3rem .7rem',
    color: 'var(--text)',
  },
};
