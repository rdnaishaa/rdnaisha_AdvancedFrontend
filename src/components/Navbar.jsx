import { useState, useEffect, useContext } from 'react';
import ThemeToggle from './ThemeToggle';
import { ThemeContext } from './ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setPrevScrollPosition(scrollPosition);
      setScrollPosition(currentScrollPos);

      setHasScrolled(currentScrollPos > 20);

      if (currentScrollPos > 80) {
        setIsVisible(prevScrollPosition > currentScrollPos || currentScrollPos < 10);
      } else {
        setIsVisible(true);
      }

      updateActiveSection();
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition, prevScrollPosition]);

  const updateActiveSection = () => {
    const sections = navItems.map(item => {
      const element = document.getElementById(item.toLowerCase());
      if (element) {
        return {
          id: item,
          offsetTop: element.offsetTop - 100,
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

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);

    const targetSection = document.getElementById(item.toLowerCase());
    if (targetSection) {
      const navbarHeight = 64;
      const targetPosition = targetSection.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = ['Home', 'Gallery', 'Task', 'Contact'];

  return (
    <nav 
      className={`fixed top-0 w-full backdrop-blur-md transition-all duration-500 z-50 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'} 
        ${hasScrolled ? 'bg-white/80 dark:bg-gray-900/90 shadow-lg shadow-teal-500/10' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 relative group">
            <h1 className="font-bold text-lg sm:text-xl relative overflow-hidden flex items-center">
              <span className="bg-gradient-to-r from-teal-500 to-teal-400 bg-clip-text text-transparent dark:from-teal-300 dark:to-teal-500 group-hover:from-teal-600 group-hover:to-teal-400 transition-all duration-500">
                R. Aisha
              </span>
              <span className="ml-1 text-teal-700 dark:text-teal-400 relative overflow-hidden group-hover:text-teal-800 dark:group-hover:text-teal-300 transition-colors duration-300">
                Syauqi Ramadhani
                <span className="absolute bottom-0 left-0 h-0.5 w-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 bg-gradient-to-r from-teal-500 to-teal-300"></span>
              </span>
            </h1>
          </div>
          
          {/* Navigation Items (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <button 
                key={item}
                onClick={() => handleMenuItemClick(item)}
                className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 
                  ${activeItem === item ? 'text-white dark:text-white' : 'text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200'}`}
              >
                {activeItem === item && (
                  <span className="absolute inset-0 bg-teal-600 dark:bg-teal-700 -z-10 scale-100 rounded-md"></span>
                )}
                <span>{item}</span>
              </button>
            ))}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center ml-4 p-2 rounded-md text-teal-600 dark:text-teal-300 hover:text-teal-800 dark:hover:text-teal-200 focus:outline-none relative"
              aria-expanded={isMenuOpen}
            >
              <div className="h-6 w-6 relative">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''} translate-y-2.5`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <button 
              key={item}
              onClick={() => handleMenuItemClick(item)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-all duration-300 relative 
                ${activeItem === item ? 'text-white bg-teal-600 dark:bg-teal-700' : 'text-teal-600 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-gray-800'}`}
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
