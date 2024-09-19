import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/AppContext';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import { FaGithubAlt } from 'react-icons/fa';


const useStyles = makeStyles((theme)=>{
    return {

        sidebar: {
            width: '90vw',
            height: '90vh',
            maxWidth: '620px',
            background: ({ DarkMode })=>{
                if(DarkMode){
                    return "#000"
                }else{
                    return "#fff"
                }
            },
            borderRadius: "0.25rem",
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            padding: '4rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
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
                    return "#181818"
                }
            },
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            },
            position: 'absolute', top: '1rem', left: '1rem',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
        },
        sidebarLinks: {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridGap: '1rem',
          marginBottom: '4rem',
          marginTop: '1rem',

          [theme.breakpoints.up('sm')]:{
            gridTemplateColumns: '1fr 1fr 1fr',
          }
        },
        aboutMeText: {
          marginBottom: '2rem'
        },
        btnsHolder: {
          width: '100%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        },
        link: {
          color: ({ DarkMode })=>{
            if(DarkMode){
                return "#fff"
            }else{
                return "#000"
            }
          },
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

        copyRight: {
          fontSize: '0.9rem',
          color: ({ DarkMode })=>{
            if(DarkMode){
                return "#bbbbbb"
            }else{
                return "#686868"
            }
        },
      }
    }
});



const SmallSidebar = ({ toggleMode }) => {

    const { Blogs, DarkMode, setDarkMode, isNavOpen, setIsNavOpen } = useGlobalContext();
    const classes = useStyles({ DarkMode });
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const toGithub =()=>{
      window.open('https://github.com/doe-base', '_blank')
    }

  return (
    <div
      className={`${
        isNavOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <aside className={classes.sidebar}>
        <section>

          <div className={classes.lightSwitch} onClick={toggleMode}><TipsAndUpdatesIcon style={{fontSize: '1.1rem'}}/></div>

          <button className='close-btn' onClick={()=> setIsNavOpen(false)}>
            <FaTimes />
          </button>

          <div className={classes.sidebarLinks}>
            <a  href='/' className={classes.link} style={currentPath == "/" ? {color: 'rgb(30, 175, 237)'} : null}>Home</a>
            <a href='/learn' className={classes.link} style={currentPath == "/learn" ? {color: 'rgb(30, 175, 237)'} : null}>Blogs</a>
            <a href='/projects' className={classes.link} style={currentPath == "/projects" ? {color: 'rgb(30, 175, 237)'} : null}>Projects</a>
            <a href='/about' className={classes.link} style={currentPath == "/about" ? {color: 'rgb(30, 175, 237)'} : null}>About me</a>
            <a href='/reach-out' className={classes.link} style={currentPath == "/reach-out" ? {color: 'rgb(30, 175, 237)'} : null}>Reach out</a>
          </div>

          {/* <div className={classes.aboutMeText}>
              <p className={classes.bioText}>Hey, I'm <a href="/about" className="namelogoLink" style={{backgroundImage: "url(/img/bg11.jpg"}}>Daniel Idoko</a>. <br/> I'm a Software Developer in Abuja Nigeria. Welcome to my website where I post blogs about topic that intrest me and share source code to my project. </p>
          </div> */}

          <div className={classes.btnsHolder}>
            <Button variant="contained" onClick={toGithub}>Github <FaGithubAlt style={{paddingLeft: '3px'}}/></Button>
            {/* <Button variant="outlined">Download CV</Button> */}
          </div>
        </section>

        <div>
          <p className={classes.copyRight}>&copy; 2023 Daniel Idoko. All Rights Reserved.</p>
        </div>
        
        
      </aside>
    </div>
  )
};

export default SmallSidebar;
