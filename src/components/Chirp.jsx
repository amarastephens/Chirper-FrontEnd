import React from "react";

const Chirp = props => {
    return (
        <div key={props.chirp.key}>
            <div>{props.chirp.username}</div>
            <p>{props.chirp.message}</p>
            <small>{props.chirp.timestamp}</small>
        </div>
    )
}

export default Chirp