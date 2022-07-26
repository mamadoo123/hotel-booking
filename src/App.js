import React from 'react';
import {Provider} from 'react-redux';
import AppNav from './navigation';
import {store} from './redux/store';


function App() {

  return (
    <Provider store={store}>
      <AppNav />
    </Provider>
  )
}


export default App
