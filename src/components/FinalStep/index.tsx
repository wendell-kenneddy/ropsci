import { useEffect } from 'react';

import type { PlayOptions } from '../../contexts/GameContext';

import { useGame } from '../../hooks/useGame';

import { PickedOption } from '../PickedOption';
import { Win } from '../Win';
import { Lose } from '../Lose';
import { Draw } from '../Draw';

export function FinalStep() {
  const { playerOption, houseOption, updateScore, score } = useGame();

  const processResult = () => {
    if (playerOption === houseOption) return 'draw';
    if (playerOption === 'paper' && houseOption === 'rock') return 'win';
    if (playerOption === 'rock' && houseOption === 'scissors') return 'win';
    if (playerOption === 'scissors' && houseOption === 'paper') return 'win';
    return 'lose';
  };

  const result = processResult();

  useEffect(() => {
    if (result === 'win') updateScore(score + 1);
  }, []);

  return (
    <div
      className={`
        w-[90vw]
        max-w-[700px]
        h-80
        gap-10
        mx-auto
        grid
        grid-cols-2
        md:grid-cols-3
        items-center
        justify-center
      `}
    >
      <PickedOption
        isPlayerOption={true}
        option={playerOption as PlayOptions}
        additionalStyles="md:order-first"
      />

      <PickedOption
        isPlayerOption={false}
        option={houseOption as PlayOptions}
        additionalStyles="md:order-last"
      />
      {result === 'win' ? (
        <Win additionalStyles="mobileOnly:col-span-2" />
      ) : result === 'draw' ? (
        <Draw additionalStyles="mobileOnly:col-span-2" />
      ) : (
        <Lose additionalStyles="mobileOnly:col-span-2" />
      )}
    </div>
  );
}
