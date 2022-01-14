import { useContext } from 'react';

import { GameContext } from '../contexts/GameContext';

export function useGame() {
  const context = useContext(GameContext);

  return context;
}
