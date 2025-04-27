// components/CardGrid.jsx
import Card from './Card';

const CardGrid = ({ data }) => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-teal-800 mb-8 text-center">Featured Articles</h2>
      
      {/* Grid layout untuk menata card */}
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
  );
};

export default CardGrid;
