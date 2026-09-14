'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ChevronRight, Menu, X } from 'lucide-react'
import WelcomeScreen from '@/components/WelcomeScreen'
import { useEffect } from 'react'
import { hasPlayedIntro, setIntroPlayed } from '@/lib/introState'

import { members } from '@/data/members'


export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showApp, setShowApp] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!hasPlayedIntro()) {
      setShowWelcome(true)
      const timer = setTimeout(() => {
        setShowWelcome(false)
        setShowApp(true)
        setIntroPlayed()
      }, 2800)
      return () => clearTimeout(timer)
    }
    setShowApp(true)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      {showApp && (
        <motion.div className="site-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <header className="nav-wrap">
            <nav className="nav" aria-label="Main navigation">
              <a className="brand" href="#top" onClick={closeMenu}>
                <span className="brand-mark">O</span>
                <span>Organization</span>
              </a>
              <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
              <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <a href="#members" onClick={closeMenu}>Members</a>
                <a href="#about" onClick={closeMenu}>About</a>
              </div>
            </nav>
          </header>

          <section className="hero" id="top">
            <div className="hero-copy">
              <div className="eyebrow"><span className="live-dot" /> Independent organization</div>
              <h1>A small group of people building things together.</h1>
              <p>One place for our members, the people who make up the organization.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#members">View members <ChevronRight size={16} /></a>
                <a className="text-link" href="#about">Learn about us <ArrowUpRight size={15} /></a>
              </div>
            </div>
            <div className="hero-note">
              <span>EST. 2026</span>
              <p>Built around people, not a template.</p>
            </div>
          </section>

          <section className="members-section section" id="members">
            <div className="section-heading">
              <div><span className="section-number">01</span><h2>Members</h2></div>
              <p>{members.length} people currently listed</p>
            </div>
            <div className="member-list">
              {members.map((member, index) => (
                <motion.article key={member.name} className="member-row" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ delay: index * 0.06 }}>
                  <div className="member-index">0{index + 1}</div>
                  <div className="member-main">
                    <img className="avatar" src={member.image} alt="" />
                    <div><h3>{member.name}</h3><span>{member.tag}</span></div>
                  </div>
                  <div className="member-role">{member.role}</div>
                  <div className="member-status"><i className={member.status} />{member.status}</div>
                  <p className="member-note">{member.note}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="about-section section" id="about">
            <div className="section-heading compact"><div><span className="section-number">02</span><h2>About</h2></div></div>
            <div className="about-grid">
              <p className="about-lead">We are a loose organization of people who like making useful things and documenting the work behind them.</p>
              <div className="about-copy"><p>This page is intentionally simple. Members are listed as people first, while the member list gives a little context around who makes up the organization.</p><a href="#members" className="text-link">Meet the members <ArrowUpRight size={15} /></a></div>
            </div>
          </section>

          <footer className="footer"><span>Organization / Member records</span><span>Last updated 2026</span></footer>
        </motion.div>
      )}

      <AnimatePresence>
        {showWelcome && (
          <motion.div className="welcome-layer" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}><WelcomeScreen /></motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
