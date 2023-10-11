function box({
    label,
    amount,
    onChangeAmount,
    onChangeCurrency,
    currencyOptions,
    selectCurrency
}
    ){
return(
    <div>
     <div>
     <label htmlFor="">{label}</label>
    <input type="number" value={amount}
    onChange={(e) => onChangeAmount && onChangeAmount(e.target.value)}
    />
     </div>
    <div>
        <p>Currency Type</p>
        <select value={selectCurrency}
        onChange={(e) => onChangeCurrency && onChangeCurrency(e.target.value)}
        >
            {currencyOptions.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
    
    </div>
)
}

export default box;