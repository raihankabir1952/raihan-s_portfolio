
const projects = [

    {
        id: "bazar-dor",
        name: "BazarDor (বাজার দর)",
        category: "Daily Market Price Platform",
        description:
            "A responsive web application that helps users explore daily prices of essential products in Bangladesh and compare prices across different markets.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Better Auth",
            "MongoDB Atlas",
            "React Hot Toast",
        ],
        features: [
            "View daily prices of essential products",
            "Track increasing and decreasing prices",
            "Browse products by category and compare market prices",
            "Email/password authentication with Google and GitHub login",
            "Protected product detail pages",
            "Responsive design for mobile, tablet, and desktop",
        ],
        challenges:
            "Implementing authentication, protecting product detail pages, and building a responsive Bangla market-price interface.",
        improvements:
            "Add historical price charts, market-specific price updates, and more advanced product filtering.",
        github:
            "https://github.com/raihankabir1952/assignment-7.2",
        live:
            "https://assignment-7-ivory-two.vercel.app/",
    },


    {
        id: "fitlog",
        name: "FitLog",
        category: "Workout Planning & Tracking App",
        description:
            "A responsive workout planning application where users can explore exercises, create daily workout plans, save workouts, and track completed exercises.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Context API",
            "React Toastify",
        ],
        features: [
            "Browse workouts with detailed exercise information",
            "Create daily workout plans and track duration and calories",
            "Save workouts for later",
            "Mark workouts as completed and manage daily plans",
            "Toast notifications for user actions",
        ],
        challenges:
            "Managing shared workout state, synchronizing daily plans with saved workouts, and providing a responsive user experience.",
        improvements:
            "Add user authentication, persistent workout history, and progress charts.",
        github:
            "https://github.com/raihankabir1952/assignment-6",
        live:
            "https://assignment-6-six-beta.vercel.app/",
    },


    {
        id: "tech-explorer",
        name: "Tech Explorer",
        category: "Technology Discovery App",
        description:
            "A React and TypeScript application that helps users explore technologies, view their details, and manage a personal technology stack.",
        tech: [
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "React Router",
            "React Toastify",
        ],
        features: [
            "Explore technologies with categories, ratings, and difficulty levels",
            "View technology descriptions, icons, and popularity badges",
            "Add and remove technologies from a personal stack",
            "Prevent duplicate selections",
            "Toast notifications and loading states",
        ],
        challenges:
            "Managing selected technologies, preventing duplicate entries, and handling JSON data loading and UI states.",
        improvements:
            "Add user authentication, save personal stacks between sessions, and introduce technology search and filtering.",
        github:
            "https://github.com/raihankabir1952/assignment-5",
        live: "https://keen-bavarois-b71103.netlify.app/",
    },

];

export default projects;
