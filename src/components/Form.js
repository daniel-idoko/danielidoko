import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";
import { TextField, FormLabel, Button  } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ConfettiExplosion from 'react-confetti-explosion';
import { RotatingLines } from "react-loader-spinner";



const useStyles = makeStyles((theme) => {
  return {
    section: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '2.5rem',
      }
    },
    form: {
      fontFamily: "Questrial !important"
    },
    field: {
      display: "inline-block !important",
      marginBottom: '20px !important',
      fontFamily: "Questrial !important",
      // padding: '0 !important'
      // borderColor: 'red !important'
      color: ({ DarkMode })=>{
        if(DarkMode){
            return "#fff !important"
        }else{
            return "rgba(0, 0, 0, 0.8)  !important"
        }
      },

      [theme.breakpoints.down('sm')]: {
        padding: '0 !important'
      }
    },
    names: {
      display: 'flex',
      justifyContent: "space-between"
    },
    Title: {
      marginBottom: "2rem",
      color: ({ DarkMode })=>{
        if(DarkMode){
            return "#fff"
        }else{
            return "#000"
        }
      },

      [theme.breakpoints.down('sm')]: {
        marginBottom: "0.6rem",
        fontSize: '1.3rem'
      }
    },
    commentTextArea: {
      maxWidth: '100% !important',
      width: '100% !important',
      borderRadius: '4px !important',
      fontSize: '14px',
      padding: '12px 5px ',
      marginBottom: "0.8rem",
      fontFamily: 'inherit',
      border: ({DarkMode})=>{
        if(DarkMode){
          return '1px solid #444'
        }else{
          return "1px solid #ccc"
        }
      },
      backgroundColor: ({DarkMode})=>{
        if(DarkMode){
          return '#1e1e1e'
        }else{
          return "#fff"
        }
      },
      color: ({DarkMode})=>{
        if(DarkMode){
          return '#e0e0e0 !important'
        }else{
          return "#333 !important"
        }
      },
    },
    button: {
      backgroundColor: 'rgb(30, 175, 237) !important'
    },
    alert: {marginBottom: '1rem', color: '#f93a3a', display: 'flex', alignItems: 'center', fontSize: '1rem'},
    alertGood: {marginBottom: '1rem', color: '#42e335', display: 'flex', alignItems: 'center', fontSize: '1rem'},
  };
});

