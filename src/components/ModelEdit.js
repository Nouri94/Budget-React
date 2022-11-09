import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
import { useDispatch } from 'react-redux';
import {CloseEditModel} from '../actions/modals.actions'
import useEntryDetails from "../hooks/useEntryDetails";
function ModelEdit({ isOpen, description, value, isExpense, id }) {
    const dispatch = useDispatch()   
    const entryUpdate = useEntryDetails(description, value, isExpense);
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm setIsExpense={entryUpdate.setIsExpense} 
                setDescription={entryUpdate.setDescription}
                 setValue={entryUpdate.setValue}
                  description={entryUpdate.description}
                   value={entryUpdate.value} 
                   isExpense={entryUpdate.isExpense}></EntryForm>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=> dispatch(CloseEditModel())}>Clsoe</Button>
                <Button onClick={()=> entryUpdate.updateEntry(id)} positive>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}


export default ModelEdit;