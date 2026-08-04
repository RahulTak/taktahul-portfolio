export interface Technology {
    name: string;
    category:
    | "Language"
    | "Framework"
    | "Architecture"
    | "Backend"
    | "Database"
    | "Cloud"
    | "Tool"
    | "CI/CD";
}

export interface Highlight {
    id: string;
    title: string;
    description?: string;
}

export interface Project {
    id: string;
    title: string;
    subtitle: string;

    company?: string;

    companyLogo?: string;

    role: string;

    industry: string;

    location?: string;

    description: string;

    technologies: Technology[];

    highlights: Highlight[];

    startYear?: number;

    endYear?: number;

    appStoreUrl?: string;

    githubUrl?: string;

    websiteUrl?: string;

    featured: boolean;

    status:
    | "Public"
    | "Enterprise"
    | "Confidential";
}

export const projects: Project[] = [
    {
        id: "heineken",

        title: "Heineken BR & MX",

        subtitle: "Global Beverage Brand",

        company: "Accenture",

        companyLogo: "/logos/accenture.svg",

        location: "Brazil & Mexico",

        role: "Lead iOS Engineer",

        industry: "Enterprise",

        description:
            "Led iOS development for Heineken Brazil & Mexico, improving application stability, optimizing build performance, and enhancing the developer experience for enterprise-scale mobile applications.",

        technologies: [
            {
                name: "Swift",
                category: "Language",
            },
            {
                name: "UIKit",
                category: "Framework",
            },
            {
                name: "CI/CD",
                category: "CI/CD",
            },
        ],

        highlights: [
            {
                id: "build-time",
                title: "Reduced build time",
            },
            {
                id: "stability",
                title: "Improved application stability",
            },
            {
                id: "leadership",
                title: "Led iOS team",
            },
        ],

        featured: true,

        status: "Enterprise",
    },
    {
        id: "charles-keith",

        title: "Charles & Keith",

        subtitle: "Global Fashion E-Commerce Platform",

        company: "Ranosys Technologies",

        location: "Singapore",

        role: "Senior iOS Engineer",

        industry: "Retail & E-Commerce",

        description:
            "Developed and maintained the iOS application for Charles & Keith, integrating Salesforce Commerce Cloud, payment gateways and image caching to deliver a high-performance shopping experience.",

        technologies: [
            { name: "Swift", category: "Language" },
            { name: "UIKit", category: "Framework" },
            { name: "Salesforce Commerce Cloud", category: "Backend" },
            { name: "MVVM", category: "Architecture" },
        ],

        highlights: [
            {
                id: "salesforce",
                title: "Integrated Salesforce Commerce Cloud",
            },
            {
                id: "performance",
                title: "Optimized image caching and app performance",
            },
            {
                id: "payments",
                title: "Integrated payment gateways",
            },
        ],

        appStoreUrl: "https://apps.apple.com/in/app/charles-keith/id359085099",

        featured: true,

        status: "Public",
    },
    {
        id: "qatar-national",

        title: "Qatar National",

        subtitle: "Government Digital Services Platform",

        company: "Accenture",

        location: "Qatar",

        role: "Senior iOS Engineer",

        industry: "Government",

        description:
            "Developed SwiftUI modules for Qatar National's digital platform, implementing retirement services, maps integration and dynamic content rendering using Sitecore.",

        technologies: [
            { name: "SwiftUI", category: "Framework" },
            { name: "VIPER", category: "Architecture" },
            { name: "Sitecore", category: "Backend" },
            { name: "Maps", category: "Framework" },
        ],

        highlights: [
            {
                id: "retirement",
                title: "Developed Retirement module",
            },
            {
                id: "sitecore",
                title: "Integrated Sitecore CMS",
            },
            {
                id: "maps",
                title: "Implemented maps and dynamic rendering",
            },
        ],

        featured: true,

        status: "Enterprise",
    },
    {
        id: "ig-enforce",

        title: "IG Inspect & IG Enforce",

        subtitle: "Government Inspection Platform",

        company: "Rishabh Software",

        location: "United States",

        role: "Senior iOS Engineer",

        industry: "Government",

        description:
            "Developed enterprise iPad applications for inspections, enforcement workflows, route planning, digital signatures and thermal printing used by government field officers.",

        technologies: [
            { name: "Swift", category: "Language" },
            { name: "Objective-C", category: "Language" },
            { name: "Core Data", category: "Database" },
            { name: "Maps", category: "Framework" },
            { name: "C#", category: "Backend" },
        ],

        highlights: [
            {
                id: "ipad",
                title: "Designed enterprise iPad workflows",
            },
            {
                id: "printing",
                title: "Integrated thermal printing",
            },
            {
                id: "offline",
                title: "Implemented offline inspection support",
            },
        ],

        appStoreUrl:
            "https://apps.apple.com/us/app/ig-enforce/id571440611",

        featured: true,

        status: "Public",
    },
    {
        id: "pedro",

        title: "Pedro",

        subtitle: "Fashion E-Commerce Application",

        company: "Ranosys Technologies",

        location: "Singapore",

        role: "Senior iOS Engineer",

        industry: "Retail & E-Commerce",

        description:
            "Built and maintained the Pedro iOS application with Magento backend integration, secure payments and a seamless shopping experience.",

        technologies: [
            { name: "Swift", category: "Language" },
            { name: "Objective-C", category: "Language" },
            { name: "Magento", category: "Backend" },
        ],

        highlights: [
            {
                id: "magento",
                title: "Integrated Magento APIs",
            },
            {
                id: "payments",
                title: "Implemented secure payment flow",
            },
            {
                id: "shopping",
                title: "Enhanced shopping experience",
            },
        ],

        featured: true,

        status: "Enterprise",
    },
    {
        id: "mybrand",

        title: "MyBrand & MyBrand Partner",

        subtitle: "Food Delivery & Vendor Platform",

        company: "Ranosys Technologies",

        location: "Indonesia",

        role: "Senior iOS Engineer",

        industry: "Food Delivery",

        description:
            "Developed customer and vendor applications supporting ordering, delivery management, real-time tracking and vendor operations.",

        technologies: [
            { name: "Swift", category: "Language" },
            { name: "Firebase", category: "Cloud" },
            { name: "Maps", category: "Framework" },
            { name: "Core Location", category: "Framework" },
        ],

        highlights: [
            {
                id: "tracking",
                title: "Implemented real-time order tracking",
            },
            {
                id: "vendors",
                title: "Built dedicated vendor application",
            },
            {
                id: "firebase",
                title: "Integrated Firebase services",
            },
        ],

        featured: true,

        status: "Enterprise",
    },
    {
        id: "group-buy",

        title: "Group Buy",

        subtitle: "Social Commerce Platform",

        company: "Ranosys Technologies",

        location: "Indonesia",

        role: "Senior iOS Engineer",

        industry: "E-Commerce",

        description:
            "Developed a multi-vendor commerce application featuring group purchasing, push notifications and secure payment integration.",

        technologies: [
            { name: "Swift", category: "Language" },
            { name: "UIKit", category: "Framework" },
            { name: "Laravel", category: "Backend" },
            { name: "Midtrans", category: "Backend" },
        ],

        highlights: [
            {
                id: "social",
                title: "Implemented group buying workflow",
            },
            {
                id: "payments",
                title: "Integrated Midtrans payments",
            },
            {
                id: "notifications",
                title: "Implemented push notifications",
            },
        ],

        featured: false,

        status: "Enterprise",
    },
    {
        id: "chatgram",

        title: "ChatGram",

        subtitle: "Enterprise Messaging Platform",

        company: "Ranosys Technologies",

        location: "United States",

        role: "Senior iOS Engineer",

        industry: "Communication",

        description:
            "Built enterprise messaging features including real-time chat, payments, file sharing and chatbot integration for business communication.",

        technologies: [
            { name: "Swift", category: "Language" },
            { name: "Firebase", category: "Cloud" },
            { name: "Dialogflow", category: "Backend" },
            { name: "APNs", category: "Cloud" },
        ],

        highlights: [
            {
                id: "chat",
                title: "Built real-time messaging",
            },
            {
                id: "payments",
                title: "Integrated payment features",
            },
            {
                id: "bots",
                title: "Implemented chatbot integration",
            },
        ],

        appStoreUrl:
            "https://apps.apple.com/us/app/chatgram/id1436568489",

        featured: true,

        status: "Public",
    },
];