import React from "react";
import { List, Datagrid, TextField, EditButton, ShowButton, ReferenceField } from "react-admin";



export const PostList: React.FC = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" label="Titre" />
                <ReferenceField label="Nom de l'utilisateur" source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <ShowButton  label="Voir plus..." />
                <EditButton label="Commentaire" />
            </Datagrid>
        </List>
    );
};
