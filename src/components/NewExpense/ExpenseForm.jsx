import { useState } from "react"

const ExpenseForm = (props) => {
    /**
     * State
     */
    const [userInput, setUserInput] = useState({
        id: Math.random(),
        title: '',
        amount: '',
        date: ''
    })


    /**
     * Functions
     */
    const defaultUserInput = () => {
        return {
            id: Math.random(),
            title: '',
            amount: '',
            date: ''
        }
    }
    const titleHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, title: event.target.value }
        })
    }

    const amountHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, amount: event.target.value }
        })
    }

    const dateHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, date: event.target.value }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        userInput.date = new Date(userInput.date);
        setUserInput(defaultUserInput());
        props.onSubmitExpense(userInput);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input onChange={titleHandler} value={userInput.title} type="text" />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input onChange={amountHandler} value={userInput.amount} type="number" min="0.01" step="0.01" />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input onChange={dateHandler} value={userInput.date} type="date" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;