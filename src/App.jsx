import React, { useState } from 'react';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import Chirp from "./components/Chirp";

const App = () => {
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");
    const [chirps, setChirps] = useState([
        {
            key: uuidv4(),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            username: "Josh",
            message: "This is my chirp"
        },
        {
            key: uuidv4(),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            username: "Josh",
            message: "This is my chirp"
        },
        {
            key: uuidv4(),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            username: "Josh",
            message: "This is my chirp"
        }
    ]);

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
    const handleClick = () => {
        const newChirp = {
            key: uuidv4(),
            timestamp: moment().format('MMMM Do YYYY, h:mm:ss a'),
            username: username,
            message: message
        };

        setChirps([...chirps, newChirp])
    }

    return (
        <>
            <h1>Chirper</h1>

            <label htmlFor="username-input">Who are you?</label>
            <input
                type="text"
                name="username-input"
                id=""
                value={username}
                onChange={handleUsernameChange}
            />
            <label htmlFor="message-input">What do you want to say?</label>
            <textarea
                name="message-input"
                cols="30"
                rows="10"
                value={message}
                onChange={handleMessageChange}
            ></textarea>
            <button onClick={handleClick}>Submit</button>

            <div id="timeline-container">
                {chirps.map(chirp => <Chirp chirp={chirp} pizza="yyayyy pizza"/>)}
            </div>
        </>
    )
}

export default App