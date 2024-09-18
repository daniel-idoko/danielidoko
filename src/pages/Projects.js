import React, { useEffect } from "react";
import ProjectContainer from "../containers/Project";


export default function ProjectPage({DarkMode}){

  useEffect(() => {
    document.title = 'Projects | Daniel Idoko | Software Developer';
  }, []);

    return(
      <ProjectContainer DarkMode={DarkMode} />  
    )
};
