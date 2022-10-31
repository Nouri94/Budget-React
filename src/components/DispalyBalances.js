import React from "react";
import {Grid, Segment} from 'semantic-ui-react';
import DispalyBalance from "./DispalyBalance";
function DispalyBalances() {
    return (
        <div>
            <Segment textAlign='center'>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                            <DispalyBalance title="Income" value="11,3" color="green"></DispalyBalance>
                        </Grid.Column>
                        <Grid.Column>
                            <DispalyBalance title="Expenses" value="11,3" color="red"></DispalyBalance>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default DispalyBalances;