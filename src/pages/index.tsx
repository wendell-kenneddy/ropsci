import { useGame } from '../hooks/useGame';

import { FirstStep } from '../components/FirstStep';
import { FinalStep } from '../components/FinalStep';

export default function Home() {
  const { step } = useGame();

  return (
    <main role="main" className="my-12">
      {step === 'initial' ? <FirstStep /> : <FinalStep />}
    </main>
  );
}
