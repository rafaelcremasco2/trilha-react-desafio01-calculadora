import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => (prev === '0' ? num : `${prev}${num}`));
  };

  const handleAddPoint = () => {
    setCurrentNumber((prev) => (prev.includes('.') ? prev : `${prev}.`));
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = parseFloat(firstNumber) + parseFloat(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const difference = parseFloat(firstNumber) - parseFloat(currentNumber);
      setCurrentNumber(String(difference));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = parseFloat(firstNumber) * parseFloat(currentNumber);
      setCurrentNumber(String(product));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleDivisionNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const quotient = parseFloat(firstNumber) / parseFloat(currentNumber);
      setCurrentNumber(String(quotient));
      setOperation('');
      setFirstNumber('0');
    }
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case '*':
          handleMultiplyNumbers();
          break;
        case '/':
          handleDivisionNumbers();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="/" onClick={handleDivisionNumbers} />
        </Row>
        <Row>
          <Button label="." onClick={handleAddPoint} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
