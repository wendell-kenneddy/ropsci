import { PlayOptions } from '../../contexts/GameContext';

import { useGame } from '../../hooks/useGame';

import { Option } from '../Option';
import { TriangleImage } from '../TriangleImage';

export function FirstStep() {
  const { pickPlayerOption, pickHouseOption, changeStep } = useGame();

  function nextStep(option: PlayOptions) {
    pickPlayerOption(option);
    pickHouseOption();
    changeStep('final');
  }

  return (
    <div
      className={`
        w-[90vw]
        max-w-[500px]
        h-80
        mx-auto
        relative
        grid
        items-center
        justify-between
        grid-cols-2
      `}
    >
      <TriangleImage />

      <Option as="paper" onClick={() => nextStep('paper')} />

      <Option
        as="scissors"
        additionalClasses="justify-self-end"
        onClick={() => nextStep('scissors')}
      />

      <Option
        as="rock"
        additionalClasses="justify-self-center col-span-2"
        onClick={() => nextStep('rock')}
      />
    </div>
  );
}
