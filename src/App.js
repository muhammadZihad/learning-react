import { useState } from "react";
import "./assets/css/styles.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Foods",
      date: new Date(2022, 1, 15),
      amount: 25,
    },
    {
      id: 2,
      title: "Clothes",
      date: new Date(2022, 2, 8),
      amount: 99,
    },
    {
      id: 3,
      title: "Education",
      date: new Date(2022, 3, 25),
      amount: 250,
    },
    {
      id: 4,
      title: "Travel",
      date: new Date(2022, 3, 4),
      amount: 40,
    },
    {
      id: 5,
      title: "Tickets",
      date: new Date(2022, 9, 30),
      amount: 40,
    },
    {
      id: 6,
      title: "Bag",
      date: new Date(2022, 9, 18),
      amount: 40,
    },
    {
      id: 8,
      title: "Movies",
      date: new Date(2021, 2, 2),
      amount: 40,
    },
    {
      id: 8,
      title: "FOod",
      date: new Date(2021, 7, 27),
      amount: 40,
    },
  ]);

  const handleNewExpense = (data) => {
    setExpenses((prevExpenses) => {
      return [data, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <NewExpense onNewExpense={handleNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
