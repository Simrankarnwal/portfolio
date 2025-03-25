import project1 from "../assets/Image1.png";
import project2 from "../assets/Image2.png";
import project3 from "../assets/Image3.png";
import project4 from "../assets/Image4.png";
import project5 from "../assets/Image5.png";
import project6 from "../assets/Image6.png";
import project7 from "../assets/Image.png";


export const HERO_CONTENT = `I am a passionate FrontEnd Developer with over a year of hands-on experience,
 specializing in creating fully responsive web applications that function seamlessly across all screen sizes.
  My expertise lies in front-end technologies such as HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, and React.
   I strive to deliver innovative, scalable solutions that enhance user experiences and contribute to business
   growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile FrontEnd Developer with a passion for creating efficient
 and user-friendly web applications. With over a year of professional experience, I have honed my skills in front-end
  technologies, including HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, and React. Currently, I am working on a live
   real estate project that focuses on buying, selling, and renting homes. My journey in web development began with a 
   deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt 
   to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality,
    fully responsive solutions across all screen sizes.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "100Acress.com",
    description: `I am currently working on a live project using React, focusing on creating a dynamic and responsive 
    web application. This project involves building features for a real estate platform where users can buy, sell, 
    and rent homes. I am responsible for developing interactive UI components, ensuring seamless user experience 
    across devices, and implementing efficient state management with React hooks. Additionally, I collaborate with
     backend developers to integrate APIs, handle data fetching, and manage user authentication. This live project 
     has been a great opportunity to apply my knowledge in real-world scenarios and further enhance my frontend
      development skills.`,
    technologies: ["React.js", "JavaScript", "TailwindCss", "Bootstrap"]
  },
  {
    year: "Jun2022 - Nov2023",
    role: "FrontEnd Developer",
    company: "Milestone",
    description: `As a frontend developer intern, I'll gain hands-on experience in designing responsive
     and user-friendly web applications. I'll work with technologies like HTML, CSS, JavaScript,
      and frameworks like React. Collaborating with senior developers, you'll enhance your skills in UI/UX,
       cross-browser compatibility, and modern development practices while contributing to real-world projects.
`,
    technologies: ["React.js", "JavaScript"]
  },

 
];

export const PROJECTS = [
  {
    title: "MI-Store Clone Website",
    image: project1,
    description:
      "In this project, I have built a Mi Store Clone Website. It offers a fast and interactive interface to search, browse and purchase all Mi products including phones tablets, tv, fitness watches, and home accessories, I have used the slider to make this website more functional and practical.",
    technologies: [ "ReactJs", "JavaScript","Bootstrap"],
  },
  {
    title: "Restaurant Landing Page",
    image: project2,
    description:
      "In this project, I'm using React for dynamic, component-based structure and Tailwind CSS for efficient and responsive styling. It includes sections like a hero banner with  dishes, customer testimonials, and contact information, all optimized for various screen sizes, while React enables smooth navigation and interactivity.",
    technologies: [ "ReactJs", "JavaScript","TailwindCss"],
  },
  {
    title: "Technical Skills",
    image: project3,
    description:
      "This project consists of four main sections: Home, About, Services, and Contact. Each section is designed with a smooth user experience. The Home section introduces the purpose of the website, the About section highlights key details and background, Services showcases offerings, and Contact provides an easy way for users to get in touch.",
    technologies: [ "ReactJs", "JavaScript","TailwindCss"],
  },
  {
    title: "Quad-B Tech Assessment",
    image: project4,
    description:
      "In this project, I'm using React to fetch data from an API using the fetch method. Once the data is retrieved, I store it in a state variable using the useState hook, allowing me to dynamically render the API data in the component. Error handling is also implemented to catch and display any potential issues during the API call.",
    technologies: [ "ReactJs", "JavaScript","Bootstrap",],
  },
  {
    title: "Amazon Clone",
    image: project5,
    description:
      "In this project, I have built Amazon clone UI design using React and Tailwind CSS, reusable components such as a Header (with search bar, cart), Product Listings (product cards with images, titles, prices), and Footer (containing company info and links). This project create responsive, mobile-first layouts, smooth rendering of dynamic content.",
    technologies: [ "ReactJs", "TailwindCss"],
  },

  {
    title: "PositiveUs Marketing Agency",
    image: project6,
    description:
      "To build a React project using Tailwind CSS with beautiful card designs enhanced by AOS, To add animations, wrap each card with AOS attributes, and configure them with delay or duration to create dynamic effects as users scroll through the page. These animations will bring an elegant, interactive project, enhancing user experience by making the design visually engaging and smooth.",
    technologies: [ "ReactJs","TailwindCss"],
  },
  
  {
    title: "Uni-Chat App",
    image: project7,
    description:
    "In this project, real-time communication between two browsers using a React application and Firebase, create a chat component that establishes a connection to Firestore, allowing users to send and receive messages. This ensures that when one user sends a message, and identify who is sending messages and providing a seamless chatting experience across browsers.",
technologies : [ "ReactJs", "JavaScript","Bootstrap",'Firebase'],
  }  
];

export const CONTACT = {
 
  email: "simrankarnwal111@gmail.com",
};
