import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => {
    return {
      test: {
        padding: "4rem 0rem !important",
      },
      test2: {
        width: '100%',
        padding: "4rem 2.5rem !important",

        [theme.breakpoints.down('sm')]: {
          padding: "2rem 1rem !important",
        }
      },
      root: {
        width: "100%",
        height: "100%",
      },
      inputHolder: {
        position: "relative",
        marginTop: "0.8rem",
        marginBottom: "2rem",
      },
      input: {
        width: "100%",
        height: "52px !important",
        padding: "1rem",
        paddingLeft: "2.5rem",
        fontFamily: "inherit",
        fontSize: "1rem",
        border:  "1px solid rgba(230, 230, 230, 0.5)",
        backgroundColor: ({ DarkMode })=>{
          if(!DarkMode){
              return "#fff"
          }else{
              return "rgb(24, 24, 24)"
          }
        },
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#fff"
            }else{
                return "#000"
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
      sendIcon: {
        position: "absolute",
        top: "30%",
        left: "0.7rem",
        color: "gray",
        fontSize: "1rem !important"
      },
      title: {
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
            return "rgba(0, 0, 0, 0.8)"
          }
        }
      },
      section: {
        padding: "1.5rem 1.5rem",
      },
      searchSection: {
        padding: "1.5rem 1.5rem",
        display: 'block',
        [theme.breakpoints.up('lg')]: {
          display: 'none'
        }
      },
      disappearingSection: {
        padding: "1.5rem 1.5rem",
        display: 'none',
        [theme.breakpoints.up('lg')]: {
          display: 'block',
        }
      },
      categoryLink: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1.8px solid #b1b1b1",
        paddingBottom: "10px",
        fontSize: "1rem",
        fontWeight: "500",
        marginBottom: "10px",
        cursor: "pointer",
        transition: 'all 0.1s linear',
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#bbbbbb'
          }else{
            return "#696969"
          }
        },
        "&:hover": {
          color: ({DarkMode})=>{
            if(DarkMode){
              return '#fff'
            }else{
              return "#000"
            }
          },
        }
      },
      categoryLinkSpan: {
        fontSize: "1.1rem",
        color: "#b1b1b1",
        fontWeight: "600",
        letterSpacing: "1.9px"
      },
      smallball: {
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        marginLeft: "5px"
      },
      tagCloud: {
        textTransform: "uppercase",
        display: "inline-block",
        padding: "0.5rem 1rem",
        marginBottom: "0.7rem",
        marginRight: "0.5rem",
        borderRadius: "4px",
        border: ({DarkMode})=>{
          if(DarkMode){
            return '1px solid rgba(204, 204, 204, 0.5)'
          }else{
            return "1px solid #ccc"
          }
        },
        fontSize: "11px",
        fontWeight: "bold",
        transition: "all 0.3s linear",
        cursor: "pointer",
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#ffffff'
          }else{
            return "#000000"
          }
        },
        
        "&:hover": {
          border: "1px solid #000",
          border: ({DarkMode})=>{
            if(DarkMode){
              return '1px solid #fff'
            }else{
              return "1px solid #000"
            }
          },
        }
      },
      newlettersection: {
        padding: "0 1rem"
      },
      newletter: {
        position: "relative",
        width: "100%",
        height: "300px",
        backgroundImage: "url(/img/bg11.jpg)",
        display: "block",
        zIndex: "0",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        margin: "1.5rem 0"
      },
      overlay: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        opacity: "0.5",
        background: "#000000",
        zIndex: "-1",
        padding: "1.5rem"
      },
      newsletterText: {
        marginBottom: "1.6rem",
        lineHeight: "1.3"
      },
      newsletterForm: {
        display: "grid"
      },
      newsletterInput: {
        fontFamily: "inherit",
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontWeight: "600",
        background: "transparent !important",
        color:" rgba(255, 255, 255, 0.7) !important",
        fontSize: "1.028rem",
        height: '52px !important',
        boxShadow: "none !important",
        lineHeight: "1.5",
        marginBottom: '0.8rem',
        padding: "0 1rem",
        letterSpacing: "0.6px"
      },
      newsletterButton: {
        fontFamily: "inherit",
        width: "100%",
        boxSizing: "border-box",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        fontWeight: "600",
        background: "#fff !important",
        color:" rgba(0, 0, 0) !important",
        fontSize: "1.028rem",
        height: '52px !important',
        boxShadow: "none !important",
        lineHeight: "1.5",
        marginBottom: '0.8rem',
        padding: "0 1rem",
        letterSpacing: "0.6px"
      },
      authorP: {
        fontSize: '15px',
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
      authorPLink: {
        color: 'rgb(30, 175, 237)'
      },
      blogSwicht: {
        width: '100%',
        display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
      },
      blogWitchText: {
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#fff !important'
          }else{
            return "#000 !important"
          }
        },
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

      searchTermText: {
        display: 'block',
        width: '100%',
        color: '#999',
        fontSize: '1.7rem',
        marginBottom: '3rem',
        fontWeight: '550',

        [theme.breakpoints.down('sm')]: {
          fontSize: '1.3rem',
        }
      },
      searchTermTextSpan: {
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#fff !important'
          }else{
            return "#000 !important"
          }
        },
        fontWeight: '700'
      },
      nothingSearch: {
        textAlign: 'center',
        marginBottom: '2rem',
        color: 'red',
        display: 'block',
        width: '100%'
      }
    };
  });

  export default useStyles;