
const projects = [
    {
        id: "event-booking",
        name: "EventFlow",
        category: "Full-Stack Event Booking Platform",
        description:
            "A full-stack event booking platform where users can discover events, create and manage their own events, check seat availability, book tickets, and complete payments online.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "NestJS",
            "Node.js",
            "PostgreSQL",
            "TypeORM",
            "JWT",
            "Axios",
            "Cloudinary",
            "SSLCommerz",
        ],
        features: [
            "User registration and JWT-based authentication",
            "Create, update, manage, search, and filter events",
            "Check real-time seat availability before booking",
            "Book event tickets through SSLCommerz payment integration",
            "Validate transactions and handle payment notifications through IPN",
            "Manage user profiles with Cloudinary image uploads",
            "Email-based password reset and booking confirmation",
            "Responsive interface for desktop, tablet, and mobile devices",
        ],
        challenges:
            "Synchronizing booking status with payment validation, handling SSLCommerz IPN notifications, managing relational database entities with TypeORM, and preventing already-booked events from appearing in the dashboard.",
        improvements:
            "Add QR-based ticket verification, refund management, event reviews and ratings, and advanced analytics for event organizers.",
        github:
            "https://github.com/raihankabir1952/event-booking",
        live:
            "https://event-booking-1opb.vercel.app/",
    },

    {
        id: "codesphere",
        name: "CodeSphere",
        category: "Full-Stack Developer Community Platform",
        description:
            "A full-stack developer community platform where developers can create and share posts, connect with other developers, interact through likes and comments, manage their profiles, and receive real-time notifications.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "NestJS",
            "Node.js",
            "PostgreSQL",
            "Prisma",
            "JWT",
            "Axios",
            "Socket.IO",
            "Cloudinary",
            "Resend",
        ],
        features: [
            "User registration, login, JWT-based authentication, and email verification",
            "Create, edit, delete, and explore developer posts",
            "Like posts, add comments, and reply to existing comments",
            "Customizable developer profiles with avatar, cover photo, and bio",
            "Real-time notifications and online user presence using Socket.IO",
            "Search developers and posts with pagination",
            "Secure ownership-based authorization for post management",
            "Email-based password reset functionality",
            "Cloudinary integration for profile and post image uploads",
            "Responsive interface for desktop, tablet, and mobile devices",
        ],
        challenges:
            "Implementing secure authentication and ownership-based authorization, managing relational data and nested comment replies with Prisma, synchronizing real-time notifications and online presence using Socket.IO, and resolving CORS and environment configuration issues during production deployment.",
        improvements:
            "Add a developer following system, direct messaging, real-time chat, notification preferences, post bookmarking, and advanced developer discovery features.",
        github:
            "https://github.com/raihankabir1952/CodeSphere",
        live:
            "https://code-sphere-swart.vercel.app/",
    },


    {
        id: "my-kart",
        name: "My-Kart",
        category: "Full-Stack E-Commerce Platform",
        description:
            "A full-stack e-commerce platform where customers can browse products, manage shopping carts, place orders, make online payments, and track purchases. Administrators can manage products, orders, customers, and store analytics.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "NestJS",
            "Node.js",
            "PostgreSQL",
            "TypeORM",
            "JWT",
            "Axios",
            "Context API",
            "Socket.IO",
            "Cloudinary",
            "SSLCommerz",
            "Resend",
            "Recharts",
        ],
        features: [
            "User registration, login, and JWT-based authentication",
            "Role-based CUSTOMER and ADMIN authorization",
            "Product browsing and product details",
            "Persistent shopping cart with quantity management",
            "Checkout with Cash on Delivery and SSLCommerz online payment",
            "Order history, order details, and cancellation",
            "Secure password reset using email verification tokens",
            "Purchased-user-only product ratings",
            "Real-time rating updates using Socket.IO",
            "Admin dashboard with product and order management",
            "Order and revenue analytics",
            "Printable and downloadable order invoices",
            "Cloudinary image uploads",
            "Responsive customer and admin interfaces",
        ],
        challenges:
            "Implementing secure payment verification, managing order status transitions, synchronizing cart data after successful payments, enforcing purchased-user-only rating rules, and delivering real-time rating updates using Socket.IO.",
        improvements:
            "Add advanced product filtering, wishlist, coupons, inventory management, automated testing, database migrations, and production monitoring.",
        github:
            "https://github.com/raihankabir1952/my_Kart",
    },



    {
        id: "togetherly",
        name: "Togetherly",
        category: "Full-Stack Social Development Events Platform",
        description:
            "A full-stack social development platform where users can discover community events, organize activities, participate in social initiatives, and manage their event participation.",
        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "Express.js",
            "Node.js",
            "MongoDB",
            "Better Auth",
            "JWT",
            "Google OAuth",
        ],
        features: [
            "User registration and login with email/password and Google OAuth",
            "Create, update, delete, and manage community events",
            "Browse and discover upcoming events",
            "Join events and manage joined events",
            "Protected routes and JWT-based API authentication",
            "View and update user profile information",
            "Event countdown to track upcoming events",
            "Responsive interface for desktop, tablet, and mobile devices",
        ],
        challenges:
            "Integrating Better Auth with the Express backend, implementing JWT-based API authentication, configuring Google OAuth for production deployment, synchronizing profile updates, and resolving UI component hydration issues.",
        improvements:
            "Add event search and advanced filtering, event reviews and ratings, participant management, email notifications, and event analytics.",
        githubClient:
            "https://github.com/raihankabir1952/togetherly-client",
        githubServer:
            "https://github.com/raihankabir1952/togetherly-server",
        live:
            "https://togetherly-client-murex.vercel.app/",
    },



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
