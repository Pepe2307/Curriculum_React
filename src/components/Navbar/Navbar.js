import './Navbar.css';

import { FaBriefcase, FaFolderOpen, FaLanguage, FaUser } from 'react-icons/fa';
import { IoHomeSharp, IoMenuSharp } from 'react-icons/io5';
import React, { useContext, useState } from 'react';

import { BsFillGearFill } from 'react-icons/bs';
import CloseIcon from '@material-ui/icons/Close';
import Drawer from '@material-ui/core/Drawer';
import Fade from 'react-reveal/Fade';
import { HiDocumentText } from 'react-icons/hi';
import { LanguageContext } from '../../contexts/LanguageContext';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import LatencyPill from '../LatencyPill/LatencyPill';
import { MdPhone } from 'react-icons/md';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { ThemeContext } from '../../contexts/ThemeContext';
import logo_pepe from '../../assets/svg/logo_centrado_perfecto.svg'
import { makeStyles } from '@material-ui/core/styles';
import { ui } from '../../data/translations';

function Navbar() {
    const { theme, setHandleDrawer } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);
    const tr = ui[lang];

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHandleDrawer();
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHandleDrawer();
    };

    const useStyles = makeStyles((t) => ({
        navMenu: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '38px',
            width: '38px',
            fontSize: '2rem',
            color: theme.tertiary,
            cursor: 'pointer',
            transition: 'color 0.3s',
            '&:hover': {
                color: theme.primary,
            },
            [t.breakpoints.down('xs')]: {
                fontSize: '1.8rem',
            },
        },
        MuiDrawer: {
            padding: '0em 1.8em',
            width: '14em',
            fontFamily: ' var(--primaryFont)',
            fontStyle: ' normal',
            fontWeight: ' normal',
            fontSize: ' 24px',
            background: theme.secondary,
            overflow: 'hidden',
            borderTopRightRadius: '40px',
            borderBottomRightRadius: '40px',
            [t.breakpoints.down('sm')]: {
                width: '12em',
            },
        },
        closebtnIcon: {
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: theme.primary,
            position: 'absolute',
            right: 40,
            top: 40,
            transition: 'color 0.2s',
            '&:hover': {
                color: theme.tertiary,
            },
            [t.breakpoints.down('sm')]: {
                right: 20,
                top: 20,
            },
        },
        drawerItem: {
            margin: '2rem auto',
            borderRadius: '78.8418px',
            background: theme.secondary,
            color: theme.primary,
            width: '85%',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding: '0 30px',
            boxSizing: 'border-box',
            border: '2px solid',
            borderColor: theme.primary,
            transition: 'background-color 0.2s, color 0.2s',
            '&:hover': {
                background: theme.primary,
                color: theme.secondary,
            },
            [t.breakpoints.down('sm')]: {
                width: '100%',
                padding: '0 25px',
                height: '55px',
            },
        },
        drawerLinks: {
            fontFamily: 'var(--primaryFont)',
            width: '50%',
            fontSize: '1.3rem',
            fontWeight: 600,
            [t.breakpoints.down('sm')]: {
                fontSize: '1.125rem',
            },
        },
        drawerIcon: {
            fontSize: '1.6rem',
            [t.breakpoints.down('sm')]: {
                fontSize: '1.385rem',
            },
        },
    }));

    const classes = useStyles();

    const shortname = (name) => {
        if (name.length > 12) {
            return name.split(' ')[0];
        } else {
            return name;
        }
    };

    return (
        <div className='navbar'>
        
            <div  className='navbar--container'>
                <h1 style={{ color: theme.secondary }}>
                    <img src={logo_pepe} alt="SVG LOGO" className='alineando'
                    style={{ height:"15vh",  width:"15vh" }} />
                </h1>

                <div className='topControls'>
                    <LatencyPill />
                    <LanguageSwitch />
                    <IoMenuSharp
                        className={classes.navMenu}
                        onClick={handleDrawerOpen}
                        aria-label='Menu'
                        id='navicon'
                    />
                </div>
            </div>
            <Drawer
                variant='temporary'
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleDrawerClose();
                    } else if (reason !== 'escapeKeyDown') {
                        handleDrawerClose();
                    }
                }}
                anchor='left'
                open={open}
                classes={{ paper: classes.MuiDrawer }}
                className='drawer'
                disableScrollLock={true}
            >
                <div className='div-closebtn'>
                    <CloseIcon
                        onClick={handleDrawerClose}
                        onKeyDown={(e) => {
                            if (e.key === ' ' || e.key === 'Enter') {
                                e.preventDefault();
                                handleDrawerClose();
                            }
                        }}
                        className={classes.closebtnIcon}
                        role='button'
                        tabIndex='0'
                        aria-label='Close'
                    />
                </div>
                <br />

                <div onClick={handleDrawerClose}>
                    <div className='navLink--container'>
                        <Fade left>
                            <NavLink
                                to='/'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <IoHomeSharp
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        {tr.navHome}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#about'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaUser className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        {tr.navAbout}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#experience'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaBriefcase
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        {tr.navExperience}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#skills'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <BsFillGearFill
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        {tr.navSkills}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#education'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <HiDocumentText
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        {tr.navEducation}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#languages'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaLanguage
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        {tr.navLanguages}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>

                        <Fade left>
                            <NavLink
                                to='/#projects'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <FaFolderOpen
                                        className={classes.drawerIcon}
                                    />
                                    <span className={classes.drawerLinks}>
                                        {tr.navProjects}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>


                        <Fade left>
                            <NavLink
                                to='/#contacts'
                                smooth={true}
                                spy='true'
                                duration={2000}
                            >
                                <div className={classes.drawerItem}>
                                    <MdPhone className={classes.drawerIcon} />
                                    <span className={classes.drawerLinks}>
                                        {tr.navContact}
                                    </span>
                                </div>
                            </NavLink>
                        </Fade>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

export default Navbar;
