import React from "react";
import { useRef } from "react";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contact.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



const Contact = () => {
  const classes = useStyles();
  const greetings = "Say Hi.";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_wuzqxop', 'template_prx7we9', form.current, {publicKey: 'zt8G0eoePZMsvmYQq'})
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'You have sent an email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };



    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <TextField
                  id="outlined-name-input"
                  label="Name"
                  type="text"
                  size="small"
                  variant="filled"
                  name="from_name"
                  className={classes.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="from_email"
                  className={classes.formfield}
                />
                <TextField
                  id="outlined-password-input-2"
                  label="Message"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className={classes.formfield}
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-paper-plane"></i>
                  <Typography component='span'> Send Email</Typography>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <p>{greetings}</p>
            </h1>
          </div>
        </Container>
      </section>
  );
};

export default Contact;