import Image from 'next/image';

interface OptionProps extends React.HTMLAttributes<HTMLDivElement> {
  as: 'paper' | 'rock' | 'scissors';
  additionalClasses?: string;
}

const BORDER_COLORS = {
  rock: '#dc2e4e',
  scissors: '#ec9e0e',
  paper: '#4865f4'
};

export function Option({ as, additionalClasses }: OptionProps) {
  function getBorderColor() {
    if (as === 'paper') return 'border-paper-border';
    if (as === 'rock') return 'border-rock-border';
    if (as === 'scissors') return 'border-scissors-border';
  }

  return (
    <div
      className={`
        bg-white
        w-32 h-32
        xs:w-36 xs:h-36
        md:w-48 md:h-48
        lg:w-52 lg:h-52
        fold:w-28 fold:h-28
        rounded-full
        flex justify-center
        items-center
        border-solid
        border-[16px]
        ${getBorderColor()}
        hover:cursor-pointer
        hover:opacity-75
        transition-opacity
        duration-200
        ${additionalClasses}
      `}
    >
      <div className="relative w-3/6 h-3/6">
        <Image src={`/icon-${as}.svg`} alt="Papel" layout="fill" />
      </div>
    </div>
  );
}
