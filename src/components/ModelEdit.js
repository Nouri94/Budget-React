import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";
function ModelEdit({ isOpen, setIsOpen,setIsExpense, setDescription, setValue, description, value, isExpense }) {
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit entry</Modal.Header>
            <Modal.Content>
                <EntryForm setIsExpense={setIsExpense} setDescription={setDescription} setValue={setValue} description={description} value={value} isExpense={isExpense}></EntryForm>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={()=> setIsOpen(false)}>Clsoe</Button>
                <Button onClick={()=> setIsOpen(false)} positive>Save</Button>
            </Modal.Actions>
        </Modal>
    )
}


export default ModelEdit;