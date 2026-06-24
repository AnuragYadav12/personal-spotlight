import SectionHeader from './SectionHeader';
import { posts } from '../data/portfolio';

export default function Writing() {
  return (
    <section id="writing" style={s.section}>
      <div style={s.wrap}>
        <SectionHeader num="07" eyebrow="> CAT ./WRITING/*" title="Field" italic="notes." />
        <div style={s.grid}>
          {posts.map((p, i) => (
            <div key={i} style={s.card}>
              <div style={s.header}>
                <span style={s.postId}>{p.id}</span>
                <span style={s.read}>⏱ {p.read}</span>
              </div>
              <div style={s.title}>{p.title}</div>
              <div style={s.excerpt}>{p.excerpt}</div>
              <div style={s.footer}>
                <div style={s.tagRow}>
                  {p.tags.map((t, j) => <span key={j} style={s.tag}>{t}</span>)}
                </div>
                <span style={{ color: 'var(--muted)' }}>↗</span>
              </div>
            </div>
          ))}
        </div>
        <div style={s.note}>
          More posts coming soon — follow on{' '}
          <a href="https://linkedin.com/in/anurag-yadav-16198a1ba" target="_blank" rel="noreferrer" style={s.link}>
            LinkedIn
          </a>{' '}for updates.
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
    display: 'flex', flexDirection: 'column', gap: '.8rem',
    cursor: 'pointer', transition: 'background .2s',
  },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  postId: { fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--muted)', letterSpacing: '.08em' },
  read: { fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--muted)' },
  title: { fontFamily: 'var(--sans)', fontSize: '1.05rem', fontWeight: 600, lineHeight: 1.3, flex: 1 },
  excerpt: { fontSize: '.82rem', color: '#888', lineHeight: 1.5 },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' },
  tagRow: { display: 'flex', gap: '.4rem', flexWrap: 'wrap' },
  tag: { fontFamily: 'var(--mono)', fontSize: '.56rem', color: 'var(--muted)', letterSpacing: '.04em' },
  note: {
    marginTop: '1.5rem', fontFamily: 'var(--mono)',
    fontSize: '.68rem', color: 'var(--muted)', textAlign: 'center',
  },
  link: { color: 'var(--accent)', textDecoration: 'none' },
};
