import { type ChangeEvent } from 'react';

interface NameInputProps {
  name: string;
  setName: (name: string) => void;
  onNext: () => void;
}

export default function NameInput({ name, setName, onNext }: NameInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center animate-gradient">
      <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md mx-4 text-center transform hover:scale-105 transition-all duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-md -z-10" />
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
          Enter Your Name
        </h2>
        <input
          type="text"
          value={name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border-2 border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-6 text-lg bg-white/80"
          placeholder="Type your name here..."
        />
        <button
          onClick={onNext}
          className="px-8 py-3 text-lg font-semibold rounded-full animate-button-gradient bg-gradient-to-r from-purple-600 to-pink-600 text-white transform hover:scale-105 transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100"
          disabled={!name.trim()}
        >
          Next
        </button>
      </div>
    </div>
  );
}