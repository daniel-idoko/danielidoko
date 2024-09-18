import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import axios from "axios";
import Nav from "./Nav";
import { RotatingLines } from "react-loader-spinner";

const useStyles = makeStyles((theme)=>{
    return {
        sidebar: {
            width: "25% !important",
            height: "100vh !important",
            borderRight: "1px solid rgb(230, 230, 230)",
            paddingTop: "3em",
            paddingBottom: "30px",
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: ({ DarkMode })=>{
                if(DarkMode){
                    return "#181818"
                }else{
                    return "#fff"
                }
            },
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },

        bioText: {
            display: "block",
            fontWeight: "normal",
            fontSize: "1rem",
            lineHeight: "1.05",
            marginBottom: "1.677rem",
            letterSpacing: '0.5px',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#bbbbbb"
                }else{
                    return "#686868"
                }
            }
        },
        label: {
            fontSize: '1.163rem',
            fontWeight: "600",
            fontFamily: 'Lora',
            marginBottom: '1rem !important',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
        },
        inputHolder: {
            position: 'relative',
            marginTop: "0.8rem",
            marginBottom: "2rem"
        },
        input: {
            width: "100%",
            height: "52px !important",
            padding: "1rem",
            paddingRight: "3rem",
            fontFamily: "inherit",
            fontSize: "1rem",
            border:  "1px solid rgb(30, 175, 237)",
            backgroundColor: ({ DarkMode })=>{
                if(!DarkMode){
                    return "#fff"
                }else{
                    return "rgb(24, 24, 24)"
                }
            },
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
        },
        sendIcon: {
            position: "absolute",
            top: "34%",
            right: "1.2rem",
            color: "gray"
        },
        copyright: {
            fontSize: "1.019rem",
            lineHeight: "1.4",
            letterSpacing: "0.5px",
            fontWeight: "400",
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#bbbbbb"
                }else{
                    return "#686868"
                }
            },
        },
        lightSwitch:{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            border: '1px solid',
            cursor: 'pointer',
            borderColor: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
            position: 'absolute', top: '1rem', right: '1rem',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
    }
});

export default function Sidebar({ DarkMode, toggleMode }){

    const classes = useStyles({ DarkMode });
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    const onNewsLetterFormSubmit =(e)=>{
        e.preventDefault();

        setMessage('')
        setLoading(true)

        const formData = new FormData;
        formData.append('email', email);
        
        const url = process.env.REACT_APP_NEWS_LETTER_POST;
        axios.post(url, formData)
        .then(res => {
            if(res.data.message_code === 1){
                setMessage("Your email has been added to the list")
            }else if(res.data.message_code === 2){
                setMessage("Your email already exist in the list")
            }else {
                setMessage("Something went wrong, try again")
            }
            setLoading(false)
        })
        .catch(error => {
            console.error(error)
            setMessage("Something went wrong, try again")
            setLoading(false)
        });
    };

    useEffect(()=>{
        if(email === ''){
            setMessage('')
        }
    }, [email])

    return(
        <aside className={classes.sidebar}>

            <div className={classes.lightSwitch} onClick={toggleMode}><TipsAndUpdatesIcon style={{fontSize: '1.1rem'}}/></div>

            <Nav DarkMode={DarkMode}/>

            <div className={classes.downEl}>

                {/* <div className={classes.nameLogo}>
                    <a href="#" className="namelogoLink" style={{backgroundImage: "url(/img/bg11.jpg"}}>Bahd <br /> Since <span>'O2</span></a>
                </div> */}
                <div>
                    <p className={classes.bioText}>Hey, I'm <a href="/about" className="namelogoLink" style={{backgroundImage: "url(/img/bg11.jpg"}}>Daniel Idoko</a>. <br/> I'm a Software Developer based in Abuja, Nigeria. Welcome to my website, where I post blogs about topics that interest me and share the source code for my projects. </p>
                </div>

                <form onSubmit={onNewsLetterFormSubmit}>
                    <label htmlFor="email" className={classes.label}>Subscribe for newsletter</label>
                    <div className={classes.inputHolder}>
                        <input type="email" name="email" placeholder="Enter Your Email" className={classes.input} value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>

                        <a onClick={onNewsLetterFormSubmit} className={classes.sendIcon}>
                            <i className="fa fa-paper-plane"></i>
                        </a>
                        {
                            loading
                            ?
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
                            :
                                <p style={{color: '#FFA500'}}>{message}</p>
                        }
                    </div>
                </form>

                {/* <p className={classes.copyright}>Copyright {currentYear} All rights reserved | This template was made by IDG</p> */}
            </div>

        </aside>
    )
};