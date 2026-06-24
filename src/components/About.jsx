import SectionHeader from './SectionHeader';
import { personal } from '../data/portfolio';

const meta = [
  { key: 'FOCUS', val: personal.focus },
  { key: 'STACK', val: personal.stack },
  { key: 'BASED', val: personal.location.split(',').slice(-2).join(',').trim() },
  { key: 'PUBLISHING', val: 'active' },
  { key: 'OPEN_TO', val: personal.openTo },
  { key: 'LANG', val: personal.langs },
];

export default function About() {
  return (
    <section id="about" style={s.section}>
      <div style={s.wrap}>
        <SectionHeader num="01" eyebrow="// ABOUT ME" title="Researcher. Builder." italic="AI engineer." />
        <div style={s.grid}>
          {/* Photo placeholder */}
          <div>
            <div style={s.imgBox}>
              <img
                src="/photo.jpg"
                alt="Anurag Yadav"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(70%)' }}
              />
            </div>
            <div style={s.caption}>
              <span>PORTRAIT.JPG</span>
              <span style={{ color: 'var(--green)' }}>● rendered</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={s.p}>
              I'm an M.Tech student in <strong style={s.strong}>Artificial Intelligence &amp; Machine Learning</strong> at Dibrugarh University with a track record of turning research ideas into real, working systems.
            </p>
            <p style={s.p}>
              My published work spans <strong style={s.strong}>abusive language detection in Hindi</strong> (ICCCNT 2025), AI-driven diabetic retinopathy grading, and stock market forecasting with uncertainty quantification — presented at national and international conferences.
            </p>
            <p style={s.p}>
              I care about the full stack of AI: rigorous experimentation, clean code, and models that are <strong style={s.strong}>explainable and deployable</strong> — not just impressive on paper. Currently interning at CSIR-NEIST on geospatial ML for Majuli Island.
            </p>

            <div style={s.metaGrid}>
              {meta.map((m, i) => (
                <div key={i} style={s.metaCell}>
                  <div style={s.metaKey}>{m.key}</div>
                  <div style={s.metaVal}>{m.val}</div>
                </div>
              ))}
            </div>
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
    display: 'grid', gridTemplateColumns: '380px 1fr',
    gap: '4rem', alignItems: 'start',
  },
  imgBox: {
    width: '100%', aspectRatio: '3/4',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  imgInner: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', gap: '.5rem',
  },
  caption: {
    fontFamily: 'var(--mono)', fontSize: '.58rem',
    color: 'var(--muted)', padding: '.5rem 0',
    display: 'flex', justifyContent: 'space-between',
    borderTop: '1px solid var(--border)',
  },
  p: { color: '#bbb', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem' },
  strong: { color: 'var(--text)', fontWeight: 600 },
  metaGrid: {
    display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
    gap: '1px', background: 'var(--border)',
    border: '1px solid var(--border)', marginTop: '2rem',
  },
  metaCell: { background: 'var(--bg)', padding: '.9rem 1rem' },
  metaKey: {
    fontFamily: 'var(--mono)', fontSize: '.56rem',
    color: 'var(--muted)', letterSpacing: '.1em', marginBottom: '.3rem',
  },
  metaVal: { fontFamily: 'var(--sans)', fontSize: '.85rem', color: 'var(--text)', fontWeight: 500 },
};
