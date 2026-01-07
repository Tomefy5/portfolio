export const portfolioData = {
    personal: {
        name: "Tomefy",
        title: "Software & AI Engineer | Founder",
        email: "tomefyandrytsiresy@gmail.com",
        location: "Paris, France",
        bio: "Passionate about building the future of the web with 3D, AI, and scalable architectures. I turn complex data into immersive experiences.",
        avatar: "/profile-new.jpg",
        social: {
            github: "https://github.com/Tomefy5",
            linkedin: "https://www.linkedin.com/in/tomefy-ny-soa-andry-tsiresy-9a111a322",
            twitter: "https://x.com/Tomefy5",
            medium: "https://medium.com/@tomefyandrytsiresy",
            devto: "https://dev.to/tomefy5"
        },
    },
    projects: [
        {
            id: "haylalana",
            title: "Haylalàna",
            stack: ["Next.js", "Strapi", "PostgreSQL"],
            description: "projects.haylalana.description",
            image: "/projects/haylalana.png",
            links: { demo: "#", github: "https://github.com/Tomefy5/haylalana-plateform" },
            category: "LegalTech",
            metrics: {
                value: "100%",
                label: "Accessible",
            }
        },
        {
            id: "nanovec",
            title: "Nanovec",
            stack: ["Rust", "SIMD", "HNSW"],
            description: "projects.nanovec.description",
            image: "/projects/nanovec.png",
            links: { demo: "#", github: "https://github.com/Tomefy5/nanovec" },
            category: "System",
            metrics: {
                value: "10x",
                label: "Faster",
            }
        },
        {
            id: "antoka",
            title: "Antoka",
            stack: ["Next.js", "AI", "Hedera"],
            description: "projects.antoka.description",
            image: "/projects/antoka.png",
            links: { demo: "#", github: "https://github.com/Tomefy5/antoka-plateform" },
            category: "AI",
            metrics: {
                value: "-90%",
                label: "Drafting Time",
            }
        },
        {
            id: "generic-recommender",
            title: "GenericRecommender",
            stack: ["Python", "Pandas", "Clean Arch"],
            description: "projects.generic-recommender.description",
            image: "/projects/generic-recommender.jpg",
            links: { demo: "#", github: "https://github.com/Tomefy5/generic-recommender" },
            category: "Open Source",
            metrics: {
                value: "0",
                label: "Dependencies",
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
