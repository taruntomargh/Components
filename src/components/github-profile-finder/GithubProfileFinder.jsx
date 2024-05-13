import React, { useEffect, useState } from "react";

function ShowUserData({ user }) {
  const {
    avatar_url,
    followers,
    following,
    created_at,
    name,
    public_repos,
    login,
  } = user;

  const createDate = new Date(created_at);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <img
        src={avatar_url}
        alt="Image not found"
        className="w-72 h-72 rounded-full border-2 border-black"
      />
      <p className="text-4xl font-bold">{name}</p>
      <a
        href={`https://github.com/${login}`}
        target="_blank"
        className="underline text-blue-600"
      >
        Github Link
      </a>
      <div className="flex gap-2">
        <span>Followers: {followers} | </span>
        <span>Following: {following} | </span>
        <span>Repos: {public_repos}</span>
      </div>
      <p>{`${createDate.getDate()} ${createDate.toLocaleString("en-us", {
        month: "long",
      })} ${createDate.getFullYear()}`}</p>
    </div>
  );
}

const GithubProfileFinder = () => {
  const [userName, setUserName] = useState("taruntomargh");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getGithubProfile() {
    try {
      if (userName !== "") {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        if (data) {
          setUserData(data);
          setLoading(false);
          setUserName("");
        }
      }
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  }

  function handleClick() {
    getGithubProfile();
  }

  useEffect(() => {
    getGithubProfile();
  }, []);

  //   function handleInputEvents(){
  //     const textChange = (event) => {
  //         setUserName(event.target.value);
  //     }

  //     const listener = (event) => {
  //         if (event.code === "Enter" || event.code === "NumpadEnter") {
  //           getGithubProfile();
  //           event.preventDefault();
  //         }
  //       };

  //       textChange();
  //       listener();
  //   }

  return (
    <div>
      <h1 className="text-2xl text-center bg-green-200">
        Github Profile Finder
      </h1>
      {loading ? (
        <h3 className="text-center">Loading... Please Wait.</h3>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2 mt-4 mb-2">
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="Search github profile"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
              className="placeholder-gray-600 text-md rounded-md p-2 w-96 bg-gray-200 outline-none"
            />
            <button
              onClick={handleClick}
              className="text-md text-white bg-blue-800 rounded-md p-2"
            >
              Search
            </button>
          </div>

          {userData !== null ? <ShowUserData user={userData} /> : null}
        </div>
      )}
    </div>
  );
};

export default GithubProfileFinder;
