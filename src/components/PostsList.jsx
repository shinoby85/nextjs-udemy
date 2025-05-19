import Post from "./Post.jsx";
import styles from "./PostsList.module.css"

function PostsList({users}) {
    return (
        <ul className={styles.posts}>
            {users.map(user => <Post key={user.id} author={user.name} body={user.text}/>)}
        </ul>
    )
}

export default PostsList;