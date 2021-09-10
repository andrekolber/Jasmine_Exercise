
it('should calculate the monthly rate correctly', function () {
  const values = {amount: 300000, years: 30, rate: 3.0};
  expect(calculateMonthlyPayment(values)).toEqual('1264.81')
});


it("should return a result with 2 decimal places", function() {
  const values = {amount: 300023, years: 30, rate: 3.0};
  expect(calculateMonthlyPayment(values)).toEqual('1264.91')
});
 
it("should handle terribly high interest rates", function() {
  const values = {amount: 1000,years: 40,rate: 99};
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

