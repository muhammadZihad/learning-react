import Card from "../Ui/Card";
import ExpenseItem from "../Expenses/ExpenseItem";

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem expense={props.expenses[0]} />
            <ExpenseItem expense={props.expenses[1]} />
            <ExpenseItem expense={props.expenses[2]} />
            <ExpenseItem expense={props.expenses[3]} />
        </Card>
    )
}

export default Expenses;