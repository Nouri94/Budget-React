import React, { useState } from "react";
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
function NewEntryForm({addEntry}) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    return (
        <div>
            <Form unstackable>
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

            </Form>
            <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value}></ButtonSaveOrCancel>
        </div>
    )
}


export default NewEntryForm;