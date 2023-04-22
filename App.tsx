import React from 'react';
import { Provider } from 'react-redux';
import { RootNavigator } from './navigations/RootNavigator';
import { store } from './store/store';
export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
