import { useEffect, useState } from 'react';

export default function ProgressBar() {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const onScroll = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress((window.scrollY / total) * 100);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 56, left: 0, right: 0, height: 2, background: 'var(--border)', zIndex: 99 }}>
            <div style={{ height: '100%', background: 'var(--accent)', width: `${progress}%`, transition: 'width .1s linear', boxShadow: '0 0 8px var(--accent)' }} />
        </div>
    );
}