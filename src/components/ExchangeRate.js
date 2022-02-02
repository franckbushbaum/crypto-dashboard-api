function ExchangeRate({exchangedData}) {

    let rate = Math.round(exchangedData.rateOfExchange * 100) / 100;
    return (
      <div className="exchange-rate">
        <h3>Exchange Rate</h3>
        <h1>${rate}</h1>
        <p className="PtS">{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
      </div>
    );
  }
  
  export default ExchangeRate;