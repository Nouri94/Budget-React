import { useDispatch } from 'react-redux';
import { addEntryRedux, editEntryRedux } from "../actions/entries.actions";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import { CloseEditModel } from '../actions/modals.actions';
function useEntryDetails(desc = "", val = "", isExp = true) {
    const dispatch = useDispatch()
    const [description, setDescription] = useState(desc)
    const [value, setValue] = useState(val)
    const [isExpense, setIsExpense] = useState(isExp)

    useEffect(() => {
        setDescription(desc)
        setValue(val)
        setIsExpense(isExp)
    }, [desc, val, isExp])

    function updateEntry(id) {
        dispatch(
            editEntryRedux(
                id, { id, description, value, isExpense },
            )
        );
        dispatch(CloseEditModel())
        resetValue()
    }

    function addEntry() {
        dispatch(addEntryRedux({ id: uuidv4(), description, value, isExpense }))
        resetValue()
    }

    function resetValue() {
        setDescription('')
        setValue('')
        setIsExpense(true)
    }
    return { description, setDescription, value, setValue, isExpense, setIsExpense, addEntry, updateEntry };
}

export default useEntryDetails;