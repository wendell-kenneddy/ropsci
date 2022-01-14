import { useGame } from '../../hooks/useGame';

import { Button } from '../Button';

interface LoseProps {
  additionalStyles?: string;
}

export function Lose({ additionalStyles }: LoseProps) {
  const { resetGame } = useGame();

  return (
    <div
      className={`
      flex
      flex-col
      items-center
      justify-center
      gap-3
      ${additionalStyles}
    `}
    >
      <p className="uppercase text-white text-2xl font-bold tracking-widest">
        You lose
      </p>

      <Button
        variant="contained"
        additionalStyles="uppercase hover:text-rock-border"
        onClick={resetGame}
      >
        Play again
      </Button>
    </div>
  );
}
