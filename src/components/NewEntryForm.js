import React, { useState } from "react";
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryForm from "./EntryForm";
import { useDispatch } from 'react-redux';
import { addEntryRedux } from "../actions/entries.actions";
import {v4 as uuidv4} from 'uuid';
//{addEntry, setIsExpense, setDescription, setValue, description, value, isExpense}
function NewEntryForm() {
    const dispatch = useDispatch()
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [isExpense, setIsExpense] = useState(true)
    function addEntry() {
        dispatch(addEntryRedux({ id: uuidv4(), description, value, isExpense }))
        setDescription('')
        setValue('')
        setIsExpense(true)
    }
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