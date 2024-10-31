import { useEffect, useState } from 'react';

interface SparkProps {
  angle: number;
  color: string;
  delay: number;
}

function Spark({ angle, color, delay }: SparkProps) {
  const distance = 50 + Math.random() * 30;
  
  return (
    <div
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: color,
        transform: `rotate(${angle}deg) translateY(-${distance}px)`,
        animation: `spark-fly 1s ease-out ${delay}s forwards`,
        opacity: 0,
      }}
    />
  );
}

export default function Firework() {
  const [position] = useState({
    x: Math.random() * 100,
    y: Math.random() * 100,
  });

  const [sparks] = useState(() => {
    const colors = [
      '#FFD700', // Gold
      '#FF4500', // Red Orange
      '#FF1493', // Deep Pink
      '#00FF00', // Lime
      '#FF00FF', // Magenta
      '#00FFFF', // Cyan
    ];
    
    return Array.from({ length: 12 }, (_, i) => ({
      angle: (i * 30) + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 0.2,
    }));
  });

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="absolute w-8 h-8"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Main burst */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 animate-firework-burst bg-gradient-to-r from-yellow-300 via-orange-500 to-red-500 rounded-full" />
        <div className="absolute inset-0 animate-firework-glow bg-white/30 rounded-full blur-md" />
        
        {/* Sparks */}
        <div className="absolute inset-0 origin-center">
          {sparks.map((spark, i) => (
            <Spark key={i} {...spark} />
          ))}
        </div>
      </div>
    </div>
  );
}