
import React from 'react';
import { animate, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { stats } from '../data/portfolio.jsx';
import { BatLogo } from './BatLogo';
import './About.css';

function useReveal(delay = 0) {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });
  return {
    ref,
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  };
}
function useRevealLeft(delay=0){
  const[ref,inView]=useInView({threshold:0.15,triggerOnce:true});
  return{
    ref,
    initial:{opacity:0,x:80},
    animate: inView?{opacity:1,x:0}:{opacity:0,x:80},
    transition:{duration:0.7,delay,ease:[0.16,1,0.3,1]}
  }
}
export default function About() {
  const left = useReveal(0);
  const right = useReveal(0.8);
  const right1 = useRevealLeft(0.8);

  return (
    <section id="about" className="about">
      <motion.div ref={left.ref} initial={left.initial} animate={left.animate} transition={left.transition} className="about-content">
        <p className="section-label">Origin Story</p>
        <h2 className="section-title">The Man<br />Behind The<br />Code</h2>
        <p className="about-text">
          A fresher with the mindset of a senior. I don't just write code — I architect solutions,
          think in systems, and ship work that matters.
        </p>
        <p className="about-text">
          From the town of Salem, building toward the heights of India's tech industry.
          Every project is a mission. Every bug is a villain to defeat.
        </p>
        <div className="about-stats">
          {stats.map((s) => (
            <div key={s.label} className="stat-box">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div ref={right1.ref} initial={right1.initial} animate={right1.animate} transition={right1.transition} className="about-portrait">
        <motion.div
        animate={{y:[0,-12,0]}}
        transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>
          <div className="portrait-frame">
          <div className="portrait-corner tl" />
          <div className="portrait-corner tr" />
          <div className="portrait-corner bl" />
          <div className="portrait-corner br" />
          <img src="hero.png" alt="Photo" width={"609px"} height={"832px"}/>
          <div className="portrait-overlay" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
