"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import "tailwindcss/tailwind.css";
import { useRef, type ReactNode } from "react";

interface WaterColorRevealProps {
  id?: string;
  child1?: ReactNode;
  child2?: ReactNode;
  width?: number | string;
  height?: number | string;
  revealFromCenter?: boolean;
  className?: string;
}

const WaterColorReveal = ({
  id,
  child1,
  child2,
  width = "100%",
  height = "100%",
  revealFromCenter = true,
  className = "",
}: WaterColorRevealProps) => {
  const elementRef = useRef(null);
  console.log("elementRef:", elementRef.current);

  // Animation runs while element is in viewport
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start center", "end start"],
  });

  // Add this to see if the hook is working at all
  console.log("useScroll hook initialized", { scrollYProgress });

  // Also log the element ref
  console.log("Element ref:", elementRef.current);

  // Convert percentage width/height to pixels
  const widthInPx =
    typeof width === "string" && width.endsWith("%")
      ? 1000 // Default pixel value if percentage
      : Number(width);

  const heightInPx =
    typeof height === "string" && height.endsWith("%")
      ? 1000 // Default pixel value if percentage
      : Number(height);

  // For center reveal, use circle radius
  const circleRadius = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, Math.max(widthInPx, heightInPx) * 0.47] // Increased to ensure full coverage
  );

  scrollYProgress.on("change", (value: number) => {
    console.log("scrollYProgress:", value);
    console.log("circleRadius:", circleRadius.get());
  });

  // For side reveal, use rectangle width
  const rectWidth = useTransform(scrollYProgress, [0, 1], [0, widthInPx]);

  return (
    <motion.div
      ref={elementRef}
      className={`relative ${className}`}
      style={{ transform: "translateZ(0)" }}
    >
      <svg width={widthInPx} height={heightInPx} className="absolute inset-0">
        <defs>
          <filter id="sandy2">
            <motion.feTurbulence
              type="fractalNoise"
              animate={{
                baseFrequency: [0.01, 0.02, 0.01],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              numOctaves={13}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <filter id="sandy3">
            <motion.feTurbulence
              type="fractalNoise"
              animate={{
                baseFrequency: [0.02, 0.01, 0.02],
                transition: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              numOctaves={13}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="60"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <mask id={`${id}-revealMask`}>
            {revealFromCenter ? (
              <motion.circle
                cx="50%"
                cy="50%"
                fill="white"
                r={circleRadius}
                filter="url(#sandy2)"
                animate={{
                  rotate: [0, 360],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            ) : (
              <motion.rect
                x="0"
                y="0"
                height={heightInPx}
                fill="white"
                filter="url(#sandy2)"
                style={{ width: rectWidth }}
              />
            )}
          </mask>
          <mask id={`${id}-revealMask2`}>
            {revealFromCenter ? (
              <motion.circle
                cx="50%"
                cy="50%"
                fill="white"
                r={circleRadius}
                filter="url(#sandy3)"
              />
            ) : (
              <motion.rect
                x="0"
                y="0"
                height={heightInPx}
                fill="white"
                filter="url(#sandy3)"
                style={{ width: rectWidth }}
              />
            )}
          </mask>
        </defs>
        <foreignObject width={widthInPx} height={heightInPx}>
          <div
            className="w-full h-full">
            <div>{child1}</div>
            <div>{child2}</div>
            <motion.div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%]"
            style={{
              mask: `url(#${id}-revealMask)`,
              WebkitMask: `url(#${id}-revealMask)`,
              background: "radial-gradient(circle, rgba(0,0,0,0) 62%, rgba(0,0,0,1) 42%)",
            }}
            animate={{
              opacity: [0.5, 0, 0.5],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            />
            <motion.div className="absolute top-[0%] left-[0%] translate-x-[-50%] translate-y-[-50%] w-[100%] h-[100%] "
            style={{
              mask: `url(#${id}-revealMask2)`,
              WebkitMask: `url(#${id}-revealMask2)`,
              background: "radial-gradient(circle, rgba(0,0,0,0) 62%, rgba(0,0,0,1) 42%)",
              rotate: "180deg"
            }}
            animate={{
              opacity: [0, 0.7, 0],
              transition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }
            }}
            />
          </div>
        </foreignObject>
      </svg>
      {/* Original content rendered underneath to maintain layout */}
      <div className="invisible">
        <div>{child1}</div>
        <div>{child2}</div>
      </div>
    </motion.div>
  );
};

export default WaterColorReveal;
