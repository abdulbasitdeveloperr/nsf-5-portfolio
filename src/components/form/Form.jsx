import React, { useState } from "react";
import TopDataText from "../sharedComponents/TopDataText";
import "./Form.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
     const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
     });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
     console.log(formData);
    setFormData({
        name: "",
      email: "",
      message: "",
      });
    const subject = encodeURIComponent(formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${subject}&body=${body}`,
      "_blank"
    );
  };

       return (
    <div id="contactme" className="form-container">
      <TopDataText
        topText="Connect with me"
        headingText="Get in touch"
        descText="I'd love to hear messages from you. Any questions or comments? Please use the form below."
      />
     <form onSubmit={handleOnSubmit}>
  <div className="input-row">
    <input
      type="text"
      className="input-field"
      id="name"
      placeholder="Enter your name"
      onChange={handleInputChange}
      value={formData.name}
      name="name"
    />
    <input
      type="email"
      className="input-field"
      id="email"
      placeholder="Enter your email"
      onChange={handleInputChange}
      value={formData.email}
      name="email"
    />
  </div>
  <textarea
    className="message-box"
    placeholder="Enter your message"
    onChange={handleInputChange}
    value={formData.message}
    name="message"
    id="message"
  ></textarea>

  <button type="submit" className="submit-button">
    Submit
  </button>
</form>

    </div>
  );
};

export default Form;
