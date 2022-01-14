import { createContext, ReactNode, useState } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

export type PlayOptions = 'rock' | 'paper' | 'scissors';

type Step = 'initial' | 'final';

interface GameContextData {
  step: 'initial' | 'final';
  score: number;
  playerOption: PlayOptions | null;
  houseOption: PlayOptions | null;
  changeStep: (step: Step) => void;
  pickPlayerOption: (option: PlayOptions) => void;
  pickHouseOption: () => void;
  updateScore: (newScore: number) => void;
  resetGame: () => void;
}

interface GameContextProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData);

export function GameContextProvider({ children }: GameContextProviderProps) {
  const [step, setStep] = useState<Step>('initial');
  const [playerOption, setPlayerOption] = useState<PlayOptions | null>(null);
  const [houseOption, setHouseOption] = useState<PlayOptions | null>(null);
  const [score, setScore] = useLocalStorage('@ropsci:score', 0);

  const pickPlayerOption = (option: PlayOptions) => setPlayerOption(option);

  const pickHouseOption = () => {
    const options = ['rock', 'paper', 'scissors'];

    const randomNumber = Math.floor(Math.random() * (options.length - 0) + 0);
    const option = options[randomNumber];

    setHouseOption(option as PlayOptions);
  };

  const updateScore = (newScore: number) => setScore(newScore);

  const changeStep = (step: Step) => setStep(step);

  const resetGame = () => {
    changeStep('initial');
    setPlayerOption(null);
    setHouseOption(null);
  };

  return (
    <GameContext.Provider
      value={{
        step,
        score,
        playerOption,
        houseOption,
        changeStep,
        pickPlayerOption,
        pickHouseOption,
        updateScore,
        resetGame
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
