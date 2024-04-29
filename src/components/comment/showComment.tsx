import React from "react";
import { Show, SimpleShowLayout, TextField} from "react-admin";

export const ShowCommentId: React.FC = (props) => {
    return (
        <Show {...props}>
            <SimpleShowLayout>
                <TextField source="id" />
                <TextField source="name"/>
                <TextField source="email"/>
                <TextField source="body"/> 
                <TextField source="postId"/>   
            </SimpleShowLayout>
        </Show>
    );
};
