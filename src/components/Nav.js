import React, {useEffect, useState} from "react"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles((theme)=>{
    return {
        nav: {
            
        },
        ul: {
            display: "block",
            listStyleType: "none",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
        },
        li: {
            fontWeight: "700",
            fontSize: "1.2647rem",
            marginBottom: "1.2rem",
            color: "gray",
        },
        a: {
           
        },
        aa: {
            color: "rgb(30, 175, 237) !important",
            borderBottom: "2px solid rgb(30, 175, 237)",
            paddingBottom: "2px",
            letterSpacing: "1px",
            display: "inline-block",

            "&:hover": {
                color: "rgb(30, 175, 237) !important",
            }
        },

        style5: {
            position: 'relative',
            display: 'inline-block',

            "&:after": {
                content:"''",
                position: 'absolute',
                borderBottom: '2px solid rgb(30, 175, 237)',
                top: '102%',
                transition: 'all 0.3s',
                left: '50%',
                right: '50%',
            },
            "&:hover": {
                color: ({ DarkMode })=>{
                    if(DarkMode){
                        return "#fff !important"
                    }else{
                        return "#000 !important"
                    }
                },
                "&:after": {
                    right: '0', left: '0',
                }
            }
        }
    }
});


export default function Nav({ DarkMode }){
    const classes = useStyles({ DarkMode });
    const [currentPath, setCurrentPath] = useState(window.location.pathname);
    
    useEffect(()=>{
        var elements = document.querySelectorAll('#sidenavlink');
        elements.forEach((element) => {
            element.style.color = `${DarkMode ? '#bbbbbb' : "#686868" }`;
        })
    },[DarkMode]);
     

    return (
        <nav>
            <ul className={classes.ul}>
                <li className={classes.li}><a id='sidenavlink' href="/" className={currentPath == "/" ? classes.aa : classes.style5}>Home</a></li>
                <li className={classes.li}><a id='sidenavlink' href="/learn" className={currentPath == "/learn" ? classes.aa : classes.style5}>Blogs</a></li>
                <li className={classes.li}><a id='sidenavlink' href="/projects" className={currentPath == "/projects" ? classes.aa : classes.style5}>Projects</a></li>
                <li className={classes.li}><a id='sidenavlink' href="/about" className={currentPath == "/about" ? classes.aa : classes.style5}>About Me</a></li>
                <li className={classes.li}><a id='sidenavlink' href="/reach-out" className={currentPath == "/reach-out" ? classes.aa : classes.style5}>Reach Out</a></li>
            </ul>
        </nav>
    )
};