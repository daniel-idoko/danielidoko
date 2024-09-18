import React from "react";
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            display: "flex",
            marginBottom: "1.5rem !important",
            alignItems: "flex-start"
        },
        cardImgHolder: {
            width: "100%",

            [theme.breakpoints.down('lg')]: {
                paddingBottom: '0.8rem !important'
            }
        },
        cardImg: {
            display: "block",
            height: "80px",
            width: "80px",
            borderRadius: "2px",
            backgroundImage: ({ img })=>{
                return `url(${img})`
            },
            backgroundPosition: "center",
            backgroundSize: "cover",
        },
        cardTitle: {
            fontSize: "1.020rem",
            fontFamily: "Lora, Arial, serif",
            fontWeight: "500",
            letterSpacing: "1px",
            lineHeight: "1.4",
            marginBottom: '0.5rem',
            cursor:'pointer',
            transition: 'all 0.1s linear',
            color: ({DarkMode})=>{
                if(DarkMode){
                  return '#fff'
                }else{
                  return "#000"
                }
              },
        },
        cardTextarea: {
            textAlign: "left",
            paddingLeft: "0.8rem !important",
            [theme.breakpoints.down('lg')]: {
                paddingLeft: '0 !important'
            }
        },
        cardInfo: {
            display: "flex",
            alignItems: "center",
            paddingRight: "0.3rem",
            fontWeight: "550 !important",
            color: "#b1b1b1 !important",
            fontSize: "0.9rem",
            lineHeight: "1.5"
        },
        cardInfoHolder: {
            display: "flex",
            alignItems: "center",
            flexWrap: 'wrap'
        },
        cardInfoIcon: {
            paddingRight: "0.2rem",
            fontSize: "1rem !important",
        },
        cardInfoTextJavascipt: {
            color: "#afaf17bb !important",

        },
        cardP: {
            fontSize: "1rem",
            fontWeight: "500",
            letterSpacing: "0.8px",
            lineBreakMode: "1.4",
            lineHeight: "1.4",
            color: "#868686",
            marginBottom: "1.5rem"
        },
        cardLink: {
            color: "rgb(30, 175, 237) !important",
            display: "flex",
            alignItems: "center",
        }
    }
});
  

export default function RightbarCard({ DarkMode, img, title, date, category, readduration }){
    const classes = useStyles({ DarkMode, img });

    return (
        <>
            <Grid container className={classes.card}>
                <Grid item lg={4} className={classes.cardImgHolder}>
                    <div className={classes.cardImg}></div>
                </Grid>
                <Grid item lg={8} className={classes.cardTextarea}>
                    <h1 className={classes.cardTitle}>{title}</h1>
                    <div className={classes.cardInfoHolder}>
                        <div className={classes.cardInfo}><CalendarMonthIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>{ date }</p></div>
                        <div className={classes.cardInfo}><FolderOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoTextJavascipt}>{ category }</p></div>
                        <div className={classes.cardInfo}><TimerOutlinedIcon className={classes.cardInfoIcon}/> <p className={classes.cardInfoText}>{ readduration }</p></div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
};