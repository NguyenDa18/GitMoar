import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext);
  const [text, setText] = useState("");

  const onChange = e => {
    setText(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      githubContext.searchUsers(text);
      setText("");
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        placeholder="Search Users..."
        onChange={onChange}
        value={text}
      />
      <input type="submit" value="Search" className="btn btn-dark btn-block" />
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </form>
  );
};

export default Search;
