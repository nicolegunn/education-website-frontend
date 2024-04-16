import { useState } from 'react';

export default function useSrLatch() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const set = () => {
    setIsLoggedIn(true);
  };

  const reset = () => {
    setIsLoggedIn(false);
  };

  return [isLoggedIn, set, reset];
}