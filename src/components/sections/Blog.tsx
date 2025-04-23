import { motion } from "framer-motion";
import {
  CalendarDays,
  MessageSquare,
  Tag,
  ArrowRight,
  Code,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Sample blog post data
const BLOG_POSTS = [
  {
    id: "journey-begins",
    title: "My Coding Journey Begins",
    date: "April 10, 2024",
    category: "Personal",
    tags: ["Beginnings", "Goals", "Learning Path"],
    excerpt:
      "A childhood fascination with computers finally turns into a focused plan—here's how I'm teaching myself to build the web, one commit at a time.",
    content: `
      <p>
        ✨ Ever since I snuck my first glimpse of a glowing DOS prompt in elementary school,
        I've been captivated by what happens behind the screen. Back then, I had more questions
        than answers—and no real way to dive deeper. High school gave me my first legit
        computer lab, but time (and dial-up) were short. Today, the gates are wide open,
        and I'm sprinting through them.
      </p>
  
      <p>
        🚀 So, consider this <em>Day 1</em> of my formal coding journey. I've set up VS Code,
        initialized my first GitHub repository, and configured Git like a badge of honor.
        The plan? Teach myself to wield HTML, CSS, and JavaScript with confidence, then
        climb the React mountain and dabble in data science along the way.
      </p>
  
      <h3>🧰 Tools on my desk (and in my bookmarks):</h3>
      <ul>
        <li>💻 VS Code with a minimalist theme (goodbye, distractions)</li>
        <li>📊 Git &amp; GitHub for version control—and accountability</li>
        <li>📚 freeCodeCamp and MDN for the fundamentals</li>
        <li>📝 Obsidian for note-taking (because forgetting hard-won lessons hurts)</li>
      </ul>
  
      <h3>🎯 Goals for the next 3&nbsp;months:</h3>
      <ul>
        <li>🔍 Master the core trio: HTML, CSS, and JavaScript</li>
        <li>🚢 Ship at least two small, <em>finished</em> personal projects</li>
        <li>⚛️ Crack open React and build a portfolio SPA</li>
        <li>🤝 Submit my first pull request to an open-source repo</li>
      </ul>
  
      <p>
        📝 I'll log everything here—wins, bugs, late-night aha! moments, and the inevitable
        face-palm fixes. If you're on a similar path, or just curious how a lifelong
        tinkerer turns curiosity into craft, stick around. Let's learn in public
        and cheer each other on.
      </p>
    `,
    readTime: "3 min read",
  },
  {
    id: "leveling-up-react-magic",
    title: "Leveling-Up: From Static Pages to React Magic ✨",
    date: "August 12, 2025",
    category: "Technical",
    tags: ["React", "Tailwind", "Learning Path"],
    excerpt:
      "How I went from rigid HTML pages to component-driven React apps—plus the lo-fi beats, soccer breaks, and late-night aha moments that kept me going.",
    content: `
      <h2>Leveling-Up: From Static Pages to React Magic ✨</h2>
  
      <p>
        I started my coding journey with that classic trio—<strong>HTML, CSS, and vanilla 
        JavaScript</strong>—building pages that loaded just fine but felt, well… frozen in time 🥶. 
        I wrestled with media queries, <code>vh</code>/<code>vw</code> units, and every “100&nbsp;% height” hack 
        Stack Overflow could offer. My layouts were technically responsive, yet somehow still 
        looked like 2009 called and wanted its websites back.
      </p>
  
      <p>
        So I asked myself: <em>What if I could make the browser do more of the heavy lifting?</em> 
        Enter <strong>React</strong> and <strong>Tailwind CSS</strong>.
      </p>
  
      <h3>Discovering the DOM (and Its Quirks) 🕸️</h3>
      <ul>
        <li>Learned how the <strong>DOM</strong> actually works, which felt like pulling back the curtain on a magic show.</li>
        <li>Got comfortable adding <strong>event listeners</strong>, manipulating nodes, and watching pages react in real time.</li>
        <li>Realized that juggling state across multiple elements manually can turn a fun side-project into spaghetti faster than you can say <code>querySelectorAll()</code>.</li>
      </ul>
  
      <h3>React to the Rescue ⚛️</h3>
      <ul>
        <li>Dove into <strong>ES6+</strong> territory—arrow functions, destructuring, ternaries (<code>condition ? magic : chaos</code>)—and immediately loved the readability boost.</li>
        <li>Discovered <strong>React hooks</strong> (<code>useState</code>, <code>useEffect</code>, <code>useRef</code>) and felt like I’d found the cheat codes to state management.</li>
        <li>Appreciated how <strong>components</strong> let me think in reusable chunks instead of duplicated markup. Goodbye, copy-paste HTML; hello, DRY coding!</li>
        <li>Tailwind’s utility classes turned my styling process from “tweak CSS, refresh, sigh” into “type class, smile” 😎🎨.</li>
      </ul>
  
      <h3>Challenges &amp; Ah-Ha Moments 🤯</h3>
      <ul>
        <li>🏗️ <strong>Responsive headaches</strong>: Even with media queries, flexbox and grid sometimes felt like solving a Rubik’s cube blindfolded.</li>
        <li>🔄 <strong>State chaos</strong>: Accidentally triggered infinite re-renders more times than I can count (thanks again, <code>useEffect</code>).</li>
        <li>🚧 <strong>Imposter syndrome</strong>: Reading docs and feeling like everyone else “gets it” instantly—spoiler: they don’t!</li>
      </ul>
  
      <p>
        But each bug squashed and each midnight breakthrough kept the dopamine meters full. 
        The thrill of seeing a component update without a full page reload? Pure magic.
      </p>
  
      <h3>Keeping My Sanity (and Vibes) 🎧</h3>
      <p>When my brain starts buffering:</p>
      <ul>
        <li><strong>Lo-fi beats</strong> on repeat (shout-out to the “coding/coffee” playlists ☕🎶).</li>
        <li>Quick footy break on the <strong>soccer field</strong> to stretch the legs and reset focus.</li>
        <li>Tinkering on the <strong>piano</strong>—nothing fancy, just chords that sound good in the moment.</li>
        <li>Occasional YouTube rabbit-holes and chats with friends who politely endure my “one last bug” rants.</li>
      </ul>
  
      <h3>What’s Next? 🚀</h3>
      <ol>
        <li><strong>Advanced React patterns</strong> (Context, Reducers, maybe a dab of Zustand).</li>
        <li>Building a full-stack project with a Node/Express backend—gotta feed those components real data!</li>
        <li>Continuing to document every win, fail, and face-palm right here so future-me—and maybe future-you—can laugh and learn along the way.</li>
      </ol>
  
      <p>
        Thanks for following my adventure. If you’re on a similar path, drop a comment or DM—let’s 
        swap tips, playlists, or even team up on an open-source issue. Happy coding! 🚢
      </p>
    `,
    readTime: "7 min read",
  },
  {
    id: "data-visualization",
    title: "Data Visualization with D3.js",
    date: "September 15, 2023",
    category: "Technical",
    tags: ["Data Visualization", "D3.js", "JavaScript"],
    excerpt:
      "Exploring the powerful capabilities of D3.js for creating dynamic and interactive data visualizations.",
    content: `
      <p>This month, I've been exploring D3.js for a data visualization project. Coming from a mathematics background, I was drawn to D3's power and flexibility.</p>
      
      <p>The learning curve was steep, but after completing several tutorials and small projects, I'm now able to create complex visualizations from scratch.</p>
      
      <h3>My D3.js learning path:</h3>
      <ul>
        <li>Started with basic bar charts and line graphs</li>
        <li>Progressed to interactive visualizations with transitions</li>
        <li>Learned about scales, axes, and data binding</li>
        <li>Combined D3 with React using useRef and useEffect</li>
      </ul>
      
      <p>For my current project, I'm visualizing time-series data with interactive elements that allow users to explore different time periods. D3's flexibility makes it possible to create exactly what I envision.</p>
    `,
    readTime: "6 min read",
  },
  {
    id: "machine-learning",
    title: "Diving into Machine Learning",
    date: "November 30, 2023",
    category: "Technical",
    tags: ["Machine Learning", "Python", "scikit-learn"],
    excerpt:
      "My journey learning machine learning fundamentals and building my first predictive models.",
    content: `
      <p>I've spent the past few weeks immersed in machine learning fundamentals. After completing several online courses, I'm now building my first practical ML projects.</p>
      
      <p>I've been focusing on supervised learning, starting with classic algorithms like linear regression and decision trees before moving to more complex models.</p>
      
      <h3>Current projects:</h3>
      <ul>
        <li>Student performance prediction using Random Forest</li>
        <li>Time series analysis for resource optimization</li>
        <li>Basic NLP for text classification</li>
      </ul>
      
      <p>The most challenging aspect has been feature engineering - learning how to transform raw data into meaningful features that ML algorithms can use effectively.</p>
      
      <p>Next month, I plan to explore deep learning with TensorFlow and see how neural networks can be applied to solve more complex problems.</p>
    `,
    readTime: "7 min read",
  },
  {
    id: "looking-ahead",
    title: "Looking Ahead: 2024 Learning Goals",
    date: "January 12, 2024",
    category: "Personal",
    tags: ["Goals", "Learning Path", "Career Development"],
    excerpt:
      "Setting ambitious but achievable coding and career development goals for the new year.",
    content: `
      <p>As I reflect on my progress over the past year, I'm setting new learning goals for 2024. My focus is on deepening my expertise in key areas while exploring emerging technologies.</p>
      
      <h3>2024 Technical Goals:</h3>
      <ul>
        <li>Master TypeScript and Next.js for frontend development</li>
        <li>Build a full-stack application with authentication and database integration</li>
        <li>Deepen my understanding of cloud services (AWS/Azure)</li>
        <li>Explore AI-assisted development tools and workflows</li>
        <li>Contribute to open-source projects regularly</li>
      </ul>
      
      <h3>Beyond coding:</h3>
      <ul>
        <li>Improve technical writing through blog posts</li>
        <li>Present at a local tech meetup</li>
        <li>Mentor a beginner programmer</li>
      </ul>
      
      <p>I'm excited about the road ahead! The tech landscape is constantly evolving, and I'm committed to growing alongside it.</p>
    `,
    readTime: "4 min read",
  },
];

export default function Blog() {
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const togglePost = (id: string) => {
    if (expandedPost === id) {
      setExpandedPost(null);
    } else {
      setExpandedPost(id);
    }
  };

  return (
    <section
      id="blog"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black text-gray-900 dark:text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-[500px] h-[500px] top-[10%] right-[-100px] rounded-full bg-gradient-to-br from-blue-400/5 to-indigo-400/5 blur-3xl"></div>
        <div className="absolute w-[600px] h-[600px] top-[40%] left-[-150px] rounded-full bg-gradient-to-tr from-purple-400/5 to-pink-400/5 blur-3xl"></div>

        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20 dark:opacity-10"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 8 0 L 0 0 0 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Blog & Development Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Documenting my coding journey, sharing challenges and breakthroughs,
            and exploring new technologies and ideas in the world of software
            development.
          </p>
        </motion.div>

        {/* Blog Posts Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/80 via-indigo-500/80 to-purple-500/80 transform md:translate-x-[-0.5px] hidden md:block"></div>

          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`mb-12 md:mb-16 relative ${
                index % 2 === 0
                  ? "md:text-left md:ml-0 md:mr-auto"
                  : "md:text-left md:ml-0 md:mr-auto"
              } w-full md:w-[90%]`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-7 ${
                  index % 2 === 0
                    ? "right-[-8px] md:left-auto"
                    : "left-[-8px] md:left-[-8px]"
                } w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-500 z-10 hidden md:block`}
              ></div>

              {/* Blog post card */}
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 dark:border-gray-800"
              >
                {/* Card header with date and category */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" />
                    <span className="text-sm font-medium">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium bg-white/20 px-2 py-0.5 rounded">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {post.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-4 justify-start">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-2 py-1 rounded-full ${
                          index % 2 === 0
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            : "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-left">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => togglePost(post.id)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 p-0 h-auto"
                    >
                      {expandedPost === post.id ? "Read Less" : "Read More"}
                      <ChevronRight
                        className={`ml-1 w-4 h-4 transition-transform ${
                          expandedPost === post.id ? "rotate-90" : ""
                        }`}
                      />
                    </Button>
                  </div>

                  {/* Expanded content */}
                  {expandedPost === post.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800"
                    >
                      <div
                        className="prose dark:prose-invert prose-blue max-w-none text-left"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Future Topics Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border border-blue-100 dark:border-blue-800/40 p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Coming Soon: Future Topics & Interests
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center text-blue-700 dark:text-blue-400">
                  <Code className="w-5 h-5 mr-2" />
                  Technical Explorations
                </h4>
                <ul className="space-y-3">
                  {[
                    "Building scalable applications with Next.js",
                    "Exploring advanced state management with Zustand",
                    "Implementing machine learning models in production",
                    "Building custom data visualization components",
                    "Serverless architectures and cloud computing",
                  ].map((topic, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                      {topic}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold flex items-center text-indigo-700 dark:text-indigo-400">
                  <Star className="w-5 h-5 mr-2" />
                  Personal Interests
                </h4>
                <ul className="space-y-3">
                  {[
                    "Current reading list: Technical and fiction books",
                    "Movie & show recommendations for developers",
                    "Balancing coding projects with other interests",
                    "Creating an effective learning routine",
                    "Building a personal brand as a developer",
                  ].map((topic, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-indigo-500" />
                      {topic}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
