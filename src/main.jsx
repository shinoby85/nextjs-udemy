import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postsLoader} from './routes/Posts.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NewPost, {action as newPostAction, loader as loaderPost} from "./components/NewPost.jsx";
import RootLayout from "./routes/RootLayout.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <Posts/>,
                loader: postsLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost/>,
                        action: newPostAction
                    },
                    {
                        path: "/create-post/:postId",
                        element: <NewPost/>,
                        action: newPostAction,
                        loader: loaderPost
                    }
                ]
            }

        ]
    },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={routes}/>
    </React.StrictMode>
)
