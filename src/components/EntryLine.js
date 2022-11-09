import React, { Fragment} from "react";
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { removeEntryRedux } from "../actions/entries.actions";
import { useDispatch } from 'react-redux';
import {OpenEditRedux} from '../actions/modals.actions';
function EntryLine({ id, description, value, isExpense = false }) {
   const dispatch = useDispatch()   
    return (
        <div>
            <Fragment>
                <Segment color={isExpense ? 'red' : 'green'}>
                    <Grid columns={3} textAlign='right'>
                        <Grid.Row>
                            <Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
                            <Grid.Column width={3} textAlign='right'> {value}</Grid.Column>
                            <Grid.Column width={3}>
                                <Icon name='edit' bordered onClick={()=>dispatch(OpenEditRedux(id))}></Icon>
                                <Icon name='trash' bordered onClick={()=>dispatch(removeEntryRedux(id))}></Icon>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>               
            </Fragment>
        </div>
    )
}

export default EntryLine;