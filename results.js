import './result.css'

document.querySelector('#resultsapp').innerHTML = `
  <div>
    <div class="content">
        <div class="header">
            <h1>Currency Converter</h1>
            <p>Check live foreign currency exchange rates</p>
        </div>

        <div>
            <button id="base-currency-display" class="currency-button"></button>
            <button id="swap-button" class="swap-button"><-></button>
            <button id="target-currency-display" class="currency-button"></button>
        <div>
        
        <div class="prices">
            <div class="base">
                <button id="base-price" class="base-price"></button>
                <button id="base-currency-name" class="base-price"></button>
                <button class="base-price">=</button>
            </div>
            <div class="target">
                <button id="target-price" class="target-price"></button>
                <button id="target-currency-name" class="target-price"></button>
            </div>
        </div>
    </div>
  </div>
`

const url = new URL(document.location);

const baseCurrency = url.searchParams.get("base");
const targetCurrency = url.searchParams.get("target");

// Use different ids for each element
document.getElementById("base-currency-display").textContent = baseCurrency;
document.getElementById("target-currency-display").textContent = targetCurrency;
document.getElementById("base-currency-name").textContent = baseCurrency;
document.getElementById("target-currency-name").textContent = targetCurrency;

class FetchWrapper {
    constructor(baseURL) {
      this.baseURL = baseURL;
    }
  
    async get(endpoint) {
      const response = await fetch(`${this.baseURL}${endpoint}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
}

const API = new FetchWrapper("https://v6.exchangerate-api.com/v6/2932f0574ee9b6c5726798fa");

let basePrice = document.getElementById("base-price");
let targetPrice = document.getElementById("target-price");

API.get(`/latest/${baseCurrency}`).then(data => {
    console.log(data);
    basePrice.textContent = data.conversion_rates[baseCurrency];
    targetPrice.textContent = data.conversion_rates[targetCurrency];
});
