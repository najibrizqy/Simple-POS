import React, {useEffect } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Root } from "native-base";
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigator from './src/navigation/navigation';
import {store, persistor } from './src/services/store';

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <View style={styles.container}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}>   */}
          <Root>
            <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent />
            <AppNavigator />
          </Root>
        {/* </PersistGate> */}
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;