import React, { useEffect, useState } from "react";
import SingleBlogContainer from "../containers/SingleBlog";
import { useParams } from 'react-router-dom';
import { useGlobalContext } from "../context/AppContext";
import { Watch } from "react-loader-spinner";

export default function SingleBlog({ DarkMode }) {
  const { Blogs, Blogsloading } = useGlobalContext();
  const { blog_id } = useParams();
  const [item, setItem] = useState({});

  useEffect(()=>{
    if(!Blogsloading){
      setItem(Blogs.find(blog => blog._id === blog_id));
    }
  }, [Blogs])
  

  return (
    <>
    {
      Blogsloading
      ?
        <div style={{
          width: '100%', 
          height: '100vh', 
          display: "flex", 
          justifyContent: 'center', 
          alignItems: "center"
          }}>
          <Watch
            visible={true}
            height="80"
            width="80"
            radius="48"
            color="rgb(30, 175, 237)"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      :
        <SingleBlogContainer item={item} DarkMode={DarkMode} Blogs={Blogs}/>

    }
    </>
  );
}
