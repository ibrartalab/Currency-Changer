import { useState } from 'react';
import InputArea from './components';
import useCurrencyInfo from './hooks/customHook';
import './App.css';

function App() {

const [amount,setAmount] = useState(0);
const [from,setFrom] = useState('USD');
const [to,setTo] = useState('INR');
const [convertedAmount,setConvertedAmount] = useState(0);

const useCurrencyInfo = useCurrencyInfo("from")

const options = Object.keys(useCurrencyInfo);
const convert = () => {
  setConvertedAmount(amount * useCurrencyInfo[to])
}
const swap = () => {
  setFrom(to);
  setTo(from);
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}



  return (
   <div className='w-full h-80 bg-gray'>
    <div>
     <InputArea
     label = 'From'
      amount = {amount}
      onAmountChange = {setAmount}
      onCurrencyChange = {setFrom}
      currencyOptions = {options}

     />
    </div>
    <div>
      <button onClick={swap}>Swap</button>
    </div>
    <div>
    <InputArea
     label = 'To'
      amount = {amount}
      onAmountChange = {setAmount}
      onCurrencyChange = {setFrom}
      currencyOptions = {options}

     />
    </div>
    <div>
      <button onClick={convert}>Convert{`{from} to {to}`}</button>
    </div>
   </div>
  )
}

export default App;
