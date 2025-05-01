import React, { useState } from 'react';

const HelloReactNoJSX = () => React.createElement('h1', null, 'Hello, React!');

const HelloReactJSX = () => {
  const message = 'Hello, React!';
  return <h1>{message}</h1>;
};

const FruitList = () => {
  const fruits = ['Apple', 'Banana', 'Cherry'];
  return <ul>{fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}</ul>;
};

const StyledMessage = () => {
  const style = { color: 'blue', fontSize: '20px', fontWeight: 'bold' };
  return <p style={style}>This is a styled message.</p>;
};

const SumOfSquares = () => {
  const a = 3, b = 4;
  const sum = a * a + b * b;
  return <p>Sum of squares: {sum}</p>;
};

const Greeting = () => {
  const isMorning = true;
  return <p>{isMorning ? 'Good Morning' : 'Good Evening'}</p>;
};

const CurrentDay = () => {
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  return <p>Today is {day}</p>;
};

const PrimeCheck = () => {
  const number = 17;
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  return <p>{number} is {isPrime(number) ? 'a Prime' : 'not a Prime'} number.</p>;
};

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const convertCtoF = () => setFahrenheit((parseFloat(celsius) * 9 / 5) + 32);
  const convertFtoC = () => setCelsius((parseFloat(fahrenheit) - 32) * 5 / 9);
  return (
    <div>
      <input type="number" placeholder="Celsius" onChange={e => setCelsius(e.target.value)} />
      <button onClick={convertCtoF}>Convert to Fahrenheit</button>
      <p>Fahrenheit: {fahrenheit}</p>
      <input type="number" placeholder="Fahrenheit" onChange={e => setFahrenheit(e.target.value)} />
      <button onClick={convertFtoC}>Convert to Celsius</button>
      <p>Celsius: {celsius}</p>
    </div>
  );
};

const ReverseString = () => {
  const text = 'React';
  const reversed = text.split('').reverse().join('');
  const isPalindrome = text === reversed;
  return (
    <div>
      <p>Reversed: {reversed}</p>
      <p>{isPalindrome ? 'Palindrome' : 'Not a Palindrome'}</p>
    </div>
  );
};

const RandomNumber = () => {
  const [num, setNum] = useState(null);
  return (
    <div>
      <button onClick={() => setNum(Math.floor(Math.random() * 100) + 1)}>Generate</button>
      {num && <p>Random Number: {num}</p>}
    </div>
  );
};

const LeapYearCheck = () => {
  const year = 2024;
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  return <p>{year} is {isLeap ? '' : 'not '}a leap year.</p>;
};

class UserGreeting extends React.Component {
  render() {
    const { firstName, lastName } = this.props;
    return <h1>Hello, {firstName} {lastName}!</h1>;
  }
}

const App = () => {
  return (
    <div>
      <HelloReactNoJSX />
      <HelloReactJSX />
      <FruitList />
      <StyledMessage />
      <SumOfSquares />
      <Greeting />
      <CurrentDay />
      <PrimeCheck />
      <TemperatureConverter />
      <ReverseString />
      <RandomNumber />
      <LeapYearCheck />
      <UserGreeting firstName="John" lastName="Doe" />
    </div>
  );
};

export default App;
