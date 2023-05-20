import bootstrap from '../assets/svg/skills/bootstrap.svg'
import canva from '../assets/svg/skills/canva.svg'
import css from '../assets/svg/skills/css.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import nodejs from '../assets/svg/skills/nodejs.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import tailwind from '../assets/svg/skills/tailwind.svg'
import typescript from '../assets/svg/skills/typescript.svg'
import ubuntu from '../assets/svg/skills/ubuntu.svg'

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'ubuntu':
            return ubuntu;
        case 'node js':
            return nodejs;
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'react':
            return react;
        case 'typescript':
            return typescript;
        case 'bootstrap':
            return bootstrap;
        case 'mysql':
            return mysql;
        case 'tailwind':
            return tailwind;
        case 'java':
            return java;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'microsoft office':
            return microsoftoffice;
        case 'canva':
            return canva;
        default:
            break;
    }
}
