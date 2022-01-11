import { useEffect } from 'react';

import Image from 'next/image';

interface RulesModalProps {
  onClose: () => void;
}

export function RulesModal({ onClose }: RulesModalProps) {
  useEffect(() => {
    function closeOnEsc(e: KeyboardEvent) {
      const key = e.key;

      if (key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEsc);

    return () => window.removeEventListener('keydown', closeOnEsc);
  }, [onClose]);

  return (
    <div
      className={`
      w-full
      h-full
      fixed
      top-0
      left-0
      z-50
    bg-black
      bg-opacity-40
      grid
      place-items-center
    `}
    >
      <div
        className={`
        w-full
        sm:w-[90vw]
        sm:max-w-[370px]
        sm:max-h-[370px]
        h-full
        bg-white
        rounded
        p-6
        shadow-md
        relative
        flex
        flex-col
        items-center
        justify-center
      `}
      >
        <div
          className={`
          w-full
          flex
          items-center
          justify-center
          sm:justify-between
        `}
        >
          <h2
            className={`
            uppercase
          text-dark-text
            font-bold
            text-2xl
          `}
          >
            Rules
          </h2>

          <button
            name="Close modal"
            type="button"
            className={`
              text-xl
            text-header-outline
              absolute
              bottom-12
              sm:static
            `}
            onClick={onClose}
          >
            X
          </button>
        </div>

        <div
          className={`
          relative
          w-[230px]
          sm:w-[304px]
          h-[196px]
          sm:h-[270px]
          mt-20
          mx-auto
          sm:mt-12
        `}
        >
          <Image src="/image-rules.svg" alt="Rules" layout="fill" />
        </div>
      </div>
    </div>
  );
}
