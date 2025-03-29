
import React, { useEffect, useRef } from 'react';

const CyberBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Grid parameters
    const gridSize = 40;
    const gridDotSize = 1;
    
    // Digital rain particles
    const rainCount = 100;
    const rainParticles: {
      x: number;
      y: number;
      length: number;
      speed: number;
      color: string;
      thickness: number;
    }[] = [];
    
    // Glitch parameters
    let glitchTimeout: number | null = null;
    let isGlitching = false;
    
    // Initialize particles
    for (let i = 0; i < rainCount; i++) {
      rainParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.floor(Math.random() * 15) + 10,
        speed: Math.random() * 3 + 1,
        color: getRandomColor(),
        thickness: Math.random() * 2 + 1
      });
    }
    
    function getRandomColor() {
      const colors = [
        'rgba(0, 240, 255, 0.8)',  // Neon blue
        'rgba(217, 70, 239, 0.8)', // Neon purple
        'rgba(0, 255, 102, 0.8)',  // Neon green
        'rgba(255, 41, 87, 0.8)'   // Neon red
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function drawGrid() {
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.15)';
      ctx.lineWidth = 0.5;
      
      // Draw grid lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw grid intersections with dots
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, gridDotSize, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(0, 240, 255, 0.5)';
          ctx.fill();
        }
      }
    }
    
    function drawRain() {
      rainParticles.forEach((particle) => {
        ctx.beginPath();
        ctx.strokeStyle = particle.color;
        ctx.lineWidth = particle.thickness;
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x, particle.y + particle.length);
        ctx.stroke();
        
        particle.y += particle.speed;
        
        if (particle.y > canvas.height) {
          particle.y = 0 - particle.length;
          particle.x = Math.random() * canvas.width;
        }
      });
    }
    
    function triggerGlitch() {
      if (glitchTimeout) {
        clearTimeout(glitchTimeout);
      }
      
      isGlitching = true;
      
      glitchTimeout = window.setTimeout(() => {
        isGlitching = false;
        
        // Schedule next glitch
        glitchTimeout = window.setTimeout(triggerGlitch, Math.random() * 10000 + 5000);
      }, Math.random() * 500 + 100);
    }
    
    function drawGlitchEffect() {
      if (!isGlitching) return;
      
      // Random glitch rectangles
      const numGlitches = Math.floor(Math.random() * 10) + 5;
      
      for (let i = 0; i < numGlitches; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 100 + 50;
        const height = Math.random() * 20 + 5;
        
        ctx.fillStyle = getRandomColor().replace('0.8', '0.3');
        ctx.fillRect(x, y, width, height);
      }
      
      // Scanlines
      for (let y = 0; y < canvas.height; y += 5) {
        if (Math.random() > 0.7) {
          ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.fillRect(0, y, canvas.width, 1);
        }
      }
    }
    
    function draw() {
      // Clear the canvas with a semi-transparent black to create trail effect
      ctx.fillStyle = 'rgba(12, 12, 20, 0.2)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw the background elements
      drawGrid();
      drawRain();
      drawGlitchEffect();
      
      requestAnimationFrame(draw);
    }
    
    // Start the animation
    draw();
    
    // Schedule first glitch
    glitchTimeout = window.setTimeout(triggerGlitch, Math.random() * 5000 + 2000);
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (glitchTimeout) {
        clearTimeout(glitchTimeout);
      }
    };
  }, []);
  
  return (
    <>
      <canvas ref={canvasRef} className="cyber-background" />
      <div className="scan-line"></div>
    </>
  );
};

export default CyberBackground;
