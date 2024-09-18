import React from "react";
import { Grid } from "@mui/material";
import Form from "../components/Form";
import useStyles from "../styles/contact";
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext";

export default function ContactContainer({ DarkMode }) {
  const classes = useStyles({ DarkMode });
  const { setIsNavOpen } = useGlobalContext();
  const backgroundColor = `${DarkMode ? "rgba(248, 249, 250, 0.2)" : "rgb(248, 249, 250)"}`;

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={8.2} className={classes.test2}>
        <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
            <MenuIcon className={classes.menuIcon}/>
            <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
        </div>
       <Form DarkMode={DarkMode}/>
      </Grid>

      <Grid item xs={12} sm={3.8} className={classes.test} style={{backgroundColor: backgroundColor}}>
        <p className={classes.justText}>Send me a mail if you:</p>
        <ul className={classes.theParagraph} style={{ listStyleType: "'+  '"}}>
          <li className={classes.li}>Need assistance with a web project or bug fixing.</li>
          <li className={classes.li}>Require advice or guidance.</li>
          <li className={classes.li}>Have any random questions you'd like me to answer.</li>
          <li className={classes.li}>Are interested in hiring my services.</li>
        </ul>
        <p className={classes.justText}>I will respond to your email within one hours.</p>
      </Grid>
    </Grid>
  );
}
