import React, {useState, useEffect} from "react";
import useStyles from "../styles/project";
import { Button, Grid } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useGlobalContext } from "../context/AppContext";
import Preloader from "../components/Preloader";
import { AiOutlineCode } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithubAlt } from 'react-icons/fa';
import Masonry from 'react-masonry-css';
import ProjectData from "../data/projects.json";
import GitRepo from "../data/git-repo.json"

export default function ProjectContainer({DarkMode}){

    const classes = useStyles({DarkMode});
    const { setIsNavOpen } = useGlobalContext();
    const [Project, setProjects] = useState(ProjectData);
    const [projectLoading, setProjectLoading] = useState(false);
    const [contributions, setContributions] = useState([]);
    const [showContributions, setShowContributions] = useState(true)


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
    
    const backToTop =()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
    
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        900: 2,
        500: 1
      };

      const token = process.env.REACT_APP_GITHUB_TOKEN;
      useEffect(()=>{

        const forkedRepos = GitRepo.filter(repo => repo.fork); //Filter repos I forked
        forkedRepos.map((item) => {
            const {id, name, svn_url, created_at, description, customFiledByMeIDokoForLanguages}  = item;
            setContributions(prevItems => [...prevItems, {id: id, name: name, url: svn_url, created_at: created_at, description: description, languages: customFiledByMeIDokoForLanguages}]);
        })

        // fetch(`https://api.github.com/users/doe-base/repos`, {
        //     headers: {
        //         'Authorization': `token ${token}`
        //     }
        // })
        // .then(response => response.json())
        // .then(data => {
        //     const forkedRepos = data.filter(repo => repo.fork); //Filter repos I forked
        //     forkedRepos.map((item) => {
        //         const {id, name, url, created_at, description, languages_url}  = item
        //         return fetch(languages_url, {
        //                     headers: {
        //                         'Authorization': `token ${token}`
        //                     }
        //                 })
        //                 .then(response => response.json())
        //                 .then(languageData => {
        //                     setContributions(prevItems => [...prevItems, {id: id, name: name, url: url, created_at: created_at, description: description, languages: languageData}]);
        //                     setShowContributions(true)
        //                 })
        //                 .catch(error => {
        //                     console.error('Error fetching data:', error);
        //                 });
        //     })
        // })

      }, [])


    return(
        <Grid className={classes.root}>

            <div className={classes.label} onClick={()=> setIsNavOpen(true)}>
                <MenuIcon className={classes.menuIcon}/>
                <h5 className={classes.name} style={{margin: '0'}}>Daniel Idoko</h5>
            </div>

            <div>
              {
                  projectLoading ?
                  <Preloader /> :
                  <div>
                      <section className={classes.section}>
                          <h2 className={classes.title}>Below are some project build sowly by me.</h2>

                          <Masonry
                                breakpointCols={breakpointColumnsObj}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column">
                            {
                                Project.map(item => {
                                    return (
                                            <Grid key={item.number}>
                                                <div className={classes.card}>
                                                    <div className={classes.firstPart}>
                                                        <span className={classes.span}>{item.year}</span>
                                                        <span className={classes.span2}><span style={{marginRight:'0.2rem'}}>{item.tech}</span>  <AiOutlineCode className={classes.codeIcon}/></span>
                                                    </div>
                                                    <h1 className={classes.cardTitle}>{item.name}</h1>
                                                    <p className={classes.dateText}>{item.disc}</p>
                                                    <div className={classes.cardLinks}>
                                                        {item.demolink ? <a href={item.demolink} className={classes.links} target="_blank"><span style={{whiteSpace: 'nowrap'}}>View live</span><BiLinkExternal /></a> : null}
                                                        {item.sourcelink ? <a href={item.sourcelink} className={classes.links} target="_blank"><span style={{whiteSpace: 'nowrap'}}>Source code</span><FaGithubAlt /></a> : null}
                                                        
                                                    </div>
                                                </div>
                                            </Grid>
                                    )
                                })
                            }
                          </Masonry> 
                      </section>

                    {
                        showContributions == false
                        ?
                        null
                        :
                        <section className={classes.section}>
                            <h2 className={classes.title}>Projects I contribute to on Github.</h2>

                            <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="my-masonry-grid"
                                    columnClassName="my-masonry-grid_column">
                                {
                                    contributions.map(item => {
                                        const {id, name, url, created_at, description, languages}  = item;
                                        const mainLanguage = Object.keys(languages)[0];
                                        const dateObject = new Date(created_at);
                                        const year = dateObject.getFullYear();
                                        return (
                                                <Grid key={id}>
                                                    <div className={classes.card}>
                                                        <div className={classes.firstPart}>
                                                            <span className={classes.span}>{year}</span>
                                                            <span className={classes.span2}><span style={{marginRight:'0.2rem'}}>{mainLanguage}</span>  <AiOutlineCode className={classes.codeIcon}/></span>
                                                        </div>
                                                        <h1 className={classes.cardTitle}>{name}</h1>
                                                        <p className={classes.dateText}>{description}</p>
                                                        <div className={classes.cardLinks}>
                                                            <a href={url} className={classes.links} target="_blank"><span style={{whiteSpace: 'nowrap'}}>Source code</span><FaGithubAlt /></a>
                                                        </div>
                                                    </div>
                                                </Grid>
                                        )
                                    })
                                }
                            </Masonry> 
                        </section>
                    }
                  </div>
              }
            </div>

            <p className={classes.footer}>visit <a href="https://github.com/doe-base" className={classes.footerLink}>my github profile</a> to see more details about my work. Including the documentation to all my projects and contributions.</p>
            <div id="backToTop" className={classes.bttContainer}>
                <Button variant="outlined" className={classes.backToTop} onClick={backToTop}>back to top</Button>
            </div>
        </Grid>
    )
};