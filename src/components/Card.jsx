import React, { useState, useEffect } from 'react';

const Card = ({
  title,
  body,
  image,
  category = "Article",
  publishDate = "April 27, 2025",
  author = "Anonymous",
  tags = ["Featured"]
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingTime, setReadingTime] = useState(5);
  const [isExpanded, setIsExpanded] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);

  const truncatedBody = body.length > 150 ? `${body.substring(0, 150)}...` : body;

  useEffect(() => {
    const wordCount = body.split(/\s+/).length;
    const time = Math.ceil(wordCount / 200);
    setReadingTime(time < 1 ? 1 : time);
  }, [body]);

  const articleId = `${title.length}${body.length}`.substring(0, 3);

  const handleClose = (e) => {
    e.stopPropagation();
    if (animateOut) return;
    setAnimateOut(true);
    setTimeout(() => {
      setIsExpanded(false);
      setAnimateOut(false);
    }, 300);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl transition-all duration-500 transform ${
        isHovered ? 'scale-105 shadow-xl' : 'scale-100 shadow-lg'
      } bg-white dark:bg-gray-800 cursor-pointer group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Header */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100 brightness-90'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center bg-teal-600 text-white px-3 py-1 text-xs font-bold rounded-lg transform transition-transform duration-300 group-hover:translate-y-0">
            {category}
          </span>
        </div>

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-white text-lg font-bold leading-tight drop-shadow-xl">{title}</h3>
          <div className="flex items-center mt-2">
            <div className="w-5 h-5 rounded-full bg-teal-200 flex items-center justify-center text-xs text-teal-600 font-bold">
              {author.charAt(0).toUpperCase()}
            </div>
            <span className="ml-2 text-xs text-white/90">{author}</span>
          </div>
        </div>

        {/* Bookmark Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsBookmarked(!isBookmarked);
          }}
          className={`absolute top-3 right-3 bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-300 ${
            isBookmarked ? 'bg-teal-600 text-white scale-110' : 'text-white opacity-90'
          }`}
        >
          {isBookmarked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          )}
        </button>
      </div>

      {/* Card Body */}
      <div className="bg-white dark:bg-gray-800 p-4 transition-all duration-300 ease-in-out group-hover:scale-105">
        {/* Reading Time */}
        <div className="flex items-center mb-3">
          <div className="relative h-6 w-6 rounded-full bg-teal-600 flex items-center justify-center mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{readingTime} MIN READ</span>
        </div>

        {/* Card content */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {truncatedBody}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsExpanded(true)}
            className="text-teal-600 dark:text-teal-400 text-xs font-semibold hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300"
          >
            Read More
          </button>
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 sm:p-6 overflow-auto"
          onClick={handleClose}
        >
          <div
            className="w-full max-w-4xl bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Article Body in Expanded View */}
            <div className="p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">{title}</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">{body}</p>

              {/* Tags section */}
              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