export default function Form({ DarkMode }) {
  const classes = useStyles({ DarkMode });

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleChangeFirstName = (value) => {
    setFirstName(value)
  };
  const handleChangeLastName = (value) => {
    setLastName(value)
  };
  const handleChangeEmail = (value) => {
    setEmail(value)
  };
  const handleChangeSubject = (value) => {
    setSubject(value)
  };
  const handleChangeMessage = (value) => {
    setMessage(value)
  };
  function onFormSubmit(e){
    e.preventDefault();

    setFormSubmitSuccess(false)
    setFormSubmitError(false)
    setLoading(true)
    setSuccessMessage('')
    
    fetch("https://formsubmit.co/ajax/info.idoko@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        emailAddress: email,
        subject: subject,
        message: message
    })
})
    .then(response => response.json())
    .then(data => {
      setFormSubmitError(false)
      setFormSubmitSuccess(true)
      setSuccessMessage('message sent')
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setSuccessMessage('')
      setFormSubmitSuccess(false)
      setFormSubmitError(true)
      setLoading(false)
    });
  };



  const CustomTextField = styled(TextField)
  `
  .MuiInputLabel-root {
    color: ${DarkMode ? '#bbbbbb' : 'rgb(102, 102, 102)'} !important;
  }
  .MuiInput-root {
    border: 2px solid ${DarkMode ? '#bbbbbb' : 'rgb(102, 102, 102)'} !important;
  }
  
  .css-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: ${DarkMode ? '#bbbbbb' : 'rgb(102, 102, 102)'} !important;
  }

  .css-1vor0i4-MuiFormLabel-root-MuiInputLabel-root{
    color: ${DarkMode ? '#bbbbbb' : 'rgb(102, 102, 102)'} !important;
  }

  .css-1sqnrkk-MuiInputBase-input-MuiOutlinedInput-input{
    color: ${DarkMode ? '#bbbbbb' : 'rgb(102, 102, 102)'} !important;
  }
  `;

  return (
    <div className={classes.section}>
      <h2 className={classes.Title}>Send me a message</h2>
      <form className={classes.form} onSubmit={onFormSubmit}>
        { formSubmitError && <p className={classes.alert}><ReportProblemOutlinedIcon /> <span> Failed to send message. Please try again or email me directly @info.idoko@gmail.com</span></p> }
        {successMessage && <p className={classes.alertGood}>{successMessage}</p>}
        <div className={classes.names}>


          {/* <CustomTextField
            id="cutomer-form-id-1"
            label="Your Name"
            variant="outlined"
            color="secondary"
            fullWidth
            multiline
            margin="dense"
            className={classes.field}
            style={{marginRight: "0.5rem"}}
            required
            inputProps={{
              onChange: (event) => handleChangeFirstName(event.target.value),
            }}
            /> */}
            <input 
              type="text" 
              name="first-name*" 
              placeholder="first name" 
              className={classes.commentTextArea} 
              style={{marginRight: "0.5rem"}} 
              required
              value={firstName}
              onChange={(event) => handleChangeFirstName(event.target.value)}
            />
            <input 
              type="text" 
              name="last-name*" 
              placeholder="last name"
              className={classes.commentTextArea} 
              style={{marginLeft: "0.5rem"}}
              required
              value={lastName}
              onChange={(event) => handleChangeLastName(event.target.value)}
            />
          {/* <CustomTextField
            label="Your Name"
            variant="outlined"
            color="secondary"
            fullWidth
            multiline
            margin="dense"
            required
            className={classes.field}
            style={{marginLeft: "0.5rem"}}
            inputProps={{
              onChange: (event) => handleChangeLastName(event.target.value),
            }}
          /> */}
        </div>
        {/* <CustomTextField
          label="Email Address"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          margin="dense"
          type="email"
          required
          className={classes.field}
          inputProps={{
            onChange: (event) => handleChangeEmail(event.target.value),
          }}
        /> */}

            <input 
              type="email" 
              name="email" 
              placeholder="email address*" 
              className={classes.commentTextArea} 
              style={{marginRight: "0.5rem"}} 
              required
              value={email}
              onChange={(event) => handleChangeEmail(event.target.value)}
            />

            <input 
              type="text" 
              name="subject" 
              placeholder="subject" 
              className={classes.commentTextArea} 
              style={{marginRight: "0.5rem"}} 
              onChange={(event) => handleChangeSubject(event.target.value)}
              value={subject}
            />

        
        {/* <CustomTextField
          label="Subject"
          variant="outlined"
          color="secondary"
          fullWidth
          multiline
          margin="dense"
          className={classes.field}
          inputProps={{
            onChange: (event) => handleChangeSubject(event.target.value),
          }}
        /> */}
        {/* <CustomTextField
          label="Drop your message here"
          variant="outlined"
          color="secondary"
          fullWidth
          margin="dense"
          multiline
          required
          rows={4}
          className={classes.field}
          inputProps={{
            onChange: (event) => handleChangeMessage(event.target.value),
          }}
        /> */}
        <textarea className={classes.commentTextArea} id="message" name="message" rows="4" cols="100" placeholder="enter your message *" required onChange={(event) => handleChangeMessage(event.target.value)}></textarea>

       
        <div>
          <Button
            type="submit"
            color="secondary"
            variant="contained"
            className={classes.button}
            endIcon={<KeyboardArrowRightIcon />}
          >
            submit
            {formSubmitSuccess && <ConfettiExplosion force={0.5} duration={2400} particleCount={50} width={600}/>}
          </Button>
          {
                loading
                &&
                  <RotatingLines
                      visible={true}
                      height="16"
                      width="16"
                      color="grey"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                  /> 
            }
        </div>
      </form>
        <p style={{color: 'rgb(255, 165, 0)', fontWeight: '500', marginTop: '1.5rem', fontSize: '0.9rem'}}>This form is powered by formsubmit.co and may occasionally be unstable. If you encounter any issues, feel free to email me directly at <a href="mailto:info.idoko@gmail.com" style={{color: 'rgb(255, 165, 0)', fontWeight: '900', textDecoration: 'underline'}}>info.idoko@gmail.com</a></p>
    </div>
  );
};
