import './assets/css/styles.css';
import Expenses from './components/Expenses/Expenses';
function App() {
  const expenses = [
    {
      id: 1,
      title: 'Foods',
      date: new Date(2022, 5, 19),
      amount: 25
    },
    {
      id: 2,
      title: 'Clothes',
      date: new Date(2022, 5, 19),
      amount: 99
    },
    {
      id: 3,
      title: 'Education',
      date: new Date(2022, 5, 19),
      amount: 250
    },
    {
      id: 4,
      title: 'Travel',
      date: new Date(2022, 5, 19),
      amount: 40
    }
  ]

  return (
    <div className="App">
      <h2>Let's Get Started</h2>
      <Expenses expenses={ expenses }/>
    </div>
  );
}

export default App;
