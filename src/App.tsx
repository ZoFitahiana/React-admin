import { Admin, Resource, Datagrid, TextField, EditButton} from "react-admin";
import { dataProvider } from "./dataProvider";
import { PostList} from "./components/post/PostList";
import { ShowPostId } from "./components/post/ShowPost";
import { CommentLists } from "./components/comment/CommentList";
import { ShowCommentId } from "./components/comment/showComment";


export const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts"  list={PostList} show={ShowPostId}/>
    <Resource name="comments"  list={CommentLists} show={ShowCommentId}/>
  </Admin>
);


