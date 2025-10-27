"use client";

import { useState } from 'react';
import { useStore } from '@/lib/store';

export default function ChooseYourPath() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [choices, setChoices] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const { setEasterEggMessage, addFoundCode } = useStore();

  const questions = [
    {
      id: 1,
      question: "Your consciousness can be uploaded to live forever in a perfect virtual reality.",
      choiceA: {
        text: "Accept Immortality",
        value: "digital",
      },
      choiceB: {
        text: "Remain Mortal",
        value: "physical",
      },
    },
    {
      id: 2,
      question: "An AI can predict your future with 99% accuracy, but knowing may change it.",
      choiceA: {
        text: "Know Your Future",
        value: "knowledge",
      },
      choiceB: {
        text: "Stay Uncertain",
        value: "ignorance",
      },
    },
    {
      id: 3,
      question: "You can erase any painful memory, but you'll lose the lessons learned from it.",
      choiceA: {
        text: "Erase the Pain",
        value: "comfort",
      },
      choiceB: {
        text: "Keep the Memory",
        value: "growth",
      },
    },
  ];

  const handleChoice = (value: string) => {
    const newChoices = [...choices, value];
    setChoices(newChoices);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 500);
    } else {
      setTimeout(() => {
        setShowResult(true);
        setEasterEggMessage('Path completed. Code: BANDERSNATCH');
        addFoundCode('BANDERSNATCH');
      }, 500);
    }
  };

  const getResult = () => {
    const digitalCount = choices.filter(c => c === 'digital' || c === 'knowledge' || c === 'comfort').length;

    if (digitalCount >= 2) {
      return {
        type: "The Technophile",
        description: "You embrace technology's promise, seeking control and transcendence through digital means.",
        recommendation: "USS Callister Collection",
        discount: "TECH15",
      };
    } else {
      return {
        type: "The Humanist",
        description: "You value authentic human experience, even with its pain and uncertainty.",
        recommendation: "San Junipero Collection",
        discount: "HUMAN15",
      };
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setChoices([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = getResult();

    return (
      <section className="relative w-full bg-bm-rich-black py-32">
        <div className="max-w-[900px] mx-auto px-8">
          {/* Result Card */}
          <div className="relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

            {/* Border */}
            <div className="absolute inset-0 border border-bm-accent/40" />

            {/* Scanlines */}
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

            {/* Content */}
            <div className="relative p-16 space-y-8">
              {/* Result Type */}
              <div className="text-center">
                <h3 className="text-[32px] font-black tracking-[0.2em] uppercase text-bm-accent mb-4">
                  {result.type}
                </h3>
                <p className="text-[11px] tracking-[0.15em] text-bm-gray max-w-[600px] mx-auto leading-relaxed">
                  {result.description}
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-bm-accent/50 to-transparent" />
              </div>

              {/* Recommendation */}
              <div className="text-center space-y-4">
                <p className="text-[9px] tracking-[0.25em] uppercase text-bm-gray/60">
                  Recommended For You
                </p>
                <p className="text-[14px] font-bold tracking-[0.15em] uppercase text-bm-white">
                  {result.recommendation}
                </p>
              </div>

              {/* Discount Code */}
              <div className="flex justify-center">
                <div className="px-8 py-4 border border-bm-accent/30 bg-bm-accent/5">
                  <div className="flex items-center gap-4">
                    <span className="text-[8px] tracking-[0.2em] uppercase text-bm-gray/70">
                      Your Code:
                    </span>
                    <span className="text-[16px] font-mono font-black tracking-wider text-bm-accent">
                      {result.discount}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-6 pt-8">
                <a
                  href="#shop"
                  className="px-12 py-4 bg-bm-accent text-bm-rich-black text-[9px] font-bold tracking-[0.25em] uppercase hover:bg-bm-white transition-all duration-300"
                >
                  Shop Now
                </a>
                <button
                  onClick={restart}
                  className="px-12 py-4 border border-bm-white/30 text-bm-white text-[9px] font-bold tracking-[0.25em] uppercase hover:border-bm-accent hover:text-bm-accent transition-all duration-300"
                >
                  Try Again
                </button>
              </div>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-bm-accent/10 to-transparent" />
            </div>
          </div>
        </div>

        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(164, 202, 236, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(164, 202, 236, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="relative w-full bg-bm-rich-black py-32">
      {/* Section Header */}
      <div className="max-w-[1200px] mx-auto px-8 mb-16">
        <div className="flex items-center gap-6">
          <div className="h-[1px] w-16 bg-bm-accent" />
          <h2 className="text-[11px] font-black tracking-[0.3em] uppercase text-bm-white">
            Choose Your Path
          </h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-bm-accent/50 to-transparent" />
        </div>
        <p className="text-bm-gray text-[9px] tracking-[0.2em] uppercase mt-4 ml-[88px]">
          Every choice shapes your reality
        </p>
      </div>

      {/* Question Card */}
      <div className="max-w-[1000px] mx-auto px-8">
        {/* Progress */}
        <div className="flex justify-center mb-12">
          <span className="text-[9px] font-mono tracking-wider text-bm-accent/60">
            Question {String(currentQuestion + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}
          </span>
        </div>

        {/* Question */}
        <div className="text-center mb-16">
          <h3 className="text-[18px] font-medium tracking-[0.1em] text-bm-white max-w-[700px] mx-auto leading-relaxed">
            {question.question}
          </h3>
        </div>

        {/* Choices */}
        <div className="grid grid-cols-2 gap-8 max-w-[800px] mx-auto">
          {/* Choice A */}
          <button
            onClick={() => handleChoice(question.choiceA.value)}
            className="group relative h-[200px] overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

            {/* Scanlines */}
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

            {/* Border */}
            <div className="absolute inset-0 border border-bm-white/20 group-hover:border-bm-accent transition-all duration-300" />

            {/* Glass overlay on hover */}
            <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-4">
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-bm-white group-hover:text-bm-accent transition-colors duration-300">
                {question.choiceA.text}
              </span>

              {/* Arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-bm-accent">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-bm-accent/10 to-transparent" />
            </div>
          </button>

          {/* Choice B */}
          <button
            onClick={() => handleChoice(question.choiceB.value)}
            className="group relative h-[200px] overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bm-dark via-bm-rich-black to-bm-dark" />

            {/* Scanlines */}
            <div className="absolute inset-0 scanlines opacity-5 pointer-events-none" />

            {/* Border */}
            <div className="absolute inset-0 border border-bm-white/20 group-hover:border-bm-accent transition-all duration-300" />

            {/* Glass overlay on hover */}
            <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center p-8 space-y-4">
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-bm-white group-hover:text-bm-accent transition-colors duration-300">
                {question.choiceB.text}
              </span>

              {/* Arrow */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-bm-accent">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
            </div>

            {/* Glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-bm-accent/10 to-transparent" />
            </div>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mt-16 max-w-[800px] mx-auto">
          <div className="h-[2px] bg-bm-gray/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-bm-accent transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(164, 202, 236, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(164, 202, 236, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
    </section>
  );
}
