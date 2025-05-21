import Post from "./Post.jsx";
import styles from "./PostsList.module.css"
import NewPost from "./NewPost.jsx";
import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";

function PostsList({users, onBodyChange}) {
    const [userPost, setUserPost] = useState(null);
    const [showModal, setShowModal] = useState(true);

    function hideModalHandler() {
        setShowModal(false);
    }

    useEffect(() => {
        setShowModal(true);
    }, [userPost]);

    return (
        <>
            {showModal && (
                <Modal onClose={hideModalHandler}>
                    <NewPost
                        userPost={userPost}
                        onBodyChange={valueChange => onBodyChange(userPost.id, valueChange)}
                    />
                </Modal>
            )}
            <ul className={styles.posts}>
                {users.map(user => <Post key={user.id} user={user} setUserPost={setUserPost}/>)}
            </ul>
        </>
    )
}

export default PostsList;