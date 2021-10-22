import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_ddDo2rUvFQmYLzA0broWp");

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
    <form onSubmit={submit}>
      <span>{alert}</span>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button>Send Message</button>
    </form>
  );
};

export default ContactForm;
