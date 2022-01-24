import Image from 'next/image';
import Link from 'next/link';

import { ScoreCard } from '../ScoreCard';

export function Header() {
  return (
    <header
      className="
        w-[90vw]
        max-w-[600px]
        min-h-20
        py-2
        px-4
        my-8
        mx-auto
        border-[2px]
        border-header-outline
        border-solid
        rounded-lg flex
        items-center
        justify-between
      "
    >
      <h1>
        <Link href="/">
          <a className="w-20 h-10 block relative md:w-40 md:h-20">
            <Image src="/logo.svg" alt="Logo" layout="fill" priority />
          </a>
        </Link>
      </h1>

      <ScoreCard />
    </header>
  );
}
