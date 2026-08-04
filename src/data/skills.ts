export interface SkillCategory {
    title: string;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            "Swift",
            "Objective-C",
        ],
    },

    {
        title: "Frameworks",
        skills: [
            "SwiftUI",
            "UIKit",
            "Core Data",
            "Core Animation",
            "Core Graphics",
            "Core Location",
            "MapKit",
            "AVFoundation",
            "StoreKit",
            "Push Notifications",
        ],
    },

    {
        title: "Architecture",
        skills: [
            "MVC",
            "MVVM",
            "VIPER",
            "Clean Architecture",
            "SOLID Principles",
        ],
    },

    {
        title: "Networking & APIs",
        skills: [
            "URLSession",
            "Alamofire",
            "REST APIs",
            "JSON",
            "WebSockets",
        ],
    },

    {
        title: "Cloud & Services",
        skills: [
            "Firebase",
            "Crashlytics",
            "Analytics",
            "APNs",
            "Kore.ai",
            "Dialogflow",
        ],
    },

    {
        title: "Testing",
        skills: [
            "XCTest",
            "Unit Testing",
            "UI Testing",
        ],
    },

    {
        title: "CI/CD & DevOps",
        skills: [
            "Fastlane",
            "GitHub Actions",
            "Jenkins",
            "Bitbucket Pipelines",
        ],
    },

    {
        title: "Tools",
        skills: [
            "Xcode",
            "Git",
            "GitHub",
            "Bitbucket",
            "Jira",
            "Postman",
            "Charles Proxy",
            "Figma",
        ],
    },
];