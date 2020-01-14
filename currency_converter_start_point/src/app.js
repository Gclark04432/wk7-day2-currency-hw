import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: null,
      selectedCurrency: null,
      amountToConvert: null,
      direction: null
    },
    mounted() {
      this.populateCurrencies()
    },
    methods: {
      populateCurrencies: function () {
        fetch('https://api.exchangeratesapi.io/latest')
        .then(receivedCurrencies => receivedCurrencies.json())
        .then(data => this.currencies = data.rates)
        this.currencies = null
      },
      calculateConversion: function (amountToConvert, rate) {
        if (this.direction === "fromEuros"){
          const result = amountToConvert * rate
          return result.toFixed(2)
        }
        else {
          const result = amountToConvert / rate
          return result.toFixed(2)
        }
      }
    }
  });
});
