import {MdMessage, MdPostAdd} from 'react-icons/md';

import classes from './MainHeader.module.css';
import {NavLink} from "react-router-dom";

function MainHeader() {
    return (
        <header className={classes.header}>
            <h1 className={classes.logo}>
                <MdMessage/>
                React Poster
            </h1>
            <NavLink to="/create-post">
                <button className={classes.button}>
                    <MdPostAdd size={18}/>
                    New Post
                </button>
            </NavLink>
        </header>
    );
}

export default MainHeader;