import { Option } from '../Option';
import { TriangleImage } from '../TriangleImage';

export function FirstStep() {
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
      <Option as="paper" />
      <Option as="scissors" additionalClasses="justify-self-end " />
      <Option as="rock" additionalClasses="justify-self-center col-span-2" />
    </div>
  );
}
