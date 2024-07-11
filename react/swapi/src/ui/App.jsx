import Header from './components/Header'; 
import Form from './components/Fotm'
import Body from './components/Body';
import ButtonReset from './components/ButtonReset';
import { useState } from 'react';
import { Provider } from 'react-redux'
import { store } from '../core/store'

export function App() {

  return (
    <Provider store={store}>
      <div className='container'>
          <Header />
          <Form  />
          <Body />
          <ButtonReset />
      </div>
    </Provider>
  );
}