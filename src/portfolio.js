/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mohid Rattu",
  title: "Hi, I'm Mohid",
  subTitle: emoji(
    "Electrical and Computer Engineering sophomore at Carnegie Mellon University with a knack for C, Java, and Python. Passionate about software development, from robotics to building everyday applications."
  ),
  resumeLink: "https://drive.google.com/file/d/1JUoJz8ByTBn4XYYx5Zb36eAkC5z_R_TT/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mohidtheman3",
  linkedin: "https://www.linkedin.com/in/mohid-rattu-ba0258248/",
  gmail: "mohidrattu3@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "SOPHOMORE COLLEGE STUDENT PURSUING ELECTRICAL AND COMPUTER ENGINEERING",
  skills: [
    emoji(
      "⚡ Develop interactive Python Scripts to solve everyday problems"
    ),
    emoji("⚡ Create custom electronics for everyday use"),
    emoji(
      "⚡ Display interactive design for Web Applications"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML/CSS",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "Unqork",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "Fusion 360",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Solidworks",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "Ultimaker Cura",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "PrusaSlicer",
      fontAwesomeClassname: "fas fa-cube"
    },
    {
      skillName: "WPILib",
      fontAwesomeClassname: "fas fa-cube"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Carnegie Mellon University",
      logo: require("./assets/images/CMULogo.jpg"),
      subHeader: "Bachelors of Science in Electrical and Computer Engineering",
      duration: "August 2023 - May 2027",
      desc: "Completed Coursework: Introduction to Electrical & Computer Engineering, Principles of Imperative Computation, Concepts of Mathematics, Rapid Prototyping Technologies",
      //descBullets: [
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      //]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Lead Programmer",
      company: "First Robotics Competition",
      companylogo: require("./assets/images/first.png"),
      date: "September 2019 – June 2023",
      location: "Ronkonkoma, NY",
      descBullets: [
        "Led the programming team in the First Robotics Competition, guiding the development of autonomous & teleoperated robot functionalities using GitHub for version control.",
        "Collaborated with team members to integrate hardware components with software solutions in Java, ensuring seamless functionality during competition matches.",
        "Contributed to strategy sessions, providing technical insights to develop winning game plans & improve team performance, earning awards in regional competitions."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Unqork",
      date: "June 2021 – August 2021",
      companylogo: require("./assets/images/unqork.png"),
      location: "New York, NY",
      descBullets: [
        "Collaborated with the engineering team to gain insights into web development processes & best practices.", 
        "Engaged in Quality Assurance (QA) testing of the No-Code Software, with a focus on web applications & websites.", 
        "Successfully completed the Unqork Novice Developer certification, demonstrating expertise in web development."
      ]
    },
    {
      role: "Computer Science Instructor",
      company: "Coding Minds Academy",
      date: "June 2022 – April 2023",
      companylogo:require("./assets/images/codingminds.jpg"),
      location: "Irvine, CA",
      descBullets:[
        "Conducted one-on-one teaching sessions to students nationwide, specializing in languages such as Python & Java for competition in USACO.",
        "Constantly update knowledge & skills in both teaching techniques (Replit & Leetcode) & programming languages to deliver high-quality education to students.", 
        "Demonstrated a strong ability to adapt teaching style to suit individual student needs through one-on-one sessions, resulting in improved student comprehension & performance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some fun projects I did while pursuing my hobbies!",
  projects: [
    {
      projectName: "Resume Failed 3D Print Script | Python",
      projectDesc: "Implemented functionality to parse 3D Printer G-code files & enabled users to input essential parameters. Designed algorithms to analyze the G-code file & other inputs to precisely continue printing from the point of failure. Developed an intuitive command-line interface allowing users to interact seamlessly with the script, providing clear instructions and feedback throughout the editing process.",
      image: require("./assets/images/Python-logo-notext.svg.png"),
      date: "June 2024"
    },
    {
      projectName: "Custom Mechanical Keyboard | Fusion 360, Visual Studio, C++, 3D Printing, Soldering",
      projectDesc: "Designed & assembled a personalized mechanical keyboard using Teensy micro-controller & soldering. Employed 3D printing for casing, enhancing both functionality & customizability. Designed & programmed a customized firmware for a mechanical keyboard, utilizing C++.",
      image: require("./assets/images/TEENSY.png"),
      date: "December 2023"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
// const achievementSection = {
//   title: emoji("Achievements And Certifications 🏆 "),
//   subtitle:
//     "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

//   achievementsCards: [
//     {
//       title: "Google Code-In Finalist",
//       subtitle:
//         "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
//       image: require("./assets/images/codeInLogo.webp"),
//       imageAlt: "Google Code-In Logo",
//       footerLink: [
//         {
//           name: "Certification",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
//         },
//         {
//           name: "Award Letter",
//           url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
//         },
//         {
//           name: "Google Code-in Blog",
//           url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
//         }
//       ]
//     },
//     {
//       title: "Google Assistant Action",
//       subtitle:
//         "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
//       image: require("./assets/images/googleAssistantLogo.webp"),
//       imageAlt: "Google Assistant Action Logo",
//       footerLink: [
//         {
//           name: "View Google Assistant Action",
//           url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
//         }
//       ]
//     },

//     {
//       title: "PWA Web App Developer",
//       subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
//       image: require("./assets/images/pwaLogo.webp"),
//       imageAlt: "PWA Logo",
//       footerLink: [
//         {name: "Certification", url: ""},
//         {
//           name: "Final Project",
//           url: "https://pakistan-olx-1.firebaseapp.com/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done!",
  achievementsCards: [
    {
      title: "5G Technologies Certification from Qualcomm",
      subtitle: "Certified in an overview of 5G, how it works, and how it is transforming the way the world operates.",
      image: require("./assets/images/Qualcomm5g.jpg"),
      imageAlt: "Certificate",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1Dl21UqKrAy0IidwpF3jkkGJhLhwn1YWT/view?usp=sharing"
        }
      ]
    },
    {
      title: "Unqork Novice Configurator",
      subtitle: "Demonstrated proficient knowledge of basic Unqork building blocks, workflows, data structures, and APIs.",
      image: require("./assets/images/Novice-Configurator.png"),
      imageAlt: "Unqork Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/b94d262a-383d-46e8-9836-134609073961/linked_in_profile"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

//Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My inbox is open for all.",
  //number: "+1-6316801910",
  //location: "Ronkonkoma, NY",
  email_address: "mohidrattu3@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
