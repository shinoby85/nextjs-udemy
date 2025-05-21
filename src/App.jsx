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
    const [allUsers, setAllUsers] = useState(users);
    const [isCreatePost, setCreatePost] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [editPost, setEditPost] = useState(null);

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


    function bodyChangeHandler(id, valueChange) {
        setAllUsers(oldAllUsers => {
            hideModalHandler();
            if (isCreatePost) {
                setCreatePost(false);
                const newUser = {
                    ...editPost,
                    ...valueChange
                };
                return [
                    ...oldAllUsers,
                    newUser
                ];
            }
            return oldAllUsers.map(user => {
                if (user.id === id) {
                    return {...user, ...valueChange};
                }
                return user;
            });

        });
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
