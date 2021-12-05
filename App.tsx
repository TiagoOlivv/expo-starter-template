import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

import { Home } from './src/screens/Home';

import theme from './src/constants/theme';

import Roboto_Bold from './assets/fonts/Roboto-Bold.ttf';
import Roboto_Medium from './assets/fonts/Roboto-Medium.ttf';
import Roboto_Regular from './assets/fonts/Roboto-Regular.ttf';

const App: React.FC = () => {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return loadAsync({
      Roboto_Bold,
      Roboto_Medium,
      Roboto_Regular,
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={error => Alert.alert(error.name, error.message)}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
