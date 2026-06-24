export default function SectionHeader({ num, eyebrow, title, italic }) {
  return (
    <>
      <div style={s.eyebrow}>
        <span style={{ color: 'var(--accent)' }}>{num}</span> / {eyebrow}
      </div>
      <h2 style={s.title}>
        {title} <span style={s.italic}>{italic}</span>
      </h2>
    </>
  );
}

const s = {
  eyebrow: {
    fontFamily: 'var(--mono)', fontSize: '.63rem',
    color: 'var(--muted)', letterSpacing: '.12em',
    marginBottom: '2rem', paddingBottom: '.75rem',
    borderBottom: '1px solid var(--border)',
  },
  title: {
    fontFamily: 'var(--sans)',
    fontSize: 'clamp(1.8rem,4vw,3rem)',
    fontWeight: 700, lineHeight: 1,
    marginBottom: '3rem',
  },
  italic: { color: 'var(--accent)', fontStyle: 'italic' },
};
