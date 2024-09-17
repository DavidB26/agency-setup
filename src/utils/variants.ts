const transition = {
  transition: { 
    duration: 1, 
    ease: "easeOut"
  }
}

export const fadeIn = {
  visible: { opacity: 1, ...transition },
  hidden: { opacity: 0 },
}

export const leftToRight = {
  visible: { opacity: 1, x: 0, ...transition },
  hidden: { opacity: 0, x: -100 },
}

export const RightToLeft = {
  visible: { opacity: 1, x: 0, ...transition },
  hidden: { opacity: 0, x: 100 },
}

export const bottomToTop = {
  visible: { opacity: 1, y: 0, ...transition },
  hidden: { opacity: 0, y: 100 }
};