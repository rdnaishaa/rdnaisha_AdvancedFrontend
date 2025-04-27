import { useState, useEffect } from 'react';

const Card = ({ title, body, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingTime, setReadingTime] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);

  const truncatedBody = body.length > 100 ? `${body.substring(0, 100)}...` : body;

  useEffect(() => {
    const wordCount = body.split(/\s+/).length;
    const time = Math.ceil(wordCount / 200);
    setReadingTime(time < 1 ? 1 : time);
  }, [body]);

  const articleNumber = Math.floor((title.length * body.length) % 100);

  return (
    <div 
      className={`relative overflow-hidden transition-all duration-500 rounded-lg shadow-md transform ${isHovered ? 'scale-105' : 'scale-100'} ${isExpanded ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Main Card */}
      <div className={`relative flex flex-col transition-all duration-500`}>
        {/* Top Half */}
        <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-80" />
          <div className="absolute bottom-0 left-0 w-full p-2">
            <span className="inline-block bg-teal-600 text-white px-2 py-0.5 text-[10px] font-semibold mb-1">
              #{articleNumber}
            </span>
            <h3 className="text-white text-lg font-bold leading-snug">
              {title}
            </h3>
          </div>
          {/* Bookmark Button */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsBookmarked(!isBookmarked);
            }}
            className="absolute top-2 right-2 bg-white bg-opacity-30 backdrop-blur-sm p-1.5 rounded-full transition-transform duration-300 hover:scale-110 z-20"
          >
            {isBookmarked ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            )}
          </button>
        </div>

        {/* Bottom Half */}
        <div className="relative flex">
          {/* Left */}
          <div className="w-1/3 bg-teal-600 dark:bg-teal-800 flex items-center justify-center rounded-bl-lg py-6">
            <div className="text-white text-[10px] transform -rotate-90 font-semibold tracking-widest">
              {readingTime} MIN
            </div>
          </div>
          {/* Right */}
          <div className="w-2/3 bg-white dark:bg-gray-800 p-3 flex flex-col rounded-br-lg">
            <p className="text-gray-600 dark:text-gray-300 text-xs flex-grow leading-snug">
              {truncatedBody}
            </p>
            <div className="mt-2 flex items-center justify-between">
              <div className="h-1.5 w-8 bg-teal-500 rounded-full"></div>
              <button className="text-teal-600 dark:text-teal-400 text-xs font-semibold flex items-center">
                <span>More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded View */}
      <div className={`absolute inset-0 bg-white dark:bg-gray-800 transform transition-transform duration-500 ${isExpanded ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-3">
            <span className="bg-teal-600 text-white px-2 py-0.5 text-xs font-semibold">
              #{articleNumber}
            </span>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
          <div className="w-full h-32 mb-3 overflow-hidden rounded-md">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 leading-relaxed">
            {body}
          </p>
          <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="ml-1">{readingTime} min read</span>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsBookmarked(!isBookmarked);
              }}
              className="flex items-center text-xs text-gray-600 dark:text-gray-300"
            >
              {isBookmarked ? (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                  <span className="ml-1">Bookmarked</span>
                </>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  <span className="ml-1">Bookmark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
