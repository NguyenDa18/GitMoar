import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/githubContext";

const Search = ({ clearUsers, showClear, setAlert }) => {
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
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </form>
  );
};

export default Search;
