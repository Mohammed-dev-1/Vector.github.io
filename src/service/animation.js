import { gsap } from 'gsap';

// AOS.init();

gsap.from("#spaceMan", {
  duration: 2,
  opacity: 0.4,
  yPercent: -100,
  delay: 1
})

gsap.to("#spaceMan", {
  duration: 2,
  opacity: 1,
  yPercent: 0,
  delay: 1
})


gsap.from("#bg-sapce", {
  duration: 2,
  opacity: 0,
  delay: 2
})

gsap.to("#bg-sapce", {
  duration: 2,
  opacity: 1,
  delay: 2
})


gsap.from("#title1", {
  duration: 2,
  opacity: 0,
  xPercent: -100 
})

gsap.to("#title1", {
  duration: 2,
  opacity: 1,
  xPercent: 0
})
gsap.from("#title2", {
  duration: 2,
  opacity: 0,
  xPercent: 100 
})

gsap.to("#title2", {
  duration: 2,
  opacity: 1,
  xPercent: 0
})


gsap.from("#nav-haed", {
  duration: 2,
  opacity: 0,
  yPercent: -100,
  delay: 3 
})

gsap.to("#nav-haed", {
  duration: 2,
  opacity: 1,
  yPercent: 0,
  delay: 3
})