import { PickedOption } from '../PickedOption';
import { Win } from '../Win';
import { Lose } from '../Lose';

interface FinalStepProps {
  playerOption: 'rock' | 'paper' | 'scissors';
  houseOption: 'rock' | 'paper' | 'scissors';
}

export function FinalStep({ playerOption, houseOption }: FinalStepProps) {
  const isWin = false;

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
        option={playerOption}
        additionalStyles="md:order-first"
      />
      <PickedOption
        isPlayerOption={false}
        option={houseOption}
        additionalStyles="md:order-last"
      />
      {isWin ? (
        <Win onPlayAgain={() => {}} additionalStyles="mobileOnly:col-span-2" />
      ) : (
        <Lose onPlayAgain={() => {}} additionalStyles="mobileOnly:col-span-2" />
      )}
    </div>
  );
}
