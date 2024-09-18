import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import styled from "@emotion/styled";
import { TextField, FormLabel, Button  } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ConfettiExplosion from 'react-confetti-explosion';
import { RotatingLines } from "react-loader-spinner";



const useStyles = makeStyles(() => {
  return {
    form: {
      fontFamily: "Questrial !important"
    },
    field: {
      display: "inline-block !important",
      marginBottom: '20px !important',
      fontFamily: "Questrial !important",
      // padding: '0 !important'
      // borderColor: 'red !important'
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
    },
    button: {
      backgroundColor: 'rgb(30, 175, 237) !important'
    },
    alert: {marginBottom: '1rem', color: '#f93a3a', display: 'flex', alignItems: 'center', fontSize: '1rem'}
  };
});

export default function Form({ DarkMode }) {
  const classes = useStyles({ DarkMode });

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(false);
  const [loading, setLoading] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')


  var fn = '';
  var ln = '';
  var em = '';
  var sj = '';
  var ms = '';
  const handleChangeFirstName = (value) => {
    fn = value 
  };
  const handleChangeLastName = (value) => {
    ln = value
  };
  const handleChangeEmail = (value) => {
    em = value
  };
  const handleChangeSubject = (value) => {
    sj = value
  };
  const handleChangeMessage = (value) => {
    ms = value
  };
  function onFormSubmit(e){
    e.preventDefault();

    setFirstName(fn)
    setLastName(ln)
    setEmail(em)
    setSubject(sj)
    setMessage(ms)


    setFormSubmitSuccess(false)
    setFormSubmitError(false)
    setLoading(true)
    
    fetch("https://formsubmit.co/ajax/info.idoko@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        firstName: fn,
        lastName: ln,
        emailAddress: em,
        subject: sj,
        message: ms
    })
})
    .then(response => response.json())
    .then(data => {
      setFormSubmitError(false)
      setFormSubmitSuccess(true)
      setLoading(false)
    })
    .catch(error => {
      console.log(error)
      setFormSubmitSuccess(false)
      setFormSubmitError(true)
      setLoading(false)
    });
  };



  const CustomTextField = styled(TextField)
  `
  .MuiInputLabel-root {
    color: ${DarkMode ? '#bbbbbb' : 'rgb(102, 102, 102)'};
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
    <div>
      <h2 className={classes.Title}>Send me a message</h2>
      <form className={classes.form} onSubmit={onFormSubmit}>
        { formSubmitError && <p className={classes.alert}><ReportProblemOutlinedIcon /> <span> Failed to send message. Please try again or email me directly @info.idoko@gmail.com</span></p> }
        <div className={classes.names}>


          <CustomTextField
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
            />
          <CustomTextField
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
          />
        </div>
        <CustomTextField
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
        />
        <CustomTextField
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
        />
        <CustomTextField
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
        />
       
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
        <p style={{color: 'rgb(255, 165, 0)', fontWeight: '900', marginTop: '1rem'}}>This form is powered by formsubmit.co and may occasionally be unstable. If you encounter any issues, feel free to email me directly at <a href="mailto:info.idoko@gmail.com" style={{color: 'rgb(255, 165, 0)', fontWeight: '900', textDecoration: 'underline'}}>info.idoko@gmail.com</a></p>
    </div>
  );
};
