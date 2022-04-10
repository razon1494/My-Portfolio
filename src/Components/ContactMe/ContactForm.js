import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactMe.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const ContactForm=() => {
    const [state, handleSubmit] = useForm("xgedwlep");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
    return (
        <div className='my-4'>
            <h2 className='send-text mb-4'>Send Me Direct Message Here</h2>
    <form className='' onSubmit={handleSubmit}>
                <TextField sx={{ width: '70%' }} id="demo-helper-text-misaligned-no-helper email" label="Email" type="email"
                    helperText="Please enter your email"
        name="email" />
      <br /> <br />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
                />
                <TextField sx={{ width: '70%' }}
  id="outlined-multiline-static message"
  label="Message"
                    multiline
                    type="text"
                    name="message"
                    helperText="Please enter your message here"
  rows={6}
  variant="outlined"
/>

      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
                />
    <br /> <br />
      <button className='button-80' type="submit" disabled={state.submitting}>
        Submit
      </button>
            </form>

        </div>
    );
};

export default ContactForm;
