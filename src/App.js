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
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [entry, setEntry] = useState();
  const entries = props.entries;
  const {isOpen, id} = props.modals;
  useEffect(() => {
    const index = entries.findIndex(entry=>entry.id === id)
    setEntry(entries[index])
  }, [isOpen,id])

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


  return (
    <Container>
      <MainHeader title="Budget" />
      <DispalyBalance title="Your Balance" value={total} size='small'></DispalyBalance>
      <DispalyBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal}></DispalyBalances>
      <MainHeader type="h3" title="History" />
      <EntryLines entries={entries}  {...props}></EntryLines>
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm ></NewEntryForm>
      <ModelEdit isOpen={isOpen} {...entry}></ModelEdit>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    entries: state.EntryReducer,
    modals: state.ModalReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}
const App = connect(mapStateToProps, mapDispatchToProps)(Apps)
export default App;


