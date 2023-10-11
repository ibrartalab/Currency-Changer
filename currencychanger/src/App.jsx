import { useState } from 'react';
import InputBox from './components';
import useCurrencyInfo from './hooks/customHook';
import './App.css';

function App() {

  const [amount, setAmount] = useState();
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo);
  const convert = () =>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
    <h2>Currency Converter App</h2>
    <div className='w-full h-80 bg-gray'>
      
      <div 
      className='m-2'
      >
        <InputBox
          label='From'
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}

        />
      </div>
      <div>
        <button 
        className='bg-green-300 m-0'
        onClick={swap}>SWAP</button>
      </div>
      <div className='m-2'>
        <InputBox
          label='To'
          amount={convertedAmount}
          onCurrencyChange={(currency) =>
            setTo(currency)}
          selectCurrency={to}
          currencyOptions={options}

        />
      </div>
      <div>
        <button 
        className='bg-green-300 m-0'
        onClick={convert}>Convert: {from.toUpperCase()} to {to.toUpperCase()}</button>
      </div>
    </div>
    </>
  )
}

export default App;
