import React from "react";
import { List, Datagrid, TextField,ShowButton} from "react-admin";



export const CommentLists: React.FC = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="id" />
                <TextField source="name" label="Nom " />
                <TextField source="email" label="Email" /> 
                <ShowButton  label="Voir plus..." />          
            </Datagrid>
        </List>
    );
};
