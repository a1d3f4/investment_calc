

// export function calculateInvestmentResults({
//   initialInvestment,
//   annualInvestment,
//   expectedReturn,
//   duration,
// }) {
  
//   const annualData = [];
//   let investmentValue = initialInvestment;
//   console.log(investmentValue)
//   for (let i = 0; i < duration; i++) {
//     const interestEarnedInYear = investmentValue * (expectedReturn / 100);
//     investmentValue += interestEarnedInYear + annualInvestment;
//     annualData.push({
//       year: i + 1, // year identifier
//       interest: interestEarnedInYear, // the amount of interest earned in this year
//       valueEndOfYear: investmentValue, // investment value at end of year
//       annualInvestment: annualInvestment, // investment added in this year
//     });
//   }
//   console.log(annualData)
//   return annualData;

// }
export function calculateInvestmentResults(input) {
  const { initial_investment, annual_investment, expected_return, duration } = input;
  console.log(input)
  const annualData = [];
  let investmentValue = initial_investment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expected_return / 100);
    investmentValue += interestEarnedInYear + annual_investment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annual_investment, // investment added in this year
    });
  }

  console.log(annualData); // For debugging purposes
  return annualData;
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
