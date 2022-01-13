import { Button } from '../Button';

interface WinProps {
  onPlayAgain: () => void;
  additionalStyles?: string;
}

export function Win({ onPlayAgain, additionalStyles }: WinProps) {
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
        onClick={onPlayAgain}
      >
        Play again
      </Button>
    </div>
  );
}
