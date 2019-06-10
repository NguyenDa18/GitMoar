import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>
        <i className="fas fa-exclamation text-danger" /> Not Found
      </h1>
      <p className="lead">The page you are looking for does not exist...</p>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default NotFound;
