it("should calculate the monthly rate correctly", function () {
  // ...
  const values = { rate: 2.5, years: 7, amount: 10000 };

  expect(calculateMonthlyPayment(values)).toEqual("129.89");
});

it("shold return 2 decimal place", function () {
  const values = {
    rate: 2.45,
    years: 6,
    amount: 123456,
  };
  expect(calculateMonthlyPayment(values)).toEqual("1845.53"); //always string
});
