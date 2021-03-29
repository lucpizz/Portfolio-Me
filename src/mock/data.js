import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Luca Pizzoferrato', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Luca Pizzoferrato',
  subtitle: 'I am a Full-Stack Developer Student',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Barkhamsted.jpeg',
  paragraphOne:
    'My name is Luca Pizzoferrato, and I have lived my entire life in Connecticut. I am a Digital Technology Leader with many years of experience in infrastructure services, including Digital Workplace and Mobility for large and small organizations. Cross functionally focused and able to build strong relationships for effective communications, designs, and implementation. I am a results-driven leader with managerial experience in both the Corporate and Academic industries.',
  paragraphTwo:
    'I have a passion for continuous learning and I am currently learning object-oriented programming (Java) and web development technologies, Full-Stack Developer.',
  paragraphThree:
    'In my spare time, I love to travel, cycle, golf, and have taken up photography. The photo in about me section of this webpage was taken in Barkhamsted, Connecticut.',
  resume: '', // if no resume, the button will not show up
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
    img: 'Emp-Directory.jpg',
    title: 'Employee Directory',
    info:
      'This program gives a manager a simple, intuitive view and access to non-sensitive employee data',
    info2: '',
    url: 'https://lucpizz.github.io/employee-org-chart/',
    repo: 'https://github.com/lucpizz/employee-org-chart', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'GeneratePassword.jpg',
    title: 'Password Generator',
    info: 'This program can help you generate a password for your desired length and complexity.',
    info2: '',
    url: 'https://lucpizz.github.io/Password-Generator/',
    repo: 'https://github.com/lucpizz/Password-Generator', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Budget-Tracker.jpg',
    title: 'Budget Tracker',
    info:
      'This program is a simple and intuitive budget tracker. Simply input your transactions such as deposits, withdrawls, and payments. It will store them and provide a dashboard of your activity.',
    info2: '',
    url: 'https://budget-tracker-lp.herokuapp.com/',
    repo: 'https://github.com/lucpizz/Budget-Tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Fitness-Tracker.jpg',
    title: 'Fitness Buddy',
    info:
      'This program is a simple and intuitive fitness tracker. You add your workouts, it stores them, and gives you a dashboard view of your stats.',
    info2: '',
    url: 'https://fitness-buddy-lp.herokuapp.com/',
    repo: 'https://github.com/lucpizz/fitness-buddy', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Contact Me',
  btn: 'Contact Me',
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
