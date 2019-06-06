import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const { text } = this.state;
    const { searchUsers, setAlert } = this.props;
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter something", "light");
    } else {
      searchUsers(text);
      this.setState({ text: "" });
    }
  };

  render() {
    const { text } = this.state;
    const { showClear, clearUsers } = this.props;
    return (
      <form className="form" onSubmit={e => this.onSubmit(e)}>
        <input
          type="text"
          name="text"
          placeholder="Search Users..."
          onChange={e => this.onChange(e)}
          value={text}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
        {showClear && (
          <button className="btn btn-light btn-block" onClick={clearUsers}>
            Clear
          </button>
        )}
      </form>
    );
  }
}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired
};

export default Search;
