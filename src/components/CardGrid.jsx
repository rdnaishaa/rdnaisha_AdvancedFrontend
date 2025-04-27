import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Card from './Card';

const CardGrid = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  if (!data || data.length < 5) {
    return <div>Tidak cukup data untuk menampilkan grid</div>;
  }

  const firstRowData = data.slice(0, 2);
  
  const secondRowData = data.slice(2, 5);

  return (
    <section id="gallery" className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        {/* Judul bagian */}
        <h2 className={`text-3xl font-bold ${theme === 'light' ? 'text-teal-800' : 'text-white'} mb-6 text-center`}>
          Featured Articles
        </h2>
        
        {/* Baris pertama: 2 artikel besar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {firstRowData.map(item => (
            <div key={item.id} className="h-full">
              <Card
                title={item.title}
                body={item.body}
                image={item.image}
                category={item.category || "Article"}
                tags={item.tags || ["Featured"]}
              />
            </div>
          ))}
        </div>
        
        {/* Baris kedua: 3 artikel kecil */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {secondRowData.map(item => (
            <div key={item.id} className="h-full">
              <Card
                title={item.title}
                body={item.body}
                image={item.image}
                category={item.category || "Article"}
                tags={item.tags || ["Featured"]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;