import { useEffect, useState } from 'react';
import Firework from './Firework';

interface GreetingProps {
  name: string;
}

export default function Greeting({ name }: GreetingProps) {
  const [fireworks, setFireworks] = useState<number[]>([]);

  useEffect(() => {
    const addFirework = () => {
      setFireworks(prev => [...prev, Date.now()].slice(-12));
    };

    // Initial burst of fireworks
    for (let i = 0; i < 5; i++) {
      setTimeout(() => addFirework(), i * 300);
    }

    // Continuous fireworks
    const interval = setInterval(() => {
      addFirework();
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0 bg-black/50" />
      {fireworks.map(id => (
        <Firework key={id} />
      ))}
      <div className="text-center z-10 animate-float">
        <h1 className="text-7xl font-bold mb-4 animate-text-glow">
          <span className="bg-gradient-to-r from-yellow-300 via-orange-500 to-pink-500 bg-clip-text text-transparent">
            HAPPY DIWALI
          </span>
        </h1>
        <p className="text-4xl text-white font-semibold mt-4 animate-pulse">
          {name}!
        </p>
        <p className="text-xl text-yellow-300 mt-6 opacity-90">
          May your life be as bright as the lights of Diwali
        </p>
      </div>
    </div>
  );
}