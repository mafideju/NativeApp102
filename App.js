import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { enableScreens } from 'react-native-screens'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { COLORS } from './utils/COLORS';
import { Provider } from './context/BlogContext';
import HomeScreen from './screens/HomeScreen';
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
  Home: HomeScreen,
  Post: ShowScreen,
  Novo: CreateScreen,
  Editar: EditScreen
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
      // fontWeight: 'bold',
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
  
