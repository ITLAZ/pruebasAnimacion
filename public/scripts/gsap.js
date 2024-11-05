// gsap.js

// Cambia require por import
import { gsap } from "/node_modules/gsap/index.js";
import { ScrollTrigger } from "/node_modules/gsap/ScrollTrigger.js";
import Flip from "/node_modules/gsap/Flip.js";

// Registra los plugins de GSAP
gsap.registerPlugin(ScrollTrigger, Flip);

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger, Flip);
    
    let ball = document.querySelector(".ball"),
      parentSection = document.querySelector(".section.first"),
      content = document.querySelector(".content"),
      flipCtx;
    
    const createTween = () => {
      flipCtx && flipCtx.revert();
    
      flipCtx = gsap.context(() => {
        let state = Flip.getState(ball); // grab the state so we can record where the ball is
        content.appendChild(ball); // reparent
        Flip.fit(ball, state); // apply transforms to fit the ball visually where it was previously when we captured the state
    
        const tl = gsap
          .timeline({
            scrollTrigger: {
              trigger: parentSection,
              start: "bottom 85%",
              end: "bottom 25%",
              scrub: 1,
              immediateRender: false
            }
          })
          .to(ball, { x: "40vw", ease: "none" })
          .to(ball, { y: 0, ease: "none" })
          .to(ball, { x: 0, ease: "none" });
        return () => {
          // when the context reverts, return the ball to the original parentSection and clear the inline styles
          parentSection.appendChild(ball);
          gsap.set(ball, { clearProps: "all" });
        };
      });
    };
    
    createTween();
    
    window.addEventListener("resize", createTween);
});