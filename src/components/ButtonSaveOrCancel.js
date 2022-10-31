import React from "react";
import {Button } from 'semantic-ui-react';
function ButtonSaveOrCancel() {
    return (
        <div>
            <Button.Group style={{ marginTop: 20 }}>
                <Button>Cancle</Button>
                <Button.Or></Button.Or>
                <Button primary>Ok</Button>
            </Button.Group>
        </div>
    )
}


export default ButtonSaveOrCancel;