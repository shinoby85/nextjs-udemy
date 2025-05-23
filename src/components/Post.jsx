import styles from "./Post.module.css";
import {useNavigate} from "react-router-dom";

export default function Post({post}) {
    const navigate = useNavigate();

    function checkPostHandler() {
        navigate(`/create-post/${post.id}`);
    }

    return (
        <li className={styles.post} onClick={checkPostHandler}>
            <p className={styles.author}>{post.author}</p>
            <p className={styles.text}>{post.body}</p>
        </li>
    );
}