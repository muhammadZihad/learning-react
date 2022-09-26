import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const handleNewExpenseSubmit = (data) => {
        props.onNewExpense(data)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitExpense={handleNewExpenseSubmit} />
        </div>
    )
}

export default NewExpense;