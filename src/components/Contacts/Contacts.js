import './Contacts.css';

import { AiOutlineCheckCircle, AiOutlineSend } from 'react-icons/ai';
import {
    FaBloggerB,
    FaCodepen,
    FaGithub,
    FaGitlab,
    FaInstagram,
    FaLinkedinIn,
    FaMediumM,
    FaRedditAlien,
    FaStackOverflow,
    FaTwitter,
    FaYoutube,
} from 'react-icons/fa';
import { FiAtSign, FiPhone } from 'react-icons/fi';
import { IconButton, Snackbar, SnackbarContent } from '@material-ui/core';
import React, { useContext, useState } from 'react';

import CloseIcon from '@material-ui/icons/Close';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { ThemeContext } from '../../contexts/ThemeContext';
import axios from 'axios';
import { contactsData } from '../../data/contactsData';
import isEmail from 'validator/lib/isEmail';
import { makeStyles } from '@material-ui/core/styles';
import { socialsData } from '../../data/socialsData';

function Contacts() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const { theme } = useContext(ThemeContext);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const useStyles = makeStyles((t) => ({
        input: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        message: {
            border: `4px solid ${theme.primary80}`,
            backgroundColor: `${theme.secondary}`,
            color: `${theme.tertiary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 500,
            transition: 'border 0.2s ease-in-out',
            '&:focus': {
                border: `4px solid ${theme.primary600}`,
            },
        },
        label: {
            backgroundColor: `${theme.secondary}`,
            color: `${theme.primary}`,
            fontFamily: 'var(--primaryFont)',
            fontWeight: 600,
            fontSize: '0.9rem',
            padding: '0 5px',
            transform: 'translate(25px,50%)',
            display: 'inline-flex',
        },
        socialIcon: {
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '21px',
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        detailsIcon: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            borderRadius: '50%',
            width: '45px',
            height: '45px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '23px',
            transition: '250ms ease-in-out',
            flexShrink: 0,
            '&:hover': {
                transform: 'scale(1.1)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
        submitBtn: {
            backgroundColor: theme.primary,
            color: theme.secondary,
            transition: '250ms ease-in-out',
            '&:hover': {
                transform: 'scale(1.08)',
                color: theme.secondary,
                backgroundColor: theme.tertiary,
            },
        },
    }));

    const classes = useStyles();

    const handleContactForm = (e) => {
        e.preventDefault();

        if (name && email && message) {
            if (isEmail(email)) {
                const responseData = {
                    name: name,
                    email: email,
                    message: message,
                };

                axios.post(contactsData.sheetAPI, responseData).then((res) => {
                    console.log('success');
                    setSuccess(true);
                    setErrMsg('');

                    setName('');
                    setEmail('');
                    setMessage('');
                    setOpen(false);
                });
            } else {
                setErrMsg('Invalid email');
                setOpen(true);
            }
        } else {
            setErrMsg('Enter all the fields');
            setOpen(true);
        }
    };

    return (
        <div
            className='contacts'
            id='contacts'
            style={{ backgroundColor: theme.secondary }}
        >
            <div className='contacts--container'>
                <h1 style={{ color: theme.primary }}>Contacto</h1>
                <div className='contacts-body'>
                    
        
                    <div className='contacts-details'>
                        <a
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiAtSign />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                pablopaez2307@gmail.com
                            </p>
                        </a>
                        <a
                            className='personal-details'
                        >
                            <div className={classes.detailsIcon}>
                                <FiPhone />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                11 68654369
                            </p>
                        </a>
                        <div className='personal-details'>
                            <div className={classes.detailsIcon}>
                                <HiOutlineLocationMarker />
                            </div>
                            <p style={{ color: theme.tertiary }}>
                                Argentina - Buenos Aires - San Miguel
                            </p>
                        </div>

                        <div className='socialmedia-icons'>
                        
                                <a
                                    href={"https://github.com/Pepe2307"}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaGithub aria-label='GitHub' />
                                </a>
                            
                                <a
                                    href={"https://www.linkedin.com/in/pablo-paez-t/"}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaLinkedinIn aria-label='LinkedIn' />
                                </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
