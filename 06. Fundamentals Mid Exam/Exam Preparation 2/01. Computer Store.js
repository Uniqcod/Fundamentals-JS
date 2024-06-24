function computerStore(arr) {
  let taxes = 0;
  let priceWithoutTaxes = 0;
  let client = arr.pop();

  while (arr.length) {
    let currPrice = Number(arr.shift());

    if (currPrice > 0) {
      taxes += currPrice * 0.2;
      priceWithoutTaxes += currPrice;
      //   priceWithTaxes += currPrice + taxes;
    } else {
      console.log(`Invalid price!`);
      continue;
    }
  }

  let priceWithTaxes = priceWithoutTaxes + taxes;

  if (priceWithTaxes <= 0) {
    console.log(`Invalid order!`);
    return;
  } else {
    if (client === `special`) {
      let specialPrice = priceWithTaxes * 0.9;
      console.log(`Congratulations you've just bought a new computer!`);
      console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
      console.log(`Taxes: ${taxes.toFixed(2)}$`);
      console.log(`-----------`);
      console.log(`Total price: ${specialPrice.toFixed(2)}$`);
    } else {
      console.log(`Congratulations you've just bought a new computer!`);
      console.log(`Price without taxes: ${priceWithoutTaxes.toFixed(2)}$`);
      console.log(`Taxes: ${taxes.toFixed(2)}$`);
      console.log(`-----------`);
      console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
    }
  }
}
// computerStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// computerStore([
//   "1023",
//   "15",
//   "-20",
//   "-5.50",
//   "450",
//   "20",
//   "17.66",
//   "19.30",
//   "regular",
// ]);
computerStore(["regular"]);
