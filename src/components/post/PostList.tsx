import React from "react";
import { List, Datagrid, TextField, EditButton, ShowButton } from "react-admin";



export const PostList: React.FC = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" label="Titre" />
                <TextField source="name" label="Nom de l'utilisateur" />
                <ShowButton  label="Voir plus..." />
                <EditButton label="Commentaire" />
            </Datagrid>
        </List>
    );
};
