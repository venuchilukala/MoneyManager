import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, expensesAmount} = props
  const balance = incomeAmount - expensesAmount
  return (
    <div className="md-container">
      <div className="box box-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <span className="md-box">
          <p>Your Balance</p>
          <p className="money">RS {balance}</p>
        </span>
      </div>
      <div className="box box-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <span className="md-box">
          <p>Your Income</p>
          <p className="money">RS {incomeAmount}</p>
        </span>
      </div>
      <div className="box box-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <span className="md-box">
          <p>Your Expenses</p>
          <p className="money">RS {expensesAmount}</p>
        </span>
      </div>
    </div>
  )
}
export default MoneyDetails
