import './App.css';
import Wrapper from './components/Wrapper';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import { useState } from 'react';


function App() {
  const [calc, setCalc] = useState('');

  const buttonClick = (value) => {
    setCalc(calc + value);
  };

  const calculate = () => {
    try {
      const result = eval(calc); 
      setCalc(result.toString());
    } catch (error) {
      setCalc('Error');
    }
  };

  const clear = () => {
    setCalc('');
  };

  const remove = () => {
    setCalc(calc.slice(0, -1));
  };
  return (
      <Wrapper>
        <Screen data={calc}/>
        <ButtonBox 
        onBtnClick={buttonClick} 
        onCalculate={calculate}
        onClear={clear}
        onDel={remove}
        />
      </Wrapper>
  );
}

export default App;
