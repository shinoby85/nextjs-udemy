import PostsList from "./components/PostsList.jsx";

const users = [
    {
        id: 1,
        name: "Alex Developer",
        text: "I like ReactJs",
    },
    {
        id: 2,
        name: "Ann QA",
        text: "This is my first application",
    }
];

function App() {
    return (
        <main>
            <h1>Hello World!</h1>
            <PostsList users={users}/>
        </main>
    );
}

export default App;
