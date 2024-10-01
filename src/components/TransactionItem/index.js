import './index.css'

const TransactionItem = props => {
  const {transaction, getDeleteItemId} = props
  const {id, title, amount, type} = transaction
  const onClickDelete = () => {
    getDeleteItemId(id)
  }
  return (
    <li className="demo">
      <p>{title}</p>
      <p>&#8377; {amount}</p>
      <p>{type}</p>
      <span>
        <button
          type="button"
          className="delete-btn"
          onClick={onClickDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </span>
    </li>
  )
}
export default TransactionItem
