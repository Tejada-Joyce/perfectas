import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

init("user_ddDo2rUvFQmYLzA0broWp");

const DataContainer = styled.div`
  margin: 20px auto;
  width: 85%;

  @media only screen and ${breakpoints.device.lg} {
    display: grid;
    grid-template-columns: 30% 70%;
    width: 75%;
  }
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  font-size: 16px;
  padding: 0 16px;
  // line-height: 1.2;
  margin: 15px 0;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 100px;
  padding: 1em;
  margin: 15px 0;
`;

const Button = styled.button`
  background: #f6afb0;
  border: 2px solid #f6afb0;
  color: #000000;
  padding: 0.5em 1em;
  text-align: center;
  display: block;
  text-decoration: none;
  font-weight: 550;
  font-size: 19px;
  margin: 15px 0;

  &:hover {
    color: white;
    background: #ff5e61;
    border: 2px solid #ff5e61;
  }
`;
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (email && message) {
      if (isValidEmail(email)) {
        const serviceId = "service_perfectas";
        const templateId = "template_perfectas";
        const templateParams = {
          name,
          email,
          message,
        };

        emailjs
          .send(serviceId, templateId, templateParams)
          .then((response) => console.log(response))
          .then((error) => console.log(error));

        setName("");
        setEmail("");
        setMessage("");
        setAlert("Thank you for your message, we will be in touch in no time!");
      } else {
        setAlert("Please provide a valid email.");
      }
    } else {
      setAlert("Please fill out all the required fields.");
    }
  };

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  return (
    <DataContainer>
      <div>
        <h4 style={{ fontWeight: 600, letterSpacing: 1.2, lineHeight: 1.4 }}>
          Contáctanos
        </h4>
        <p>
          Comunícate con nosotros y haznos saber si hay algo que podamos hacer
          por ti
        </p>
      </div>
      <form onSubmit={submit} style={{ marginLeft: "15%" }}>
        <span style={{ color: "#f8a6a8", fontSize: 18 }}>{alert}</span>
        <Input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Correo Electrónico*"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Mensaje*"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></TextArea>
        <Button>Enviar</Button>
      </form>
    </DataContainer>
  );
};

export default ContactForm;
