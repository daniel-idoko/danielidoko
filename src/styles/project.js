import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      
      root: {
        width: "100%",
        height: "100%",
        padding: '3rem',

        [theme.breakpoints.down('lg')]: {
          padding: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '1.5rem',
        }
      },
      section:{
        width: '100%',
        marginBottom: '4rem'
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
      title: {
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#fff"
            }else{
                return "#000"
            }
        },
        marginBottom: '1rem',
        fontSize: '1.4rem',
        fontWeight: '600',
        letterSpacing:'1px'
      },
      
      card: {
        margin: '1rem 0.5rem',
        padding: '1.5rem',
        backgroundColor: ({ DarkMode })=>{
            if(DarkMode){
                return "#1f1f1f"
            }else{
                return "#f9f9f9"
            }
        },
        border: ({ DarkMode })=>{
            if(DarkMode){
                return "1px solid #2c2c2c"
            }else{
                return "1px solid #ddd"
            }
        },
        borderRadius: '6px',
      },
      firstPart: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between'
      },
      span: {
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#f6cd5d"
            }else{
                return "#666"
            }
        },
      },
      span2: {
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#999"
            }else{
                return "#666"
            }
        },
        display: 'flex',
        alignItems: 'center',
      },
      codeIcon: {
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#f6cd5d"
            }else{
                return "#fca62a"
            }
        },
      },
      cardTitle: {
        fontSize: '1.3rem',
        fontWeight: '600',
        lineHeight: '1.2',
        letterSpacing: '1px',
        margin: '0.1rem 0 0.5rem',
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#fff"
            }else{
                return "#252525"
            }
        },
      },
      dateText: {
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#999"
            }else{
                return "#666"
            }
        },
        fontSize: '1rem',
        lineHeight: '1.5',
        margin: '0',
      },
      cardLinks: {
        display: 'flex',
        marginTop: '1.8rem',
        textTransform: 'lowercase',
        [theme.breakpoints.down('sm')]: {
            display: 'grid',
        }
      },
      
      
      links: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem',
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#e6e6e6"
            }else{
                return "#2c2c2c"
            }
        },
        fontWeight: '500',
        fontFamily: '0.9rem',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '0.6rem',
        },
        
        "&:hover": {
            textDecoration: 'underline',
            color: ({ DarkMode })=>{
                if(DarkMode){
                    return "#fff"
                }else{
                    return "#000"
                }
              },
        }
      },
      footer: {
        textAlign: 'center',
        fontSize: '16.5px',
        lineHeight: '1.8',
        fontWeight: '400',
        display: "block",
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#bbbbbb'
          }else{
            return "rgb(102, 102, 102)"
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
      backToTop: {
        color: '#00ff00b0 !important',
        borderColor: '#00ff00b0 !important',
        backgroundColor: 'rgb(24, 24, 24) !important',
        textTransform: 'lowercase !important',
        position: 'fixed !important',
        bottom: '1rem !important',
        right: '1rem !important',
      },
      bttContainer:{
        display: 'none'
      },
    };
  });

  export default useStyles;