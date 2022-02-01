import { useState } from 'react';
import ExchangeRate from "./ExchangeRate.js";

function CurrencyConverter() {

  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'XMR', 'LTC', 'MATIC', 'ADA'];

  const [primaryCurrency, setPrimaryCurrency] = useState('BTC');

  const [secondaryCurrency, setSecondaryCurrency] = useState('BTC');
  console.log('secondaryCurrency is', secondaryCurrency);

  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>
      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-1"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={primaryCurrency}
                  name="currency-option-1"
                  className="currency-options" 
                  onChange={(event) => setPrimaryCurrency(event.target.value)}                 
                >
                  {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency:</td>
              <td>
                <input
                  type="number"
                  name="currency-amount-2"
                  value={""}
                />
              </td>
              <td>
                <select 
                  value={secondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(event) => setSecondaryCurrency(event.target.value)}                  
                >
                   {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;