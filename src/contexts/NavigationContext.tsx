// context/NavigationContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type NavigationTab = 'chat' | 'home' | 'config';

interface NavigationContextProps {
  selectedTab: NavigationTab;
  setSelectedTab: (tab: NavigationTab) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedTab, setSelectedTabState] = useState<NavigationTab>('home');

  useEffect(() => {
    (async () => {
      const savedTab = await AsyncStorage.getItem('@selectedTab');
      if (savedTab) setSelectedTabState(savedTab as NavigationTab);
    })();
  }, []);

  const setSelectedTab = (tab: NavigationTab) => {
    setSelectedTabState(tab);
    AsyncStorage.setItem('@selectedTab', tab);
  };

  return (
    <NavigationContext.Provider value={{ selectedTab, setSelectedTab }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationTab = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationTab must be used within a NavigationProvider');
  }
  return context;
};
