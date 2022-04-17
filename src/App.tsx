import React from 'react'

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
  }

  return (
    <main>
      <header>
        <header>Crypto Tracker</header>
      </header>
      <div className="instructions">
        <p>
          <strong>Description: </strong>Every 10 seconds crypto currency prices
          will update
        </p>
      </div>
    </main>
  )
}
