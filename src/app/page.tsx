import Image from "next/image";
import React from 'react';
import { getExperience } from "@/utils/experience";
import ProjectSection from "@/components/projects/ProjectSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import SkillsSection from "@/components/skills/SkillsSection";

const DOWNLOAD_RESUME_URL = '/Rahul-Tak-Resume.pdf'; // put resume in public/ or change to external link
const EMAIL = 'rahultak2008@gmail.com';
const PHONE = '+91-9509424233';
const LINKEDIN = 'https://www.linkedin.com/in/takrahul/';
const STACKOVERFLOW = 'https://stackoverflow.com/users/10460820/tak-rahul';

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 mr-2 mb-2">
      {children}
    </span>
  );
}

export default function Home() {
  const experience = getExperience();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Rahul Tak
            </h1>

            <p className="text-sm text-gray-600 dark:text-gray-300">
              Senior iOS Engineer • Team Lead • {experience.short} Years Experience • Bengaluru, India
            </p>
          </div>
          <nav className="flex items-center space-x-4">
            <a className="text-sm hover:underline" href="#projects">Projects</a>
            <a className="text-sm hover:underline" href="#experience">Experience</a>
            <a className="text-sm hover:underline" href="#contact">Contact</a>
            <a className="px-3 py-1.5 bg-orange-500 text-white rounded-md text-sm" href={DOWNLOAD_RESUME_URL} download>
              Download Resume
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Building High-Performance iOS Applications
            </h2>

            <p className="text-xl md:text-2xl text-orange-500 font-semibold mb-4">
              Senior iOS Engineer • 10+ Years Experience
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Swift • SwiftUI • UIKit • MVVM • VIPER
            </p>

            <p className="text-lg leading-8 text-gray-700 dark:text-gray-300 mb-6">
              I build scalable, secure and enterprise-grade iOS applications using
              Swift, SwiftUI, UIKit and modern architecture.

              <br /><br />
              Over the past {experience.text}, I've delivered more than 50 production-grade iOS applications across eCommerce, Government, Finance and Retail industries while leading engineering teams and improving application performance.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <Tag>{experience.short} Years Experience</Tag>
              <Tag>50+ iOS Apps Delivered</Tag>
              <Tag>Swift Specialist</Tag>
              <Tag>SwiftUI</Tag>
              <Tag>UIKit</Tag>
              <Tag>Team Lead</Tag>
              <Tag>Mobile Architecture</Tag>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <a href="#projects" className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm">View Projects</a>
              <a href={DOWNLOAD_RESUME_URL} className="px-4 py-2 border rounded-md text-sm">Download Resume</a>
              <a href={`mailto:${EMAIL}`} className="px-4 py-2 border rounded-md text-sm">Contact Me</a>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">📍 Bengaluru, India</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">💼 Open to Senior iOS Engineer, Lead iOS Engineer, Staff iOS Engineer and Engineering Manager opportunities.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/rahul-tak.webp"
                alt="Rahul Tak - Senior iOS Engineer"
                fill
                priority
                sizes="(max-width: 768px) 192px, 240px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* About & Skills */}
        <section className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-semibold mb-3">About</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm Rahul Tak, a Senior iOS Engineer with over {experience.text} of experience designing and delivering enterprise-grade mobile applications.
              Throughout my career, I've worked on large-scale products in eCommerce, Government, Retail and Finance, helping organizations build reliable, scalable and user-friendly iOS applications.
              My expertise includes Swift, SwiftUI, UIKit, Objective-C, MVVM, VIPER, Clean Architecture, performance optimization and technical leadership.
            </p>

            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Scalable app architecture (MVC, MVVM, VIPER, Clean Architecture)</li>
              <li>Pixel-perfect UI with SwiftUI & UIKit</li>
              <li>Performance optimization, memory management & profiling (Instruments)</li>
              <li>CI/CD, Fastlane, unit & UI testing</li>
              <li>Chatbot integrations (Kore.ai, DialogFlow) & real-time features (Firebase)</li>
            </ul>
          </div>

          <aside className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
            <h4 className="font-semibold mb-3">Skills</h4>
            <div className="flex flex-wrap">
              <Tag>Swift</Tag>
              <Tag>Objective-C</Tag>
              <Tag>SwiftUI</Tag>
              <Tag>UIKit</Tag>
              <Tag>Core Data</Tag>
              <Tag>Async/Await</Tag>
              <Tag>GCD</Tag>
              <Tag>URLSession / Alamofire</Tag>
              <Tag>VIPER / MVVM</Tag>
              <Tag>XCTest</Tag>
              <Tag>Fastlane / Jenkins / GitHub Actions</Tag>
              <Tag>Firebase / APNs</Tag>
            </div>
          </aside>
        </section>

        {/* Experience */}
        <ExperienceSection />
        {/*
        <section id="experience" className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Professional Experience</h3>

          <div className="space-y-6">
            <article className="p-5 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Accenture India</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Packaged App Development Team Lead — May 2024 - Present</p>
                </div>
                <div className="text-sm text-gray-500">Bengaluru, India</div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Onboarded into proprietary technologies and team leadership. Focused on optimizing build performance and app stability for enterprise-scale apps, while mentoring team members and driving modern iOS practices.</p>
            </article>

            <article className="p-5 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Rishabh Software</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Senior Software Engineer — Feb 2021 - May 2024</p>
                </div>
                <div className="text-sm text-gray-500">Vadodara, India</div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Developed iPhone apps using Swift & Objective-C, engaged in client interactions and interview processes, and learned C# for API debugging and server-side issue resolution.</p>
            </article>

            <article className="p-5 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Ranosys Technologies</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Senior Software Engineer — Sept 2016 - Feb 2021</p>
                </div>
                <div className="text-sm text-gray-500">Jaipur, India</div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Built scalable apps in Swift/Objective-C with auto-layout & integrations. Coordinated across offshore teams, developed chatbots with Kore.ai & DialogFlow, and was promoted to Senior in 2019.</p>
            </article>

            <article className="p-5 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Avenging Security Pvt. Ltd.</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">iOS Developer — Apr 2016 - Aug 2016</p>
                </div>
                <div className="text-sm text-gray-500">Jaipur, India</div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Led multiple iOS projects, participated in estimations, and motivated team members to be proactive and self-organized.</p>
            </article>

            <article className="p-5 border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">Orion Infosolution</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">iOS Developer — Jan 2016 - Apr 2016</p>
                </div>
                <div className="text-sm text-gray-500">Jaipur, India</div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Started iOS career building apps and suggesting system improvements.</p>
            </article>
          </div>
        </section> */}

        {/* Projects */}
        <ProjectSection />
        {/*
        <section id="projects" className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Professional Projects</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">Heineken BR & MX</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Global beverage brand apps</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Led iOS development, optimized stability and performance, and reduced build times for faster development cycles.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift, UIKit, CI/CD</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/sample/heineken">View on App Store</a>
            </div>
            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">Qatar National</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">SwiftUI with VIPER for government portal</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Developed SwiftUI features for Retirement module, implemented maps and dynamic rendering with SiteCore.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: SwiftUI, VIPER, Maps, SiteCore</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/sample/qatar">View on App Store</a>
            </div>
            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">Pedro</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">E-commerce fashion app</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Built and maintained iOS app for men’s & women’s fashion with Magento backend and integrated payments.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift, Objective-C, Magento API</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/sample/pedro">View on App Store</a>
            </div>
            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">MyBrand Partner & MyBrand</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Dual apps for street vendors & customers</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Developed vendor and customer apps enabling order placement, food delivery, and real-time tracking.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift, Firebase, Maps, CoreLocation</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/sample/mybrand">View on App Store</a>
            </div>
            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">IG Inspect & IG Enforce</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">iPad apps for government inspections & enforcement</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Built feature-rich iPad apps to manage inspection routing, checklists, digital signatures and printing — enabling field workers to complete inspections efficiently.
              </p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift / Objective-C, CoreData, Maps, C# API</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/us/app/ig-enforce/id571440611">View on App Store</a>
            </div>

            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">Charles & Keith</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">E-commerce app for women’s fashion (Singapore)</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Led development and integrations with Salesforce backend, payment gateways, and ensured high performance & image caching for smooth UX.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift, UIKit, Salesforce API, MVVM</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/in/app/charles-keith/id359085099">View on App Store</a>
            </div>

            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">Group Buy (Client: Indonesia)</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Multi-vendor commerce with social buying features</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Built the core app with MVVM, payment integrations and push notifications to handle group-based discounts and vendor interactions.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift, UIKit, Laravel API, Midtrans</div>
            </div>

            <div className="p-5 border rounded-lg bg-gray-50 dark:bg-gray-800">
              <h4 className="font-semibold">ChatGram</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">Enterprise messaging & payments</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">Built chat, payments, file transfer and bot integration for enterprise customers to manage messaging workflows.</p>
              <div className="mt-3 text-sm text-gray-500">Technologies: Swift, DialogFlow, Firebase, APNS</div>
              <a className="inline-block mt-4 text-sm text-orange-500" href="https://apps.apple.com/us/app/chatgram/id1436568489">View on App Store</a>
            </div>

          </div>
        </section> */}

        {/* Awards & Education */}
        <section className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-5 border rounded-lg">
            <h4 className="font-semibold mb-3">Recognition & Awards</h4>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Ranosys Exceeding Expectation Award</li>
              <li>Managed RanoFest event (2018–2019)</li>
              <li>Kore.ai Framework training — Hyderabad</li>
              <li>Client commendations for quality delivery (iGInspect)</li>
            </ul>
          </div>

          <div className="p-5 border rounded-lg">
            <h4 className="font-semibold mb-3">Education</h4>
            <div className="text-gray-700 dark:text-gray-300">
              <p className="font-medium">MCA — R.I.E.T, Jaipur (2012 - 2015)</p>
              <p className="text-sm">Post Graduation in Computer Science — 70%</p>
              <div className="mt-3 font-medium">BCA — MDSU, Ajmer (2009 - 2012)</div>
              <p className="text-sm">Graduation in Computer Science — 67%</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="p-6 border rounded-lg bg-gray-50 dark:bg-gray-800 mb-12">
          <h3 className="text-2xl font-semibold mb-3">Let's Work Together</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">I’m open to new opportunities and collaborations. Reach out for freelance work, full-time roles, or speaking engagements.</p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
              <p className="text-sm text-gray-500">Email</p>
              <a className="block mt-1 text-sm font-medium" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
              <p className="text-sm text-gray-500">Phone</p>
              <a className="block mt-1 text-sm font-medium" href={`tel:${PHONE}`}>{PHONE}</a>
            </div>

            <div className="p-4 rounded-lg bg-white dark:bg-gray-900 border">
              <p className="text-sm text-gray-500">Social</p>
              <div className="mt-1 flex flex-col text-sm">
                <a className="hover:underline" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
                <a className="hover:underline" href={STACKOVERFLOW} target="_blank" rel="noreferrer">StackOverflow</a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Rahul Tak. All Rights Reserved. Built with ❤️ and Swift.</div>
        </footer>
      </div>
    </main>
  );
}
