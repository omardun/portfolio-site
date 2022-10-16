import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../Contact/FormStyles.css"

export default function Form  () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gzzolpe', 'template_8chx677', form.current, 'T8Pabbrolnx3KsIGS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" placeholder='Name' name="user_name" />
      <label>Email</label>
      <input type="email" placeholder='Email' name="user_email" />
      <label>Message</label>
      <textarea placeholder='Message' name="message" />
      <input className='btn' type="submit" value="Send" />
    </form>
  );
};