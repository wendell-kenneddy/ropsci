import { useGame } from '../../hooks/useGame';

import { Button } from '../Button';

interface WinProps {
  additionalStyles?: string;
}

export function Win({ additionalStyles }: WinProps) {
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
        You win
      </p>

      <Button
        variant="contained"
        additionalStyles="uppercase"
        onClick={resetGame}
      >
        Play again
      </Button>
    </div>
  );
}
