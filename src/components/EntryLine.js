import React, { Fragment} from "react";
import { Grid, Icon, Segment } from 'semantic-ui-react';
function EntryLine({ id, description, value, color = "black", isExpense = false, deleteEntry, setIsOpen,EditEntry }) {
    return (
        <div>
            <Fragment>
                <Segment color={isExpense ? 'red' : 'green'}>
                    <Grid columns={3} textAlign='right'>
                        <Grid.Row>
                            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
                            <Grid.Column width={3} textAlign='right'> {value}</Grid.Column>
                            <Grid.Column width={3}>
                                <Icon name='edit' bordered onClick={()=>EditEntry(id)}></Icon>
                                <Icon name='trash' bordered onClick={() => deleteEntry(id)}></Icon>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>               
            </Fragment>
        </div>
    )
}

export default EntryLine;