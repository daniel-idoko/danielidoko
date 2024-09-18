import React from "react";
import { makeStyles } from '@mui/styles';
import { Grid, Skeleton } from '@mui/material';

const useStyles = makeStyles((theme)=>{
    return {
        card: {
            display: "flex",
            marginBottom: "1.5rem !important",
            alignItems: "center"
        },
        cardImgHolder: {
            width: "100%",
        },
        cardImg: {
            height: "80px !important",
            width: "80px !important",
            borderRadius: "2px !important",
            backgroundPosition: "center",
            backgroundSize: "cover",
        },
        cardTitle: {
            height: '5rem !important',
        },
        cardTextarea: {
            textAlign: "left",
            paddingLeft: "0.8rem !important" 
        },
        cardInfo: {
            width: '7rem',
            height: '2rem',
            marginRight: '1rem'
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
  

export default function RightbarCardPlaceHolder(){
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.card}>
                <Grid item lg={4} className={classes.cardImgHolder}>
                    <Skeleton className={classes.cardImg} variant="circular" animation="wave">
                    </Skeleton>
                </Grid>
                <Grid item lg={8} className={classes.cardTextarea}>
                    <Skeleton className={classes.cardTitle}></Skeleton>
                    <div className={classes.cardInfoHolder}>
                        <Skeleton className={classes.cardInfo}></Skeleton>
                        <Skeleton className={classes.cardInfo}></Skeleton>
                    </div>
                </Grid>
            </Grid>
        </>
    )
};