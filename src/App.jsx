import PostsList from "./components/PostsList.jsx";
import {useEffect, useState} from "react";
import MainHeader from "./components/MainHeader.jsx";

const users = [
    {
        id: 0,
        name: "Alex Developer",
        text: "I like ReactJs",
    },
    {
        id: 1,
        name: "Ann QA",
        text: "This is my first application",
    }
];

function App() {
    const [allUsers, setAllUsers] = useState([]);
    const [isCreatePost, setCreatePost] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editPost, setEditPost] = useState(null);

    useEffect(() => {
        (async function fetchPosts() {
            const response = await fetch("http://localhost:8080/posts");
            const data = await response.json();
            setAllUsers(data.posts);
        })();
    }, []);

    useEffect(() => {

        if (editPost && !isCreatePost) {
            setShowModal(true);
        }
        if (isCreatePost && !editPost) {
            setEditPost({
                id: allUsers.length !== 0 ? allUsers.length : 0,
                name: "",
                text: ""
            });
            setShowModal(true);

        }
    }, [editPost, isCreatePost]);


    function bodyChangeHandler(valueChange) {
        hideModalHandler();
        if (isCreatePost) {
            (async function addPost() {
                const response = await fetch("http://localhost:8080/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(valueChange)
                });
                const data = await response.json();
                setAllUsers(oldAllUsers => ([...oldAllUsers, data.post]));
            })();
        } else {
            (async function addPost() {
                const response = await fetch("http://localhost:8080/update-post", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(valueChange)
                });
                const data = await response.json();
                setAllUsers(data.posts);
            })();
        }
    }

    function hideModalHandler() {
        setShowModal(false);
        setEditPost(null);
        setCreatePost(false);
    }

    function createPostHandler() {
        setCreatePost(true);
    }

    return (
        <main>
            <MainHeader onCreatePost={createPostHandler}/>
            <PostsList
                users={allUsers}
                userPost={editPost}
                onEditPost={setEditPost}
                onBodyChange={bodyChangeHandler}
                onClose={hideModalHandler}
                isShowModal={showModal}/>
        </main>
    );
}

export default App;
