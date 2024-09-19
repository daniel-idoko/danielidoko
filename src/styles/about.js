import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      test: {
        padding: "3rem 1.5rem !important",
        // backgroundColor: ({ DarkMode })=>{
        //   if(DarkMode){
        //       return "rgb(24, 24, 24)"
        //   }else{
        //       return "default"
        //   }
        // },

        [theme.breakpoints.down('sm')]: {
          padding: "2rem 1rem !important",
        }
      },
      test2: {
        padding: "2rem 1.5rem !important",
        backgroundImage: "url(/img/me.jpeg)",
        backgroundPosition: "center center",
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat",
    
        [theme.breakpoints.down('md')]: {
          height: "20rem !important",
          backgroundPosition: "center 20%",
        },
        [theme.breakpoints.down('sm')]: {
          padding: "1rem 1rem !important",
          height: "10rem !important",
          backgroundPosition: "center 20%",

        }
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
        fontSize: "1rem",
        fontWeight: "normal",
        fontStyle: "italic",
        lineHeight: "1.5",
        marginBottom: '1rem',
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#fff'
          }else{
            return "#fff"
          }
        },
      },
      root: {
        width: "100%",
        // height: "100%",

        [theme.breakpoints.down('md')]: {
          height: "100%",
        }
        
      },
      theParagraph: {
        fontFamily: "Lora, Arial, serif",
        fontSize: "1.05rem",
        fontWeight: "normal",
        fontStyle: "italic",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        color: "",
        color: ({ DarkMode })=>{
          if(DarkMode){
              return "#fff"
          }else{
              return "rgba(0, 0, 0, 0.8)"
          }
      },
      },
      theParagraphUL: {
        fontSize: "1.05rem",
        fontWeight: "normal",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        color: "",
        color: ({ DarkMode })=>{
          if(DarkMode){
              return "#fff"
          }else{
              return "rgba(0, 0, 0, 0.8)"
          }
      },
      },
      importantText: {
          fontWeight: "bold",
          fontSize: "1.1rem"
      },
      footer: {
        textAlign: 'center',
        fontSize: '16.5px',
        lineHeight: '1.8',
        fontWeight: '400',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "&:hover": {
          textDecoration: 'underline',
        },
        color: ({DarkMode})=>{
          if(DarkMode){
            return 'rgb(30, 175, 237)'
          }else{
            return "rgb(30, 175, 237)"
          }
        },
      },
      footerLink: {
        display: 'inline',
        color: 'rgb(30, 175, 237)',
        
        "&:hover": {
            textDecoration: 'underline',
        }
      },
      h1Title: {
        fontSize: '2rem',
        marginBottom: '1.4rem',
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#fff'
          }else{
            return "#000"
          }
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '1.6rem',
        }
      },
      h2Title: {
        fontSize: '1.3rem',
        fontWeight: 600,
        marginBottom: '0.4rem',
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#fff'
          }else{
            return "#000"
          }
        }
      }
    };
  });

  export default useStyles;