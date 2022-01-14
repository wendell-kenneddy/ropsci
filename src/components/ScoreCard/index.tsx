import { useGame } from '../../hooks/useGame';

export function ScoreCard() {
  const { score } = useGame();

  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        bg-white
        h-16
        md:h-20
        w-10
        py-1
        px-10
        rounded
      "
    >
      <span
        className="
         uppercase
         text-xs
         md:text-md
         tracking-widest
       text-score
         font-semibold
         antialised
       "
      >
        score
      </span>

      <span className="text-3xl md:text-5xl text-dark-text font-bold">
        {score}
      </span>
    </div>
  );
}
