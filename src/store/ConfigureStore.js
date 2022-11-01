import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import entriesReducer from '../reducers/enteris.reducers'
const configStore = () => {
    return configureStore(
        combineReducers({
            entries: entriesReducer
        })
    );
}


export default configStore;