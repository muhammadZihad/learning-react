import Card from "../Ui/Card";
import ExpenseDate from "../Expenses/ExpenseDate";

const ExpenseItem = (props) => {
    const expense = props.expense;

    return (
        <Card className='expense-item'>
            <ExpenseDate date={expense.date} />
            <div className='expense-item__description'>
                <h2>{expense.title}</h2>
                <div className='expense-item__price'>$ {expense.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;

