import classes from './NewPost.module.css';
import {useEffect, useState} from "react";

function NewPost({userPost, onBodyChange}) {
    const [textValue, setTextValue] = useState('');
    const [userName, setUserName] = useState('');
    useEffect(() => {
        setTextValue(userPost?.text);
        setUserName(userPost?.name);
    }, [userPost?.name, userPost?.text]);
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3} onChange={e => setTextValue(e.target.value)}
                          value={textValue} onBlur={e => onBodyChange({text: textValue})}/>
            </p>
            <p>{textValue}</p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" required value={userName} onChange={e => setUserName(e.target.value)}
                       onBlur={e => onBodyChange({name: userName})}/>
            </p>
        </form>
    );
}

export default NewPost;