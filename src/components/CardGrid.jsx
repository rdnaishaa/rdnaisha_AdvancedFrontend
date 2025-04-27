import { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // Import your theme context
import Card from './Card';

const CardGrid = ({ data }) => {
  const { theme } = useContext(ThemeContext); // Access the current theme

  return (
    <section id="gallery" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Conditional text color based on the theme */}
        <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-teal-800' : 'text-white'} mb-8 text-center`}>
          Featured Articles
        </h2>
        
        {/* Grid layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {data.map(item => (
            <Card
              key={item.id}
              title={item.title}
              body={item.body}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
