import { useState } from 'react';
import NameInput from './components/NameInput';
import Greeting from './components/Greeting';

export default function App() {
  const [name, setName] = useState('');
  const [showGreeting, setShowGreeting] = useState(false);

  const handleNext = () => {
    if (name.trim()) {
      setShowGreeting(true);
    }
  };

  return (
    <div className="min-h-screen w-full">
      {!showGreeting ? (
        <NameInput name={name} setName={setName} onNext={handleNext} />
      ) : (
        <Greeting name={name} />
      )}
    </div>
  );
}