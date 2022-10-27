
import { Container, Grid, Header, Icon, Segment, Statistic, Form, Button } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as='h1'>Budget</Header>
      <Statistic size='small'>
        <Statistic.Label>test</Statistic.Label>
        <Statistic.Value>test</Statistic.Value>
      </Statistic>


      <Segment textAlign='center'>
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Statistic size='tiny' color='green'>
                <Statistic.Label style={{ textAlign: "left" }}>Income</Statistic.Label>
                <Statistic.Value>1,45</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size='tiny' color='red'>
                <Statistic.Label style={{ textAlign: "left" }}>Exprenses</Statistic.Label>
                <Statistic.Value>1,45</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as='h3'>History</Header>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
              <Grid.Column width={3} textAlign='right'> 1000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered></Icon>
                <Icon name='trash' bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color='green'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something else</Grid.Column>
              <Grid.Column width={3} textAlign='right'> 1000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered></Icon>
                <Icon name='trash' bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment color='red'>
          <Grid columns={3} textAlign='right'>
            <Grid.Row>
              <Grid.Column width={10} textAlign='left'>Something</Grid.Column>
              <Grid.Column width={3} textAlign='right'> 1000</Grid.Column>
              <Grid.Column width={3}>
                <Icon name='edit' bordered></Icon>
                <Icon name='trash' bordered></Icon>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>



        <Header as='h3'>Add new transaction</Header>
        <Form unstackable>
          <Form.Group>
          <Form.Input icon='tags' width={12} label="Description" placeholder="New thing" ></Form.Input>
          <Form.Input icon='dollar' width={4} label="Value" placeholder="100.00" iconPosition='left' ></Form.Input>
          </Form.Group>
          <Button.Group style={{marginTop:20}}>
            <Button>Cancle</Button>
            <Button.Or></Button.Or>
            <Button primary>Ok</Button>
          </Button.Group>
        </Form>
    </Container>
  );
}

export default App;
