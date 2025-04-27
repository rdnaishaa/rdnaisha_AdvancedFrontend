import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Track scroll position for navbar hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPosition(scrollPosition);
      setScrollPosition(currentScrollPos);

      // Show/hide navbar based on scroll direction
      if (currentScrollPos > 80) {
        setIsVisible(prevScrollPosition > currentScrollPos || currentScrollPos < 10);
      } else {
        setIsVisible(true);
      }

      // Update active menu item based on scroll position
      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, prevScrollPosition]);

  // Helper function to update active section based on scroll position
  const updateActiveSection = () => {
    const sections = navItems.map(item => {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        return {
          id: item,
          offsetTop: element.offsetTop - 100, // Adjust for navbar height
          offsetBottom: element.offsetTop + element.offsetHeight - 100
        };
      }
      return null;
    }).filter(Boolean);

    const currentPosition = window.pageYOffset;

    for (const section of sections) {
      if (currentPosition >= section.offsetTop && currentPosition < section.offsetBottom) {
        if (activeItem !== section.id) {
          setActiveItem(section.id);
        }
        break;
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Enhanced click handler with smooth scrolling
  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);

    // Smooth scroll to the section
    const targetSection = document.getElementById(item.toLowerCase());
    if (targetSection) {
      // Calculate position accounting for navbar height
      const navbarHeight = 64; // Default navbar height in pixels
      const targetPosition = targetSection.offsetTop - navbarHeight;

      // Smooth scroll with animation
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = ['Home', 'Gallery', 'Journey', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm shadow-md transition-all duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo with hover effect */}
          <div className="flex-shrink-0 group">
            <h1 className="text-teal-700 dark:text-teal-400 font-bold text-xl relative overflow-hidden">
              R. Aisha Syauqi Ramadhani
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-teal-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </h1>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => handleMenuItemClick(item)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 overflow-hidden
                  ${activeItem === item 
                    ? 'text-white dark:text-white' 
                    : 'text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200'}`}
              >
                {/* Active background with animation */}
                {activeItem === item && (
                  <span className="absolute inset-0 bg-teal-600 dark:bg-teal-700 -z-10 scale-100 rounded-md"></span>
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 bg-teal-100 dark:bg-gray-800 -z-20 scale-0 rounded-md group-hover:scale-100 transition-transform duration-300"></span>
                
                {/* Text with indicator dot */}
                <span className="flex items-center">
                  {item}
                  {activeItem === item && (
                    <span className="ml-1.5 h-1.5 w-1.5 bg-white rounded-full inline-block"></span>
                  )}
                </span>
              </button>
            ))}
            
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center ml-4 p-2 rounded-md text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200 hover:bg-teal-100 dark:hover:bg-gray-800 focus:outline-none overflow-hidden relative"
              aria-expanded={isMenuOpen}
            >
              <span className={`absolute inset-0 bg-teal-100 dark:bg-gray-700 transform transition-transform duration-300 ${isMenuOpen ? 'scale-100' : 'scale-0'} rounded-md -z-10`}></span>
              
              <div className="h-6 w-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} translate-y-2.5`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button 
              key={item}
              onClick={() => handleMenuItemClick(item)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 relative overflow-hidden
                ${activeItem === item 
                  ? 'text-white bg-teal-600 dark:bg-teal-700' 
                  : 'text-teal-600 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-gray-800 hover:text-teal-800 dark:hover:text-teal-200'}`}
            >
              <div className="flex justify-between items-center">
                <span>{item}</span>
                {activeItem === item && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;