import { Admin, Resource, Datagrid, TextField, EditButton } from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList } from "./components/post/PostList";



export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts"  list={PostList}/>
  </Admin>
);


