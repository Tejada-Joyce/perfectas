import * as React from "react";

const container = {
  textAlign: "center",
  margin: "5% auto 0",
  width: "80%",
};

const paragraphStyles = {
  marginBottom: 10,
};

const NotFoundInfo = () => {
  return (
    <div style={container}>
      <h3>Page not found</h3>
      <p style={paragraphStyles}>
        Lo sentimos{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        . No pudimos encontrar lo que estabas buscando.
      </p>
      <p>
        Por favor, regresa a la página de <a href="/">INICIO</a>
      </p>
    </div>
  );
};

export default NotFoundInfo;
