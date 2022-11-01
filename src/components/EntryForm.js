import React, { Fragment} from "react";
import { Checkbox, Form, Segment } from 'semantic-ui-react';
function EntryForm({description, value, isExpense, setDescription, setValue, setIsExpense}) {
    return (
        <Fragment>
            <Form.Group>
                <Form.Input icon='tags'
                    width={12}
                    label="Description"
                    placeholder="New thing"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} ></Form.Input>
                <Form.Input icon='dollar'
                    width={4} label="Value"
                    placeholder="100.00"
                    iconPosition='left'
                    value={value}
                    onChange={(event) => setValue(event.target.value)}></Form.Input>
            </Form.Group>
            <Segment compact>
                <Checkbox toggle label="IsExpense" checked={isExpense} onChange={() => setIsExpense(oldState => !oldState)}></Checkbox>
            </Segment>
        </Fragment>
    )
}


export default EntryForm;