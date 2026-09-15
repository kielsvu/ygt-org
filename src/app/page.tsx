'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, Menu, X } from 'lucide-react'
import WelcomeScreen from '@/components/WelcomeScreen'
import SectionLabel from '@/components/ui/SectionLabel'
import MemberCard from '@/components/ui/MemberCard'
import { hasPlayedIntro, setIntroPlayed } from '@/lib/introState'
import { members } from '@/data/members'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showApp, setShowApp] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!hasPlayedIntro()) {
      setShowWelcome(true)
      const timer = window.setTimeout(() => {
        setShowWelcome(false)
        setShowApp(true)
        setIntroPlayed()
      }, 2800)
      return () => window.clearTimeout(timer)
    }
    setShowApp(true)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <AnimatePresence>
        {showApp && (
          <motion.div className="site-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.55 }}>
            <header className="site-header">
              <a className="brand" href="#top" onClick={closeMenu} aria-label="YGT home">
                <span className="brand-mark">Y</span>
                <span className="brand-name">YGT</span>
              </a>
              <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </button>
              <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#members" onClick={closeMenu}>Members</a>
              </nav>
              <span className="header-mark">EST. 2026</span>
            </header>

            <section className="intro" id="top">
              <div className="intro-meta">
                <span>YGT / 001</span>
                <span>Private organization</span>
              </div>
              <div className="intro-main">
                <div className="intro-title-wrap">
                  <p className="kicker">A group, kept simple.</p>
                  <h1>YGT<span>.</span></h1>
                </div>
                <div className="intro-side">
                  <p>Four people. One shared space. A small organization built around the people inside it.</p>
                  <a href="#members" className="scroll-link">Meet the members <ArrowDown size={15} /></a>
                </div>
              </div>
              <div className="intro-bottom">
                <span>Based online</span>
                <span>04 members</span>
                <span>Independent</span>
              </div>
            </section>

            <section className="about" id="about">
              <SectionLabel number="01">About YGT</SectionLabel>
              <div className="about-layout">
                <h2>Not a portfolio.<br />Just the people behind YGT.</h2>
                <div className="about-text">
                  <p>YGT is a small independent group. This site is simply a place to introduce the organization and the four people who make it up.</p>
                  <p>There is no feed, no activity wall, and no unnecessary dashboard. Just the group, its members, and a little context.</p>
                </div>
              </div>
            </section>

            <section className="members" id="members">
              <div className="members-heading">
                <SectionLabel number="02">Members</SectionLabel>
                <span className="member-count">04 / 04</span>
              </div>
              <div className="members-grid">
                {members.map((member, index) => (
                  <motion.div key={member.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.55, delay: index * 0.06 }}>
                    <MemberCard member={member} index={index} />
                  </motion.div>
                ))}
              </div>
            </section>

            <footer className="site-footer">
              <div><span className="footer-mark">YGT</span><span>Organization / Members</span></div>
              <span>© 2026 YGT</span>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showWelcome && (
          <motion.div className="welcome-layer" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: '-100%' }} transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}>
            <WelcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
