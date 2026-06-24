import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: -100, y: -100 });
    const [trail, setTrail] = useState({ x: -100, y: -100 });
    const [clicking, setClicking] = useState(false);
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const move = e => setPos({ x: e.clientX, y: e.clientY });
        const down = () => setClicking(true);
        const up = () => setClicking(false);
        const checkHover = e => {
            const el = e.target;
            setHovering(!!(el.tagName === 'A' || el.tagName === 'BUTTON' || el.closest('a') || el.closest('button')));
        };
        window.addEventListener('mousemove', move);
        window.addEventListener('mousemove', checkHover);
        window.addEventListener('mousedown', down);
        window.addEventListener('mouseup', up);
        return () => {
            window.removeEventListener('mousemove', move);
            window.removeEventListener('mousemove', checkHover);
            window.removeEventListener('mousedown', down);
            window.removeEventListener('mouseup', up);
        };
    }, []);

    useEffect(() => {
        const t = setTimeout(() => setTrail(pos), 80);
        return () => clearTimeout(t);
    }, [pos]);

    return (
        <>
            <div style={{
                position: 'fixed', left: pos.x - 4, top: pos.y - 4,
                width: clicking ? 6 : 8, height: clicking ? 6 : 8,
                background: 'var(--accent)', borderRadius: '50%',
                pointerEvents: 'none', zIndex: 9999,
                transition: 'width .1s, height .1s', mixBlendMode: 'difference',
            }} />
            <div style={{
                position: 'fixed',
                left: trail.x - (hovering ? 20 : 14),
                top: trail.y - (hovering ? 20 : 14),
                width: hovering ? 40 : 28, height: hovering ? 40 : 28,
                border: '1px solid var(--accent)', borderRadius: '50%',
                pointerEvents: 'none', zIndex: 9998,
                transition: 'all .15s ease', opacity: 0.6,
            }} />
        </>
    );
}