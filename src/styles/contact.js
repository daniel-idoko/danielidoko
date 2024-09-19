import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      test: {
        background: "rgb(248, 249, 250)",
        padding: "4rem 1.5rem !important",

        [theme.breakpoints.down('sm')]: {
          padding: "2rem 1.5rem !important",
        }
      },
      test2: {
        padding: "4rem 2.5rem !important",
        [theme.breakpoints.down('sm')]: {
          padding: "1rem 1rem !important",
          paddingBottom: "2rem !important"
        }
      },
      root: {
        width: "100%",
        height: "100vh",

        [theme.breakpoints.down('sm')]: {
          height: "100%",
        }
      },
      theParagraph: {
        fontFamily: "Lora, Arial, serif",
        fontSize: "1rem",
        fontWeight: "normal",
        fontStyle: "italic",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        color: ({ DarkMode })=>{
          if(DarkMode){
              return "#fff"
          }else{
              return "rgba(0, 0, 0, 0.8)"
          }
        },
      },
      justText: {
        fontFamily: "Lora, Arial, serif",
        fontSize: "1.2rem",
        fontWeight: "normal",
        fontStyle: "italic",
        marginBottom: "1.5rem",
        lineHeight: "1.5",
        color: ({ DarkMode })=>{
          if(DarkMode){
              return "#fff"
          }else{
              return "rgba(0, 0, 0, 0.8)"
          }
        },
      },
      li:{
        marginBottom: '0.5rem',
        color: ({ DarkMode })=>{
          if(DarkMode){
              return "#fff"
          }else{
              return "rgba(0, 0, 0, 0.8)"
          }
      },
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
        }
      },
    };
  });

  export default useStyles;