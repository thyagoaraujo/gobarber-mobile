import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar, YellowBox } from 'react-native';

import './src/config/ReactotronConfig';

import { store, persistor } from './src/store';
import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Warning: forwardRef render functions do not support',
]);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
