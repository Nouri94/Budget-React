import React from "react";
import { Container } from "semantic-ui-react";
import EntryLine from "./EntryLine";
function EntryLines({ entries,EditEntry }) {
    return (
        <Container>
            {entries.map((entry) => (
                <EntryLine key={entry.id} {...entry} EditEntry={EditEntry}></EntryLine>
            ))}
        </Container>
    )
}

export default EntryLines;