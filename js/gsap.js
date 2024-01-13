gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.matchMedia({
  "(min-width: 800px)": function () {

    gsap.utils.toArray(".panel").forEach((element, i) => {
      ScrollTrigger.create({
        start: "top top",
        trigger: element,
        pin: true,
        pinSpacing: false
      })
    })

    gsap.from("#phone-mockup", {
      duration: 2,
      x: '-100vw',
      scrollTrigger: {
        trigger: ".sub-section",
        scrub: true,
        end: "top 4%"
      }
    })
    
    let sections = gsap.utils.toArray(".project")

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#portfolio",
        pin: true,
        scrub: 1,
        end: () => "+=8000"
      }
    })

  }
})