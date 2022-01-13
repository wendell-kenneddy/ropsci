import { Button } from '../Button';

interface LoseProps {
  onPlayAgain: () => void;
  additionalStyles?: string;
}

export function Lose({ onPlayAgain, additionalStyles }: LoseProps) {
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
        onClick={onPlayAgain}
      >
        Play again
      </Button>
    </div>
  );
}
