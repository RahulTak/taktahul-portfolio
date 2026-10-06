import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

const ARTICLE_URL = "https://buildswiftly.in/blog/practical-ios-performance-optimization";
const PUBLISHED_DATE = "2026-10-07";
const MODIFIED_DATE = "2026-10-07";

function CodeBlock({
  children,
  label,
}: {
  children: string;
  label?: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl bg-gray-950 shadow-sm">
      {label && (
        <div className="border-b border-gray-800 px-4 py-2 text-xs font-medium text-gray-400">
          {label}
        </div>
      )}
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-gray-100">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-14 mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
      {children}
    </h2>
  );
}

function SubTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-gray-900 dark:text-white">
      {children}
    </h3>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-[17px] leading-8 text-gray-700 dark:text-gray-300">
      {children}
    </p>
  );
}

function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-8 rounded-lg border-l-4 border-orange-500 bg-gray-50 p-5 dark:bg-gray-800">
      <h3 className="mb-2 font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
      <div className="text-[16px] leading-8 text-gray-700 dark:text-gray-300">{children}</div>
    </aside>
  );
}

export const metadata: Metadata = {
  title: "Practical iOS Performance Optimization: What I Check Before Reaching for Instruments | Rahul Tak",
  description: "A practical, real-world approach to iOS performance optimization. Learn what I check before opening Instruments, from main-thread work and network calls to SwiftUI rendering, images, memory, concurrency and release builds.",
  authors: [{ name: "Rahul Tak", url: "https://buildswiftly.in" }],
  creator: "Rahul Tak",
  publisher: "Rahul Tak",
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: "article",
    url: ARTICLE_URL,
    title: "Practical iOS Performance Optimization: What I Check Before Reaching for Instruments",
    description: "A practical, real-world checklist for finding and fixing iOS performance problems before reaching for Instruments.",
    siteName: "BuildSwiftly",
    publishedTime: PUBLISHED_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: ["Rahul Tak"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Practical iOS Performance Optimization: What I Check Before Reaching for Instruments",
    description: "What I check first when an iOS application feels slow, before opening Instruments.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Practical iOS Performance Optimization: What I Check Before Reaching for Instruments",
  description: "A practical, real-world approach to iOS performance optimization, covering the checks that often reveal the problem before Instruments is needed.",
  url: ARTICLE_URL,
  mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
  author: { "@type": "Person", name: "Rahul Tak", url: "https://buildswiftly.in", jobTitle: "Senior iOS Engineer" },
  publisher: { "@type": "Person", name: "Rahul Tak", url: "https://buildswiftly.in" },
  datePublished: PUBLISHED_DATE,
  dateModified: MODIFIED_DATE,
  inLanguage: "en-US",
  keywords: ["iOS performance optimization", "Swift performance", "SwiftUI performance", "UIKit performance", "Instruments", "iOS development", "mobile performance"],
};

export default function PracticalIOSPerformanceOptimizationPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        <header className="mb-12 border-b border-gray-200 pb-10 dark:border-gray-800">
          <a href="/" className="mb-8 inline-flex text-sm font-medium text-orange-600 hover:underline dark:text-orange-400">← Back to Rahul Tak</a>
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400">iOS Engineering · Performance</p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white md:text-5xl">Practical iOS Performance Optimization: What I Check Before Reaching for Instruments</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">Performance problems are often easier to find than we make them. Before opening Instruments, I usually start with the product behavior, the main thread, the data being loaded, and the work we are asking the device to do.</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
            <span>By <a href="https://buildswiftly.in" className="font-medium text-gray-800 hover:text-orange-600 hover:underline dark:text-gray-200 dark:hover:text-orange-400">Rahul Tak</a></span>
            <span>Published: October 7, 2026</span><span>Updated: October 7, 2026</span>
          </div>
        </header>

        <article>
          <Paragraph>After working on iOS applications for many years, one thing I have learned about performance is that the hardest part is not using Instruments. Instruments is an excellent tool, but it is rarely the first thing I need.</Paragraph>
          <Paragraph>When someone says, &quot;The app is slow,&quot; that sentence is too broad to be useful. Slow when launching? Slow while scrolling? Slow after login? Slow only on a poor network? Slow after the user has kept the application open for several hours?</Paragraph>
          <Paragraph>Those are very different problems, and they usually have very different causes.</Paragraph>
          <Paragraph>My first job is therefore not to optimize code. It is to turn a vague performance complaint into a specific, reproducible behavior.</Paragraph>
          <Callout title="The principle I use">Do not optimize because a piece of code looks expensive. Optimize because you can explain what is slow, why it is slow, and what measurable improvement you expect after changing it.</Callout>

          <SectionTitle>1. Start With the User-Visible Problem</SectionTitle>
          <Paragraph>Performance work becomes much easier when you describe the problem from the user&apos;s point of view.</Paragraph>
          <Paragraph>Instead of:</Paragraph>
          <ul><li>&quot;The home screen has performance issues.&quot;</li><li>&quot;The API layer is slow.&quot;</li><li>&quot;SwiftUI is rendering too much.&quot;</li></ul>
          <Paragraph>I try to get to something more concrete:</Paragraph>
          <ul><li>&quot;The home screen takes around three seconds before the user can interact with it.&quot;</li><li>&quot;The product list starts stuttering when the user scrolls through the first 50 items.&quot;</li><li>&quot;Opening the checkout screen becomes noticeably slower after navigating through several product pages.&quot;</li><li>&quot;The first screen is responsive, but typing becomes delayed while a search request is running.&quot;</li></ul>
          <Paragraph>Once the problem is specific, I can decide what to investigate instead of randomly profiling the entire application.</Paragraph>

          <SectionTitle>2. Reproduce It Consistently</SectionTitle>
          <Paragraph>The next question is simple: can I reproduce the problem?</Paragraph>
          <Paragraph>If one developer sees a two-second delay and another sees almost none, I do not immediately start changing code. I first compare the environment.</Paragraph>
          <ul><li>Device model</li><li>iOS version</li><li>Debug or Release configuration</li><li>Network conditions</li><li>Amount of existing local data</li><li>Logged-in versus logged-out state</li><li>Cold launch versus warm launch</li><li>Whether the issue appears after repeated navigation</li></ul>
          <Paragraph>This matters because performance can be highly dependent on state. A screen that is fast with ten records may behave very differently with ten thousand records.</Paragraph>

          <SectionTitle>3. Check Whether I Am Measuring a Debug Build</SectionTitle>
          <Paragraph>This is one of the easiest mistakes to make during performance investigations.</Paragraph>
          <Paragraph>Debug builds are useful for development, but they are not always a realistic representation of production performance. Compiler optimizations, logging, assertions and other development-time behavior can change what you observe.</Paragraph>
          <Paragraph>If a performance complaint is important enough to fix, I want to reproduce it in an environment that resembles the actual shipped application.</Paragraph>
          <Callout title="A useful habit">If a performance issue only exists in Debug and disappears in a properly configured Release build, that is useful information. It does not automatically mean there is no problem, but it changes what I investigate next.</Callout>

          <SectionTitle>4. Look at the Main Thread First</SectionTitle>
          <Paragraph>On iOS, a surprisingly large number of &quot;the app is slow&quot; complaints eventually come down to too much work happening on the main thread.</Paragraph>
          <Paragraph>The main thread has an important job: keeping the interface responsive. If we make it perform expensive work, the user sees the result immediately as a frozen or laggy interface.</Paragraph>
          <Paragraph>Typical examples include:</Paragraph>
          <ul><li>Large JSON decoding</li><li>Heavy sorting or filtering</li><li>Image processing</li><li>Database queries</li><li>Large file operations</li><li>Expensive layout calculations</li><li>Repeated synchronous work triggered by UI updates</li></ul>
          <Paragraph>For example, code like this may look harmless when the data set is small:</Paragraph>
          <CodeBlock label="Swift">{`DispatchQueue.main.async {
    let sortedProducts = products.sorted {
        $0.name.localizedCaseInsensitiveCompare($1.name) == .orderedAscending
    }

    self.products = sortedProducts
}`}</CodeBlock>
          <Paragraph>The problem is not that sorting is inherently bad. The problem is that the sorting work is being performed on the main thread.</Paragraph>
          <Paragraph>With a large collection, this can become visible as delayed taps, dropped frames or a screen that feels unresponsive.</Paragraph>
          <Paragraph>With modern Swift concurrency, I would generally move expensive non-UI work away from the main actor and only bring the resulting state back to the UI when needed.</Paragraph>
          <CodeBlock label="Swift Concurrency">{`let sortedProducts = await Task.detached {
    products.sorted {
        $0.name.localizedCaseInsensitiveCompare($1.name) == .orderedAscending
    }
    return products
}.value

self.products = sortedProducts`}</CodeBlock>
          <Paragraph>The exact solution depends on the ownership and Sendable requirements of the real code. The important part is the reasoning: identify what work actually needs the main thread and what does not.</Paragraph>

          <SectionTitle>5. Look at the Network Before Blaming the UI</SectionTitle>
          <Paragraph>A screen can feel slow even when rendering is perfectly fine. Sometimes the application is simply waiting for data.</Paragraph>
          <Paragraph>When a screen depends on several API calls, I ask:</Paragraph>
          <ul><li>How many requests are being made?</li><li>Which requests are actually required for first render?</li><li>Are any requests duplicated?</li><li>Are requests being made sequentially when they can run concurrently?</li><li>Are we downloading more data than the screen needs?</li><li>Are images being downloaded at their original resolution?</li><li>Are we repeatedly requesting data that could be cached?</li></ul>
          <Paragraph>Consider a home screen that needs profile data, categories, promotions and products. If the implementation waits for one request before starting the next, the total waiting time can become unnecessarily long.</Paragraph>
          <CodeBlock label="Sequential approach">{`let profile = try await api.fetchProfile()
let categories = try await api.fetchCategories()
let products = try await api.fetchProducts()`}</CodeBlock>
          <Paragraph>If these requests are independent, concurrency may be a better approach:</Paragraph>
          <CodeBlock label="Concurrent approach">{`async let profile = api.fetchProfile()
async let categories = api.fetchCategories()
async let products = api.fetchProducts()

let result = try await (profile, categories, products)`}</CodeBlock>
          <Paragraph>This is not a rule that every request should run concurrently. Dependencies still matter. But it is one of the first things I check when a screen spends too much time waiting on a collection of independent services.</Paragraph>

          <SectionTitle>6. Check What the API Is Returning</SectionTitle>
          <Paragraph>Backend payload size is easy to overlook because the problem may appear to be an iOS problem.</Paragraph>
          <Paragraph>If a mobile screen needs five fields but the endpoint returns a large object containing dozens of fields, the application is doing unnecessary work.</Paragraph>
          <Paragraph>Large payloads affect more than network transfer. They can also increase decoding time, memory usage and the amount of work needed to transform the response into UI models.</Paragraph>
          <Paragraph>I therefore look at the actual response rather than assuming the client is the only place where optimization is needed.</Paragraph>

          <SectionTitle>7. Images Are One of My First Checks</SectionTitle>
          <Paragraph>Images are a common source of memory and scrolling problems, especially in commerce, social and content-heavy applications.</Paragraph>
          <Paragraph>A device may display an image at a relatively small size while the application downloads a much larger original image.</Paragraph>
          <Paragraph>The mistake is easy to make:</Paragraph>
          <CodeBlock label="Conceptual example">{`Server image:
2400 × 2400 pixels

ImageView:
120 × 120 points`}</CodeBlock>
          <Paragraph>The displayed size does not automatically mean the application only has to deal with a small image. Decoding a large image can consume significant memory before it is finally displayed at the smaller size.</Paragraph>
          <Paragraph>In a scrolling list, this becomes even more important because many images may be alive or being decoded around the same time.</Paragraph>
          <Paragraph>I check image dimensions, compression, caching, downsampling and whether the backend can provide appropriately sized assets.</Paragraph>

          <SectionTitle>8. Check Lists and Scroll Performance</SectionTitle>
          <Paragraph>If a user reports that scrolling feels bad, I do not immediately assume the list component itself is the problem.</Paragraph>
          <Paragraph>I look at what each cell is doing.</Paragraph>
          <ul><li>Is every cell doing expensive computation?</li><li>Are images being decoded while scrolling?</li><li>Are views being recreated unnecessarily?</li><li>Is there nested layout complexity?</li><li>Are we performing network calls from individual cells?</li><li>Are state changes causing too many view updates?</li></ul>
          <Paragraph>A list containing simple text can perform very differently from a list where every row contains images, animations, formatted text, network state and several nested containers.</Paragraph>

          <SectionTitle>9. SwiftUI: Watch What Causes View Updates</SectionTitle>
          <Paragraph>SwiftUI makes UI development much easier, but it also changes how we think about rendering performance.</Paragraph>
          <Paragraph>One thing I pay attention to is state ownership.</Paragraph>
          <Paragraph>If a high-level state change causes a large part of the view hierarchy to recompute, the resulting work can become noticeable.</Paragraph>
          <CodeBlock label="SwiftUI">{`struct DashboardView: View {
    @State private var searchText = ""
    @State private var isShowingProfile = false

    var body: some View {
        VStack {
            SearchView(text: $searchText)
            DashboardContent()
            ProfileButton(isPresented: $isShowingProfile)
        }
    }
}`}</CodeBlock>
          <Paragraph>The code itself is not automatically a performance problem. What matters is how state flows through the real view hierarchy and what work is performed as state changes.</Paragraph>
          <Paragraph>I prefer small, focused views with clear state ownership rather than trying to optimize every SwiftUI view prematurely.</Paragraph>

          <SectionTitle>10. UIKit Has Its Own Version of the Same Problem</SectionTitle>
          <Paragraph>The same principle applies to UIKit. A table or collection view can be perfectly capable of handling a large amount of content, but the work performed during cell configuration can still make scrolling expensive.</Paragraph>
          <Paragraph>I look closely at:</Paragraph>
          <ul><li>Cell reuse</li><li>Auto Layout complexity</li><li>Image loading and decoding</li><li>Attributed string construction</li><li>Repeated formatting</li><li>Network activity triggered from cells</li><li>Expensive work inside layout callbacks</li></ul>
          <Paragraph>A useful rule is to keep cell configuration predictable and cheap. If a cell needs a surprising amount of business logic just to appear on screen, that is worth investigating.</Paragraph>

          <SectionTitle>11. Look for Repeated Work</SectionTitle>
          <Paragraph>Performance issues are not always caused by one expensive operation. Sometimes a relatively cheap operation is being performed hundreds or thousands of times.</Paragraph>
          <Paragraph>This is one of the first patterns I look for.</Paragraph>
          <Paragraph>For example, suppose a function calculates the same derived value every time a row is rendered. One calculation may cost almost nothing. Repeating it for every item during every update can become expensive.</Paragraph>
          <Paragraph>Before optimizing the calculation itself, I ask a simpler question: &quot;Why are we doing this calculation again?&quot;</Paragraph>
          <Callout title="Optimization often means doing less work"><Paragraph>Caching, moving work to the correct lifecycle point, avoiding duplicate requests and reducing unnecessary updates can be more valuable than making one function 10% faster.</Paragraph></Callout>

          <SectionTitle>12. Be Careful With Logging</SectionTitle>
          <Paragraph>Logging is extremely useful during development, but excessive logging can make performance testing misleading.</Paragraph>
          <Paragraph>I have seen applications where a frequently executed path contains enough logging to make the debug experience look much worse than the actual production behavior.</Paragraph>
          <Paragraph>Before drawing conclusions from a performance test, I check whether debug logging, analytics logging or development diagnostics are influencing the result.</Paragraph>

          <SectionTitle>13. Memory: Look for Growth, Not Just a Large Number</SectionTitle>
          <Paragraph>Memory problems can be subtle. A large memory footprint does not automatically mean there is a leak.</Paragraph>
          <Paragraph>I pay attention to behavior over time.</Paragraph>
          <Paragraph>If I open a screen, leave it, open it again, and repeat the process several times, does memory return close to its previous level? If not, something deserves investigation.</Paragraph>
          <Paragraph>Common areas I check include:</Paragraph>
          <ul><li>Retain cycles</li><li>Closures capturing objects strongly</li><li>Timers and observers</li><li>Notification subscriptions</li><li>Large image caches</li><li>Long-lived view models</li><li>Collections that continuously grow</li></ul>
          <Paragraph>If the memory graph keeps climbing as the same workflow is repeated, then Instruments and Xcode&apos;s memory tools become much more useful because I already have a specific behavior to investigate.</Paragraph>

          <SectionTitle>14. Check Database and Local Storage Work</SectionTitle>
          <Paragraph>Local persistence can also become a performance bottleneck.</Paragraph>
          <Paragraph>Core Data, SQLite and other persistence layers are powerful, but fetching or transforming large amounts of data unnecessarily can still hurt responsiveness.</Paragraph>
          <Paragraph>I check whether the application is:</Paragraph>
          <ul><li>Fetching more records than needed</li><li>Performing expensive filtering in memory</li><li>Running storage work on the main thread</li><li>Repeatedly fetching the same data</li><li>Loading large object graphs unnecessarily</li></ul>
          <Paragraph>The same principle applies here as with networking: understand the amount of work first, then optimize the implementation.</Paragraph>

          <SectionTitle>15. Check Navigation and Lifecycle Behavior</SectionTitle>
          <Paragraph>Some performance problems only appear after the user has moved through several screens.</Paragraph>
          <Paragraph>When that happens, I look for objects that should have gone away but are still alive.</Paragraph>
          <Paragraph>Coordinators, view models, subscriptions, notification observers, timers and asynchronous tasks are all worth checking.</Paragraph>
          <Paragraph>A screen that feels progressively slower after repeated navigation is often telling you that something is accumulating.</Paragraph>

          <SectionTitle>16. Concurrency: More Threads Do Not Automatically Mean More Performance</SectionTitle>
          <Paragraph>Moving work off the main thread is useful, but indiscriminately creating background work is not an optimization strategy.</Paragraph>
          <Paragraph>If several tasks compete for CPU, memory or disk access, adding more concurrency can sometimes make the application worse.</Paragraph>
          <Paragraph>I first identify what is independent, what is dependent and what must happen on the main actor. Then I decide where concurrency actually helps.</Paragraph>
          <Paragraph>Swift concurrency gives us good tools for expressing that relationship, but the architecture still has to make sense.</Paragraph>

          <SectionTitle>17. Check the First Launch Separately From a Warm Launch</SectionTitle>
          <Paragraph>Launch performance is another area where context matters.</Paragraph>
          <Paragraph>A warm launch and a cold launch are not the same thing. Cached resources, initialized state and previously loaded data can make subsequent launches look much faster.</Paragraph>
          <Paragraph>For a launch problem, I therefore test the scenario consistently and ask what work is actually required before the first screen is interactive.</Paragraph>
          <Paragraph>A common mistake is putting too much initialization into application startup simply because it is convenient to do it there.</Paragraph>
          <Paragraph>If something is not required immediately, I question whether it really belongs on the critical startup path.</Paragraph>

          <SectionTitle>18. Measure Before and After</SectionTitle>
          <Paragraph>Once I have a likely cause, I make the smallest reasonable change and measure again.</Paragraph>
          <Paragraph>I do not want to end up with a large refactor where nobody can say whether the application actually became faster.</Paragraph>
          <Paragraph>A simple performance loop is:</Paragraph>
          <ol className="mb-6 list-decimal space-y-2 pl-6 text-[17px] leading-8 text-gray-700 dark:text-gray-300"><li>Define the user-visible problem.</li><li>Reproduce it consistently.</li><li>Identify the likely expensive work.</li><li>Change one meaningful thing.</li><li>Measure the same scenario again.</li><li>Keep the change only if it improves the right metric.</li></ol>

          <SectionTitle>19. When I Finally Reach for Instruments</SectionTitle>
          <Paragraph>Instruments becomes much more powerful after I have narrowed the problem down.</Paragraph>
          <Paragraph>I may use different instruments depending on the question:</Paragraph>
          <ul><li><strong>Time Profiler</strong> when I need to understand where CPU time is going.</li><li><strong>Allocations</strong> when I need to understand allocation behavior and memory usage.</li><li><strong>Leaks</strong> when I suspect objects are being leaked.</li><li><strong>Network-related profiling</strong> when network behavior needs deeper investigation.</li><li><strong>SwiftUI-specific diagnostics</strong> when rendering and view updates are the suspected problem.</li></ul>
          <Paragraph>The important part is that I am not opening Instruments and hoping it tells me what is wrong. I already have a question.</Paragraph>
          <blockquote className="my-8 border-l-4 border-orange-500 pl-6 text-xl font-semibold leading-8 text-gray-900 dark:text-white"><Paragraph>&quot;The product list drops frames when images appear. I want to know whether the CPU is spending time decoding images or whether something else is blocking the main thread.&quot;</Paragraph></blockquote>
          <Paragraph>That is a much better profiling question than simply saying, &quot;The app is slow. Let&apos;s open Instruments.&quot;</Paragraph>

          <SectionTitle>20. A Practical Checklist I Use</SectionTitle>
          <Paragraph>When I receive a performance issue, this is roughly the order I work through:</Paragraph>
          <div className="not-prose my-8 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="border-b border-gray-200 bg-gray-50 px-5 py-3 font-semibold dark:border-gray-700 dark:bg-gray-800">iOS Performance Checklist</div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {["Can I reproduce the problem consistently?","What exactly is the user experiencing?","Am I testing the right build configuration?","Is expensive work happening on the main thread?","How many network requests are required?","Can independent requests run concurrently?","Are API responses larger than necessary?","Are images correctly sized, cached and decoded?","Is a list doing expensive work for every cell?","Are SwiftUI state changes causing unnecessary updates?","Are UIKit cells and layout work lightweight?","Is the same computation or request happening repeatedly?","Is memory growing as the same workflow is repeated?","Is local storage work happening efficiently?","Are objects, observers or tasks surviving longer than expected?","Is startup doing work that can happen later?","Can I measure a clear before-and-after result?","Do I now have a specific question that Instruments can answer?"].map((item) => (
                <div key={item} className="flex gap-3 px-5 py-3 text-sm text-gray-700 dark:text-gray-300"><span className="mt-0.5 text-orange-600">✓</span><span>{item}</span></div>
              ))}
            </div>
          </div>

          <SectionTitle>Performance Is Usually a System Problem</SectionTitle>
          <Paragraph>One of the biggest lessons I have learned is that performance rarely belongs to a single layer of an application.</Paragraph>
          <Paragraph>A slow screen can involve the API, JSON decoding, image downloads, persistence, business logic, state management, rendering and the main thread.</Paragraph>
          <Paragraph>That is why I try not to start with assumptions such as &quot;SwiftUI is slow,&quot; &quot;the API is slow,&quot; or &quot;Core Data is slow.&quot;</Paragraph>
          <Paragraph>Those statements are usually too broad to help.</Paragraph>
          <Paragraph>Instead, I look at the complete path from user action to the final pixels on the screen:</Paragraph>
          <div className="not-prose my-8 grid gap-3 sm:grid-cols-5">
            {["User Action","Network / Storage","Business Logic","State Update","UI Rendering"].map((item, index) => (
              <div key={item} className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-center text-sm font-medium dark:border-gray-700 dark:bg-gray-800"><div className="mb-2 text-xs text-orange-600">{index + 1}</div>{item}</div>
            ))}
          </div>
          <Paragraph>If any one of those stages is doing unnecessary work, the user can feel the difference.</Paragraph>

          <SectionTitle>Final Thoughts</SectionTitle>
          <Paragraph>Instruments is one of the best tools in the iOS ecosystem, and there is absolutely a time to use it. But performance optimization does not have to begin with a profiler.</Paragraph>
          <Paragraph>In real-world projects, I usually start much closer to the behavior: reproduce the issue, understand what the user is waiting for, inspect the main thread, look at the data and network calls, check images, examine state updates and look for repeated work.</Paragraph>
          <Paragraph>Often, that is enough to find the first meaningful improvement.</Paragraph>
          <Paragraph>And when it is not enough, I reach for Instruments with a specific question in mind. That makes profiling faster, the results easier to interpret, and the eventual fix much easier to explain to the rest of the team.</Paragraph>
          <Paragraph>Good performance work is not about making every line of code faster. It is about making the application do the right amount of work, at the right time, on the right execution context.</Paragraph>

          <hr />
          <section className="mt-16 border-t border-gray-200 pt-10 dark:border-gray-800">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
              About the Author
            </h2>
            <Paragraph>
              I’m <strong>Rahul Tak</strong>, a Senior iOS Engineer with 10+
              years of professional experience building iOS applications
              across eCommerce, government, finance and retail.
            </Paragraph>

            <Paragraph>
              My experience includes Swift, SwiftUI, UIKit, Objective-C,
              MVVM, VIPER, Clean Architecture, Swift Concurrency and
              enterprise mobile application development. I also led iOS
              teams and worked on large-scale applications where
              architecture, maintainability and technical leadership are as
              important as writing the code itself.
            </Paragraph>
            <a
              href="https://buildswiftly.in"
              className="font-medium text-orange-600 hover:underline dark:text-orange-400"
            >Visit buildswiftly.in →</a>
          </section>
        </article>

        <footer className="mt-16 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">© {new Date().getFullYear()} Rahul Tak. All Rights Reserved.</footer>
      </div>
    </main>
  );
}
