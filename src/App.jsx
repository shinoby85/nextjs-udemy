import PostsList from "./components/PostsList.jsx";
import {useState} from "react";

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

    function bodyChangeHandler(id, valueChange) {
        setAllUsers(oldAllUsers => {
            return oldAllUsers.map(user => {
                if (user.id === id) {
                    return {...user, ...valueChange};
                }
                return user;
            });

        });
    }

    return (
        <main>
            <h1>Hello World!</h1>
            <PostsList users={allUsers} onBodyChange={bodyChangeHandler}/>
        </main>
    );
}

export default App;
