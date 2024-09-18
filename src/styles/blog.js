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
        marginBottom: '6rem'
      },
      label: {
        display: 'flex',
        alignItems: 'center',

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
        marginBottom: '2rem',
        fontSize: '2.2rem',
        fontWeight: '900',
        letterSpacing:'1px'
      },

      blogCard: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '0.5rem',
        borderBottom: '0.5px solid #868686',
        marginBottom: '0.7rem',
        cursor: 'pointer',

        '&:hover $blogText': {
          textDecoration: 'underline',
          color: ({ DarkMode })=>{
            if(DarkMode){
                return "#fff"
            }else{
                return "#000"
            }
          },
        },
      },

      blogText: {
        fontSize: '1.1rem',
        fontWeight: '600',
        lineHeight: '1.2',
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#bbbbbb"
            }else{
                return "#686868"
            }
        },
      },
      dateText: {
        color: ({ DarkMode })=>{
            if(DarkMode){
                return "#5eddac"
            }else{
                return "#666"
            }
        },
        fontSize: '.9rem',
        fontWeight: '500',

        [theme.breakpoints.down('md')]: {
          display: 'none !important'
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