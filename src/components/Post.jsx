import styles from "./Post.module.css";

export default function Post({user, setUserPost}) {
    return (
        <li className={styles.post} onClick={() => setUserPost({...user})}>
            <p className={styles.author}>{user.name}</p>
            <p className={styles.text}>{user.text}</p>
        </li>
    );
}