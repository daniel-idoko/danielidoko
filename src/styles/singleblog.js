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
            return "rgba(0, 0, 0, 0.8)"
          }
        }
      },
      // Structrue:
      Blogtitle: {
          marginBottom: "1rem !important",
          lineHeight: '1.5',
          color: ({DarkMode})=>{
            if(DarkMode){
              return '#fff !important'
            }else{
              return "#000 !important"
            }
          },
          fontWeight: "600",
          fontFamily: "Lora, Arial, serif",
          fontSize: "2.5rem",
          marginBottom: "3rem"
      },
      BlogBannerImg: {
          width: "100%",
          marginBottom: "3rem"
      },
      BlogExplanation: {
          marginBottom: "3rem",
          fontSize: "1.108rem",
          fontWeight: "500",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#868686",
      },
      BoldParagraph: {
          marginBottom: "2rem",
          fontSize: "1.278rem",
          fontWeight: "600",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#000",
      },
      li: {
          marginBottom: "1.4rem",
          fontSize: "1.108rem",
          fontWeight: "500",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#000",
          paddingLeft: "1rem"
      },
      ol: {
          margin: "0 1.1rem",
          marginBottom: "3rem",
      },
      enphases: {
          color: "purple",
          fontWeight: "600",
          letterSpacing: "1.5px"
      },
      Paragraph: {
          marginBottom: "3rem",
          fontSize: "1.178rem",
          fontWeight: "500",
          letterSpacing: "0.8px",
          lineBreakMode: "1.5",
          lineHeight: "1.5",
          color: "#000",
      },
      CodeBoard: {
          width: "100%",
          marginBottom: "3rem"
      },
      CodeBoardTitle: {
          backgroundColor: "#1f4287",
          padding: '1rem 1rem',
          borderTopLeftRadius: "6px",
          borderTopRightRadius: "6px"
      },
      CodeBoardTitleP: {
          textAlign: "right",
          color: '#fff',
          textTransform: "uppercase",
          fontWeight: "700",
          fontSize: '1rem',
          letterSpacing: "0.7px",
          
      },
      Code: {
          padding: "1rem",
          backgroundColor: "#071e3d",
          borderBottomLeftRadius: "6px",
          borderBottomRightRadius: "6px",
          color: "#fff"
      },
      infosHolder: {
        display: 'flex',
        marginBottom: '0.5rem',
        color: ({DarkMode})=>{
            if(DarkMode){
              return '#bbbbbb !important'
            }else{
              return "#686868 !important"
            }
          },
      },
      infoCard: {
        display: 'flex',
        alignItems: 'center',
        marginRight: '1rem'
      },
      titleSection: {
        marginTop: '3.2rem'
      },
      icon:{
        marginRight: '0.2rem',
        fontSize: '1rem !important',
      },

      commectSection: {
        paddingTop: '7rem'
      },
      commectSectionTitle: {
        fontSize: '1.3rem',
        marginBottom: '5px',
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#fff !important'
          }else{
            return "#000 !important"
          }
        },
      },
      commentTextArea: {
        maxWidth: '100% !important',
        width: '100% !important',
        borderRadius: '4px !important',
        fontSize: '13px',
        padding: '5px',
        marginBottom: "0.5rem",
        border: ({DarkMode})=>{
          if(DarkMode){
            return '1px solid #444'
          }else{
            return "1px solid #ccc"
          }
        },
        backgroundColor: ({DarkMode})=>{
          if(DarkMode){
            return '#1e1e1e'
          }else{
            return "#fff"
          }
        },
        color: ({DarkMode})=>{
          if(DarkMode){
            return '#e0e0e0 !important'
          }else{
            return "#333 !important"
          }
        },
      },
      button: {
        backgroundColor: 'rgb(30, 175, 237) !important'
      },
    };
  });

  export default useStyles;