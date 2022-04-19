import React, { useEffect, useState } from 'react'

export function App() {
  type cryptoCurrencyType = {
    id: 'string'
    rank: 'number'
    symbol: 'string'
    name: 'string'
    supply: 'number'
    maxSupply: 'number'
    marketCapUsd: 'number'
    volumeUsd24Hr: 'number'
    priceUsd: 'number'
    changePercent24Hr: 'number'
    vwap24Hr: 'number'
    explorer: 'https://blockchain.info/'
  }

  const [cryptoCurrencyData, setCryptoCurrencyData] = useState<
    cryptoCurrencyType[]
  >([])

  function inputData() {
    async function fetchData() {
      const response = await fetch('https://api.coincap.io/v2/assets')
      if (response.ok) {
        const json = await response.json()
        setCryptoCurrencyData(json.data)
        console.log(json.data)
      }
    }
    fetchData()
  }
  useEffect(inputData, [])

  useEffect(function () {
    setInterval(inputData, 10000)
  }, [])

  return (
    <main>
      <header>
        <header>Crypto Tracker</header>
      </header>
      <section className="instructions">
        <p>
          <strong>Description: </strong>Every 10 seconds crypto currency prices
          will update
        </p>
      </section>
      <ul>
        {cryptoCurrencyData.map((crypto) => {
          return (
            <li key={crypto.id}>
              ${crypto.symbol} {crypto.id}: $
              {Math.round(crypto.priceUsd * 100) / 100} Supply of coins:{' '}
              {crypto.supply} Market cap: $
              {Math.round(crypto.marketCapUsd * 100) / 100}
            </li>
          )
        })}
      </ul>
    </main>
  )
}
