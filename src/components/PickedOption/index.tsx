import { Option } from '../Option';

interface PickedOptionProps {
  isPlayerOption: boolean;
  option: 'rock' | 'paper' | 'scissors';
  additionalStyles?: string;
}

export function PickedOption({
  isPlayerOption,
  option,
  additionalStyles
}: PickedOptionProps) {
  return (
    <div
      className={`
        flex
        flex-col
        md:flex-col-reverse
        md:text-xl
        items-center
        justify-center gap-7
        ${additionalStyles}
      `}
    >
      <Option as={option} />

      <p
        className={`
          uppercase
          text-white
          tracking-widest
          font-bold
          text-xs
          xs:text-lg
          md:text-xl
        `}
      >
        {isPlayerOption ? 'You picked' : 'The house picked'}
      </p>
    </div>
  );
}
