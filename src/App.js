import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DispalyBalance from './components/DispalyBalance';
import DispalyBalances from './components/DispalyBalances';
import { useEffect, useState } from 'react';
import EntryLines from './components/EntryLines';
import ModelEdit from './components/ModelEdit';
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import * as actions from './actions/entries.actions'
function Apps(props) {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const entries = props.entries;
    useEffect(() => {
      if (!isOpen && entryId) {
        const index = entries.findIndex(entry => entry.id === entryId)
        const newEntries = [...entries];
        newEntries[index].description = description
        newEntries[index].value = value
        newEntries[index].isExpense = isExpense
        //setEntries(newEntries)
        resetEntry()
      }
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen])

  useEffect(() => {
    let totalIncome = 0
    let totalExpense = 0
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value))
      }
      else {
        return (totalIncome += Number(entry.value))
      }

    })
    setTotal(totalIncome - totalExpense)
    setExpenseTotal(totalExpense)
    setIncomeTotal(totalIncome)
  }, [entries])



  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }


  const EditEntry = (id) => {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index];
      setDescription(entry.description)
      setEntryId(id)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }

  }

  // const addEntry = () => {
  //   const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
  //   setEntries(result)
  //   resetEntry()
  // }
  return (
    <Container>
      <MainHeader title="Budget" />
      <DispalyBalance title="Your Balance" value={total} size='small'></DispalyBalance>
      <DispalyBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}></DispalyBalances>
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries}  EditEntry={EditEntry} {...props}></EntryLines>
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm  setIsExpense={setIsExpense} setDescription={setDescription} setValue={setValue} description={description} value={value} isExpense={isExpense}></NewEntryForm>
      <ModelEdit isOpen={isOpen} setIsOpen={setIsOpen} setIsExpense={setIsExpense} setDescription={setDescription} setValue={setValue} description={description} value={value} isExpense={isExpense}></ModelEdit>
    </Container>
  );
}

function mapStateToProps(state){
  return{   
      entries : state.EntryReducer,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actions, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Apps)
export default App;


