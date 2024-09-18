import React, {useEffect} from "react";
import ContactContainer from "../containers/Contact";

export default function Contact({ DarkMode }) {

  useEffect(() => {
    document.title = 'Contact me | Daniel Idoko | Software Developer';
  }, []);

  return (
    <ContactContainer DarkMode={DarkMode}/>
  );
};
