import { useEffect, useState } from 'react';

const lines = [
    '> initializing portfolio.exe...',
    '> loading modules: [NLP] [CV] [DL]',
    '> connecting to CSIR-NEIST...',
    '> mounting research papers...',
    '> rendering Anurag Yadav...',
    '> STATUS: ONLINE ✓',
];

export default function LoadingScreen({ onDone }) {
    const [current, setCurrent] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (current < lines.length) {
            const t = setTimeout(() => setCurrent(c => c + 1), 350);
            return () => clearTimeout(t);
        } else {
            const t = setTimeout(() => {
                setVisible(false);
                setTimeout(onDone, 500);
            }, 400);
            return () => clearTimeout(t);
        }
    }, [current, onDone]);

    return (
        <div style={{ ...s.screen, opacity: visible ? 1 : 0 }}>
            <div style={s.box}>
                <div style={s.title}>[ SYSTEM.BOOT ]</div>
                {lines.slice(0, current).map((line, i) => (
                    <div key={i} style={{ ...s.line, color: i === current - 1 ? 'var(--accent)' : 'var(--text)' }}>
                        {line}
                    </div>
                ))}
                <span style={s.blink}>_</span>
            </div>
        </div>
    );
}

const s = {
    screen: {
        position: 'fixed', inset: 0, background: 'var(--bg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 10000, transition: 'opacity .5s',
    },
    box: { fontFamily: 'var(--mono)', fontSize: '.85rem', maxWidth: 480, width: '90%' },
    title: { color: 'var(--muted)', fontSize: '.7rem', letterSpacing: '.15em', marginBottom: '1.5rem' },
    line: { marginBottom: '.5rem', letterSpacing: '.03em' },
    blink: { color: 'var(--accent)', animation: 'blink .8s step-end infinite' },
};