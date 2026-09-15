'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Volume2 } from 'lucide-react'
import WelcomeScreen from '@/components/WelcomeScreen'
import MemberCard from '@/components/ui/MemberCard'
import { members } from '@/data/members'
import { hasPlayedIntro, setIntroPlayed } from '@/lib/introState'

export default function Home() {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showPage, setShowPage] = useState(false)

  useEffect(() => {
    if (hasPlayedIntro()) {
      setShowPage(true)
      return
    }

    setShowWelcome(true)
    const timer = window.setTimeout(() => {
      setShowWelcome(false)
      setShowPage(true)
      setIntroPlayed()
    }, 4200)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <main className="site-shell">
      <div className="background-glow glow-a" />
      <div className="background-glow glow-b" />
      <div className="grain" />

      <AnimatePresence>
        {showWelcome && (
          <motion.div
            className="welcome-layer"
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1] }}
          >
            <WelcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {showPage && (
        <motion.div
          className="page-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <header className="floating-header">
            <a href="#top" className="header-mark">YGT</a>
            <nav>
              <a href="#about">About</a>
              <a href="#members">Members</a>
            </nav>
            <span className="header-code">YGT / 2026</span>
          </header>

          <section id="top" className="intro-hero">
            <div className="hero-wordmark" aria-label="YGT">YGT</div>
            <motion.p
              className="hero-slogan"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1.1 }}
            >
              LUV, YGT &amp; DREAMS
            </motion.p>
            <motion.div
              className="hero-scroll"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span>SCROLL TO ENTER</span>
              <ChevronDown size={15} strokeWidth={1.3} />
            </motion.div>
          </section>

          <section className="feature-player" aria-label="YGT featured panel">
            <div className="player-cover">YGT</div>
            <div className="player-main">
              <div className="player-title">YGT / ORGANIZATION</div>
              <div className="player-subtitle">OUR PEOPLE · OUR SPACE</div>
              <div className="player-track"><span /></div>
              <div className="player-time"><span>00:00</span><span>YGT</span></div>
            </div>
            <div className="player-side"><Volume2 size={15} strokeWidth={1.4} /><span>YGT</span></div>
          </section>

          <section id="about" className="center-section about-section">
            <p className="section-kicker">01 / ABOUT</p>
            <h1>YGT</h1>
            <p className="section-copy">A small organization built around the people behind it. Simple, private, and centered on the members that make YGT what it is.</p>
          </section>

          <section id="members" className="center-section members-section">
            <p className="section-kicker">02 / MEMBERS</p>
            <h2>Members</h2>
            <div className="member-grid">
              {members.map((member, index) => (
                <MemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          <footer className="reference-footer">
            <span>YGT</span>
            <span>OUR PEOPLE / 2026</span>
            <a href="#top">BACK TO TOP</a>
          </footer>
        </motion.div>
      )}
    </main>
  )
}
