import * as React from "react";

const container = {
  textAlign: "center",
  margin: "5% auto 0",
  width: "80%",
};

const paragraphStyles = {
  marginBottom: 48,
};

const NotFoundInfo = () => {
  return (
    <div style={container}>
      <h3>Page not found</h3>
      <p style={paragraphStyles}>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
      </p>
    </div>
  );
};

export default NotFoundInfo;
