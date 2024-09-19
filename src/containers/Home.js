import React, {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Stack from '@mui/material/Stack';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import BlogRightBar from "../components/BlogRightBar";
import useStyles from "../styles/home";
import BlogcardPreloader from "../components/BlogCardPreloader";
import Blogcard from "../components/BlogCard";
import { useGlobalContext } from "../context/AppContext";
import Fuse from "fuse.js";

function divideArrayIntoChunks(arr, chunkSize) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};

export default function HomeContainer({ DarkMode }) {
  const classes = useStyles({DarkMode});
  const { Blogs, Blogsloading, setIsNavOpen } = useGlobalContext();

  const [DiviedArrays, setDividedArrays] = useState([]);
  const [blogIndex, setBlogIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState({isActive: false, filterOption: 0});


  const prevSwitch = ()=>{
    if(blogIndex <= 0){
      setBlogIndex(DiviedArrays.length - 1)
    }else{
      setBlogIndex(blogIndex - 1)
    }
  };
  const nextSwitch = ()=>{
    if(blogIndex >= DiviedArrays.length - 1){
      setBlogIndex(0)
    }else{
      setBlogIndex(blogIndex + 1)
    }
  };
  const resetBlogs = () => {
    const chunkSize = 5;
    const dividedArrays = divideArrayIntoChunks(Blogs, chunkSize);
    setDividedArrays(dividedArrays)
    setFilterStatus({isActive: false, filterOption: 0})

    document.getElementById("keyword-search").value = ""
    document.getElementById("keyword-search-2").value = ""
    
  };



  useEffect(()=>{
    if(!Blogsloading){
      const chunkSize = 5;
      const dividedArrays = divideArrayIntoChunks(Blogs, chunkSize);
      setDividedArrays(dividedArrays)
    };
  }, [Blogs]);
  useEffect(()=>{
    window.scroll({
      top: 0,
      left: 0,
    })
  }, [blogIndex]);
  useEffect(()=>{
    setBlogIndex(0)
  }, [DiviedArrays]);

  const options = {
    keys: ['title', 'category', 'smallbody'],
    threshold: 0.4, 
  };
  const searchFunction =(term)=>{
    const fuse = new Fuse(Blogs, options)
    setSearchTerm(term)
    if(!term){
      setFilterStatus({isActive: false, filterOption: ''})
      setDividedArrays(divideArrayIntoChunks(Blogs, 5))
    }else{
      setFilterStatus({isActive: true, filterOption: 1})
      const filterBlogArr = fuse.search(term)
      setDividedArrays(divideArrayIntoChunks(filterBlogArr, 5))
    }
  };

  return (
    <Grid container className={classes.root}>
      <Grid item lg={8.2} className={classes.test2}>
        <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
          <MenuIcon className={classes.menuIcon}/>
          <h5 className={classes.title} style={{margin: '0'}}>Daniel Idoko</h5>
        </div>
        <section className={classes.searchSection} style={{ padding: '0.5rem 0' }}>
          <form>
            <div className={classes.inputHolder}>
              <input
                id="keyword-search"
                type="text"
                name="text"
                placeholder="Type a keyword"
                className={classes.input}
                onChange={(e)=> searchFunction(e.target.value)}
              />
              <div className={classes.sendIcon}>
                <SearchOutlinedIcon />
              </div>
            </div>
          </form>
        </section>

        {
          Blogsloading
          ?
            <>
              <BlogcardPreloader/>
              <BlogcardPreloader/>
              <BlogcardPreloader/>
            </>
          :
            <Grid container>
              {
                !filterStatus.isActive 
                ?
                  null
                :
                  <p className={classes.searchTermText}>showing result for <span className={classes.searchTermTextSpan}>{`"${searchTerm}"`}</span></p>
              }



              {
                filterStatus.isActive 
                ?
                  DiviedArrays.length > 0 
                  ?
                    DiviedArrays[blogIndex].map(item => {
                      const {_id, body, category, date, img, imgalt, imgsource, number, readduration, smallbody, tags, title, views} = filterStatus.filterOption == 2 ? item : item.item
                      return <Blogcard key={_id} DarkMode={DarkMode} _id={_id} body={body} category={category} date={date} readduration={readduration} img={img} imgalt={imgalt} imgsource={imgsource} number={number} smallbody={smallbody} tags={tags} title={title} views={views}/>
                    })
                :
                    <p className={classes.nothingSearch}>Nothing returned from search, try a diffrent term or <span onClick={resetBlogs} style={{cursor: 'pointer',textDecoration: 'underline'}}>go back</span></p>

                :


                DiviedArrays.length > 0 
                ?
                  DiviedArrays[blogIndex].map(item => {
                    const {_id, body, category, date, img, imgalt, imgsource, number, readduration, smallbody, tags, title, views} = item
                    return <Blogcard key={_id} DarkMode={DarkMode} _id={_id} body={body} category={category} date={date} readduration={readduration} img={img} imgalt={imgalt} imgsource={imgsource} number={number} smallbody={smallbody} tags={tags} title={title} views={views}/>
                  })
                :
                  <>
                    <BlogcardPreloader/>
                    <BlogcardPreloader/>
                    <BlogcardPreloader/>
                  </>
              }



              {
                DiviedArrays.length > 1 ?
                <div className={classes.blogSwicht}>
                  <p className={classes.blogWitchText}> page <span>{blogIndex + 1}</span> of <span>{DiviedArrays.length}</span> </p>
                  <Stack direction="row" spacing={2}>
                    <Button onClick={prevSwitch} startIcon={<ChevronLeftIcon />}>
                      Prev
                    </Button>
                    <Button onClick={nextSwitch} endIcon={<ChevronRightIcon />}>
                      Next
                    </Button>
                  </Stack>
                </div>
                : 
                null
              }
            </Grid>
        }
      </Grid>

      <BlogRightBar DarkMode={DarkMode} Blogs={Blogs} Blogsloading={Blogsloading} setFilterStatus={setFilterStatus} setSearchTerm={setSearchTerm} divideArrayIntoChunks={divideArrayIntoChunks} setDividedArrays={setDividedArrays}/>
    </Grid>
  );
};
