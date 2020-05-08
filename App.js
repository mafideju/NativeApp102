import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { COLORS } from './utils/COLORS';
import { Provider } from './context/BlogContext';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import ShowScreen from './screens/ShowScreen';
import CreateScreen from './screens/CreateScreen';
import EditScreen from './screens/EditScreen';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
}

const navigator = createStackNavigator({
  Splash: SplashScreen,
  Home: HomeScreen,
  Post: ShowScreen,
  Novo: CreateScreen,
  Editar: EditScreen
}, {
  initialRouteName: 'Splash',
  defaultNavigationOptions: {
    title: 'Amanda Mendes',
    headerStyle: {
      backgroundColor: COLORS.purpleDark,
    },
    headerTintColor: COLORS.white1,
    headerTitleContainerStyle: {
      padding: 10
    },
    headerTitleStyle: {
      fontFamily: 'open-sans',
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
    <Provider>
      <App />
    </Provider>
  )
}
  
