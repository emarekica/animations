"use strict";

// for chaining animation
const timeline = gsap.timeline({
  defaults: {
    ease: "power1.out",
  },
});

// select elements and animate them
timeline
  .to(".text", { y: "0%", duration: 3 })
  .to(".text-red", { y: "0%", duration: 7 });

timeline.to(".slider", { y: "-100%", duration: 1.5, delay: 10 }, "-=9");

timeline.to(".intro", { y: "-100%", duration: 1 });

timeline.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
timeline.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 });
