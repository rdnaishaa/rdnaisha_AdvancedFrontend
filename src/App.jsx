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

        <section id="home" className="bg-teal-50 dark:bg-gray-900 text-teal-800 dark:text-teal-300 py-16">
        <div className="w-full bg-teal-700 dark:bg-teal-900 text-white transition-colors duration-300">
          <div className="w-full px-4 sm:px-6 lg:px-12 py-24 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Welcome to My SBD Project</h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              This is a demonstration of React components for the Advanced Frontend module.
            </p>
          </div>
        </div>
        </section>

        <CardGrid data={data.results} />

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

        <section id="contact" className="bg-teal-800 dark:bg-gray-700 text-white py-16 relative overflow-hidden">
          {/* Simple geometric accent shapes */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-700 dark:bg-gray-600 rounded-bl-full opacity-50"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-700 dark:bg-gray-600 rounded-tr-full opacity-40"></div>
          
          {/* Subtle diagonal lines */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="h-full w-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, currentColor, currentColor 1px, transparent 1px, transparent 10px)' }}></div>
          </div>
          
          <div className="w-full px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto relative">
            {/* Unique title with side marker */}
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-white rounded-full mr-4"></div>
              <h2 className="text-3xl font-bold">Contact Us</h2>
            </div>
            
            <p className="mb-6">Feel free to reach out for any inquiries or feedback!</p>
            
            {/* Email with subtle animation */}
            <div className="mb-4 group flex items-center">
              <span className="inline-block mr-2 text-teal-200">Email:</span>
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
            
            {/* Simple decorative dots */}
            <div className="absolute bottom-2 right-4 flex space-x-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-200 opacity-70"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-200 opacity-40"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-200 opacity-20"></div>
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
