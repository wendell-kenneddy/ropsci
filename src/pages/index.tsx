import Head from 'next/head';

import { useGame } from '../hooks/useGame';

import { FirstStep } from '../components/FirstStep';
import { FinalStep } from '../components/FinalStep';

export default function Home() {
  const { step } = useGame();

  return (
    <>
      <Head>
        <meta name="author" content="Wendell Kenneddy" />
        <meta name="description" content="A Rock, Paper, Scissors app." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ropsci" />
        <meta property="og:site_name" content="Ropsci" />
        <meta
          property="og:description"
          content="A Rock, Paper, Scissors app."
        />
        <meta property="og:locale" content="pt-BR" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Ropsci" />
        <meta
          property="twitter:description"
          content="A Rock, Paper, Scissors app."
        />
        <title>Ropsci</title>
      </Head>

      <main role="main" className="my-12">
        {step === 'initial' ? <FirstStep /> : <FinalStep />}
      </main>
    </>
  );
}
