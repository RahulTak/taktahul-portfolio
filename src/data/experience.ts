export interface Experience {
  id: string;

  company: string;

  role: string;

  location: string;

  startDate: string;

  endDate: string;

  description: string;

  achievements: string[];

  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "accenture",

    company: "Accenture India",

    role: "Packaged App Development Team Lead",

    location: "Bengaluru, India",

    startDate: "May 2024",

    endDate: "Present",

    description:
      "Leading enterprise iOS application development, mentoring engineers, improving application stability and driving modern iOS engineering practices.",

    achievements: [
      "Led enterprise iOS application development",
      "Mentored engineering team",
      "Improved application stability",
      "Optimized build performance",
    ],

    technologies: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "CI/CD",
      "VIPER",
    ],
  },
  {
    id: "rishabh",

    company: "Rishabh Software",

    role: "Senior Software Engineer",

    location: "Vadodara, India",

    startDate: "Feb 2021",

    endDate: "May 2024",

    description:
        "Developed and maintained enterprise iOS applications using Swift and Objective-C, collaborated directly with international clients, participated in technical interviews, and resolved backend integration issues by working with C# APIs.",

    achievements: [
        "Delivered enterprise iOS applications for global clients",
        "Collaborated directly with international customers",
        "Participated in technical interviews and mentoring",
        "Debugged and integrated C# backend APIs",
    ],

    technologies: [
        "Swift",
        "Objective-C",
        "UIKit",
        "Core Data",
        "C#",
        "Git",
    ],
},
{
    id: "ranosys",

    company: "Ranosys Technologies",

    role: "Senior Software Engineer",

    location: "Jaipur, India",

    startDate: "Sep 2016",

    endDate: "Feb 2021",

    description:
        "Designed and developed scalable iOS applications for eCommerce, retail and enterprise clients using Swift and Objective-C. Delivered multiple international projects, integrated third-party services, and contributed to chatbot and mobile commerce solutions.",

    achievements: [
        "Promoted to Senior Software Engineer",
        "Delivered multiple international enterprise projects",
        "Integrated Kore.ai and Dialogflow chatbot solutions",
        "Worked on eCommerce applications using Magento and Salesforce",
        "Collaborated with offshore and cross-functional teams",
    ],

    technologies: [
        "Swift",
        "Objective-C",
        "UIKit",
        "MVVM",
        "Firebase",
        "Magento",
        "Salesforce Commerce Cloud",
        "Dialogflow",
        "Kore.ai",
    ],
},
{
    id: "avenging-security",

    company: "Avenging Security Pvt. Ltd.",

    role: "iOS Developer",

    location: "Jaipur, India",

    startDate: "Apr 2016",

    endDate: "Aug 2016",

    description:
        "Led the development of multiple iOS applications, contributed to project estimation, collaborated with cross-functional teams, and encouraged engineering best practices throughout the development lifecycle.",

    achievements: [
        "Led multiple iOS application projects",
        "Contributed to project estimation and planning",
        "Collaborated with cross-functional teams",
        "Promoted engineering best practices",
    ],

    technologies: [
        "Swift",
        "Objective-C",
        "UIKit",
        "Auto Layout",
        "Git",
    ],
},
{
    id: "orion",

    company: "Orion Infosolution",

    role: "iOS Developer",

    location: "Jaipur, India",

    startDate: "Jan 2016",

    endDate: "Apr 2016",

    description:
        "Started my professional iOS development career by building native iPhone applications, implementing new features, fixing defects, and contributing ideas to improve development processes.",

    achievements: [
        "Built native iOS applications",
        "Implemented new application features",
        "Resolved bugs and improved application quality",
        "Contributed process improvement ideas",
    ],

    technologies: [
        "Objective-C",
        "UIKit",
        "Xcode",
        "Git",
    ],
},
];