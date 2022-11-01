import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";
function EntryLines({ entries, deleteEntry,EditEntry }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine key={entry.id} {...entry} deleteEntry={deleteEntry} EditEntry={EditEntry}></EntryLine>
            ))}
        </Container>
    )
}

export default EntryLines;