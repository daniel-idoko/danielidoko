import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Layout from "./Layout";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogPage from './pages/Blog';
import ProjectPage from "./pages/Projects";
import hljs from 'highlight.js';
import Page404 from "./pages/Page404";
import { useGlobalContext } from "./context/AppContext";
import "./css/dracula.css";


const theme = createTheme({
  palette: {
    primary:{
      main: 'rgb(30, 175, 237)',
    },
    secondary: {
      main: '#000'
    }
  },
  typography: {
    fontFamily: 'Questrial',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  const { DarkMode, setDarkMode } = useGlobalContext();

  const toggleMode = ()=>{
    setDarkMode(!DarkMode);
  };
  
  useEffect(()=>{
    hljs.highlightAll();
  }, [DarkMode]);

  useEffect(()=>{
    document.getElementsByTagName('body')[0].style.background = `${DarkMode ? '#181818' : '#fff'}`;
  }, [DarkMode]);


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Layout DarkMode={DarkMode} toggleMode={toggleMode}>
          <Routes>
            <Route path="/" element={<Home DarkMode={DarkMode}/>} />
            <Route path="/blog/:blog_id"element={<SingleBlog DarkMode={DarkMode} />} />
            <Route path="/learn" element={<BlogPage DarkMode={DarkMode} />}/>
            <Route path="/projects" element={<ProjectPage DarkMode={DarkMode} />}/>
            <Route path="/about" element={<About DarkMode={DarkMode}/>} />
            <Route path="/reach_out" element={<Contact DarkMode={DarkMode}/>} />
            <Route path="*" element={<Page404 DarkMode={DarkMode}/>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
