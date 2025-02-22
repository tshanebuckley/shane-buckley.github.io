import { 
  ShipIcon,
  Brain,
  AtomIcon,
  SandwichIcon,
  GlassesIcon,
  GraduationCapIcon,
  NotebookIcon
} from 'lucide-react';

const overview = `
I'm a technology professional that loves to explore new and different programming technologies, languages, and strategies in my free time. I have a passion for working on scientific applications in the fields of bioinformatics and chemistry.
`

export function Overview () {
  return overview;
};

export function GetImg(path) {
  let retVal = require('@site/static/' + path).default;
  if (retVal) {
    return retVal;
  }
  return path;
}

const events = [
  {
    startDate: "January 2025",
    endDate: "Present",
    title: "Software Engineer",
    description: `
    After leaving my job working for the Bettis Atomic Laboratory, I am currently taking a short break between positions. I'm focusing on learning new skills, sharpening old ones, and applying to graduate school.
    If you think I may be a match your any open positions at your company, lab, or non-profit then drop me an email!
    `,
    icon: GlassesIcon,
    cards: [
      {
        title: "NGS Data Analysis",
        image: GetImg('img/ngs.jpg'),
        description: "I've been working through this textbook to gain more experience in Bioinformatics."
      },
      {
        title: "React",
        image: GetImg('img/react.png'),
        description: "Decided to learn more about front-end development, so I chose React for the ecosystem and popularity."
      },
      {
        title: "Typescript/Javascript",
        image: GetImg('img/ts-and-js.png'),
        description: "As part of building this site and learning React, I gained some experience using Typescript and Javascript."
      },
      {
        title: "Tailwind",
        image: GetImg('img/tailwind.jpg'),
        description: "Tailwind seems very popular for styling website with CSS, so I included this as well."
      },
      {
        title: "Docusaurus",
        image: GetImg('img/docusaurus.png'),
        description: "This entire site is generated using Docusaurus as I wanted to include tutorial/blog sections."
      },
      {
        title: "Rust",
        image: GetImg('img/ferris.png'),
        description: "A few months ago, I completed rustlings and am spending this time getting more comfortable with the language."
      },
      {
        title: "Web Assembly",
        image: GetImg('img/wasi.png'),
        description: "While a cool feature for web development, I am mostly interested in wasi and the component model."
      },
    ]
  },
  {
    startDate: "January 2022",
    endDate: "January 2025",
    title: "Software Engineer",
    company: "McFarland Technology, Inc.",
    description: `
    I worked as a subcontractor for the Bettis Atomic Laboratory. Here, I utilized C#/.NET to create desktop applications for chemisty operations aboard submarines and aircraft carriers.
    These applications were responsible for helping facilitate the day-to-day work tasks of sailors responsible for reactor and steam generator chemistry,
    `,
    icon: AtomIcon,
    cards: [
      {
        title: "C#/.NET",
        image: GetImg('img/csharp.png'),
        description: "C# was the language we used to develop these applications and I've become very proficient with the language in 3 years of using it."
      },
      {
        title: "Entity Framework",
        image: GetImg('img/efcore.png'),
        description: "I integrated EF into our application to allow database migrations to be seamless and to manage our schema as C# code."
      },
      {
        title: "Dapper",
        image: GetImg('img/dapper.png'),
        description: "I used Dapper as the foundation for creating a basic SQL query builder to reduce the amount of raw SQL we had to write."
      },
      {
        title: "SQL",
        image: GetImg('img/sql.png'),
        description: "While I primarily used MS Access here, I am also familiar with SQLite, MS SQL Server, and Postgres."
      },
      {
        title: "ML.NET",
        image: GetImg('img/mlnet.png'),
        description: "I used ML.NET's implementation of the Apache Arrow spec to recreate much of the dplyr R package in C#. This gave us a convenient API for working with time series data."
      },
      {
        title: "Domain-Driven Design",
        image: GetImg('img/ddd.jpg'),
        description: "I read the Eric Evans book on the subject and implemented the foundations of DDD in our product."
      },
      {
        title: "Design Patterns",
        image: GetImg('img/design_patterns.jpg'),
        description: "I gained experience implemeneting varies design patterns such as factories, builders, repositories, proxies, etc."
      },
    ]
  },
  {
    startDate: "August 2020",
    endDate: "July 2022",
    title: "Research Programmer",
    company: "UPMC Western Psych Hospital",
    description: `
    I performed a variety of task supporting the Decision, Neuroscience, and Psychopathology Lab at the University of Pittsburgh. I primarily worked with Python and R
    to deliver containerized pipelines for preprocessong fMRI data. These pipelines ran on the University's HPC Slurm cluster.
    `,
    icon: Brain,
    cards: [
      {
        title: "Slurm",
        image: GetImg('img/slurm-logo.png'),
        description: "I used Slurm to execute data preprocessong pipelines in parallel across participant fMRI data."
      },
      {
        title: "Docker",
        image: GetImg('img/docker.png'),
        description: "I used docker to create custom images to be run on the HPC cluster."
      },
      {
        title: "Apptainer",
        image: GetImg('img/apptainer.png'),
        description: "I used docker images to create apptainer containers, as apptainer is designed for use in HPC systems."
      },
      {
        title: "Python",
        image: GetImg('img/python.png'),
        description: "I used python for general data management tasks and cli development."
      },
      {
        title: "R",
        image: GetImg('img/R_logo.png'),
        description: "I used R, mainly through the dplyr package, to clean and organize research data."
      },
      {
        title: "Bash",
        image: GetImg('img/bash.png'),
        description: "Bash is essentially a pre-requisite for working in any UNIX environment."
      },
      {
        title: "Conda",
        image: GetImg('img/anaconda.png'),
        description: "I used conda to create virtual environments that I could share across my local machine and the HPC cluster."
      },
      {
        title: "XNAT",
        image: GetImg('img/xnat.png'),
        description: "XNAT was the imaging database that I had to fetch our data from. I created scripts to automate this ingress of data."
      },
      {
        title: "REDCap",
        image: GetImg('img/redcap.jpg'),
        description: "REDCap is how we stored our clinical data. I had to get familiar with REDCap to help create QC checks to align fMRI data with clinical data."
      },
      {
        title: "fMRIPrep",
        image: GetImg('img/nipreps_brain.png'),
        description: "Is a standardized fMRI preprocessing tool that it was my responsibility to learn and implement for the lab on the HPC."
      },
      {
        title: "BIDS",
        image: GetImg('img/bids.png'),
        description: "Is a standard for organizing neuroimaging data that I had to extend for our data sets and convert our data to for use with fMRIPrep."
      },
    ]
  },
  {
    startDate: "October 2018",
    endDate: "April 2021",
    title: "Shift Manager",
    company: "Primanti Bros. Restaurant and Bar",
    description: `
    After working for a few other restaurants previously, I was hired as a team member and then soon promoted to a shift manager for the local Pittsburgh chain's
    Oakland location. I also recieved the 'Player of the Year' award in 2020 during the Covid-19 pandemic.
    `,
    icon: SandwichIcon,
    cards: [
      {
        title: "Oakland Primanti's",
        image: GetImg('img/oakland_pbros.jpg'),
        description: "It was pretty fun getting to work at the Oakland location on Pitt's campus."
      },
      {
        title: "ServSafe",
        image: GetImg('img/servsafe.jpg'),
        description: "While working here, I had to keep a ServSafe certification."
      },
      {
        title: '"Almost Famous"',
        image: GetImg('img/pbros_sandwhich.jpg'),
        description: "Primanti's is well known for their piled high sandwhiches including fries and coleslaw in the sandwhich rather than on the side."
      },
    ]
  },
  {
    startDate: "July 2020",
    endDate: "August 2018",
    title: "Bachelor's in Bioinformatics",
    company: "University of Pittsburgh",
    description: `
    I graduated from the University of Pittsburgh's Kenneth P. Dietrich School of Arts & Sciences with a Bachelor's of Science in Bioinformatics in 2020.
    I completed classes in Algorithms, Genetics, and Machine Learning. I gained some experience in working with the Protein Data Bank as well.
    `,
    icon: GraduationCapIcon,
    cards: [
      {
        title: "Machine Learning",
        image: GetImg('img/ml.jpg'),
        description: "I took a machine learning course. Here, I learned the basic concepts like supervised vs unsupervised learning and parametric vs non-parametric models."
      },
      {
        title: "MATLAB",
        image: GetImg('img/matlab.png'),
        description: "As part of my machine learning class, I was introduced to MATLAB programming."
      },
      {
        title: "Genetics",
        image: GetImg('img/genetics.jpg'),
        description: "As a bioniformatics major, I had to learn about biology and chemistry along with taking a class on genetics."
      },
      {
        title: "Test-Driven Development",
        image: GetImg('img/tdd.png'),
        description: "I took a class on software testing where one of the main topics we covered was TDD using the Ruby language."
      },
      {
        title: "Protein Data Bank",
        image: GetImg('img/pdb.png'),
        description: "I did some work pulling and querying data from the PDB."
      },
    ]
  },
  {
    startDate: "May 2018",
    endDate: "July 2018",
    title: "Sailor Recruit",
    company: "United States Navy",
    description: `
    As the son of a Chief, I always wanted the opportunity to work for the US Navy. This led me to enlist into the Naval Nuclear Propulsion Program (NNPP).
    Sadly, after enlisting and making it through most of bootcamp, I was released from the program due to deficient color vision. Fortunately, my short experience
    here helped lead to my employment working for the NNPP from 2022-2025.
    `,
    icon: ShipIcon,
    cards: [
      {
        title: "Great Lakes",
        image: GetImg('img/great_lakes.jpg'),
        description: 'I got to experience most of bootcamp minus the last few modules and graduation. After talking it over with my family, I returned home to finish college.'
      },
    ]
  },
  {
    startDate: "August 2014",
    endDate: "April 2018",
    title: "Associates's in Chemistry, Math, and CS",
    company: "Duquesne University",
    description: `
    I began my college experience as a student at Duquesne University where I was studying biochemistry and computer science. I completed my studies
    up to an Associate's degree in the subjects of chemistry, math, and computer science.
    `,
    icon: NotebookIcon,
    cards: [
      {
        title: "Java",
        image: GetImg('img/java.png'),
        description: "This was the language I used in my introduction to programming course."
      },
      {
        title: "C++",
        image: GetImg('img/cpp.png'),
        description: "I used for two semesters of data structures and algorithms courses."
      },
      {
        title: "Octave",
        image: GetImg('img/octave.png'),
        description: "I was introduces to octave as a free alternative to MATLAB in my chemistry classes."
      },
    ]
  }
]

export function LifeEvents () {
  return events;
};