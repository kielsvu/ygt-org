'use client'

import { motion } from 'framer-motion'

export default function WelcomeScreen() {
  return (
    <div className="welcome-screen">
      <div className="welcome-image-glow" />
      <div className="welcome-vignette" />
      <div className="welcome-grain" />
      <div className="welcome-center">
        <motion.span
          className="welcome-top"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          EST. 2026
        </motion.span>
        <motion.div
          className="welcome-wordmark"
          initial={{ opacity: 0, scale: .94, filter: 'blur(8px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }}
        >
          YGT
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .75, duration: 1.2 }}
        >
          LUV, YGT &amp; DREAMS
        </motion.p>
      </div>
      <motion.div
        className="welcome-bottom"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.35, duration: 1 }}
      >
        <span>ORGANIZATION</span>
        <i />
        <span>MEMBERS</span>
      </motion.div>
    </div>
  )
}
