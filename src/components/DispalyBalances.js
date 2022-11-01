import React from "react";
import {Grid, Segment} from 'semantic-ui-react';
import DispalyBalance from "./DispalyBalance";
function DispalyBalances({incomeTotal, expenseTotal}) {
    return (
        <div>
            <Segment textAlign='center'>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <DispalyBalance title="Income" value={incomeTotal} color="green"></DispalyBalance>
                        </Grid.Column>
                        <Grid.Column>
                            <DispalyBalance title="Expenses" value={expenseTotal} color="red"></DispalyBalance>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default DispalyBalances;