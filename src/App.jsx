import React, { useState } from 'react';
import Feed from "./components/Feed"


let App = () => {
  let [username, setUsername] = useState('');
  let [msg, setMsg] = useState('');
  let [chirps, setChirps] = useState([
    { username: 'Freddie:', msg: "So you think you can stop me and spit in my eye?" },
    { username: 'Elton:', msg: "Bennie and the jets" },
    { username: 'Robert Plant:', msg: 'Buying a stairway to heaven' },
  ]);

  let handleSubmit = (e) => {
    //need this line to stop page refresh
    e.preventDefault();
    let newChirp = {
      username: username,
      msg: msg,
    };

    //redefines existing chirps array and adds newChirp object 
    setChirps([...chirps, newChirp]);
  };

  return (
    <>
      <div className="container">
        <form className="bg-primary m-3 py-4  rounded shadow d-flex justify-content-center make-chirps">
          <input className="m-2" type="text" placeholder="What's your name?" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="m-2" type="text" placeholder="What's on your mind?" value={msg} onChange={(e) => setMsg(e.target.value)} />
          <input className="m-2" type="submit" value="Submit" onClick={(e) => handleSubmit(e)} />
        </form>
      </div>
      {chirps.map((chirp, id) => <Feed chirp={chirp} />)}

      

    </>
  );
};

export default App;