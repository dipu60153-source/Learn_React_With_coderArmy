import React, { useEffect, useState } from "react";

export const Body = () => {
  const [profile, setProfile] = useState([]);
  const [numberOfProfile, setNumberOfProfile] = useState("");
  async function generateProfile(count) {
    const ran=Math.floor(1+Math.random()*10000);
    const responce = await fetch(
      `https://api.github.com/users?since=${ran}&per_page=${count}`
    );
    const data = await responce.json();
    setProfile(data);
  }

  useEffect(() => {
    generateProfile(10);
  }, []);
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Search here"
          value={numberOfProfile}
          onChange={(e) => setNumberOfProfile(e.target.value)}
        />
        <button onClick={()=>generateProfile(Number(numberOfProfile))}>Search</button>
      </div>
      <div className="profiles">
        {profile.map((value) => {
          return (
            <div key={value} className="card">
              <img src={value.avatar_url} alt="" />
              <h2>{value.login}</h2>
              <a href={value.html_url} target="blank">
                Profile
              </a>
            </div>
          );
          n;
        })}
      </div>
    </>
  );
};
