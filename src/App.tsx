import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {setupHttpConfig} from './utils/http';
import {store} from './redux/store';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import RootNavigator from './SwitchNavigator';
import {brandColors} from "./components/Core/basicStyles";

const App = () => {
  useEffect(() => {
    setupHttpConfig();
  });

  return (
    <Provider store={store}>
      <StatusBar hidden translucent backgroundColor={brandColors.whiteColor} />
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
