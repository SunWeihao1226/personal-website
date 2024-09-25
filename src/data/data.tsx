import {
  ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background.webp';
import porfolioImage9 from '../images/portfolio/portfolio-apms.png';
import porfolioImage2 from '../images/portfolio/portfolio-car.png';
import porfolioImage4 from '../images/portfolio/portfolio-cc.png';
import porfolioImage3 from '../images/portfolio/portfolio-edf.png';
import porfolioImage10 from '../images/portfolio/portfolio-hpg.png';
import porfolioImage1 from '../images/portfolio/portfolio-pinn.png';
import porfolioImage8 from '../images/portfolio/portfolio-zoo.png';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial-bg.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Weihao Sun',
  description: "My personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Weihao Sun.`,
  description: (
    <>
      <p className="prose-sm mx-19 px-20 text-stone-200 sm:prose-base lg:prose-lg">
      I am currently a graduate student at Cornell University, pursuing a Master of Engineering in Systems Engineering. 
      With a foundation in Statistics and Data Science based on my undergraduate study at UBC, 
      my primary focus is on developing healthcare systems that support decision-making through data analysis and Machine Learning. 
      I am set to graduate in May 2025, and I am seeking opportunities in Systems Engineering, 
      Data Science, or Machine Learning development roles across North America.
      </p>
      <p className="prose-sm mx-19 px-20 text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, I enjoy hiking, skiing, photography, and watching films.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/MyResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a graduate student at Cornell University, pursuing a Master of Engineering in Systems Engineering. 
  I hold a Bachelor of Science's degree in Statistics with a minor in Data Science from the University of British Columbia. 
  My interests lie in integrating Data Science techniques into large-scale systems, with a particular focus on Machine Learning.
  Currently, I am working on a project aimed at developing a post-pregnancy loss mental health support system to aid decision-making 
  processes. In my previous role as a Data Analyst at CSCEC International Construction, I reviewed and analyzed large volumes of 
  procurement data. Additionally, as a Data Engineer intern at TripleEagle Logistics Vancouver, I developed an internal billing 
  system and managed the company's database. I also have research experience developing a Physics-Informed Neural Network (PINN) 
  to solve partial differential equations in battery modeling. In my side projects, 
  I focus on building, tuning, and evaluating machine learning models, as well as conducting in-depth analysis on large datasets.`,
  
  aboutItems: [
    // {label: 'Location', text: 'Vancouver, BC', Icon: MapIcon},
    // {label: 'Age', text: '24', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Chinese', Icon: FlagIcon},
    // {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    // {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English (Full Professional Proficiency),',
      },
      {
        name: 'Mandarin (Native),',
      },
      {
        name: 'French (Beginner)',
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python,',
      },
      {
        name: 'R,',
      },
      {
        name: 'SQL',
      },
      {
        name: 'Java,',
      },
      {
        name: 'Julia,',
      },
      {
        name: 'Javascript,',
      },
      {
        name: 'Dart',
      },
      {
        name: 'Racket,',
      },
      {
        name: 'C++',
      },
    ],
  },
  {
    name: 'Tools',
    skills: [
      {
        name: 'Jupyter,',
      },
      {
        name: 'Git,',
      },
      {
        name: 'Docker,',
      },
      {
        name: 'Latex',
      },
      {
        name: 'SysML',
      },
    ],
  },
  {
    name: 'Frameworks and Packages',
    skills: [
      
      {
        name: 'Scikit-Learn,',
      },
      {
        name: 'Django,',
      },
      {
        name: 'Torch,',
      },
      {
        name: 'React,',
      },
      {
        name: 'Flask',
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'PINN for Battery',
    description: 'Physics Informed Neural Network for Battery Modeling Project',
    url: 'https://github.com/SunWeihao1226/PINN_for_battery',
    image: porfolioImage1,
  },
  {
    title: 'Classification on Smog Ratings of Cars in the Year 2022',
    description: 'Applied Naive Bayesian analysis, KNN, and SVM strategies for model construction and autonomous testing. \nApplied classical statistical methods, including confidence and prediction intervals and their calibration to evaluate models.',
    url: 'https://github.com/SunWeihao1226/STAT447_Project',
    image: porfolioImage2,
  },
  {
    title: 'Credit Card Client Analysis',
    description: 'Applied multiple machine learning models to predict whether a client will likely default or not.',
    url: 'https://github.com/SunWeihao1226/Credit-Card-Client-Dataset-Analysis',
    image: porfolioImage4,
  },
  {

    title: 'Emergency Department Forecast',
    description: 'Team BinAry Flow Jedi project. \n Let\'s Solve it - LSi 2023. Predict the number of patients in emergency departments in BC local hospitals',
    url: 'https://github.com/SunWeihao1226/EDforecast',
    image: porfolioImage3,
  },
  {
    title: 'Building Packages and Data Analysis Pipelines for Zoo Analysis',
    description: 'Implemented and evaluated various machine learning models (k-nearest neighbor, decision tree, support vector machine, and logistic regression) to classify animal specifies based on physical features. Developed a reproducible pipeline for the classification problem, collaborated within a team using GitHub and maintained the Python package, integrated the package using Docker.',
    url: 'https://github.com/SunWeihao1226/Zoo_Analysis',
    image: porfolioImage8,
  },
  {
    title: 'Amusement Park Management System',
    description: 'A database management system designed for amusement park business. The database of the project models the employment, logistics, and ticket services of the park. This project is built on Django framework.',
    url: 'https://github.com/SunWeihao1226/Amusement-Park-Management-System',
    image: porfolioImage9,
  },
  {
    title: 'Harry Potter Themed Text-based Role-playing Game',
    description: 'This is a simple Harry Potter theme turn-based role-playing video game. Players can choose their favourite wizard to fight against evil enemies by choosing a spell to in each round. Different spells have different ATK(attack) to the enemy, and if the HP(health point) of a character less than or equals to zero, then the character dies. Each wizard and enemy also has unique HP and ATK from others, so the difficulty of each battle is distinct. This is a demo version containing three battles.',
    url: 'https://github.com/SunWeihao1226/Harry_Potter_Game',
    image: porfolioImage10,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2024 - May 2025',
    location: 'MEng. in System Engineering',
    title: 'Cornell University ',
    content: <p>Currently taking a Healthcare Pathway.
      <br></br>Coure Courses: Model Based Systems Engineering, Healthcare Data Management, Healthcare Systems in US, Distribution Systems, etc.
    </p>,
    // <p>Major in Statistics, Minor in Data Science.
    //   <br></br> Core courses: Introduction to Probability (A+), Statistical Inference for Data Science (A), 
    //   Machine Learning and Data Mining (A), Methods for Statistical Learning (A), Statistical Modelling for Data Science (A)
    // </p>,
  },
  {
    date: 'September 2019 - May 2024',
    location: 'Bachelor in Science',
    title: 'University of British Columbia ',
    content: <p>Major in Statistics, Minor in Data Science.
      <br></br> Core Courses: Introduction to Probability (A+), Statistical Inference for Data Science (A), 
      Machine Learning and Data Mining (A), Methods for Statistical Learning (A), Statistical Modelling for Data Science (A)
    </p>,
  },
  {
    date: 'September 2015 - June 2018',
    location: 'Secondary school',
    title: 'Qingdao No.2 Middle School',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  
  {
    date: 'June 2024 - August 2024',
    location: 'CSCEC International Construction Co., LTD.',
    title: 'Data Analyst Intern',
    content: (
      <p>
        - Analyzed purchase data for over 50 construction projects, identifying trends and patterns to optimize procurement processes, resulting in a 5% reduction in costs.
        <br></br>
        - Reviewed and verified monthly purchase detail calculations totalling over ¥200 million to ensure accuracy and compliance.
        <br></br>
        - Developed and maintained data dashboards, increasing reporting efficiency by over 30% and supporting decision-making.
        <br></br>
        - Collaborated with cross-functional teams to simplify the data collection and reporting pipeline, reducing processing time by over 25%.
      </p>
    ),
  },
  {
    date: 'May 2022 - August 2022',
    location: 'Triple Eagle Logistics Vancouver',
    title: 'Data Engineer Intern',
    content: (
      <p>
        - Developed, tested, and maintained an internally used automatic bill calculation system.
        <br></br>
        - Updated and maintained the company database; Analyzed the database structure; designed and modified the structure to cater to different use cases.
        <br></br>
        - Designed the Microsoft Power Automate pipeline to Use Excel Online to write Office Script to automatically fill in charging rates, amounts, and dates into the daily form.
        <br></br>
        - Matched and extracted essential information such as tracking numbers and prices from large, noisy data provided by clients for usage by other departments, which improved the working efficiency by over 60%.
      </p>
    ),
  },
  {
    date: 'November 2021 - April 2022',
    location: 'UBC | Supervisor: Maricela Best McKay',
    title: 'Undergraduate Researcher',
    content: (
      <p>
        - Physics Informed Neural Network for Battery Modeling Project.
        <br></br>
        - Solved partial differential equations to improve the current battery models with Physics Informed Neural Network (PINN)
        <br></br>
        - Conducted literature survey on PINN, SPM, and Lithium batteries; Collected, cleansed data, prepared data for data visualization, and applied exploratory analysis.
        <br></br>
        - Developed the Physics Informal Neural Network from scratch, fitted the model to existing data, and analyzed the PINN model.
      </p>
    ),
  },
  {
    date: 'November 2023 - Present',
    location: 'Look4Tutor Inc.',
    title: 'Part-time University Tutor',
    content: (
      <p>
        Tutoring Statistics, Math, Computer Science, and Data Science courses at UBC and SFU.
      </p>
    ),
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'August 2023 - December 2023',
    location: 'Team Project',
    title: 'Emergency Department Forecast',
    content: (
      <p>
        - Collaborated with Borealis AI, a research institute of RBC.
        <br></br>
        - Applied and evaluated advanced machine learning models, including Regularized Regression, Neural Networks, Time Series models, etc., to predict local emergency department demands.
        <br></br>
        - Performed in-depth feature creation by appending climate, holiday, and demography data to enhance analysis.
        <br></br>
        - Kept identifying opportunities for adaption and refinement, and seeking collaboration with local hospitals or public health agencies.
      </p>
    ),
  },
  {
    date: 'January 2023 - April 2023',
    location: 'Team Project',
    title: 'Classification on Smog Ratings of Cars in the Year 2022',
    content: (
      <p>
        - Performed early-stage raw data collection via public channels, including National Statistics Bureau, FRED, etc.
        <br></br>
        - Applied Naive Bayesian analysis, KNN, and SVM strategies for model construction and autonomous testing.        
        <br></br>
        - Applied classical statistical methods, including confidence and prediction intervals and their calibration to evaluate models.
        <br></br>
        - Adopted transformers including SVD and PCA for model improvements.      
      </p>
    ),
  },
  {
    date: 'January 2022 - April 2022',
    location: 'Team Project',
    title: 'Building Packages and Data Analysis Pipelines for Zoo Analysis',
    content: (
      <p>
        - Implemented and evaluated various machine learning models (k-nearest neighbor, decision tree, support vector machine, and logistic regression) to classify animal specifies based on physical features.
        <br></br>
        - Developed a reproducible pipeline for the classification problem, and integrated the pipeline using Docker.        
        <br></br>
        - Developed, maintained, and published Python packages encapsulating commonly used functions in the pipeline to enhance reproducibility.        
      </p>
    ),
  },
  {
    date: 'September 2021 - December 2021',
    location: 'Team Project',
    title: 'Amusement Park Management System',
    content: (
      <p>
        - Developed an full stack application from scratch using Django framework and SQLite.
        <br></br>
        - Implemented a database modelling functions on services, employment management, and amusement facilities.       
        <br></br>
        - Performed database structure analysis, and normalized the relations among tables to reduce redundancy. 
        <br></br>
        - Designed the user interface of the application with the Bootstrap template.       
      </p>
    ),
  },
  {
    date: 'May 2020 - August 2020',
    location: 'Personal Project',
    title: 'Harry Potter Themed Text-based Role-playing Game',
    content: (
      <p>
        - Developed in the progress of both console-based and GUI-based versions and maintained simple transitions.
        <br></br>
        - A turn-based RPG where players engage in battles using a selection of spells, each with unique attack values, against progressively challenging enemies, enhancing the immersive Harry Potter-themed experience.
        <br></br>
        - Implemented a dynamic archive management system allowing players to choose from various wizards, each with distinct HP and ATK stats, adding strategic depth to battles and ensuring a varied gaming experience across different sessions.  
        <br></br>
        - Included a well-designed interface, stories, characters and portraits.   
      </p>
    ),
  }
];
/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Sean, Manager of TripleEagle Logistics Vancouver',
      text: 'Throughout his time in my department, Mr. Sun has consistently demonstrated the highest level of dedication and competence to the work and the team.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Raquel, Machine Learning Researcher at Borealis AI, Project Supervisor',
      text: 'Mr. Sun along with the team BinAry Flow Jedi put great efforts into their Let\'s Solve It project, and I am really impressed with the results they have achieved.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'MBTI Personalities',
      text: 'ISTJ is a personality type with the Introverted, Observant, Thinking, and Judging traits. These people tend to be reserved yet willful, with a rational outlook on life. They compose their actions carefully and carry them out with methodical purpose.',
      image: 'https://i.pinimg.com/474x/bd/80/22/bd80229dd7d6290c9b2b98e6326a5b52.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'You are welcome to contact me through any of the following platforms.',
  items: [
    {
      type: ContactType.Email,
      text: 'ws493@cornell.edu',
      href: 'mailto:ws493@cornell.edu',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://maps.app.goo.gl/MSXXy4dC7P6ZTcaV6',
    },
    {
      type: ContactType.Instagram,
      text: '@berensun1226',
      href: 'https://www.instagram.com/berensun1226/',
    },
    {
      type: ContactType.Github,
      text: 'SunWeihao1226',
      href: 'https://github.com/SunWeihao1226',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/SunWeihao1226'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/weihaosun1226/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/berensun1226/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/dxlswh'},
];
