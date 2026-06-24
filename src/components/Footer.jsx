import { personal } from '../data/portfolio';

export default function Footer() {
  return (
    <footer style={s.footer}>
      <span>© 2026 ANURAG YADAV</span>
      <div style={s.stack}>
        BUILT WITH
        <span style={s.stackItem}> REACT</span> ·
        <span style={s.stackItem}> FASTAPI</span> ·
        <span style={s.stackItem}> MONGODB</span>
      </div>
      <div style={s.socials}>
        <a href={personal.github} target="_blank" rel="noreferrer" style={s.socialLink}>GITHUB</a>
        <span style={s.sep}>·</span>
        <a href={personal.linkedin} target="_blank" rel="noreferrer" style={s.socialLink}>LINKEDIN</a>
        <span style={s.sep}>·</span>
        <a href={personal.instagram} target="_blank" rel="noreferrer" style={s.socialLink}>INSTAGRAM</a>
      </div>
    </footer>
  );
}

const s = {
  footer: {
    borderTop: '1px solid var(--border)',
    padding: '1.5rem 3rem',
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--muted)',
    position: 'relative', zIndex: 1, flexWrap: 'wrap', gap: '.5rem',
  },
  stack: { display: 'flex', gap: '.3rem', alignItems: 'center' },
  stackItem: { color: 'var(--text)', fontWeight: 600 },
  socials: { display: 'flex', gap: '.5rem', alignItems: 'center' },
  socialLink: { color: 'var(--muted)', textDecoration: 'none', transition: 'color .2s' },
  sep: { color: 'var(--border)' },
};
