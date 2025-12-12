var gtl=gsap.timeline({scrollTrigger:{
  trigger:".two",
  start:"80% 60%",
  end:"130% 50%",
  scrub:true,
  markers:false
}
})
gtl.to("#monster",{
  top: "210%",
  left: "26%",
  height: "22rem",
  duration: 6
},"kunal")

gsap.from(".rght-two h1", {
    scrollTrigger: {
      trigger: ".rght-two p",
      start: "top 80%",   // when paragraph enters viewport
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,               // moves up from below
    duration: 1.2,
    ease: "power3.out",
  });
gsap.from(".rght-two p", {
    scrollTrigger: {
      trigger: ".rght-two p",
      start: "top 80%",   // when paragraph enters viewport
      toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,               // moves up from below
    duration: 1.2,
    ease: "power3.out",
  });