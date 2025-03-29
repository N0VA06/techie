
import React, { useEffect, useRef } from 'react';

const GothamBackground: React.FC = () => {
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
    const gridDotSize = 0.5;
    
    // Rain particles
    const rainCount = 60;
    const rainParticles: {
      x: number;
      y: number;
      length: number;
      speed: number;
      color: string;
      thickness: number;
      opacity: number;
    }[] = [];
    
    // Glitch parameters
    let glitchTimeout: number | null = null;
    let isGlitching = false;
    
    // Fog/Mist parameters
    const fogCount = 8;
    const fogParticles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
    }[] = [];
    
    // Initialize rain particles
    for (let i = 0; i < rainCount; i++) {
      rainParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.floor(Math.random() * 10) + 3,
        speed: Math.random() * 1.5 + 0.5,
        color: getRandomColor(),
        thickness: Math.random() * 0.8 + 0.2,
        opacity: Math.random() * 0.4 + 0.1
      });
    }
    
    // Initialize fog particles
    for (let i = 0; i < fogCount; i++) {
      fogParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 150 + 100,
        speed: Math.random() * 0.2 + 0.1,
        opacity: Math.random() * 0.05 + 0.02
      });
    }
    
    function getRandomColor() {
      const colors = [
        'rgba(30, 78, 104, 0.5)',  // Subdued blue
        'rgba(42, 30, 65, 0.4)',  // Muted purple
        'rgba(31, 38, 46, 0.5)',  // Dark steel
        'rgba(13, 46, 41, 0.3)'   // Deep muted green
      ];
      return colors[Math.floor(Math.random() * colors.length)];
    }
    
    function drawGrid() {
      ctx.strokeStyle = 'rgba(30, 40, 50, 0.1)';
      ctx.lineWidth = 0.3;
      
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
          ctx.fillStyle = 'rgba(30, 40, 50, 0.2)';
          ctx.fill();
        }
      }
    }
    
    function drawRain() {
      rainParticles.forEach((particle) => {
        ctx.beginPath();
        ctx.strokeStyle = particle.color.replace(/[^,]+(?=\))/, particle.opacity.toString());
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
    
    function drawFog() {
      fogParticles.forEach((particle) => {
        const gradient = ctx.createRadialGradient(
          particle.x, 
          particle.y, 
          0, 
          particle.x, 
          particle.y, 
          particle.size
        );
        
        gradient.addColorStop(0, `rgba(15, 20, 30, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(15, 20, 30, 0)');
        
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        
        particle.x += particle.speed;
        
        if (particle.x > canvas.width + particle.size) {
          particle.x = -particle.size;
          particle.y = Math.random() * canvas.height;
        }
      });
    }
    
    // Draw Gotham skyline silhouette
    function drawSkyline() {
      ctx.fillStyle = 'rgba(10, 12, 16, 0.6)';
      
      // Create random building heights
      const buildingWidths = [30, 40, 60, 50, 30, 70, 40, 80, 50, 20, 60, 30, 50, 40, 90];
      const maxHeight = canvas.height * 0.18;
      let xPos = 0;
      
      buildingWidths.forEach(width => {
        const height = Math.random() * maxHeight + (maxHeight * 0.4);
        ctx.fillRect(xPos, canvas.height - height, width, height);
        xPos += width;
        
        // Add small details to buildings
        if (Math.random() > 0.7) {
          ctx.fillRect(xPos - width * 0.8, canvas.height - height - 15, width * 0.6, 15);
        }
        
        // Add dim windows - fewer and dimmer
        ctx.fillStyle = 'rgba(30, 40, 60, 0.03)';
        for (let wx = xPos - width + 5; wx < xPos - 5; wx += 10) {
          for (let wy = canvas.height - height + 15; wy < canvas.height - 10; wy += 20) {
            if (Math.random() > 0.7) { // fewer windows
              ctx.fillRect(wx, wy, 3, 6);
            }
          }
        }
        ctx.fillStyle = 'rgba(10, 12, 16, 0.6)';
      });
    }
    
    function triggerGlitch() {
      if (glitchTimeout) {
        clearTimeout(glitchTimeout);
      }
      
      isGlitching = true;
      
      glitchTimeout = window.setTimeout(() => {
        isGlitching = false;
        
        // Schedule next glitch - less frequent
        glitchTimeout = window.setTimeout(triggerGlitch, Math.random() * 12000 + 8000);
      }, Math.random() * 200 + 50);
    }
    
    function drawGlitchEffect() {
      if (!isGlitching) return;
      
      // Fewer random glitch rectangles
      const numGlitches = Math.floor(Math.random() * 3) + 1;
      
      for (let i = 0; i < numGlitches; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const width = Math.random() * 60 + 10;
        const height = Math.random() * 6 + 1;
        
        ctx.fillStyle = getRandomColor().replace(/[^,]+(?=\))/, '0.08');
        ctx.fillRect(x, y, width, height);
      }
      
      // Subtle scanlines
      for (let y = 0; y < canvas.height; y += 15) {
        if (Math.random() > 0.9) {
          ctx.fillStyle = 'rgba(30, 40, 60, 0.02)';
          ctx.fillRect(0, y, canvas.width, 1);
        }
      }
    }
    
    function draw() {
      // Clear the canvas with a semi-transparent black
      ctx.fillStyle = 'rgba(7, 7, 9, 0.4)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw the background elements
      drawGrid();
      drawFog();
      drawSkyline();
      drawRain();
      drawGlitchEffect();
      
      requestAnimationFrame(draw);
    }
    
    // Start the animation
    draw();
    
    // Schedule first glitch - less frequent
    glitchTimeout = window.setTimeout(triggerGlitch, Math.random() * 8000 + 5000);
    
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
      <div className="gotham-mist"></div>
    </>
  );
};

export default GothamBackground;
