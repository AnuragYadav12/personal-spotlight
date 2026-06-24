import SectionHeader from './SectionHeader';
import useScrollReveal from './useScrollReveal';

const achievements = [
    { icon: '🏆', title: 'ICCCNT 2025 – Paper Presentation', desc: 'Scalable AI system for real-time abusive content detection in Hindi using attention and transformer-based architectures, outperforming existing baselines on accuracy and F1 score.', badge: 'INTERNATIONAL' },
    { icon: '🎖️', title: 'NCMNC 2025 – National Conference', desc: 'Presented research on AI and ethnobotany at a multidisciplinary forum on Networks and Computing.', badge: 'NATIONAL' },
    { icon: '🏅', title: 'Viksit Bharat@2047 – Paper Presentation', desc: 'Presented an integrated AI pipeline for early diabetes diagnosis and diabetic retinopathy severity assessment.', badge: 'NATIONAL' },
    { icon: '📜', title: 'IBM – Data Structures & Algorithms', desc: 'Completed IBM certification covering advanced DSA concepts and problem-solving techniques.', badge: 'CERTIFICATION' },
    { icon: '📜', title: 'IBM – Machine Learning with Watson Studio', desc: 'Certified in machine learning services and model deployment using IBM Watson Studio.', badge: 'CERTIFICATION' },
    { icon: '📜', title: 'Full Stack Web Development – Udemy', desc: 'Completed comprehensive full-stack web development bootcamp covering React, Node.js, and databases.', badge: 'CERTIFICATION' },
];

const languages = [
    { lang: 'ENGLISH', level: 'Professional', pct: 95 },
    { lang: 'HINDI', level: 'Professional', pct: 95 },
    { lang: 'ASSAMESE', level: 'Professional', pct: 90 },
    { lang: 'BHOJPURI', level: 'Native', pct: 100 },
];

const badgeColors = { INTERNATIONAL: '#f5c518', NATIONAL: '#4ade80', CERTIFICATION: '#60a5fa' };

export default function Achievements() {
    const [ref, visible] = useScrollReveal();
    return (
        <section id="achievements" style={s.section}>
            <div ref={ref} style={{ ...s.wrap, opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)', transition: 'all .7s ease' }}>
                <SectionHeader num="07" eyebrow="> ./ACHIEVEMENTS --LIST" title="Awards &" italic="recognition." />
                <div style={s.grid}>
                    {achievements.map((a, i) => (
                        <div key={i} style={s.card}>
                            <div style={s.cardTop}>
                                <span style={s.icon}>{a.icon}</span>
                                <span style={{ ...s.badge, color: badgeColors[a.badge], borderColor: badgeColors[a.badge] }}>{a.badge}</span>
                            </div>
                            <div style={s.title}>{a.title}</div>
                            <div style={s.desc}>{a.desc}</div>
                        </div>
                    ))}
                </div>
                <div style={s.langWrap}>
                    <div style={s.langHeader}><span style={{ color: 'var(--accent)' }}>+</span> LANGUAGES</div>
                    <div style={s.langGrid}>
                        {languages.map((l, i) => (
                            <div key={i} style={s.langCard}>
                                <div style={s.langTop}>
                                    <span style={s.langName}>{l.lang}</span>
                                    <span style={s.langLevel}>{l.level}</span>
                                </div>
                                <div style={s.langTrack}>
                                    <div style={{ ...s.langBar, width: visible ? `${l.pct}%` : '0%', transition: `width 1s ease ${i * 0.15}s` }} />
                                </div>
                                <div style={s.langPct}>{l.pct}%</div>
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
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)', border: '1px solid var(--border)', marginBottom: '2rem' },
    card: { background: 'var(--bg)', padding: '1.6rem', display: 'flex', flexDirection: 'column', gap: '.7rem', transition: 'background .2s' },
    cardTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    icon: { fontSize: '1.4rem' },
    badge: { fontFamily: 'var(--mono)', fontSize: '.55rem', border: '1px solid', padding: '.15rem .45rem', letterSpacing: '.08em' },
    title: { fontFamily: 'var(--sans)', fontSize: '.95rem', fontWeight: 600, lineHeight: 1.3 },
    desc: { fontSize: '.78rem', color: '#888', lineHeight: 1.5 },
    langWrap: { border: '1px solid var(--border)', padding: '1.8rem' },
    langHeader: { fontFamily: 'var(--mono)', fontSize: '.63rem', color: 'var(--muted)', letterSpacing: '.1em', marginBottom: '1.5rem' },
    langGrid: { display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem' },
    langCard: { display: 'flex', flexDirection: 'column', gap: '.5rem' },
    langTop: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    langName: { fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--text)', letterSpacing: '.08em' },
    langLevel: { fontFamily: 'var(--mono)', fontSize: '.55rem', color: 'var(--muted)' },
    langTrack: { height: 2, background: 'var(--border)', overflow: 'hidden' },
    langBar: { height: '100%', background: 'var(--accent)' },
    langPct: { fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--accent)' },
};