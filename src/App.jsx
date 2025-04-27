import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import TodoList from './components/TodoList';
import { ThemeProvider } from './components/ThemeContext';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const App = () => {
  const todoListRef = useRef(null);

  const scrollToTodoList = () => {
    todoListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const data = {
    page: 1,
    results: [
      
      {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        image: "https://picsum.photos/seed/post1/500",
      },
      {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        image: "https://picsum.photos/seed/post2/500",
      },
      {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        image: "https://picsum.photos/seed/post3/500",
      },
      {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        image: "https://picsum.photos/seed/post4/500",
      },
      {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        image: "https://picsum.photos/seed/post5/500",
      },
    ],
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Navbar />

        <section id="home" className="relative bg-teal-50 dark:bg-gray-900 text-teal-800 dark:text-teal-300 overflow-hidden">
  {/* Background grid pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:40px_40px] opacity-5"></div>
  
  {/* Main content with offset positioning */}
  <div className="relative py-24 ml-8 md:ml-16">
    {/* Large decorative letter */}
    <div className="absolute -left-4 top-16 text-[180px] font-black text-teal-800/5 dark:text-teal-500/10 select-none">S</div>
    
    <div className="relative max-w-4xl">
      {/* Title with cutout effect */}
      <h1 className="text-5xl md:text-6xl font-extrabold pl-4 border-l-4 border-teal-500">
        <span className="relative inline-block">
          <span className="relative z-10">Welcome to My</span>
          <span className="absolute -bottom-2 left-0 h-3 w-full bg-teal-200 dark:bg-teal-800 -z-10"></span>
        </span>
        <br/>
        <span className="text-teal-600 dark:text-teal-400">SBD Project</span>
      </h1>
      
      {/* Description with visual separator */}
      <div className="mt-8 ml-4 pl-4 border-l-4 border-teal-300 dark:border-teal-700">
        <p className="text-xl">
          <span className="inline-block pb-1 border-b border-teal-400 dark:border-teal-600">React components</span> for the Advanced Frontend module.
        </p>
      </div>
    </div>
  </div>
  
  {/* Geometric accent */}
  <div className="absolute bottom-0 right-0">
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
      <circle cx="160" cy="160" r="80" className="fill-teal-500/10"></circle>
      <circle cx="160" cy="160" r="40" className="fill-teal-500/20"></circle>
      <rect x="80" y="80" width="80" height="80" className="fill-teal-600/20"></rect>
    </svg>
  </div>
  
  {/* Top-right corner accent */}
  <div className="absolute top-0 right-0 h-16 w-16 bg-teal-500 dark:bg-teal-600 clip-triangle"></div>
  
  {/* Custom style for clip-triangle */}
  <style jsx>{`
    .clip-triangle {
      clip-path: polygon(100% 0, 0 0, 100% 100%);
    }
  `}</style>
</section>

        <CardGrid data={data.results} />

        <section id="task" className="bg-teal-50 dark:bg-gray-900 text-teal-800 dark:text-teal-300 py-16">
       <div className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-12 bg-teal-100 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ease-in-out">
          <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-300 mb-8 text-center">
            Interactive Features Showcase
          </h2>
          <p className="text-center mb-6 text-teal-600 dark:text-teal-400">
            This section showcases real-time updates and dynamic features, offering a seamless,
            <br />
            interactive user experience where inputs trigger instant visual and data changes.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <TodoList ref={todoListRef} />
          </div>
        </div>
        </section>

        <section id="contact" className="bg-teal-800 dark:bg-gray-700 text-white py-16 relative overflow-hidden">
  {/* Simple geometric accent shapes */}
  <div className="absolute top-0 right-0 w-40 h-40 bg-teal-700 dark:bg-gray-600 rounded-bl-full opacity-50 transform rotate-45"></div>
  <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-700 dark:bg-gray-600 rounded-tr-full opacity-40 transform rotate-45"></div>

  {/* Subtle diagonal lines */}
  <div className="absolute inset-0 overflow-hidden opacity-15">
    <div className="h-full w-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor, currentColor 2px, transparent 2px, transparent 12px)' }}></div>
  </div>

  <div className="w-full px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto relative">
    {/* Unique title with side marker */}
    <div className="flex items-center mb-8">
      <div className="w-1 h-12 bg-teal-300 rounded-full mr-4 animate-pulse"></div>
      <h2 className="text-4xl font-extrabold text-teal-100">Contact Us</h2>
    </div>

    <p className="mb-6 text-lg font-light">We'd love to hear from you! Reach out with any questions or feedback.</p>

    {/* Email with subtle animation */}
    <div className="mb-4 group flex items-center">
      <span className="inline-block mr-2 text-teal-200 font-medium">Email:</span>
      <a 
        href="mailto:raishasyauqi7@gmail.com" 
        className="text-teal-200 relative overflow-hidden group-hover:text-white transition-colors duration-300"
      >
        raishasyauqi7@gmail.com
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
      </a>
    </div>

    {/* Social links with unique indicator */}
    <div className="mt-6">
      <div className="flex items-center space-x-6">
        <a 
          href="https://github.com/rdnaishaa" 
          className="text-teal-200 hover:text-white relative group transition-colors duration-300"
        >
          <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">•</span>
          GitHub
        </a>

        <a 
          href="https://twitter.com" 
          className="text-teal-200 hover:text-white relative group transition-colors duration-300"
        >
          <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">•</span>
          Twitter
        </a>
      </div>
    </div>

    {/* Simple decorative dots with animation */}
    <div className="absolute bottom-2 right-4 flex space-x-2.5">
      <div className="w-2 h-2 rounded-full bg-teal-200 opacity-70 animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-teal-200 opacity-50 animate-bounce"></div>
      <div className="w-2 h-2 rounded-full bg-teal-200 opacity-30 animate-bounce"></div>
    </div>
  </div>
</section>

        <footer className="w-full bg-teal-800 dark:bg-gray-800 text-teal-100 py-8 transition-colors duration-300">
          <div className="w-full px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} R. Aisha Syauqi Ramadhan - SBD Modul 9</p>
          </div>
        </footer>

      </div>
    </ThemeProvider>
  );
};

export default App;
