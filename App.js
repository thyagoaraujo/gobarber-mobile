import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import './src/config/ReactotronConfig';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Warning: forwardRef render functions do not support',
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}
