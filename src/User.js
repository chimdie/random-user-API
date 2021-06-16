import React, { useState, useEffect } from "react";

export default function User() {
  const [user, setUser] = useState(null);
  const [loading, setLoader] = useState(true);
  
  const url = "https://api.randomuser.me";

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setUser(data.results[0]);
      setLoader(false);
    };
    loadData();
  }, []);

  return (
    <div className="user2">
      {loading ? (
        "loading...."
      ) : (
        <div className="user">
          <img src={user.picture.large} alt="user--img" className="user--img" />
          <div className="user--info">
            <h3>
              {user.name.first} {user.name.last}
            </h3>
            <hr></hr>
            <p className="user--age">
              <span>AGE: </span>
              {user.dob.age}
            </p>
            <hr></hr>
            <p className="user--email">
              <span>EMAIL: </span>
              {user.email}
            </p>
            <hr></hr>
            <p className="user--location">
              <span>RESIDENCE: </span>
              {user.location.city}, {user.location.country}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
