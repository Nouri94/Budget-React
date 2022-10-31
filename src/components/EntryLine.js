import React from "react";
import {Grid, Icon, Segment } from 'semantic-ui-react';
function EntryLine({desc, value, color="black", isExpense=false}) {
    return (
        <div>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>{desc}</Grid.Column>
                        <Grid.Column width={3} textAlign='right'> {value}</Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name='edit' bordered></Icon>
                            <Icon name='trash' bordered></Icon>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    )
}

export default EntryLine;