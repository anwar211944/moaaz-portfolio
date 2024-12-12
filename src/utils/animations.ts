// Animation variants for containers
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Animation variants for individual items
export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Animation variants for horizontal slide
export const slideVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  }
};

// Common hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { type: "spring", stiffness: 300, damping: 10 }
};

export const hoverTap = {
  scale: 0.95
};