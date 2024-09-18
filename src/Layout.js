import React, { useState } from 'react';
import Sidebar from "./components/SideBar"
import SmallSidebar from './components/SmallSideBar';



export default function Layout({children, DarkMode, toggleMode}){
    return (
        <div id='site'>
           <SmallSidebar toggleMode={toggleMode}/>
           <Sidebar DarkMode={DarkMode} toggleMode={toggleMode} />
           <div id='page'>{children}</div>
        </div>
    )
};
