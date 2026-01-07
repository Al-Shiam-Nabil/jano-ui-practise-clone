import { motion } from "motion/react";
import React from "react";

type AnimationProps = {
  children: React.ReactNode;
  duration?: number;
};

export default function AnimationScrollRightToLeft({
  children,
  duration = 0.8,
}: AnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration, delay: 0.2 }}
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
