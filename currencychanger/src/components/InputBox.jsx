function inputArea({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",

}
) {
    return (
        <div>
            <div>
                <label htmlFor="">{label}</label>
                <input 
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div>
                <p>Currency Type</p>
                <select
                value={selectCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((option) =>(
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

export default inputArea;