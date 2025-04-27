// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import TodoList from './components/TodoList';
import { ThemeProvider } from './components/ThemeContext';

const App = () => {

  const App = () => {
    return (
      <div>
        <Navbar />
        
      {/* Konten halaman */}
      <section id="welcome" className="h-screen bg-gray-200">
              <h2 className="text-center text-4xl font-bold">Welcome to My SBD Project</h2>
              <p className="text-center text-lg mt-4">This is a demonstration of React components for the Advanced Frontend module.</p>
            </section>
            <section id="featured-articles" className="h-screen bg-gray-300">
              <h2 className="text-center text-4xl font-bold">Featured Articles</h2>
              {/* Artikel atau konten lainnya bisa ditambahkan di sini */}
            </section>
          </div>
        );
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
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="w-full bg-teal-700 dark:bg-teal-900 text-white transition-colors duration-300">
          <div className="w-full px-4 sm:px-6 lg:px-12 py-24 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Welcome to My SBD Project</h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              This is a demonstration of React components for the Advanced Frontend module.
            </p>
          </div>
        </div>

        {/* Card Grid Section */}
        <CardGrid data={data.results} />

        {/* useState and useEffect Demos Section */}
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12 bg-teal-50 dark:bg-gray-900 transition-colors duration-300">
          <h2 className="text-3xl font-bold text-teal-800 dark:text-teal-300 mb-8 text-center">useState & useEffect Demos</h2>
          <p className="text-center text-teal-600 dark:text-teal-400 mb-12 max-w-2xl mx-auto">
            These components demonstrate different ways to use React's useState and useEffect hooks.
          </p>

          {/* Center the components */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
            <TodoList />
          </div>
        </div>

        {/* Footer */}
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
