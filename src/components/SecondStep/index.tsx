import { PickedOption } from '../PickedOption';

interface SecondStepProps {
  playerOption: 'rock' | 'paper' | 'scissors';
  houseOption: 'rock' | 'paper' | 'scissors';
}

export function SecondStep({ playerOption, houseOption }: SecondStepProps) {
  return (
    <div
      className={`
        w-[90vw]
        max-w-[600px]
        h-80
        mx-auto
        flex
        items-center
        justify-between
      `}
    >
      <PickedOption isPlayerOption={true} option={playerOption} />
      <PickedOption isPlayerOption={false} option={houseOption} />
    </div>
  );
}
