import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: -100, rotation: -30, scale: 0.3 },
      {
        opacity: 1,
        y: 0,
        rotation: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black overflow-hidden">
      <h1 ref={textRef} className="text-4xl md:text-6xl font-bold text-white flex">
        {"Agro Connect India".split(" ").join("").split("").map((letter, index) => (
          <span key={index} className="inline-block mx-[2px]">{letter}</span>
        ))}
      </h1>
    </div>
  );
};

export default Loader;
