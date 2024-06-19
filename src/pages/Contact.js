import React, { useState } from "react";
import "../components/contact/Contact.css";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone number is required!");
    } else if (email === "") {
      setErrMsg("Please give your Email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("Please give your Subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(
        `Thank you ${username}, Your Messages has been sent Successfully!`
      );
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contactus">
      <div className="contactus-container">
        <div className="contact-heading">
            Contact Us
        </div>
        <form className="contactus-form">
          {errMsg && <p className="error-msg">{errMsg}</p>}
          {successMsg && <p className="success-msg">{successMsg}</p>}
          <div className="contact-form-group">
            <div className="contact-form-field">
              <label>Your name</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
              />
            </div>
            <div className="contact-form-field">
              <label>Phone Number</label>
              <input
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                type="text"
              />
            </div>
          </div>
          <div className="contact-form-field">
            <label>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </div>
          <div className="contact-form-field">
            <label>Subject</label>
            <input
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
              type="text"
            />
          </div>
          <div className="contact-form-field">
            <label>Message</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div className="contact-form-field">
            <button onClick={handleSend} className="contact-submit-button">
              Send Message
            </button>
          </div>
          {errMsg && <p className="error-msg">{errMsg}</p>}
          {successMsg && <p className="success-msg">{successMsg}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;