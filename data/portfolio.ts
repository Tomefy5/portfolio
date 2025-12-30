export const portfolioData = {
    personal: {
        name: "{{NAME}}",
        title: "Full-Stack Developer & Creative Technologist",
        email: "{{EMAIL}}",
        location: "Paris, France",
        bio: "Passionate about building the future of the web with 3D, AI, and scalable architectures. I turn complex data into immersive experiences.",
        avatar: "/profile-new.jpg",
        social: {
            github: "{{GITHUB}}",
            linkedin: "{{LINKEDIN}}",
            twitter: "{{TWITTER}}",
        },
    },
    projects: [
        {
            id: "antoka",
            title: "Antoka",
            stack: ["Next.js", "OpenAI", "Supabase"],
            description: "AI-powered legal contract generation platform reducing drafting time by 80%.",
            image: "",
            links: { demo: "#", github: "#" },
            category: "AI",
            metrics: {
                value: "80%",
                label: "Time Saved",
            }
        },
        {
            id: "smart-garden",
            title: "SmartGarden",
            stack: ["IoT", "React Native", "Firebase"],
            description: "Real-time monitoring system for urban gardening with automated irrigation.",
            image: "",
            links: { demo: "#", github: "#" },
            category: "IoT",
            metrics: {
                value: "500+",
                label: "Active Users",
            }
        },
        {
            id: "generic-recommender",
            title: "GenericRecommender",
            stack: ["Python", "TensorFlow", "FastAPI"],
            description: "Scalable recommendation engine for e-commerce with real-time feedback loop.",
            image: "",
            links: { demo: "#", github: "#" },
            category: "Data",
            metrics: {
                value: "99.9%",
                label: "Uptime",
            }
        },
        {
            id: "crypto-vault",
            title: "CryptoVault",
            stack: ["Solidity", "Web3.js", "React"],
            description: "Decentralized asset management protocol on Ethereum.",
            image: "",
            links: { demo: "#", github: "#" },
            category: "Blockchain",
            metrics: {
                value: "$2M+",
                label: "TVL",
            }
        },
    ],
    skills: [
        {
            category: "Frontend",
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
        },
        {
            category: "Backend",
            items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Redis", "Docker"],
        },
        {
            category: "AI & Data",
            items: ["TensorFlow", "OpenAI API", "PyTorch", "Pandas", "Scikit-learn"],
        },
        {
            category: "Blockchain",
            items: ["Solidity", "Hardhat", "Ethers.js", "IPFS"],
        },
    ],
};
