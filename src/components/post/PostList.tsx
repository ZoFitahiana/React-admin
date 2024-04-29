import React from "react";
import {List, Datagrid, TextField, EditButton } from "react-admin";

export const PostList: React.FC = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="title" label="Titre" />
                <TextField source="name" label="Nom de l'utilisateur" />
                <EditButton label="Commentaire" />
            </Datagrid>
        </List>
    );
};

