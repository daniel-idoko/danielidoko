import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            display: "flex",
            width: "100%",
            marginBottom: "5rem !important",
            [theme.breakpoints.down('sm')]: {
                marginBottom: "3rem !important",
            },
        },
        cardImg: {
            display: "block",
            height: "150px",
            width: "150px",
            borderRadius: "50%",
            backgroundPosition: "center",
            backgroundSize: "cover",

            backgroundImage: ({img})=>{
                return `url(${img})`
            },
  
            [theme.breakpoints.down('lg')]: {
                marginBottom: '1rem'
            },
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
        },
        cardTitle: {
            fontFamily: "Lora, Arial, serif",
            fontWeight: "400",
            letterSpacing: "1px",
            lineHeight: "1.4",
            marginBottom: '1rem',
            transition: 'all 0.3s linear',
            color: ({DarkMode})=>{
                if(DarkMode){
                  return '#bbbbbb'
                }else{
                  return "#686868"
                }
              },
              
              "&:hover": {
                color: ({DarkMode})=>{
                  if(DarkMode){
                    return '#ffffff'
                  }else{
                    return "#000000"
                  }
                },
              },

              [theme.breakpoints.down('sm')]: {
                fontSize: '1.6rem',
              }
        },
        minRead: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        cardTextarea: {
            textAlign: "left",
            paddingLeft: "1.5rem",
            
            [theme.breakpoints.down('sm')]: {
                paddingLeft: "0rem",
            }
        },
        cardInfo: {
            display: "flex",
            alignItems: "center",
            paddingRight: "0.8rem",
            fontWeight: "550 !important",
            color: "#b1b1b1 !important"
        },
        cardInfoHolder: {
            display: "flex",
            flexWrap: 'wrap',
            alignItems: "center",
            marginBottom: '1rem'
        },
        cardInfoIcon: {
            paddingRight: "0.4rem",
            fontSize: "1.6rem !important",
        },
        cardInfoTextJavascipt: {
            color: "#afaf17bb !important",
            whiteSpace: 'nowrap'
        },
        cardP: {
            fontSize: "1rem",
            fontWeight: "500",
            letterSpacing: "0.8px",
            lineBreakMode: "1.4",
            lineHeight: "1.4",
            color: "#868686",
            marginBottom: "1.5rem",

            [theme.breakpoints.down('sm')]: {
                marginBottom: "0.5rem !important",
            },
            
        },
        cardLink: {
            color: "rgb(30, 175, 237) !important",
            display: "flex",
            alignItems: "center",
        }
    }
});
  
export default function Blogcard({_id, DarkMode, img, title, smallbody, readduration, date, category, number }){
  
    const classes = useStyles({img, DarkMode});
    
  
    return (
        <Grid item xs={12} className={classes.card}>
            <Grid container>
                <Grid item lg={3}>
                    <div className={classes.cardImg}></div>
                </Grid>

                <Grid item lg={9} className={classes.cardTextarea}>
                    <a href={`blog/${_id}`}><h1 className={classes.cardTitle}>{title}</h1></a>
                    <div className={classes.cardInfoHolder}>
                        <div className={classes.cardInfo}><CalendarMonthIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>{date}</p></div>
                        <div className={classes.cardInfo}><FolderOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoTextJavascipt}>{category}</p></div>
                        <div className={classes.cardInfo}><TimerOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>{readduration} <span className={classes.minRead}>min read</span></p></div>
                    </div>
                    <p className={classes.cardP}>{smallbody}</p>
                    <a href={`blog/${_id}`} className={classes.cardLink}><p>Read More</p> <ChevronRightOutlinedIcon /></a>
                </Grid>
            </Grid>
        </Grid>
    )
};