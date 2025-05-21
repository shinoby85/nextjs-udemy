import classes from './NewPost.module.css';
import {useEffect, useState} from "react";

function NewPost({userPost, onBodyChange, onCancel}) {
    const [textValue, setTextValue] = useState('');
    const [userName, setUserName] = useState('');

    function formBlurHandler(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        onBodyChange({name: data.get('name'), text: data.get('text')});
    }

    useEffect(() => {
        setTextValue(userPost?.text);
        setUserName(userPost?.name);
    }, [userPost?.name, userPost?.text]);
    return (
        <form className={classes.form} onSubmit={formBlurHandler}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" name="text" required rows={3} onChange={e => setTextValue(e.target.value)}
                          value={textValue}/>
            </p>
            <p>{textValue}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" name="name" required value={userName}
                       onChange={e => setUserName(e.target.value)}/>
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button>Submit</button>
            </div>
        </form>
    );
}

export default NewPost;