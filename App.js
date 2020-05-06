import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import HomeScreen from './screens/HomeScreen';
import { BlogProvider } from './context/BlogContext';
import { COLORS } from './utils/COLORS';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

const navigator = createStackNavigator({
  Home: HomeScreen
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    title: 'Maffee Log',
    headerStyle: {
      backgroundColor: COLORS.black1,
    },
    headerTintColor: COLORS.white1,
    headerTitleStyle: {
      fontFamily: 'open-sans',
      fontWeight: 'bold',
    }
  }
});

const App = createAppContainer(navigator);

export default () => {
  const [font, setFont] = useState(false);

  if (!font) {
    return <AppLoading startAsync={fetchFonts} onFinish={() => setFont(true)} />
  }

  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  )
}
  
