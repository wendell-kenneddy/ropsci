import { useGame } from '../../hooks/useGame';

import { Button } from '../Button';

interface DrawProps {
  additionalStyles?: string;
}

export function Draw({ additionalStyles }: DrawProps) {
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
        A draw
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
