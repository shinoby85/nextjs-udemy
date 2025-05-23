import Post from "./Post.jsx";
import styles from "./PostsList.module.css"

function PostsList({posts}) {
    return (<>
        <ul className={styles.posts}>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </ul>
    </>)
}

export default PostsList;