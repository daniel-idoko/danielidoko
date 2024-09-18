import React, {useEffect} from "react";
import HomeContainer from "../containers/Home";

export default function Home({ DarkMode }) {

  useEffect(() => {
    document.title = 'Home | Daniel Idoko | Software Developer';
  }, []);

  return (
    <HomeContainer DarkMode={DarkMode}/>
  )
};
