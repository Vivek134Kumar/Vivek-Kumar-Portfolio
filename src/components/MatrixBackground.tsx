"use client";

import { useEffect, useRef } from "react";

export default function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false }); // Disable alpha channel for potential speedup
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const resizeCanvas = () => {
      // Force DPR to 1 for performance
      const dpr = 1; 
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const characters = "01";
    const fontSize = 14;
    // Calculate columns based on potentially new width
    let columns = Math.ceil(canvas.width / fontSize);
    
    // Initialize drops and speeds
    let drops = new Array(columns).fill(1).map(() => Math.random() * -100);
    let speeds = new Array(columns).fill(1).map(() => Math.random() * 0.5 + 0.5);

    // Re-initialize arrays on resize to avoid out of bounds or empty columns
    const handleResize = () => {
        resizeCanvas();
        columns = Math.ceil(canvas.width / fontSize);
        drops = new Array(columns).fill(1).map(() => Math.random() * -100);
        speeds = new Array(columns).fill(1).map(() => Math.random() * 0.5 + 0.5);
    };
    window.removeEventListener("resize", resizeCanvas); // Remove the simple one
    window.addEventListener("resize", handleResize);

    const draw = (time: number) => {
      const deltaTime = time - lastTime;

      if (deltaTime >= interval) {
        lastTime = time - (deltaTime % interval);

        // Dark trail effect with varying opacity for depth
        ctx.fillStyle = "rgba(11, 13, 23, 0.3)"; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
            const text = characters.charAt(Math.floor(Math.random() * characters.length));
            
            // Color palette: Cyan/Blue (No Green)
            const isBright = Math.random() > 0.95;
            ctx.fillStyle = isBright ? "rgba(102, 252, 241, 0.8)" : "rgba(31, 40, 51, 0.5)"; 
            
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            // Reset when off screen (randomly)
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
            }

            // Increment by specific column speed
            drops[i] += speeds[i];
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
