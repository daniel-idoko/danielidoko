import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import useStyles from "../styles/singleblog";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
import "../css/blog.css";
import hljs from 'highlight.js';
import { Watch } from "react-loader-spinner";


export default function SingleBlogContainer({ item, DarkMode }) {

    const classes = useStyles({ DarkMode });
    const { body, title} = item;
    const { setIsNavOpen } = useGlobalContext();
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [comment, setComment] = useState('')
    const [pageLoading, setPageLoading] = useState(true)
    
    useEffect(()=>{
      const handleLoad = () => {
        setPageLoading(false);
      };
  
      if (document.readyState === 'complete') {
        setPageLoading(false);
      } else {
        window.addEventListener('load', handleLoad);
      }
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }, [])
    useEffect(()=>{
      hljs.highlightAll();
    }, [DarkMode, item, pageLoading]);

    useEffect(()=>{
      const topicEl = document.querySelectorAll('.topic');
      if(topicEl){
        for(let i=0; i < topicEl.length; i++){
          topicEl[i].style.color = `${DarkMode ? '#fff' : '#000'}`;
        };
      };
    

      const lineEl = document.querySelectorAll('.line');
      if(lineEl){
        for(let i=0; i < lineEl.length; i++){
          lineEl[i].style.backgroundColor = `${DarkMode ? '#868686' : '#000'}`;
        };
      };

      const paragraphEl = document.querySelectorAll('.paragraph');
      if(paragraphEl){
        for(let i=0; i < paragraphEl.length; i++){
          paragraphEl[i].style.color = `${DarkMode ? '#fff' : '#5a5a5a'}`;
        };
      };

      const thEl = document.querySelectorAll('.th');
      if(thEl){
        for(let i=0; i < thEl.length; i++){
          thEl[i].style.color = `${DarkMode ? '#fff' : '#5a5a5a'}`;
        };
      };

      const tdEl = document.querySelectorAll('.td');
      if(tdEl){
        for(let i=0; i < tdEl.length; i++){
          tdEl[i].style.color = `${DarkMode ? '#fff' : '#5a5a5a'}`;
        };
      };

      const subHeaderEl = document.querySelectorAll('.sub-header');
      if(subHeaderEl){
        for(let i=0; i < subHeaderEl.length; i++){
          subHeaderEl[i].style.color = `${DarkMode ? '#fff' : '#000'}`;
        };
      };

      const paragraphOlEl = document.querySelectorAll('.paragraph-ol');
      if(paragraphOlEl){
        for(let i=0; i < paragraphOlEl.length; i++){
          paragraphOlEl[i].style.color = `${DarkMode ? '#fff' : '#5a5a5a'}`;
        };
      };

      const paragraphUlEl = document.querySelectorAll('.paragraph-ul');
      if(paragraphUlEl){
        for(let i=0; i < paragraphUlEl.length; i++){
          paragraphUlEl[i].style.color = `${DarkMode ? '#fff' : '#5a5a5a'}`;
        };
      }

      const definitionEl = document.querySelectorAll('.definition');
      if(definitionEl){
        for(let i=0; i < definitionEl.length; i++){
          definitionEl[i].style.backgroundColor = `${DarkMode ? 'rgb(204, 204, 204)' : 'rgba(204, 204, 204, 0.39)'}`;
          definitionEl[i].style.color = `${DarkMode ? '#2f2f2f' : '#5a5a5a'}`;
        };
      };

      const linkEl = document.querySelectorAll('.blog-link');
      if(linkEl){
        for(let i=0; i < linkEl.length; i++){
          linkEl[i].style.color = `${DarkMode ? '#6464ff' : '#1f4287'}`;
        };
      };

      const folderEl = document.querySelectorAll('.folder');
      if(folderEl){
        for(let i=0; i < folderEl.length; i++){
          folderEl[i].style.backgroundColor = `${DarkMode ? '#0c0c0c' : '#f8f9fa'}`;
          folderEl[i].style.border = `${DarkMode ? '2px solid #252627' : '2px solid #dee2e6'}`;
          folderEl[i].style.color = `${DarkMode ? '#bec5cd' : '#4b5056'}`;
        };
      };
    },[DarkMode, item, pageLoading]);

    useEffect(() => {
        document.title = `${title}`;
    }, [item, pageLoading]);

    const handleCommentPost=(e)=>{
      e.preventDefault();

      setMessage('')
      setLoading(true)

      const formData = new FormData;
      formData.append('email', email);
      formData.append('comment', comment);
      
      const url = process.env.REACT_APP_POST_COMMENT;
      axios.post(url, formData)
      .then(res => {
        setMessage("Thanks for your feedback")
         setLoading(false)
      })
      .catch(error => {
          console.error(error)
          setMessage("Something went wrong, try again")
          setLoading(false)
      });
    };




  return (
    <>

      {
        pageLoading ?
          <section style={{width: '100%', height: '100vh', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Watch
              visible={true}
              height="80"
              width="80"
              radius="48"
              color="rgb(30, 175, 237)"
              ariaLabel="watch-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </section>
          :
          <Grid container className={classes.root}>
            
                  <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                      <MenuIcon className={classes.menuIcon}/>
                      <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
                  </div>
                  
                  
                  <div className={classes.titleSection}>

                      <div className={classes.infosHolder}>

                        <div className={classes.infoCard}>
                          <CalendarMonthIcon className={classes.icon}/>
                          <div> <p>15 May, 2020</p> </div>
                        </div>

                        <div className={classes.infoCard}>
                          <FolderOpenIcon className={classes.icon}/>
                          <div> <p>Javascript</p> </div>
                        </div>

                        <div className={classes.infoCard}>
                          <AccessAlarmIcon className={classes.icon}/>
                          <div> <p>15 mins</p> </div>
                        </div>

                      </div>

                      <div>
                        <h1 className={classes.Blogtitle}>{title}</h1>
                      </div>
                  </div>

                  <div dangerouslySetInnerHTML={{__html: body}}></div>


                  <section className={classes.commectSection}>
                    <h5 className={classes.commectSectionTitle}>Leave a comment</h5>
                    <form onSubmit={handleCommentPost}>
                      <input className={classes.commentTextArea} style={{height: '2.5rem', fontSize: "1rem"}} type="email" name="email" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.currentTarget.value)} />
                      <textarea className={classes.commentTextArea} id="message" name="message" rows="4" cols="100" placeholder="enter your message *" required onChange={(e)=> setComment(e.currentTarget.value)}></textarea>
                      <div>
                          <Button
                            type="submit"
                            color="secondary"
                            variant="contained"
                            className={classes.button}
                            endIcon={<KeyboardArrowRightIcon />}
                          >
                            Send
                          </Button>
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
                  </section>


        
          </Grid>
      }

    </>
  );
};
