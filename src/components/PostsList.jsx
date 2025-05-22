import Post from "./Post.jsx";
import styles from "./PostsList.module.css"
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";

function PostsList({users, onBodyChange, isShowModal, onEditPost, onClose, userPost}) {

    return (<>
        {isShowModal && (
            <Modal onClose={onClose}>
                <NewPost
                    userPost={userPost}
                    onCancel={onClose}
                    onBodyChange={valueChange => onBodyChange(valueChange)}
                />
            </Modal>)}
        <ul className={styles.posts}>
            {users.map(user => <Post key={user.id} user={user} setUserPost={onEditPost}/>)}
        </ul>
    </>)
}

export default PostsList;