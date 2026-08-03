import './SingleProject.css';

import { FaCode, FaPlay } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function SingleProject({ id, name, subtitle, desc, tags, code, demo, repo, image, logo, contextImage, theme, animate = true }) {
    const useStyles = makeStyles((t) => ({
        iconBtn: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: 50,
            border: `2px solid ${theme.tertiary}`,
            color: theme.tertiary,
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: theme.secondary,
                color: theme.primary,
                transform: 'scale(1.1)',
                border: `2px solid ${theme.secondary}`,
            },
        },
        icon: {
            fontSize: '1.1rem',
            transition: 'all 0.2s',
            '&:hover': {},
        },
    }));

    const classes = useStyles();

    const card = (
            <div
                key={id}
                className='singleProject'
                style={{ backgroundColor: theme.primary400 }}
            >
                <div className='projectContent'>
                    <h2
                        id={name.replace(' ', '-').toLowerCase()}
                        style={{ color: theme.tertiary }}
                    >
                        {name}
                    </h2>
                    {subtitle && (
                        <p className='projectSubtitle' style={{ color: theme.tertiary80 }}>
                            {subtitle}
                        </p>
                    )}
                    <div className='projectImgWrap'>
                        <img src={image ? image : null} alt={name} className='projectImg' />
                        {logo && (
                            <span className='projectLogoBadge'>
                                <img src={logo} alt='' />
                            </span>
                        )}
                        {contextImage && (
                            <img className='projectContextImg' src={contextImage} alt='' />
                        )}
                    </div>
                    {/* los sistemas privados no tienen demo ni repo publico:
                        sin URL no se renderiza el enlace */}
                    <div className='project--showcaseBtn'>
                        {demo && (
                            <a
                                href={demo}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-demo`}
                            >
                                <FaPlay
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-demo`}
                                    className={classes.icon}
                                    aria-label='Demo'
                                />
                            </a>
                        )}
                        {code && (
                            <a
                                href={code}
                                target='_blank'
                                rel='noreferrer'
                                className={classes.iconBtn}
                                aria-labelledby={`${name
                                    .replace(' ', '-')
                                    .toLowerCase()} ${name
                                    .replace(' ', '-')
                                    .toLowerCase()}-code`}
                            >
                                <FaCode
                                    id={`${name
                                        .replace(' ', '-')
                                        .toLowerCase()}-code`}
                                    className={classes.icon}
                                    aria-label='Code'
                                />
                            </a>
                        )}
                    </div>
                </div>
                <p
                    className='project--desc'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary,
                    }}
                >
                    {desc}
                </p>
                <div
                    className='project--lang'
                    style={{
                        background: theme.secondary,
                        color: theme.tertiary80,
                    }}
                >
                    {tags.map((tag, id) => (
                        <span key={id}>{tag}</span>
                    ))}
                </div>
            </div>
    );

    // si el proyecto define `repo`, toda la card es un link a ese repositorio
    const content = repo ? (
        <a
            href={repo}
            target='_blank'
            rel='noreferrer'
            className='singleProject--link'
            aria-label={name}
        >
            {card}
        </a>
    ) : card;

    // Dentro del marquee las tarjetas se desplazan sin disparar eventos de
    // scroll, por lo que el reveal de react-reveal las dejaria invisibles.
    return animate ? <Fade bottom>{content}</Fade> : content;
}

export default SingleProject;
