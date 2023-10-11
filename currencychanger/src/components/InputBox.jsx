/* eslint-disable react/prop-types */


function InputBox({label,amount,selectCurrency="usd",currencyOptions=[],onCurrencyChange,onAmountChange,disabled=false})
 {
    return (
        <div className="w-full h-auto bg-slate-300 flex py-4 px-4 rounded-xl">
            <div className="flex flex-wrap w-90 h-20 justify-between text-center">
                <label>{label}</label>
                <input
                className="w-full h-10 rounded-lg text-center"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={disabled}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select
                className="w-20 h-10 py-2 px-2 m-2 rounded-lg"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((option) => (
                        <option
                            key={option}
                            value={option}>
                            {option}</option>
                    )
                    )}
                </select>
            </div>
        </div>
    )
}

export default InputBox;