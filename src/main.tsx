import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { ColorModeProvider } from '@/lib/colorMode';
import { ScoresProvider } from '@/lib/scores';
import { TierProvider } from '@/lib/tier';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ColorModeProvider>
      <TierProvider>
        <ScoresProvider>
          <App />
        </ScoresProvider>
      </TierProvider>
    </ColorModeProvider>
  </StrictMode>,
);
