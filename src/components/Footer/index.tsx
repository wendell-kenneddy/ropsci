import { useState } from 'react';

import { RulesModal } from '../RulesModal';
import { Button } from '../Button';

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  function handleRequestClose() {
    setIsOpen(false);
  }

  function handleRequestOpen() {
    setIsOpen(true);
  }

  return (
    <footer
      className={`
        w-[90vw]
        max-w-[600px]
        lg:max-w-[1200px]
        mx-auto
        flex
        items-center
        justify-center
        lg:justify-end
      `}
    >
      <Button variant="outlined" onClick={handleRequestOpen}>
        Rules
      </Button>

      {isOpen && <RulesModal onClose={handleRequestClose} />}
    </footer>
  );
}
