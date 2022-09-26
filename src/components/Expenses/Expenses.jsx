import Card from "../Ui/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [year, setYear] = useState('2022')

    const handleYearChange = (_year) => {
        setYear(_year);
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })



    return (
        <Card className="expenses">
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesFilter selected={year} onChangeFilter={handleYearChange} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expenses;