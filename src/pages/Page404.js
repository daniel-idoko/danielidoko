import React, {useEffect} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>{
    return {
        main: {
            width: "100%",
            height: '100vh',
            padding: '3rem',

            [theme.breakpoints.down('lg')]: {
                padding: '2rem',
            },
            [theme.breakpoints.down('sm')]: {
                padding: '1.5rem',
            }
        },
        root: {
            width: '100%', height: '100%',
            display: 'flex', flexDirection: 'column', 
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center',
        },
        label: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: "1.5rem",
    
            [theme.breakpoints.up('md')]: {
              display: 'none'
            }
          },
          menuIcon: {
            marginRight: '0.6rem',
            color: ({ DarkMode })=>{
              if(DarkMode){
                  return "#fff"
              }else{
                  return "#000"
              }
            },
          },
          name: {
            fontFamily: "Lora, Arial, serif",
            fontSize: "1.2rem",
            fontWeight: "normal",
            fontStyle: "italic",
            lineHeight: "1.5",
            marginBottom: '1rem',
            color: ({DarkMode})=>{
              if(DarkMode){
                return '#fff'
              }else{
                return "rgba(0, 0, 0, 0.8)"
              }
            }
          },
        img: {
            width: '8rem'
        },
        notfound: {
            color: '#f31010',
            fontSize: '1.3rem',
            marginBottom: '1rem'
        },
        link: {
            fontSize: '1rem',
            color: '#f31010',
            textDecoration: 'underline'
        }

    }
});



export default function Page404({ DarkMode }) {

  const { setIsNavOpen } = useGlobalContext();
  const classes = useStyles({ DarkMode });

  useEffect(() => {
    document.title = '404 Page | Daniel Idoko | Software Developer';
  }, []);

  

  return (
    <main className={classes.main}>
        <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
            <MenuIcon className={classes.menuIcon}/>
            <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
        </div>
        <section className={classes.root}>
            <div id='oopss'>
                <div id='error-text'>
                    <img className={classes.img} src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
                    
                    <p className={classes.notfound}>
                    . The page you are looking for could not be found</p>
                    <a href="/" className={classes.link}>
                        ... Back to home page
                    </a>
                </div>
            </div>
    
        </section>
    </main>
  );
};
