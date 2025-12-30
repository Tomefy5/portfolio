"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const ag = {
  reveal: ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={revealVariants}
      transition={{ delay, type: "spring", stiffness: 400, damping: 30 }}
      className={className}
    >
      {children}
    </motion.div>
  ),

  hoverFloat: ({ children, className }: { children: ReactNode; className?: string }) => (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={className}
    >
      {children}
    </motion.div>
  ),

  scale: ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
};

export { motion };
