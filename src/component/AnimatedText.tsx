import React from "react";
import { motion } from "framer-motion";

type AnimatedTextProps = {
  text: string;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({ text }) => {
  const letters = Array.from(text);
  //   console.log(letters);

  const terms = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: () => ({
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: 0.04 },
        }),
      }}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={terms}>
          {/* {letter === " " ? "\u00A0" : letter} */}
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};
export default AnimatedText;
