import SectionHeader from './SectionHeader';
import { papers } from '../data/portfolio';

export default function Research() {
  return (
    <section id="research" style={s.section}>
      <div style={s.wrap}>
        <SectionHeader num="04" eyebrow="> ./PAPERS --STATUS PUBLISHED" title="Published" italic="work." />
        <div style={s.grid}>
          {papers.map((p, i) => (
            <div key={i} style={s.card}>
              <div style={s.cardHeader}>
                <span style={s.venue}>{p.venue}</span>
                <span style={{ color: 'var(--muted)' }}>📄</span>
              </div>
              <div style={s.title}>{p.title}</div>
              <div style={s.desc}>{p.desc}</div>
              <div style={s.footer}>
                <span style={s.paperId}>{p.id}</span>
                <span style={s.badge}>
                  <span style={s.badgeDot} />{p.status}
                </span>
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
  card: {
    background: 'var(--bg)', padding: '1.8rem',
    display: 'flex', flexDirection: 'column', gap: '1rem',
    transition: 'background .2s', cursor: 'default',
  },
  cardHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' },
  venue: {
    fontFamily: 'var(--mono)', fontSize: '.58rem',
    letterSpacing: '.1em', padding: '.2rem .5rem',
    border: '1px solid var(--border)', color: 'var(--muted)',
  },
  title: { fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 600, lineHeight: 1.3, flex: 1 },
  desc: { fontSize: '.83rem', color: '#888', lineHeight: 1.6 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  paperId: { fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--muted)' },
  badge: {
    fontFamily: 'var(--mono)', fontSize: '.6rem',
    color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '.3rem',
  },
  badgeDot: { width: 5, height: 5, background: 'var(--green)', borderRadius: '50%', display: 'inline-block' },
};
