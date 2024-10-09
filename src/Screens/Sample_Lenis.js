import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { addEffect, Canvas, useFrame, useThree } from "@react-three/fiber";
//import "./styles.css"; // Use styles.css instead of styles.scss
import Image from "../assets/lenis.jpg"; // Change to local image
import gsap from "gsap";
import tunnel from "tunnel-rat";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const webglTunnel = tunnel();

function Sample_Lenis() {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.y = -window.scrollY;
  });
}

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  lerp: 0.05,
  smooth: true,
  direction: "vertical",
});

// Get scroll value
lenis.on("scroll", ({ scroll, limit }) => {
  console.log({ scroll, limit });
});

function raf() {
  lenis.raf();
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    gsap.to(ref.current, {
      y: -200,
      scrollTrigger: {
        trigger: ".App",
        start: "top 25%",
        end: "bottom 25%",
        markers: true,
        scrub: 1,
      },
    });

    gsap.set("img", {
      width: "150px",
    });

    gsap.to("img", {
      width: "150%",
      scrollTrigger: {
        trigger: ".App",
        start: "top top",
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
      direction: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    addEffect((time) => {
      lenis.raf(time);
    });
  }, []);

  return (
    <>
      <div className="App">
        <h1 ref={ref}>Maglanderhof.</h1>
      </div>
      <div className="svg__img">
        <img src={Image} alt="Lenis" />
      </div>
      <div id="webgl">
        <Canvas
          orthographic
          linear
          flat
          gl={{ alpha: true, antialias: true, stencil: false, depth: false }}
          dpr={[1, 2]}
        >
          <Sample_Lenis />
          <webglTunnel.Out />
        </Canvas>
      </div>
      <div id="dom">
        <h1 style={{ position: "absolute", top: `100vh`, right: "20vw", fontSize: "25em", transform: `translate3d(0,-100%,0)` }}>
          all
        </h1>
        <h1 style={{ position: "absolute", top: "180vh", left: "10vw" }}>hail</h1>
        <h1 style={{ position: "absolute", top: "260vh", right: "10vw" }}>thee,</h1>
        <h1 style={{ position: "absolute", top: "350vh", left: "10vw" }}>thoth</h1>
        <h1 style={{ position: "absolute", top: "450vh", right: "10vw" }}>
          her
          <br />
          mes.
        </h1>
      </div>
    </>
  );
}
