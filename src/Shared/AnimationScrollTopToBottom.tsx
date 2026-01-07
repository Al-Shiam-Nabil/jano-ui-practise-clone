import { motion } from "motion/react";
type AnimationType = {
  children: React.ReactNode;
  duration?: number;
};

export default function AnimationScrollTopToBottom({
  children,
  duration = 0.8,
}: AnimationType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration }}
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
