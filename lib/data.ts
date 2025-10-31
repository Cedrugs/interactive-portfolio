import { NeofetchData, ExperienceData } from './types';

export const neofetchData: NeofetchData = {
    username: 'guest',
    hostname: 'cedric-arch',
    os: 'Arch Linux x86_64',
    shell: 'zsh 5.9',
    terminal: 'web-terminal',
    cpu: 'AMD EPYC™ 9965',
    memory: '259 MiB / 122070 MiB',
    uptime: '96h 32m 16s',
};

export const experienceData: ExperienceData = {
    'PT DEWAWEB': [
        {
            position: 'Junior Software Engineer',
            period: 'Jul 2025 - Present',
            description: 'Skills: Next.js · Docker · Gitlab · Git · FastAPI · Go (Programming Language) · OpenAI API · Deepseek API · Gemini API · S3 · Single Sign-On (SSO) · Text-to-Image Generation · PostgreSQL · Prisma ORM',
        }
    ],
    'UREEKA BINUS': [
        {
            position: 'Member',
            period: 'Mar 2025 - Present',
            description: '',
        }
    ],
    'Binus Student Learning Community': [
        {
            position: 'IT Development Activist',
            period: 'Dec 2024 - Present',
            description: 'Skills: Figma · JavaScript · HTML · Cascading Style Sheets (CSS)',
        },
        {
            position: 'Member',
            period: 'Sep 2024 - Jan 2025',
            description: 'Created a mock website based on a provided Figma design using barebone HTML and CSS. This project aimed to demonstrate my web development skills and secure a position within the BSLC Activist selection.',
        }
    ],
    'Bina Nusantara Computer Club': [
        {
            position: 'Research And Development Activist',
            period: 'May 2025 - Oct 2025',
            description: '',
        },
        {
            position: 'Learning and Training Activist',
            period: 'Oct 2024 - Jul 2025',
            description: 'Active member of BNCC 36, contributing to initiatives that promote technology education and community engagement. Participated in organizing events, workshops, and collaborations to inspire innovation and skill development among members. Passionate about fostering a culture of learning and growth in the tech community.',
        },
        {
            position: 'Member',
            period: 'Sep 2024 - Jul 2025',
            description: 'Participated in the Frontend Learning and Training (LnT) class, gaining hands-on experience in React.js, Tailwind CSS, JavaScript, Express.js, and Git. This involvement enhanced my frontend development skills and fostered collaboration within the tech community.',
        }
    ],
    'DewaVPS': [
        {
            position: 'Product/IT Support',
            period: 'Apr 2025 - Jul 2025',
            description: '',
        }
    ],
    'Fiverr Gigs': [
        {
            position: 'Full Stack Developer',
            period: 'Sep 2023 - Jul 2025',
            description: 'Proficient in HTML, CSS, JavaScript, and React, with expertise in deploying applications using Nginx, Apache, and similar tools. Experienced in backend technologies like Node.js, Express, and database systems such as MySQL and MongoDB. Skilled in version control with Git/GitHub, API integration, responsive design, and ensuring cross-browser compatibility. Familiar with containerization tools like Docker and CI/CD pipelines for streamlined deployments.',
        },
        {
            position: 'Back End Developer',
            period: 'May 2021 - Sep 2023',
            description: 'Proficient in discord.py, hikari, and other Python libraries, with experience developing 4+ advanced Discord bots. Specialized in creating bots with complex functionality, including moderation, custom commands, APIs, and user engagement features. Skilled in optimizing performance and delivering seamless user experiences.',
        }
    ],
    'Bina Nusantara IT Division': [
        {
            position: 'Training IT Bootcamp Advance',
            period: 'Nov 2024 - Feb 2025',
            description: 'Developed a package tracking website using ReactJS for the frontend and .NET ASP for the backend, with MySQL database integration. Emphasized functionality and user experience while collaborating in an agile team environment.',
        },
        {
            position: 'Training IT Bootcamp',
            period: 'Oct 2024 - Nov 2024',
            description: 'Developed a car rental website using .NET MVC with SQL for order management and tracking. Designed the frontend with HTML/CSS (no frameworks) and implemented efficient database integration. Showcased end-to-end development skills and a focus on functionality and user experience.',
        }
    ]
};

export const techStackData = {
    languages: ['C', 'C#', 'C++', 'HTML5', 'JavaScript', 'Markdown', 'PHP', 'Python', 'TypeScript'],
    frontend: ['Next JS', 'React', 'Vite', 'Vue.js'],
    backend: ['.Net', 'Django', 'Express.js', 'Filament', 'Flask', 'Laravel', 'MongoDB', 'MySQL', 'Postgres', 'Redis', 'SQLite'],
    tools: ['Amazon S3', 'LeetCode', 'Alibaba Cloud', 'AWS', 'Azure', 'DigitalOcean', 'Google Cloud', 'Vultr', 'Visual Studio Code', 'Matplotlib', 'NumPy', 'Pandas', 'PyTorch', 'Microsoft Office', 'iOS', 'macOS', 'Arch Linux', 'Windows', 'Git', 'GitHub', 'Docker', 'Crowdin', 'FFmpeg', 'Notion'],
};

export const aboutData = {
    name: 'Full-Stack Developer',
    tagline: 'Building useful technologies',
    bio: `I’m a 20-year-old fullstack developer and second-year Computer Science student at BINUS University. 
Right now I'm leveling up my skills in backend dev, cloud infrastructure, and a dash of machine learning on the side. 
My current job is Junior Software Engineer at Dewaweb.

What I do:

- Build fullstack apps using Next.js, React, PostgreSQL, and Prisma
- Automate workflows with CI/CD pipelines, and containerize projects with Docker
- Handle deployment like a champ — from VPS to DevOps best practices
- Develop tools like YouTube downloaders, GitHub streak injectors, and other useful things!
- Craft AI-powered bots and scripts using Python, OpenAI, and other wild APIs
`,
};

export const projectsData = [
    {
        name: 'pelajarin.ai',
        description: 'AI driven online learning platform for students in Indonesia (K-12 - University level)',
        tech: ['Next.js', 'Xendit', 'PostgreSQL', 'Tailwind', 'Docker', 'Prisma', 'Redis', 'Pgvector', 'Generative AI'],
        link: 'https://pelajarin.ai',
    },
    {
        name: 'streakinator',
        description: 'A simple, interactive Go utility that creates backdated, empty Git commits to populate your GitHub contribution graph.',
        tech: ['Go'],
        link: 'https://github.com/Cedrugs/streakinator',
    },
    {
        name: 'GiziTrack',
        description: 'User-friendly application for GiziTrack webapp, offering intuitive navigation, real-time notifications, and an interactive dashboard for tracking meal delivery.',
        tech: ['Laravel', 'MariaDB', 'TypeScript', 'Docker', 'React', 'Vite', 'TailwindCSS', 'Nginx'],
        link: 'https://github.com/Cedrugs/gizitrack',
    },
    {
        name: 'Chatguard',
        description: 'Toxic language detection using a fine‑tuned XLM‑RoBERTa',
        tech: ['Scikit-learn', 'Pytorch', 'FastAPI', 'Docker', 'Gradio'],
        link: 'https://github.com/Cedrugs/Chatguard-API',
    },
];

export const contactData = {
    email: 'contact@samuelcedric.com',
    github: 'github.com/Cedrugs',
    linkedin: 'linkedin.com/in/samuel-cedric',
    twitter: 'twitter.com/Cedrugs_',
    website: 'samuelcedric.com',
};
