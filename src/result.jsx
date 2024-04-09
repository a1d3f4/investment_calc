import { calculateInvestmentResults ,formatter } from "./util/investment"
export default function Result({input}){
    console.log(input)
    const result_data=calculateInvestmentResults(input)
    const intialinvestment=result_data[0].valueEndOfYear - result_data[0].interest - result_data[0].annualInvestment
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (YEAR)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {result_data.map(yearData=>{
                    const total_interest=yearData.valueEndOfYear - yearData.annualInvestment* yearData.year - intialinvestment
                    const total_amount_invested=yearData.valueEndOfYear-total_interest
                    return (
                        <tr key={yearData.year}>
                            <td>{yearData.year}</td>
                            <td> {formatter.format( yearData.valueEndOfYear)}</td>
                            <td>{formatter.format( yearData.interest)}</td>
                            <td>{formatter.format(total_interest)}</td>
                            <td>{formatter.format( total_amount_invested)}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}