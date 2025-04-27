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
        isHovered ? 'scale-105 shadow-xl' : 'scale-100 shadow-md'
      } bg-white dark:bg-gray-800 cursor-pointer group border-l-4 border-teal-500`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Card Header */}
      <div className="relative w-full h-56 overflow-hidden">
        {/* Subtle grid overlay on image */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:30px_30px] opacity-10 z-10"></div>
        
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-800/40 to-transparent" />
        
        {/* Category Badge - styled like homepage */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-block bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 px-3 py-1 text-xs font-bold border-l-2 border-teal-500">
            {category}
          </span>
        </div>

        {/* Large decorative letter - matching homepage style */}
        <div className="absolute -bottom-6 right-2 text-[80px] font-black text-teal-500/10 select-none z-10 leading-none">
          {title.charAt(0).toUpperCase()}
        </div>

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 w-full p-4">
          <h3 className="text-white text-lg font-bold leading-tight pl-2 border-l-2 border-teal-300">
            <span className="relative inline-block">
              <span className="relative z-10">{title}</span>
              <span className="absolute -bottom-1 left-0 h-2 w-full bg-teal-500/20 -z-10"></span>
            </span>
          </h3>
          <div className="flex items-center mt-3 pl-2">
            <div className="w-6 h-6 rounded-full bg-teal-200 flex items-center justify-center text-xs text-teal-600 font-bold">
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
          className={`absolute top-3 right-3 p-2 transition-all duration-300 z-20 ${
            isBookmarked ? 'text-teal-300' : 'text-white opacity-90'
          }`}
        >
          {isBookmarked ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
          )}
        </button>
      </div>

      {/* Card Body */}
      <div className="bg-white dark:bg-gray-800 p-5">
        {/* Reading Time - styled like homepage elements */}
        <div className="flex items-center mb-4 border-l-2 border-teal-300 pl-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{readingTime} MIN READ</span>
        </div>

        {/* Card content */}
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
          {truncatedBody}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 text-xs font-medium border-b border-teal-300 dark:border-teal-700">
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Button - styled like homepage elements */}
        <div className="flex justify-between items-center mt-4 pt-2 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(true);
            }}
            className="group text-teal-600 dark:text-teal-400 text-sm font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-300 relative inline-flex items-center"
          >
            <span>Read More</span>
            <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-teal-500 group-hover:w-full transition-all duration-300"></span>
          </button>
        </div>
      </div>

      {/* Geometric corner element - matching homepage */}
      <div className="absolute bottom-0 right-0 h-12 w-12 overflow-hidden">
        <div className="absolute bottom-0 right-0 h-24 w-24">
          <svg width="96" height="96" viewBox="0 0 96 96" fill="none" className="absolute bottom-0 right-0">
            <circle cx="96" cy="96" r="48" className="fill-teal-500/10"></circle>
            <circle cx="96" cy="96" r="24" className="fill-teal-500/20"></circle>
          </svg>
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-auto"
          onClick={handleClose}
        >
          {/* Animated background with particles effect */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm">
            {/* Animated particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute rounded-full bg-teal-500/20"
                  style={{
                    width: `${Math.random() * 10 + 5}px`,
                    height: `${Math.random() * 10 + 5}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 10 + 10}s linear infinite`
                  }}
                ></div>
              ))}
            </div>
          </div>

          <div
            className={`w-full max-w-4xl bg-white dark:bg-gray-800 overflow-hidden rounded-xl shadow-2xl flex flex-col border-l-4 border-teal-500 transition-all duration-300 ${
              animateOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            <div className="relative h-64">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-teal-800/40 to-transparent" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#0d9488_1px,transparent_1px),linear-gradient(to_bottom,#0d9488_1px,transparent_1px)] bg-[size:30px_30px] opacity-10"></div>
              
              {/* Large decorative letter */}
              <div className="absolute top-4 right-12 text-[120px] font-black text-white/10 select-none">
                {title.charAt(0).toUpperCase()}
              </div>
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Article Body in Expanded View */}
            <div className="p-6 sm:p-8 relative">
              {/* Category and reading time */}
              <div className="flex items-center mb-4 space-x-4">
                <span className="bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 text-xs font-bold border-l-2 border-teal-500">
                  {category}
                </span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {readingTime} min read
                </div>
              </div>
              
              {/* Title with highlight effect */}
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 pl-3 border-l-3 border-teal-500">
                <span className="relative inline-block">
                  <span className="relative z-10">{title}</span>
                  <span className="absolute -bottom-1 left-0 h-2 w-full bg-teal-200 dark:bg-teal-800 -z-10"></span>
                </span>
              </h2>
              
              {/* Author info */}
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 rounded-full bg-teal-200 flex items-center justify-center text-sm text-teal-600 font-bold">
                  {author.charAt(0).toUpperCase()}
                </div>
                <div className="ml-2">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{author}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{publishDate}</p>
                </div>
              </div>
              
              {/* Full content with first letter styling */}
              <div className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-teal-600 dark:first-letter:text-teal-400 first-letter:mr-1 first-letter:float-left">
                  {body}
                </p>
              </div>

              {/* Tags section */}
              <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-gray-100 dark:border-gray-700">
                {tags.map((tag, index) => (
                  <span key={index} className="bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full text-xs font-medium border-b border-teal-300 dark:border-teal-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Close Button at Bottom */}
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleClose}
                  className="group inline-flex items-center justify-center text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/30 hover:bg-teal-100 dark:hover:bg-teal-900/50 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300"
                >
                  <span>Close</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS for floating particles animation */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Card;