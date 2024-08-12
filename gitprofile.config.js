// gitprofile.config.js

const config = {
  github: {
    username: 'chroakPRO', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 15, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [''], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'christopher-ek-1b8074208',
    twitter: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'christophereek97',
    dev: '',
    website: 'https://oaksec.dev',
    phone: '',
    email: 'christophereek97@gmail.com',
  },
  skills: [
    'PHP',
    'React.js',
    'MySQL',
    'Git',
    'Docker',
    'CSS',
    'Antd',
    'Bootstrap',
    'Reverse Engineering',
    'IT-Security',
    'Linux',
    'Windows',
    'Code anylsis',
    'REST API',
    'Penetration Testing',
    'Web Application Testing',
    'Web Application Development',
    'Web Application Security',
    'Python',
    'Linear regression',
    'Network and Infrastructure Security',
  ],
  experiences: [
      {
      company: 'Iver',
      position: IT-Specialist',
      from: 'Jan 2024',
      to: 'Present',
      desc: '',
    },
    {
      company: 'Client (Confidential)',
      position: 'Säker systemutveckling',
      from: 'September 2022',
      to: 'Nov 2022',
      desc: '',
    },
    {
      company: 'Client (Confidential)',
      position: 'Säkerhetsgranskning av system',
      from: 'Maj 2022',
      to: 'Nov 2022',
    },
        {
      company: 'IT-Säkerhetstekniker (school)',
      position: 'Simulerad penetrationstestning',
      from: 'Jun 2022',
      to: 'Jul 2022',
    },
    {
      company: 'IT-Säkerhetstekniker (school)',
      position: 'Managering av Docker',
      from: 'Mars 2022',
      to: 'Maj 2022',
    },
    {
      company: 'IT-Säkerhetstekniker (school)',
      position: 'Cloudflare',
      from: 'feb 2022',
      to: 'april 2022',
    },
    {
      company: 'CryptoGuard',
      position: 'Säker systemutveckling',
      from: 'Jan 2022',
      to: 'Mars 2022',
    },
    {
      company: 'TelloPrint AB',
      position: 'IT-säkerhetsspecialist',
      from: 'Sep 2021',
      to: 'Feb 2022',
    },
    {
      company: 'Hallsberg Bibliotek',
      position: 'RSA kryptering med Python',
      from: 'Mars 2021',
      to: 'Maj 2021',
    },
    {
      company: 'Hallsberg Bibliotek',
      position: 'IT administratör och Utvecklare',
      from: 'Sep 2021',
      to: 'Feb 2022',
    },
  ],
  education: [
    {
      institution: 'IT Säkerhetstekniker (Cyber Security)',
      degree: 'Bachelor degree',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Hallsberg Gymnasium',
      degree: 'Bachelor degree',
      from: '2017',
      to: '2020',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'christophereek97', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
