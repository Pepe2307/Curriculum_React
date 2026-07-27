import './Projects.css'

import React,{ useContext } from 'react';

import { HiArrowRight } from "react-icons/hi";
import { LanguageContext } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom'
import Marquee from "react-fast-marquee";
import Metrics from '../Metrics/Metrics';
import SingleProject from './SingleProject/SingleProject';
import { ThemeContext } from '../../contexts/ThemeContext';
import { makeStyles } from '@material-ui/core/styles';
import { projectsData } from '../../data/projectsData'
import { ui } from '../../data/translations'

function Projects() {

    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);
    const tr = ui[lang];

    
    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
            transition: 'color 0.2s',
            "&:hover": {
                color: theme.secondary, 
                backgroundColor: theme.primary,
            }
        },
        viewArr : {
            color: theme.tertiary, 
            backgroundColor: theme.secondary70,
            width: '40px',
            height: '40px',
            padding: '0.5rem',
            fontSize: '1.05rem',
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {projectsData.length > 0 && (
                <div className="projects" id="projects" style={{backgroundColor: theme.secondary}}>
                    <div className="projects--header">
                        <h1 style={{color: theme.primary}}>{tr.projectsTitle}</h1>
                    </div>
                    <div className="projects--body">
                        <div className="projects--scroll">
                            <Marquee
                                gradient={false}
                                speed={120}
                                pauseOnHover={true}
                                pauseOnClick={true}
                                delay={0}
                                play={true}
                                direction="right"
                            >
                                {projectsData.slice(0, 4).map(project => (
                                    <div className="project--box" key={project.id}>
                                        <SingleProject
                                            theme={theme}
                                            id={project.id}
                                            name={pick(project.projectName)}
                                            desc={pick(project.projectDesc)}
                                            tags={project.tags}
                                            code={project.code}
                                            demo={project.demo}
                                            image={project.image}
                                            animate={false}
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                        <Metrics />

                        {projectsData.length > 3 && (
                            <div className="projects--viewAll">
                                <Link to="/projects">
                                    <button className={classes.viewAllBtn}>
                                        {tr.projectsViewAll}
                                        <HiArrowRight className={classes.viewArr} />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Projects
