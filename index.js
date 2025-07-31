const rates = {
  usa: { usa: 1, euro: 0.8647, isterlean: 0.7485, japan: 148.10, lebanon: 89000, iran: 42112.5, iraq: 1310, egypt: 31.50 },
  euro: { usa: 1.1565, euro: 1, isterlean: 0.8656, japan: 171.27, lebanon: 103440, iran: 48701.86, iraq: 1514.98, egypt: 36.43 },
  isterlean: { usa: 1.336, euro: 1.155, isterlean: 1, japan: 196.45, lebanon: 119570, iran: 56202.1, iraq: 1747.5, egypt: 41.1 },
  japan: { usa: 0.0067, euro: 0.0058, isterlean: 0.0051, japan: 1, lebanon: 607, iran: 286, iraq: 8.89, egypt: 0.21 },
  lebanon: { usa: 0.000011, euro: 0.0000096, isterlean: 0.0000084, japan: 0.00164, lebanon: 1, iran: 0.47, iraq: 0.0146, egypt: 0.00034 },
  iran: { usa: 0.0000237, euro: 0.0000205, isterlean: 0.0000178, japan: 0.0035, lebanon: 2.12, iran: 1, iraq: 0.0312, egypt: 0.00072 },
  iraq: { usa: 0.000763, euro: 0.00066, isterlean: 0.000572, japan: 0.112, lebanon: 68.45, iran: 32.06, iraq: 1, egypt: 0.023 },
  egypt: { usa: 0.0318, euro: 0.0274, isterlean: 0.0243, japan: 4.76, lebanon: 293, iran: 1390, iraq: 43.47, egypt: 1 },
};

document.addEventListener("DOMContentLoaded", function () {
  const from = localStorage.getItem("fromCurrency");
  const to = localStorage.getItem("toCurrency");

  const amountInput = document.getElementById("firstm");
  const fromSelect = document.getElementById("first");
  const toSelect = document.getElementById("second");
  const resultInput = document.getElementById("secondm");


  if (from) fromSelect.value = from;
  if (to) toSelect.value = to;

  function convert() {
    const amount = parseFloat(amountInput.value);
    const from = fromSelect.value;
    const to = toSelect.value;

    if (!isNaN(amount) && rates[from] && rates[from][to]) {
      const result = amount * rates[from][to];
      resultInput.value = result.toFixed(2);
    } else {
      resultInput.value = "";
    }
  }

  amountInput.addEventListener("input", convert);
  fromSelect.addEventListener("change", convert);
  toSelect.addEventListener("change", convert);
});
