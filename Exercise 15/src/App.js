import React, { useState } from 'react';
import StyledButton1 from './components/StyledButton1';
import StyledButton2 from './components/StyledButton2';
import StyledButton3 from './components/StyledButton3';
import LifecycleDemo from './components/LifeCycleDemo';
import Parent from './components/Parent';
import { CounterWithReducer, CounterWithState } from './components/Counter';
import JokeFetcher from './components/JokeFetcher';
import FocusInput from './components/FormUseRef';
import ThemeToggler from './components/ThemeToggler';
import FormWithState from './components/FormWithState';
import FormWithRef from './components/FormWithRef';
import { ThemeProvider } from './components/ThemeContext';

const Header = ({ title }) => {
  return (
    <header style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <h1>{title}</h1>
    </header>
  );
};

const Content = () => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book about anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  ];
  
  const [currentJoke, setCurrentJoke] = useState("Click the button for a joke!");
  
  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    setCurrentJoke(jokes[randomIndex]);
  };
  
  return (
    <main style={{ padding: '20px', minHeight: '300px' }}>
      <p>{currentJoke}</p>
      <button onClick={getRandomJoke}>Get Random Joke</button>
    </main>
  );
};

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#f0f0f0', padding: '10px', textAlign: 'center' }}>
      <p>© 2025 My React App. All rights reserved.</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header title="Joke Generator App" />
      <Content />
      <Footer />
      <br></br>
      <StyledButton1>StyledButton1</StyledButton1>
      <StyledButton2>StyledButton2</StyledButton2>
      <StyledButton3>StyledButton3</StyledButton3>
      <br></br>
      <LifecycleDemo></LifecycleDemo>
      <br></br>
      <Parent></Parent>
      <br></br>
      <CounterWithState></CounterWithState>
      <CounterWithReducer></CounterWithReducer>
      <br></br>
      <JokeFetcher></JokeFetcher>
      <br></br>
      <FocusInput></FocusInput>
      <br></br>
      <ThemeProvider>
        <ThemeToggler></ThemeToggler>
      </ThemeProvider>
      <br></br>
      <FormWithState></FormWithState>
      <br></br>
      <FormWithRef></FormWithRef>
    </div>
  );
};

export default App;