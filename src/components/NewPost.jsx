import classes from './NewPost.module.css';
import {useState} from "react";
import Modal from "./Modal.jsx";
import {Form, Link, redirect, useLoaderData, useSubmit} from "react-router-dom";

function NewPost() {

    const submit = useSubmit();
    const post = useLoaderData();
    const [textValue, setTextValue] = useState(post?.body || '');
    const [userName, setUserName] = useState(post?.author || '');

    function handlerSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        if (post?.id) {
            formData.append("id", post.id);
        }
        submit(formData, {
            method: !!post?.id ? "PUT" : "POST",
        });
    }

    return (
        <Modal>
            <Form method={!!post?.id ? "PUT" : "POST"} className={classes.form} onSubmit={handlerSubmit}>
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
                        <button type="button">Cancel</button>
                    </Link>
                    <button>Submit</button>
                </div>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({request}) {
    const method = request.method;
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);
    const url = method === "POST" ? 'posts' : 'update-post';
    await fetch(`http://localhost:8080/${url}`, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(postData)
    });
    return redirect('/');
}

export async function loader({params}) {
    const response = await fetch(`http://localhost:8080/posts/${params.postId}`);
    const resData = await response.json();
    return resData.post;
}