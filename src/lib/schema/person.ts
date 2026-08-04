import { getExperience } from "@/utils/experience";

const experience = getExperience();

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",

  "@id": "https://buildswiftly.in/#person",

  name: "Rahul Tak",

  givenName: "Rahul",

  familyName: "Tak",

  url: "https://buildswiftly.in",

  image: "https://buildswiftly.in/rahul-tak.webp",

  jobTitle: "Senior iOS Engineer",

  description: `Senior iOS Engineer with ${experience.short} years of experience building scalable iOS applications using Swift, SwiftUI, UIKit and modern software architecture.`,

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://buildswiftly.in/#webpage",
  },

  worksFor: {
    "@type": "Organization",
    name: "Accenture",
    url: "https://www.accenture.com",
  },

  hasOccupation: {
    "@type": "Occupation",
    name: "Senior iOS Engineer",
  },

  nationality: {
    "@type": "Country",
    name: "India",
  },

  knowsLanguage: ["English", "Hindi"],

  sameAs: [
    "https://buildswiftly.in",
    "https://www.linkedin.com/in/takrahul",
    "https://github.com/RahulTak",
    "https://stackoverflow.com/users/10460820/tak-rahul",
    "https://x.com/iHR_ahul",
    "https://www.youtube.com/@buildswiftly",
    "https://www.instagram.com/the404errorfound",
    "https://www.facebook.com/Me.rahultak",
  ],

  knowsAbout: [
    "Swift",
    "SwiftUI",
    "UIKit",
    "Objective-C",
    "MVVM",
    "VIPER",
    "Clean Architecture",
    "Mobile Architecture",
    "Swift Concurrency",
    "Software Engineering",
    "Technical Leadership",
    "iOS Development",
    "Mobile Application Development",
  ],
};