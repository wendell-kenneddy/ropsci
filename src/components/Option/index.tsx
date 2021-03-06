import { ButtonHTMLAttributes } from 'react';

import Image from 'next/image';

import { PlayOptions } from '../../contexts/GameContext';

interface OptionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as: PlayOptions;
  additionalClasses?: string;
}

export function Option({ as, additionalClasses, ...rest }: OptionProps) {
  function getBorderColor() {
    if (as === 'paper') return 'border-paper-border';
    if (as === 'rock') return 'border-rock-border';
    if (as === 'scissors') return 'border-scissors-border';
  }

  function getShadowColor() {
    if (as === 'paper') return 'shadow-paper-border';
    if (as === 'rock') return 'shadow-rock-border';
    if (as === 'scissors') return 'shadow-scissors-border';
  }

  return (
    <button
      type="button"
      name={as}
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
        shadow-lg
        ${getShadowColor()}
        ${additionalClasses}
      `}
      {...rest}
    >
      <div className="relative w-3/6 h-3/6">
        <Image src={`/icon-${as}.svg`} alt={as} layout="fill" />
      </div>
    </button>
  );
}
