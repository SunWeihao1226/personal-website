import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  // FlagIcon,
  // MapIcon,
  // SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
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
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an undergraduate student at University of British Columbia. I am currently in my final year of study, and I
        will be graduating in May 2024. My major of study is Statistics, and I am also pursuing a Minor degree in Data Science.
        I am open to Data Analytics or Machine Learning developer works.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me skiing or snowboarding on Cypress or Grouse Mountain, hiking, or cycling in
        beautiful Great Vancouver.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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
  description: `I am an undergraduate student at the University of British Columbia. My major of study is Statistics, 
  and I am also pursuing a Minor degree in Data Science. My interest area includes Machine Learning and Data Engineering. 
  My previous internship as a Data Engineer in TripleEagle Logistics Vancouver involved developing internally used billing 
  calculating systems and maintaining and updating the company’s database. I also had a research experience involving developing 
  a Physics-Informed Neural Network (PINN) to solve partial differential equations in battery modelling. 
  My side projects are mostly about developing, tunning, and evaluating machine learning models and performing analysis on 
  large datasets.`,
  
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
        name: 'Racket,',
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
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'September 2019 - May 2024',
    location: 'Bachelor in Science',
    title: 'University of British Columbia ',
    content: <p>Major in Statistics, Minor in Data Science.
      <br></br> Core courses: Introduction to Probability (A+), Statistical Inference for Data Science (A), 
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
    date: 'November 2023 - Present',
    location: 'Look4Tutor Inc.',
    title: 'Part-time Tutor',
    content: (
      <p>
        Tutoring Statistics, Math, Computer Science, and Data Science courses at UBC and SFU.
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
    title: 'REX Undergraduate Researcher',
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
  }
];

export const projects: TimelineItem[] = [
  {
    date: 'August 2023 - Present',
    location: 'Look4Tutor Inc.',
    title: 'Part-time Tutor',
    content: (
      <p>
        Tutoring Statistics, Math, Computer Science, and Data Science courses at UBC and SFU.
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
    title: 'REX Undergraduate Researcher',
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
  }
];
/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'sweihao@student.ubc.ca',
      href: 'mailto:sweihao@student.ubc.ca',
    },
    {
      type: ContactType.Location,
      text: 'Vancouver BC, Canada',
      href: 'https://maps.app.goo.gl/MSXXy4dC7P6ZTcaV6',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/berensun1226/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
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
