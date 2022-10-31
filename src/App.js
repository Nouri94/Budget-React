
import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DispalyBalance from './components/DispalyBalance';
import DispalyBalances from './components/DispalyBalances';
import EntryLine from './components/EntryLine';
function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DispalyBalance title="Your Balance" value="11,3" size='small'></DispalyBalance>
      <DispalyBalances></DispalyBalances>
      <MainHeader type="h3" title="History" />
      <EntryLine desc="Income" value="1500" ></EntryLine>
      <EntryLine desc="Expence" value="1600" isExpense></EntryLine>
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
