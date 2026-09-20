import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

import { contactLinks } from '../data/portfolio.jsx';
import './Contact.css';

export default function Contact() {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const [leftRef, leftInView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const [rightRef, rightInView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);

      setForm({
        name: '',
        email: '',
        message: '',
      });

      setTimeout(() => {
        setSent(false);
      }, 3500);

    } catch (error) {
      console.error('Email sending failed:', error);
      alert('Unable to send the signal. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact">

      <motion.div
        ref={leftRef}
        initial={{ opacity: 0, y: 30 }}
        animate={leftInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="contact-info"
      >
        <p className="section-label">Bat Signal</p>

        <h2 className="contact-title">
          Let's Build<br />
          <span>Something</span><br />
          Legendary
        </h2>

        <p className="contact-text">
          Available for full-time roles, internships, and freelance missions.
          The Bat Signal is always on.
        </p>

        <div className="contact-links">
          {contactLinks.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="contact-item"
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              whileHover={{ x: 8 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              <div className="contact-item-icon">
                {item.icon}
              </div>

              <div>
                <span className="contact-item-label">
                  {item.label}
                </span>

                <span className="contact-item-value">
                  {item.value}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={rightRef}
        initial={{ opacity: 0, y: 30 }}
        animate={rightInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-group">
            <label className="form-label">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              className="form-input"
              placeholder="Bruce Wayne"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="bruce@wayneenterprises.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              Mission Brief
            </label>

            <textarea
              name="message"
              className="form-input"
              rows={5}
              placeholder="Describe your project..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={sending}
          >
            {sending
              ? 'Sending Signal...'
              : sent
                ? '✓ Signal Received'
                : 'Send Signal →'}
          </button>

        </form>
      </motion.div>

    </section>
  );
}