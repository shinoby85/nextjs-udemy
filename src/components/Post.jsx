import styles from "./Post.module.css";

export default function Post({user, setUserPost}) {
    return (
        <li className={styles.post} onClick={() => setUserPost({...user})}>
            <p className={styles.author}>{user.author}</p>
            <p className={styles.text}>{user.body}</p>
        </li>
    );
}