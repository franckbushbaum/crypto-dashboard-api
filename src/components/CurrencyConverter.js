import { useState } from 'react';
import ExchangeRate from "./ExchangeRate.js";
import axios from 'axios';

function CurrencyConverter() {

  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'XMR', 'LTC', 'MATIC', 'ADA'];

  // Three values are needed for the API, Currency you want to change, Currency you want to change it to and your currency's 
  // initial amount.

  const [primaryCurrency, setPrimaryCurrency] = useState('BTC');

  const [secondaryCurrency, setSecondaryCurrency] = useState('BTC');

  const [amount, setAmount] = useState(1);

  console.log('amount is', amount);

  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: { from_currency: primaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurrency },
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': 'bb38151e24msha271fe5e90f5b03p151d27jsnabf027f0721e'
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }

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
                  value={amount}
                  onChange={(event) => setAmount(event.target.value)}
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
        <button id="convert-button" onClick={convert}>Convert</button>
      </div>
      <ExchangeRate />
    </div>
  );
}

export default CurrencyConverter;