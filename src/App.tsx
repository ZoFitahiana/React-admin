import { Admin, Resource, Datagrid, TextField, EditButton} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList} from "./components/post/PostList";
import { ShowPostId } from "./components/post/ShowPost";



export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts"  list={PostList} show={ShowPostId}/>
  </Admin>
);


