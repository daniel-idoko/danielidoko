import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, Skeleton } from '@mui/material';

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            display: "flex",
            width: "100%",
            marginBottom: "5rem !important"
        },
        cardImg: {
            height: "150px !important",
            width: "150px !important",
            borderRadius: "50% !important",
            backgroundPosition: "center",
            backgroundSize: "cover",

            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        cardTitle: {
           width: '100%',
           marginBottom: '1rem',
           height: '8rem !important'
        },
        cardTextarea: {
            textAlign: "left",
            paddingLeft: "1.5rem",
            
            [theme.breakpoints.down('sm')]: {
                paddingLeft: "0rem",
            }
        },
        cardInfo: {
            width: '7rem',
            height: '2rem',
            marginRight: '1rem'
        },
        cardInfoHolder: {
            display: "flex",
            alignItems: "center",
            marginBottom: '1rem'
        },
        cardInfoIcon: {
            paddingRight: "0.4rem",
            fontSize: "1.6rem !important",
        },
        cardInfoTextJavascipt: {
            color: "#afaf17bb !important",

        },
        cardP: {
            width: '100%',
            height: '3rem !important'
        },
        cardLink: {
            color: "rgb(30, 175, 237) !important",
            display: "flex",
            alignItems: "center",
        }
    }
});
  
export default function BlogcardPreloader(){
  
    const classes = useStyles();
   
    return (
        <Grid item xs={12} className={classes.card}>
            <Grid container>
                <Grid item lg={3}>
                    <Skeleton className={classes.cardImg} variant="circular" animation="wave">
                    </Skeleton>
                </Grid>

                <Grid item xs={12} lg={9} className={classes.cardTextarea}>
                    <Skeleton className={classes.cardTitle}></Skeleton>
                    <div className={classes.cardInfoHolder}>
                        <Skeleton className={classes.cardInfo}></Skeleton>
                        <Skeleton className={classes.cardInfo}></Skeleton>
                        <Skeleton className={classes.cardInfo}></Skeleton>
                        
                    </div>
                    <Skeleton className={classes.cardP}></Skeleton>
                    <Skeleton className={classes.cardInfo}></Skeleton>
                </Grid>
            </Grid>
        </Grid>
    )
};