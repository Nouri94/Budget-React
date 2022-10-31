import React from "react";
import {Button } from 'semantic-ui-react';
function ButtonSaveOrCancel({addEntry, description, value}) {
    return (
        <div>
            <Button.Group style={{ marginTop: 20 }}>
                <Button>Cancle</Button>
                <Button.Or></Button.Or>
                <Button primary onClick={()=>(addEntry(description, value))} >Ok</Button>
            </Button.Group>
        </div>
    )
}


export default ButtonSaveOrCancel;