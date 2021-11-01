import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";
import { ButtonNoLink } from "../../constants/constants-styled";

init("user_ddDo2rUvFQmYLzA0broWp");

const DataContainer = styled.div`
  margin: 20px auto;
  width: 85%;

  @media only screen and ${breakpoints.device.sm} {
    display: grid;
    grid-template-columns: 40% 60%;
  }

  @media only screen and ${breakpoints.device.lg} {
    grid-template-columns: 30% 70%;
    width: 75%;
  }
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  font-size: 16px;
  padding: 0 16px;
  margin: 15px 0;
`;

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  min-height: 100px;
  padding: 1em;
  margin: 15px 0;
`;

const Form = styled.form`
  @media only screen and ${breakpoints.device.sm} {
    margin-left: 15%;
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
      <Form onSubmit={submit}>
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
        <ButtonNoLink>Enviar</ButtonNoLink>
      </Form>
    </DataContainer>
  );
};

export default ContactForm;
