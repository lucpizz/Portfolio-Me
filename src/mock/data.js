import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'QRM.png',
    title: 'Qaurantine Recipe Generator',
    info:
      'A person comes home and does not know what to cook, they can use this application to input 1 or 2 ingredients they have in their kitchen to search for recipes.',
    info2: '',
    url: 'https://lucpizz.github.io/Quarantine-Recipe-Machine/index.html',
    repo: 'https://github.com/lucpizz/Quarantine-Recipe-Machine', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rate-it.png',
    title: 'Rate-It',
    info:
      'This program is a simple and intuitive rate it application. Enter any movie, restaurant, or product and give it a rating from 1 (bad) to 5 (great).',
    info2: '',
    url: 'https://rate-it-now.herokuapp.com',
    repo: 'https://github.com/lucpizz/rate-it', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lucpizz@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/luca-pizzoferrato/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lucpizz',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
