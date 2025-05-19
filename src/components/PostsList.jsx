import Post from "./Post.jsx";
import styles from "./PostsList.module.css"
import NewPost from "./NewPost.jsx";
import {useState} from "react";

function PostsList({users, onBodyChange}) {
    const [userPost, setUserPost] = useState(null);

    return (
        <>
            <NewPost userPost={userPost} onBodyChange={valueChange => onBodyChange(userPost.id, valueChange)}/>
            <ul className={styles.posts}>
                {users.map(user => <Post key={user.id} user={user} setUserPost={setUserPost}/>)}
            </ul>
        </>
    )
}

export default PostsList;