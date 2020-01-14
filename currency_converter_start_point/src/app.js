import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: null,
      selectedCurrency: null
    },
    mounted() {
      this.populateCurrencies()
    },
    methods: {
      populateCurrencies: function () {
        fetch('https://api.exchangeratesapi.io/latest')
          .then(receivedCurrencies => receivedCurrencies.json())
          .then(data => this.currencies = data.rates)
      }
    }
  });
});
