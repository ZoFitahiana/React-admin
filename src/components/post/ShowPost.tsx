import React from "react";
import { Show, SimpleShowLayout, TextField, ReferenceField } from "react-admin";

export const ShowPostId: React.FC = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="title" label="Titre" />
                <TextField source="userId"/> 
                <TextField source="body"/> 
                <ReferenceField label="Nom de l'utilisateur" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
            </SimpleShowLayout>
        </Show>
    );
};
