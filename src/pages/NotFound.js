import React from "react";

import ButtonBackToHome from "../components/ButtonBackToHome";

function NotFound() {
  return (
    <div className="page-notfound">
      <div className="left-notfound">
        <ButtonBackToHome />
      </div>
      <div className="right-notfound">
        <span role="img" aria-label="Sadface">
          😔
        </span>
        <h1 className="title">404!</h1>
        <h2 className="subtitle">Not found</h2>
      </div>
    </div>
  );
}

export default NotFound;
