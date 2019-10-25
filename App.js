import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Warning: forwardRef render functions do not support',
]);

export default function App() {
  return <Routes />;
}
