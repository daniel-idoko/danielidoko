import React, {useState, useEffect} from "react";
import { Grid } from "@mui/material";
import Button from '@mui/material/Button';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import RightbarCard from "../components/RightBarCard";
import useStyles from "../styles/home";
import Fuse from "fuse.js";
import RightbarCardPlaceHolder from "./RightBarCardPlaceHolder";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";



export default function BlogRightBar({ 
  DarkMode, 
  Blogs, 
  Blogsloading, 
  setFilterStatus, 
  setSearchTerm, 
  divideArrayIntoChunks, 
  setDividedArrays 
}) {
  const classes = useStyles({ DarkMode });
  const [topBlogs, setTopBlogs] = useState([]);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [uniqueTags, setUniqueTags] = useState([]);
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const backgroundColor = `${DarkMode ? "rgba(248, 249, 250, 0.2)" : "rgb(248, 249, 250)"}`;

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

  const categorySearch = (term)=>{
    setSearchTerm(term)
    if(term === 'all'){
      setFilterStatus({isActive: false, filterOption: ''})
      setDividedArrays(divideArrayIntoChunks(Blogs, 5))
    }else{
      setFilterStatus({isActive: true, filterOption: 2})
      const FilteredBlog = Blogs.filter(item => item.category === term)
      const dividedArr = divideArrayIntoChunks(FilteredBlog, 5)
      setDividedArrays(dividedArr)
    }
    backToTop()
  };

  const options2 = {
    keys: ['title', 'tags'], // Specify the properties to search within
    threshold: 0.4, // Adjust the fuzzy search threshold (0 to 1)
  };

  const tagSearch =(term)=>{
    const fuse2 = new Fuse(Blogs, options2)
    setSearchTerm(term)
    if(term === 'all'){
      setFilterStatus({isActive: false, filterOption: ''})
      setDividedArrays(divideArrayIntoChunks(Blogs, 5))
    }else{
      setFilterStatus({isActive: true, filterOption: 3})
      const filterBlogArr = fuse2.search(term)
      setDividedArrays(divideArrayIntoChunks(filterBlogArr, 5))
    }

    backToTop()
  };


  function getTop3HighestHeights(data) {
    // Sort the array of objects based on the 'views' property in descending order
    const sortedData = data.sort((a, b) => b.views - a.views);
  
    const top3HighestHeights = sortedData.slice(0, 3);
    return top3HighestHeights;
  };
  const onNewsLetterFormSubmit =(e)=>{
      e.preventDefault();

      setMessage('')
      setLoading(true)

      const formData = new FormData;
      formData.append('email', email);
      
      const url = process.env.REACT_APP_NEWS_LETTER_POST;
      axios.post(url, formData)
      .then(res => {
          if(res.data.message_code === 1){
              setMessage("Your email has been added to the list")
          }else if(res.data.message_code === 2){
              setMessage("Your email already exist in the list")
          }else {
              setMessage("Something went wrong, try again")
          }
          setLoading(false)
      })
      .catch(error => {
          console.error(error)
          setMessage("Something went wrong, try again")
          setLoading(false)
      });
  };

  useEffect(()=>{
    if(email === ''){
        setMessage('')
    }
  }, [email])
  useEffect(()=>{
    if(!Blogsloading){
      setTopBlogs(getTop3HighestHeights(Blogs))
    };
  }, [Blogs]);
  useEffect(()=>{
    const backToTopButton = document.getElementById("backToTop")
    window.addEventListener('scroll', () => {
      if (window.scrollY > 250) {
        backToTopButton.style.display = 'block';
      } else {
        backToTopButton.style.display = 'none';
      }
    });
  });

  //Get category
  useEffect(()=>{
    if(!Blogsloading){
      const categoryCount = Blogs.reduce((acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      }, {});

      const categoryArray = Object.keys(categoryCount).map(category => {
        return { category: category, count: categoryCount[category] };
      });

      setUniqueCategories(categoryArray)
    }
  }, [Blogs])


    //Get tags
    useEffect(()=>{
      if(!Blogsloading){
        const allTags = Blogs.map(item => item.tags).flat();
        const uniqueTags = [...new Set(allTags)];
  
        setUniqueTags(uniqueTags)
      }
    }, [Blogs])

  const backToTop =()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


 
  return (
      <Grid item lg={3.8} className={classes.test} style={{background: backgroundColor}}>

        {/* Search form start */}
        <section className={classes.disappearingSection} style={{padding: "0 1.5rem"}}>
          <form>
            <label htmlFor="text-2" className={classes.label}>
              <h5 className={classes.title}>Search your intentrest</h5>
            </label>
            <div className={classes.inputHolder}>
              <input
                id="keyword-search-2"
                type="text"
                name="text-2"
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
        {/* Search form end */}

        {/* Category section starts */}
        <section className={classes.disappearingSection} styles={{padding: '0px'}}>
          <h5 className={classes.title}>Category</h5>

          <div>
            <div href="" className={classes.categoryLink} onClick={()=> categorySearch('all')}>
              <span style={{display: "flex", alignItems: "center"}}>
                <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                <p>All</p>
              </span>
            </div>

            {
              uniqueCategories.map(item => {
                return (
                  <div href="" className={classes.categoryLink} onClick={()=> categorySearch(item.category)} key={item.category}>
                    <span style={{display: "flex", alignItems: "center"}}>
                      <FolderOutlinedIcon style={{paddingRight: "10px"}} />
                      <p>{item.category}</p>
                    </span>
                    <span className={classes.categoryLinkSpan}>({item.count})</span>
                  </div>
                )
              })
            }
          </div>
        </section>

        {/* Category section ends */}

        {/* Recent Post Section */}
          <section className={classes.section}>
            <h5 className={classes.title}>Popular Articles</h5>

            <div>
              {
                topBlogs.length > 0 ?
                topBlogs.map(item => {
                  const {_id, body, category, date, img, imgalt, imgsource, number, readduration, smallbody, tags, title, views} = item
                  return <RightbarCard key={_id} DarkMode={DarkMode} _id={_id} body={body} category={category} date={date} readduration={readduration} img={img} imgalt={imgalt} imgsource={imgsource} number={number} smallbody={smallbody} tags={tags} title={title} views={views}/>
                })
                :
                <RightbarCardPlaceHolder />
              }
            </div>

          </section>
        {/* Recent Post Section ENDS */}

        {/* Tag cloud BEGINS */}
        <section className={classes.disappearingSection}>
          <h5 className={classes.title}>Tag Cloud</h5>

          <div className={classes.tagcloudHolder}>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('all')} >all</div>
            {
              uniqueTags.map(item => {
                return <div className={classes.tagCloud} onClick={(e)=> tagSearch(item)} key={item}>{item}</div>
              })
            }
            {/* <div className={classes.tagCloud} onClick={(e)=> tagSearch('administration')} >administration</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('web dev')} >web dev</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('backend')} >backend</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('linux')} >linux</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('arrays')} >arrays</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('node JS')} >node JS</div>
            <div className={classes.tagCloud} onClick={(e)=> tagSearch('css')} >css</div> */}
          </div>

        </section>
        {/* Tag cloud ENDS */}

        {/* Newsletter section BEGINS */}
        <section className={classes.newlettersection}>
          <div className={classes.newletter}>
            <div className={classes.overlay}>
              <h5 className={classes.title} style={{color: "#fff"}}>Newsletter</h5>

              <p className={classes.newsletterText} style={{color: "#fff"}}>Please subscribe to our news letter to get posted whenever we post a new aricle</p>

              <form onSubmit={onNewsLetterFormSubmit} className={classes.newsletterForm}>
                <input type="text" name="email" placeholder="Email Address" className={classes.newsletterInput} required value={email} onChange={(e)=> setEmail(e.currentTarget.value)}/>
                <button type="submit" className={classes.newsletterButton}>Subscribe</button>
                {
                    loading
                    ?
                        <RotatingLines
                            visible={true}
                            height="16"
                            width="16"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        /> 
                    :
                        <p style={{color: '#FFA500', fontSize: '0.9rem'}}>{message}</p>
                }
              </form>
            </div>
          </div>
        </section>
        {/* Newsletter section ENDS */}

        {/* About section BEGINS */}
        <section className={classes.section}>
          <h5 className={classes.title}>A little about me</h5>
          
          <p className={classes.authorP}>Hi 👋, I'm Daniel and I've coding everyday since 2021. I enjoy collaborating on projects through platforms like GitHub. I'm also passionate about sharing my knowledge through writing articles. <a href="/about" className={classes.authorPLink}>see more</a></p>
        </section>
        {/* About section ENDS */}
        <div id="backToTop" className={classes.bttContainer}>
          <Button variant="outlined" className={classes.backToTop} onClick={backToTop}>back to top</Button>
        </div>
      </Grid>
  );
}
