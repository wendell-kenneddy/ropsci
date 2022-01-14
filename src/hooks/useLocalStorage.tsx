import { useState } from 'react';

export const useLocalStorage = (key: string, initialValue: any) => {
  const isBrowser = typeof window !== 'undefined';

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = isBrowser ? localStorage.getItem(key) : '';
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error setting localStorage: ', error);
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    if (!isBrowser) return;

    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};
