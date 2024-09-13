import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="content">
    <div class="header">
      <h1>The safe and easy way to exchange your money</h1>
      <p>You always get the best exchange rate with Currency, whether you send, spend, or convert money in dozens of currencies. But don't take our word for it.</p>
    </div>

    <div class="select-section">
      <p class="select-header">Select your base currency</p>
      <button id="base-currency1" type="button" class="base-currency-button" data-currency="USD">
        <p class="currency-code">USD</P>  
        <p class="currency-region">United States Dollar</p>
      </button>
      <button id="base-currency2" type="button" class="base-currency-button" data-currency="EUR">
        <p class="currency-code">EUR</P>  
        <p class="currency-region">Euro</p>
      </button>
      <button id="base-currency3" type="button" class="base-currency-button" data-currency="CAD">
        <p class="currency-code">CAD</P>  
        <p class="currency-region">Canadian Dollar</p>
      </button>
    </div>

    <div class="select-section">
      <p class="select-header">Select your target currency</p>
      <button id="target-currency1" type="button" class="target-currency-button" data-currency="USD">
        <p class="currency-code">USD</P>  
        <p class="currency-region">United States Dollar</p>
      </button>
      <button id="target-currency2" type="button" class="target-currency-button" data-currency="EUR">
        <p class="currency-code">EUR</P>  
        <p class="currency-region">Euro</p>
      </button>
      <button id="target-currency3" type="button" class="target-currency-button" data-currency="CAD">
        <p class="currency-code">CAD</P>  
        <p class="currency-region">Canadian Dollar</p>
      </button>
    </div>

    <div class="track-button">
      <a id="track-exchange">Track exchange rate</a>
    </div>
  </div>
`

const baseCurrencyButtons = document.querySelectorAll(".base-currency-button")
let baseCurrency = null

baseCurrencyButtons.forEach(baseCurrencyButton => {
  baseCurrencyButton.addEventListener("click", event => {
    document.querySelector(".base-currency-button.active")?.classList.remove("active")
    event.currentTarget.classList.add("active")
    baseCurrency = baseCurrencyButton.dataset.currency
    console.log(`Base currency: ${baseCurrency}`)
    TrackExchangeLink()  // Update href when base currency changes
  })
})

const targetCurrencyButtons = document.querySelectorAll(".target-currency-button")
let targetCurrency = null

targetCurrencyButtons.forEach(targetCurrencyButton => {
  targetCurrencyButton.addEventListener("click", event => {
    document.querySelector(".target-currency-button.active")?.classList.remove("active")
    event.currentTarget.classList.add("active")
    targetCurrency = targetCurrencyButton.dataset.currency
    console.log(`Target currency: ${targetCurrency}`)
    TrackExchangeLink()  // Update href when target currency changes
  })
})

const trackExchange = document.querySelector('#track-exchange')

function TrackExchangeLink() {
  if (baseCurrency && targetCurrency) {
    trackExchange.setAttribute("href", `results.html?base=${baseCurrency}&target=${targetCurrency}`)
    console.log(`Updated track exchange href: results.html?base=${baseCurrency}&target=${targetCurrency}`)
  }
}
