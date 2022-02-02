import { useState } from 'react';
import ExchangeRate from "./ExchangeRate.js";
import axios from 'axios';
import Button from '@mui/material/Button';

function CurrencyConverter() {

  const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'XMR', 'LTC', 'MATIC', 'ADA'];

  // Three values are needed for the API, Currency you want to change, Currency you want to change it to and your currency's 
  // initial amount.

  const [primaryCurrency, setPrimaryCurrency] = useState('BTC');

  const [secondaryCurrency, setSecondaryCurrency] = useState('BTC');

  //Saving response to State:

  const [rateOfExchange, setRateOfExchange] = useState(0)

  const [result, setResult] = useState(0)

  const [amount, setAmount] = useState(1);

  const [exchangedData, setExchangeData] = useState({
    primaryCurrency: 'BTC',
    secondaryCurrency: 'BTC',
    rateOfExchange: 0
  })


  const convert = () => {

    const options = {
      method: 'GET',
      url: 'http://localhost:5000/convert',
      params: { from_currency: primaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: secondaryCurrency },
    };

    axios.request(options).then((response) => {
      console.log(response.data);
      //1 Old response, but seems important for future use..
      // setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
      // setExchangeData({
      //   primaryCurrency: primaryCurrency,
      //   secondaryCurrency: secondaryCurrency,
      //   rateOfExchange: response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']
      // })
      setResult(response.data * amount)
      setExchangeData({
        primaryCurrency: primaryCurrency,
        secondaryCurrency: secondaryCurrency,
        rateOfExchange: response.data
      })
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
                  value={result}                 
                  disable="true"
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
        <Button id="convert-button" variant="contained" size='small' onClick={convert}>Convert</Button>
      </div>
      <ExchangeRate exchangedData={exchangedData}
       />
    </div>
  );
}

export default CurrencyConverter;