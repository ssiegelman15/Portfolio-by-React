import React, { useState, useRef } from "react";
import { validateEmail } from "../utils/helpers.js";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [user_email, setUser_email] = useState("");
  const [user_name, setUser_name] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "user_email") {
      setUser_email(inputValue);
    } else if (inputType === "user_name") {
      setUser_name(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid. If so we set an error message to be displayed on the page.
    if (!validateEmail(user_email)) {
      setErrorMessage("Email is invalid, please enter a valid email address!");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the user name and message is not valid. If so, we set an error message regarding the invalid entry.
    }
    if (!user_name) {
      setErrorMessage(`You cannot leave the name section blank!`);
      return;
    }
    if (!message) {
      setErrorMessage(`You cannot leave the message section blank!`);
      return;
    }

    emailjs
      .sendForm(
        "service_abmk1w1",
        "template_e80poee",
        form.current,
        "L055p9ITehQ4NYhvi"
      )
      .then(
        (result) => {
          console.log("Great Success, High Five!!");
          console.log(form.current);
        },
        (error) => {
          console.log("You're Fired!");
        }
      );

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUser_name("");
    setMessage("");
    setUser_email("");
    setErrorMessage("");
  };

  const handleOnBlur = (e) => {
    e.preventDefault();

    if (!user_name) {
      setErrorMessage(`Leaving feedback without a name is just weak...`);
      return;
    }
    if (!validateEmail(user_email)) {
      setErrorMessage(
        "How will I get back to you if you don't give me your email address??"
      );
      return;
    }
    if (!message) {
      setErrorMessage(
        `If you send a message and it's blank, did you really send a message at all?`
      );
      return;
    }
    if (user_name && validateEmail(user_email) && message) {
      setErrorMessage("");
      return;
    }
  };

  return (
    <form className="form container" ref={form} onSubmit={handleFormSubmit}>
      <div className="col">
        <h3> Contact Me </h3>
        <input
          value={user_name}
          name="user_name"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="text"
          placeholder="Name"
          id="userInput"
          className="row"
        />
        <input
          value={user_email}
          name="user_email"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="email"
          placeholder="Email"
          id="emailInput"
          className="row"
        />
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={handleOnBlur}
          type="message"
          placeholder="Message"
          id="messageInput"
          className="row"
        />
        <button
          type="submit"
          value="send"
          // onClick={handleFormSubmit}
          className="row"
          id="submit"
        >
          Submit
        </button>
      </div>

      {errorMessage && (
        <div>
          <p id="errorText">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}

export default Contact;
