import React from "react";
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import useEntryDetails from "../hooks/useEntryDetails";
function NewEntryForm() {
    const { description, setDescription, value, setValue, isExpense, setIsExpense, addEntry } = useEntryDetails();
    return (
        <div>
            <Form unstackable>
                <EntryForm setIsExpense={setIsExpense} setDescription={setDescription} setValue={setValue} description={description} value={value} isExpense={isExpense}></EntryForm>
            </Form>
            <ButtonSaveOrCancel addEntry={addEntry}></ButtonSaveOrCancel>
        </div>
    )
}


export default NewEntryForm;