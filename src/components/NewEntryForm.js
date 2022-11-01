import React from "react";
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
function NewEntryForm({addEntry, setIsExpense, setDescription, setValue, description, value, isExpense}) {
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