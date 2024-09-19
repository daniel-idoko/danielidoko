import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";


const useStyles = makeStyles((theme)=>{
    return {
        article: {
            width: '100%',
            margin: '1.4rem 1rem !important',

            [theme.breakpoints.down('sm')]: {
                margin: '1rem 0.5rem !important',
            },

            '&:hover $title': {
                textDecoration: 'underline',
              },
        },
        img: {
            aspectRatio: '1 / 0.6', 
            width: '100%', 
            backgroundImage: ({img})=>{
                return `url(${img})`
            },
            borderRadius: "50%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            borderRadius: '7px',
            marginBottom: '1.5rem'
        },
        catDate: {
            marginBottom: '0.5rem',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#bbbbbb"
                }else{
                    return "#686868"
                }
            }
        },
        title: {
            fontSize: '1.232rem',
            letterSpacing: '0.5px',
            marginBottom: '0.5rem',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
            }
        },
        text: {
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#bbbbbb"
                }else{
                    return "#686868"
                }
            }
        }
    }
});

export default function BlogCard2({ item, DarkMode }){
    const img = item.img;
    const classes = useStyles({ img, DarkMode });
    return(
        <Grid xs={12} md={5} xl={3} item className={classes.article}>
            <a href={`/blog/${item._id}`}>
                <div className={classes.img}></div>
                <div>
                    <div className={classes.catDate}>{item.category} — {item.date}</div>
                    <div><h2 className={classes.title}>{item.title}</h2></div>
                </div>
            </a>
        </Grid>
    )
};