import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import BlogsData from "../data/blogs.json"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [ Blogs, setBlogs ] = useState(BlogsData);
    const [Blogsloading, setBlogsloading] = useState(false);
    const [ isNavOpen, setIsNavOpen ] = useState(false);
    const [ DarkMode, setDarkMode ] = useState(JSON.parse(localStorage.getItem('mode')) || true);



    useEffect(()=>{
        localStorage.setItem('mode', JSON.stringify(DarkMode));
    },[DarkMode]);

    return (
        <AppContext.Provider
            value = {{
                Blogs,
                DarkMode, 
                setDarkMode,
                isNavOpen,
                setIsNavOpen,
                Blogsloading
            }}
        >
            { children }
        </AppContext.Provider>
    )
};

export const useGlobalContext = () =>{
    return useContext(AppContext);
};

export { AppContext, AppProvider };