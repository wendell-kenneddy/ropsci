import type { AppProps } from 'next/app';

import { GameContextProvider } from '../contexts/GameContext';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GameContextProvider>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </GameContextProvider>
  );
}
