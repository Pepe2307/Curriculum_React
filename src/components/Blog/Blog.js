import './Blog.css';

import React,{ useContext } from 'react';

import { HiArrowRight } from "react-icons/hi";
import { LanguageContext } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom'
import SingleBlog from './SingleBlog/SingleBlog';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import { ui } from '../../data/translations'
import { makeStyles } from '@material-ui/core/styles';

function Blog() {

    const { theme } = useContext(ThemeContext);
    const { lang, pick } = useContext(LanguageContext);
    const tr = ui[lang];

    const useStyles = makeStyles(() => ({
        viewAllBtn : {
            color: theme.tertiary, 
            backgroundColor: theme.primary,
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
            "&:hover": {
                color: theme.tertiary, 
                backgroundColor: theme.secondary,
            }
        },
    }));

    const classes = useStyles();

    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>{tr.blogTitle}</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={pick(blog.title)}
                                    desc={pick(blog.description)}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div> 

                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <Link to="/blog">
                                    <button className={classes.viewAllBtn}>
                                        {tr.blogViewAll}
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

export default Blog
