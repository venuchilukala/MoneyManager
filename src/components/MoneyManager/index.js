import {Component} from 'react'
import {v4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()
    const {titleInput, amountInput, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      option => option.optionId === optionId,
    )

    const {displayText} = typeOption

    if (titleInput !== '' && amountInput !== '') {
      const newTransaction = {
        id: v4(),
        title: titleInput,
        amount: parseInt(amountInput),
        type: displayText,
      }
      this.setState(prevState => ({
        transactionsList: [...prevState.transactionsList, newTransaction],
        titleInput: '',
        amountInput: '',
        optionId: transactionTypeOptions[0].optionId,
      }))
    }
  }

  getDeleteItemId = id => {
    const {transactionsList} = this.state
    const updatedList = transactionsList.filter(each => each.id !== id)
    this.setState({transactionsList: updatedList})
  }

  handleTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  handleAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  handleOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  getIncome = () => {
    const {transactionsList} = this.state
    let incomeAmount = 0
    transactionsList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        incomeAmount += each.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    let expensesAmount = 0
    transactionsList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        expensesAmount += each.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {titleInput, amountInput, optionId, transactionsList} = this.state
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

    return (
      <div className="container">
        <div className="top">
          <p className="greeting">Hi, Venu Chilukala</p>
          <p className="caption">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
        />
        <div className="transaction">
          <div className="left">
            <p>Add Transaction</p>
            <form onSubmit={this.onAddTransaction}>
              <label htmlFor="TITLE">TITLE</label>
              <br />
              <input
                type="text"
                id="title"
                placeholder="TITLE"
                className="input-box"
                value={titleInput}
                onChange={this.handleTitle}
              />
              <label htmlFor="AMOUNT">AMOUNT</label>
              <br />
              <input
                type="text"
                id="amount"
                placeholder="AMOUNT"
                className="input-box"
                value={amountInput}
                onChange={this.handleAmount}
              />
              <label htmlFor={optionId}>Select type</label>
              <select
                className="type"
                value={optionId}
                onChange={this.handleOptionId}
              >
                {transactionTypeOptions.map(option => (
                  <option key={option.optionId} value={option.optionId}>
                    {option.displayText}
                  </option>
                ))}
              </select>
              <br />
              <input type="submit" value="Add" className="addBtn" />
            </form>
          </div>
          <div className="right">
            <p className="history">History</p>
            <ul>
              <li className="demo">
                <p>Title</p>
                <p>Amount</p>
                <p className="demo-type">Type</p>
              </li>
              </ul>
              <ul>
              {transactionsList.map(transaction => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  getDeleteItemId={this.getDeleteItemId}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
