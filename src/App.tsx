import React, { useState } from 'react';
import { LockedPage } from './components/LockedPage';
import { UnlockedPage } from './components/UnlockedPage';
import { getPasswordHint } from './utils/passwordUtils';

function App() {
  const [password, setPassword] = useState('');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const correctPassword = 'nenem';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === correctPassword) {
      setIsUnlocked(true);
    } else {
      setAttempts(prev => prev + 1);
      setPassword('');
    }
  };

  if (isUnlocked) {
    return <UnlockedPage />;
  }

  return (
    <LockedPage
      password={password}
      attempts={attempts}
      onPasswordChange={setPassword}
      onSubmit={handleSubmit}
      getHint={() => getPasswordHint(attempts)}
    />
  );
}

export default App;