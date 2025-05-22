import classes from './NewPost.module.css';
import {useEffect, useState} from "react";
import Modal from "./Modal.jsx";
import {Link} from "react-router-dom";

function NewPost({userPost, onBodyChange, onCancel}) {
    const [textValue, setTextValue] = useState('');
    const [userName, setUserName] = useState('');

    function formBlurHandler(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        onBodyChange({
            author: data.get('author'),
            body: data.get('body'),
            ...(!!userPost.id ? {id: userPost.id} : {})
        });
    }

    useEffect(() => {
        setTextValue(userPost?.body);
        setUserName(userPost?.author);
    }, [userPost?.author, userPost?.body]);
    return (
        <Modal>
            <form className={classes.form} onSubmit={formBlurHandler}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3} onChange={e => setTextValue(e.target.value)}
                              value={textValue}/>
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="author" required value={userName}
                           onChange={e => setUserName(e.target.value)}/>
                </p>
                <div className={classes.actions}>
                    <Link to="..">
                        <button type="button" onClick={onCancel}>Cancel</button>
                    </Link>
                    <button>Submit</button>
                </div>
            </form>
        </Modal>
    );
}

export default NewPost;