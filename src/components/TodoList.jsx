// components/TodoList.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
  // Using useState to manage todos and input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [completedCount, setCompletedCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add new todo with animation effect
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    } else {
      // Shake effect on empty submission
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };

  // Toggle todo completion status with confetti effect
  const toggleTodo = (id) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    const willBeCompleted = !todoToToggle.completed;
    
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: willBeCompleted } : todo
    );
    
    setTodos(updatedTodos);
    
    // Show confetti effect when completing a task
    if (willBeCompleted) {
      createConfettiEffect();
    }
  };

  // Simple confetti effect
  const createConfettiEffect = () => {
    // This is a simple DOM-based confetti effect
    const confettiContainer = document.getElementById('confetti-container');
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.backgroundColor = `hsl(${Math.random() * 90 + 160}, 100%, ${Math.random() * 40 + 50}%)`;
      confetti.style.animationDuration = `${Math.random() * 2 + 1}s`;
      confettiContainer.appendChild(confetti);
      
      // Remove confetti after animation
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    }
  };

  // Clear all todos with fade effect
  const clearTodos = () => {
    // Add fade-out effect before clearing
    const todoElements = document.querySelectorAll('.todo-item');
    todoElements.forEach((element, index) => {
      element.style.transition = 'opacity 0.3s ease';
      element.style.opacity = '0';
    });
    
    // Clear after short delay
    setTimeout(() => {
      setTodos([]);
    }, 300);
  };

  // Count completed todos using useEffect
  useEffect(() => {
    const completed = todos.filter(todo => todo.completed).length;
    setCompletedCount(completed);
    
    // Show celebration when completed todos count is divisible by 5
    if (completed > 0 && completed % 5 === 0 && completed === todos.filter(todo => todo.completed).length) {
      setTimeout(() => {
        const celebrationEl = document.getElementById('celebration');
        celebrationEl.classList.add('show');
        setTimeout(() => {
          celebrationEl.classList.remove('show');
        }, 3000);
      }, 500);
    }
  }, [todos]);

  return (
    <section id="task-manager" className="bg-teal-50 dark:bg-gray-900 text-teal-800 dark:text-teal-300 py-16 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute w-64 h-64 rounded-full bg-teal-500 -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 rounded-full bg-teal-400 -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Confetti container */}
      <div id="confetti-container" className="absolute inset-0 pointer-events-none overflow-hidden"></div>
      
      {/* Celebration overlay */}
      <div id="celebration" className="celebration fixed inset-0 flex items-center justify-center pointer-events-none z-50 opacity-0 transition-opacity duration-500">
        <div className="text-5xl font-bold text-teal-500 animate-bounce bg-white dark:bg-gray-800 px-8 py-4 rounded-xl shadow-2xl">
          Awesome Job! 🎉
        </div>
      </div>
      
      <div className={`w-full max-w-md mx-auto bg-teal-50 dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden my-12 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-1`}>
        <div className="p-6 relative">
          {/* Decorative corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-teal-400 dark:border-teal-600 rounded-tl-lg opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-teal-400 dark:border-teal-600 rounded-br-lg opacity-50"></div>
          
          <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-1 relative">
            Task Manager
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
          </h2>
          
          <p className="text-sm text-teal-600 dark:text-teal-400 mb-6 italic">
            Complete tasks and get celebration alerts at every 5 completed tasks!
          </p>
          
          <div className={`flex mb-4 transition-all ${isShaking ? 'animate-shake' : ''}`}>
            <input 
              type="text" 
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add a new task..."
              className="flex-grow px-4 py-2 rounded-l-lg border-2 border-teal-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-colors duration-300 focus:ring-2 focus:ring-teal-300 dark:focus:ring-teal-700"
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button 
              onClick={addTodo}
              className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
            >
              Add
            </button>
          </div>
          
          <div className="mb-4 flex justify-between items-center bg-teal-100/50 dark:bg-teal-900/20 px-3 py-2 rounded-lg">
            <p className="text-teal-700 dark:text-teal-300 text-sm font-medium">
              Completed: {completedCount} / {todos.length}
            </p>
            <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-300 transition-all duration-1000" 
                style={{ width: todos.length ? `${(completedCount / todos.length) * 100}%` : '0%' }}
              ></div>
            </div>
          </div>
          
          <div className="space-y-2 max-h-64 overflow-y-auto mb-4 pr-2 custom-scrollbar">
            {todos.length === 0 ? (
              <div className="text-gray-500 dark:text-gray-400 text-center py-8 italic opacity-75">
                <p>No tasks yet. Add some!</p>
                <div className="mt-4 w-16 h-16 mx-auto border-4 border-dashed rounded-full border-teal-300 dark:border-teal-700 animate-spin opacity-20"></div>
              </div>
            ) : (
              <AnimatePresence>
                {todos.map(todo => (
                  <motion.div 
                    key={todo.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    className={`todo-item flex items-center p-3 rounded-lg ${
                      todo.completed 
                        ? 'bg-teal-100 dark:bg-teal-900/30' 
                        : 'bg-white dark:bg-gray-700'
                    } border border-teal-100 dark:border-gray-600 transition-all duration-300 transform hover:translate-x-1 hover:shadow-md`}
                  >
                    <div className="relative mr-3">
                      <input 
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="h-5 w-5 text-teal-500 dark:text-teal-400 rounded border-gray-300 dark:border-gray-500 focus:ring-teal-500 dark:focus:ring-teal-400 transition-opacity"
                      />
                      {todo.completed && (
                        <svg className="absolute top-0 left-0 h-5 w-5 text-teal-600 dark:text-teal-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`flex-grow ${
                      todo.completed 
                        ? 'line-through text-gray-500 dark:text-gray-400' 
                        : 'text-gray-800 dark:text-gray-200'
                    } transition-all duration-500`}>
                      {todo.text}
                    </span>
                    {todo.completed && (
                      <span className="text-xs text-teal-600 dark:text-teal-400 italic ml-2">Done!</span>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
            )}
          </div>
          
          <div className="flex justify-center">
            <button 
              onClick={clearTodos}
              className={`relative bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 overflow-hidden ${todos.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'}`}
              disabled={todos.length === 0}
            >
              <span className="relative z-10">Clear All</span>
              <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-600 dark:to-teal-700 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes confetti-fall {
          0% { transform: translateY(-100px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          animation: confetti-fall linear forwards;
        }
        
        .celebration {
          background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.8) 100%);
        }
        
        .celebration.show {
          opacity: 1;
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #e0f2f1;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #4fd1c5;
          border-radius: 4px;
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a202c;
        }
        
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #2c7a7b;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-5px); }
          40%, 80% { transform: translateX(5px); }
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default TodoList;