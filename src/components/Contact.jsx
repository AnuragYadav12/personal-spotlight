import { useState } from 'react';
import SectionHeader from './SectionHeader';
import { personal } from '../data/portfolio';
import emailjs from '@emailjs/browser';

const contacts = [
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,12 2,6" /></svg>,
    field: 'EMAIL', val: personal.email, href: `mailto:${personal.email}`
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
    field: 'PHONE', val: personal.phone, href: `tel:+916000147471`
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
    field: 'LINKEDIN', val: 'Anurag-Yadav', href: personal.linkedin
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>,
    field: 'GITHUB', val: 'AnuragYadav12', href: personal.github
  },
  {
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
    field: 'INSTAGRAM', val: '_.anurag._._', href: personal.instagram
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));



  const handleSubmit = async () => {

    if (!form.name || !form.email || !form.message) return;

    setSending(true);

    try {

      await emailjs.send(

        'service_fxag7o7',    // from EmailJS dashboard

        'template_pmp0irs',   // from EmailJS dashboard

        { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },

        'PD6EEqVrWrd-pkdIw' // from EmailJS dashboard

      );

      setSent(true);

    } catch (err) {

      alert('Failed to send. Try emailing directly.');

    }

    setSending(false);

  };

  return (
    <section id="contact" style={s.section}>
      <div style={s.wrap}>
        <div style={s.grid}>
          {/* Left */}
          <div>
            <SectionHeader num="08" eyebrow="> ./CONNECT --ESTABLISH" title="Let's build something" italic="together." />
            <p style={s.desc}>
              Open to research collaborations, ML internships, and full-time roles in AI/ML. I reply fast — drop me a line.
            </p>
            {contacts.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={s.contactItem}>
                <span style={s.cIcon}>{c.icon}</span>
                <div>
                  <div style={s.cField}>{c.field}</div>
                  <div style={s.cVal}>{c.val}</div>
                </div>
              </a>
            ))}
            <div style={s.statusBar}>
              <span style={s.statusDot} />
              status: <strong style={{ color: 'var(--text)' }}>available for opportunities — Q3 2026</strong>
            </div>
          </div>

          {/* Form */}
          <div style={s.formBox}>
            <div style={s.formHeader}>
              <span>./COMPOSE-MESSAGE</span>
              <span>FIELDS: 4</span>
            </div>
            {sent ? (
              <div style={s.sent}>
                <span style={{ fontSize: '2rem' }}>✅</span>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '.8rem', color: 'var(--green)' }}>
                  MESSAGE SENT. I'll reply soon!
                </div>
              </div>
            ) : (
              <>
                <div style={s.row}>
                  <div style={s.field}>
                    <label style={s.label}>NAME</label>
                    <input name="name" value={form.name} onChange={handleChange} style={s.input} placeholder="" />
                  </div>
                  <div style={s.field}>
                    <label style={s.label}>EMAIL</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} style={s.input} placeholder="" />
                  </div>
                </div>
                <div style={{ ...s.field, marginBottom: '1rem' }}>
                  <label style={s.label}>SUBJECT</label>
                  <input name="subject" value={form.subject} onChange={handleChange} style={s.input} placeholder="" />
                </div>
                <div style={s.field}>
                  <label style={s.label}>MESSAGE</label>
                  <textarea name="message" value={form.message} onChange={handleChange} style={s.textarea} placeholder="tell me about your project, idea, or role…" />
                </div>
                <button onClick={handleSubmit} style={s.btnSend} disabled={sending}>
                  {sending ? 'SENDING...' : 'SEND MESSAGE ✈'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const s = {
  section: { position: 'relative', zIndex: 1 },
  wrap: { padding: '6rem 3rem', maxWidth: 1280, margin: '0 auto' },
  grid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' },
  desc: { color: '#888', fontSize: '.95rem', lineHeight: 1.7, marginBottom: '2rem' },
  contactItem: {
    display: 'flex', alignItems: 'center', gap: '1rem',
    padding: '1rem 1.2rem', border: '1px solid var(--border)',
    marginBottom: '.5rem', textDecoration: 'none', color: 'inherit',
    transition: 'border-color .2s',
  },
  cIcon: { color: 'var(--muted)', fontSize: '1rem', minWidth: 20, textAlign: 'center' },
  cField: { fontFamily: 'var(--mono)', fontSize: '.56rem', color: 'var(--muted)', letterSpacing: '.1em', marginBottom: '.2rem' },
  cVal: { fontFamily: 'var(--mono)', fontSize: '.8rem', color: 'var(--text)' },
  statusBar: {
    marginTop: '1.5rem', padding: '.8rem 1.2rem',
    border: '1px solid var(--border)',
    fontFamily: 'var(--mono)', fontSize: '.68rem', color: 'var(--muted)',
    display: 'flex', alignItems: 'center', gap: '.4rem',
  },
  statusDot: {
    display: 'inline-block', width: 6, height: 6,
    background: 'var(--green)', borderRadius: '50%',
    animation: 'pulse 2s infinite',
  },
  formBox: { border: '1px solid var(--border)', padding: '1.8rem' },
  formHeader: {
    display: 'flex', justifyContent: 'space-between',
    fontFamily: 'var(--mono)', fontSize: '.6rem', color: 'var(--muted)',
    marginBottom: '1.5rem',
  },
  row: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' },
  field: { display: 'flex', flexDirection: 'column', gap: '.4rem' },
  label: { fontFamily: 'var(--mono)', fontSize: '.58rem', color: 'var(--muted)', letterSpacing: '.08em' },
  input: {
    background: 'transparent', border: '1px solid var(--border)',
    color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '.78rem',
    padding: '.65rem .85rem', outline: 'none', width: '100%',
  },
  textarea: {
    background: 'transparent', border: '1px solid var(--border)',
    color: 'var(--text)', fontFamily: 'var(--mono)', fontSize: '.78rem',
    padding: '.65rem .85rem', outline: 'none', width: '100%',
    height: 120, resize: 'none',
  },
  btnSend: {
    background: 'var(--accent)', color: '#000',
    fontFamily: 'var(--mono)', fontSize: '.72rem', fontWeight: 700,
    padding: '.65rem 1.3rem', border: 'none', cursor: 'pointer',
    letterSpacing: '.08em', marginTop: '1rem',
  },
  sent: {
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    justifyContent: 'center', gap: '1rem', height: 200,
  },
};
