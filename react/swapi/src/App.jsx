import Header from './components/Header'; 
import Form from './components/Fotm'
import Body from './components/Body';
import ButtonReset from './components/ButtonReset';
import { useState } from 'react';

export function App() {
  const [url, setUrl] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleFormSubmit = (enteredUrl) => {
    setUrl(enteredUrl);
  };
  
  const handleReset = () => {
    setUrl('');
    setInputValue('');
  };

  return (
    <div className='container'>
        <Header />
        <Form onSubmitForm={handleFormSubmit} inputValue={inputValue} setInputValue={setInputValue} />
        <Body url={url}/>
        <ButtonReset onReset={handleReset}/>
    </div>
  );
}