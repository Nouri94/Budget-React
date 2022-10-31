import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DispalyBalance from './components/DispalyBalance';
import DispalyBalances from './components/DispalyBalances';
import { useState } from 'react';
import EntryLines from './components/EntryLines';
function App() {
  const [entries, setEntries] = useState(initialEntries)
  const deleteEntry = (id) =>{
       const result =  entries.filter(entry => entry.id !== id)
       setEntries(result)
  }

  const addEntry = (description, value) =>{
    const result = entries.concat({id:entries.length+1, description, value})
    setEntries(result)
  }
  return (
    <Container>
      <MainHeader title="Budget" />
      <DispalyBalance title="Your Balance" value="11,3" size='small'></DispalyBalance>
      <DispalyBalances></DispalyBalances>
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries} deleteEntry={deleteEntry}></EntryLines>      
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm addEntry={addEntry}></NewEntryForm>
    </Container>
  );
}

export default App;

var initialEntries = [
  {
    id : 1,
    description : "Work Income",
    value : "$100.00",
    isExpense : false

  },
  {
    id : 2,
    description : "Rent",
    value : "$200.00",
    isExpense : true

  },
  {
    id : 3,
    description : "Water bill",
    value : "$300.00",
    isExpense : true

  },
  {
    id : 4,
    description : "Power Bill",
    value : "$400.00",
    isExpense : true

  },
]