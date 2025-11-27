import { useState } from "react";
import "./Contact.css";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  function handleNameChange(e) {
    setName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Please fill all the fields");
      return;
    } else {
      fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    }
  }
  return (
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input type="text" id="name" onChange={handleNameChange} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input type="email" id="email" onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="phone">
            Phone:
          </label>
          <input type="tel" id="phone" onChange={handlePhoneChange} />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="message">
            Message:
          </label>
          <textarea id="message" onChange={handleMessageChange}></textarea>
        </div>
        <div className="form-group-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
