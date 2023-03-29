import './index.css';
import { AppContext } from '../../context/app_contexts';
import React, { useRef, useContext } from 'react';
import emailjs from '@emailjs/browser';


function ContactForm() {
    let {name, setName, 
        instagram, setInstagram,
        email, setEmail,
        options, setOptions,
        message, setMessage, popup, setPopup} = useContext(AppContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleInstagramChange = (e) => {
    setInstagram(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOptionsChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setOptions([...options, value]);
    } else {
      setOptions(options.filter((item) => item !== value));
    }
  };

  const handleMsgChange = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const params = {
    name: name,
    email: email,
    message: message,
    instagram: instagram,
    options: options,
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    emailjs.sendForm(process.env.REACT_APP_SERVICE, process.env.REACT_APP_TEMPLATE, form.current, process.env.REACT_APP_PRODUCTKEY, params)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setPopup(!popup)
    // submit form data to backend or do something else with it
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="form">
        <h1 className="form-title">Contact Us</h1>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        id="name"
        value={name}
        onChange={handleNameChange}
        required
      />

      <label htmlFor="instagram">Instagram Handle:</label>
      <input
        name="instagram"
        type="text"
        id="instagram"
        value={instagram}
        onChange={handleInstagramChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        name="email"
        type="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
        required
      />

      <label htmlFor="options">Options:</label>
      <div id="options">
        <label>
          <input name="options" type="checkbox" value="cartoon intro" onChange={handleOptionsChange} />
          Cartoon Intro
        </label>
        <label>
          <input name="options" type="checkbox" value="cartoon outro" onChange={handleOptionsChange} />
          Cartoon Outro
        </label>
        <label>
          <input name="options" type="checkbox" value="cartoon bundle" onChange={handleOptionsChange} />
          Cartoon Bundle
        </label>
        <label>
          <input name="options" type="checkbox" value="cartoon picture" onChange={handleOptionsChange} />
          Cartoon Picture
        </label>
        <label>
          <input name="options" type="checkbox" value="regular intro" onChange={handleOptionsChange} />
          Regular Intro
        </label>
        <label>
          <input name="options" type="checkbox" value="regular outro" onChange={handleOptionsChange} />
          Regular Outro
        </label>
        <label>
          <input name="options" type="checkbox" value="regular bundle" onChange={handleOptionsChange} />
          Regular Bundle
        </label>
      </div>

      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={handleMsgChange}
        placeholder="Extra details can be written here"
      />

      <button type="submit">Submit</button>
    </form>
  );
}
export default ContactForm;