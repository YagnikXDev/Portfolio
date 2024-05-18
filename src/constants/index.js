
import {
    
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    react,
    summiz,
    tailwindcss,
    typescript,
    Python,
    TensorFlowLogo,
    Pandas,
    librosa
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl:Python,
        name: "python",
        type: "machine",
    },
    {
        imageUrl:librosa,
        name: "librosaLib",
        type: "machine",
    },
    {
        imageUrl:TensorFlowLogo,
        name: "TensorFlow",
        type: "machine",
    },
    {
        imageUrl:Pandas,
        name: "panda",
        type: "machine",
    }

];

export const experiences = [
    {
        title: "Curious Blog",
        company_name: "Blog Website",
        icon:nodejs,
        iconBg: "#accbe1",
        
        points: [
            'Developed a blog website',
            '"Curious Blog: A vibrant digital space where curiosity meets creativity. Explore intriguing topics, dive into captivating narratives, and join a community of thinkers and learners. Unleash your curiosity with us!"'
        ],
        link:'https://github.com/YagnikXDev/8BW_Blog_Platform',
    },
    {
        title: "AllNewFaces",
        company_name: "Social Media Website",
        icon: express,
        iconBg: "#fbc3bc",
        points: [
            'Built a Social media website like instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
            'AllNewFaces: Experience the excitement of social connection with our Instagram-inspired platform. Share moments, discover new faces, and create lasting connections in a dynamic and user-friendly environment. Join AllNewFaces and explore a world of endless possibilities.'
        ],
        link:'https://github.com/YagnikXDev/8BW_SocialMediaPlatform',
    },
    {
        title: "Liver Disease Prediction",
        company_name: "Disease Prediction Model",
        icon:Python,
        iconBg: "#b7e4c7",
        points: [
            'Developed a robust machine learning model for predicting liver disease risk, leveraging comprehensive patient data including medical history, lifestyle factors, and diagnostic tests. Our model demonstrates high accuracy in early detection, aiding clinicians in timely intervention and personalized patient care.',
            'We employed a state-of-the-art ensemble learning approach, combining multiple machine learning algorithms such as Random Forest, Gradient Boosting, and Logistic Regression',
            'Through rigorous cross-validation and hyperparameter tuning, our algorithm achieves superior performance in liver disease prediction, providing valuable insights for healthcare professionals.'
        ],
        link:'https://github.com/YagnikXDev/Liver_Disease_Prediction',
    },
    {
        title: "PassOp",
        company_name: "Password Manager",
        icon: nextjs,
        iconBg: "#a2d2ff",
        points: [
            'Crafted a robust password manager using the MERN stack (MongoDB, Express.js, React, Node.js) for seamless development and deployment',
            'Our solution prioritizes security through encryption techniques while offering users a user-friendly interface for managing password',
        ],
        link:'https://github.com/YagnikXDev/Password_Manager',
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YagnikXDev',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ishank-yagnik/',
    }
];

