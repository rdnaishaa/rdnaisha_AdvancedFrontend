// components/TodoList.jsx
import { useState, useEffect } from 'react';

const TodoList = () => {
  // Using useState to manage todos and input
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  // Toggle todo completion status
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // Clear all todos
  const clearTodos = () => {
    setTodos([]);
  };

  // Count completed todos using useEffect
  useEffect(() => {
    const completed = todos.filter(todo => todo.completed).length;
    setCompletedCount(completed);
    
    // Show alert when completed todos count is divisible by 5
    if (completed > 0 && completed % 5 === 0) {
      alert(`Great job! You've completed ${completed} tasks!`);
    }
  }, [todos]);

  return (
    <div className="w-full max-w-md mx-auto bg-teal-50 dark:bg-gray-800 rounded-xl shadow-md overflow-hidden my-12 transition-colors duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-teal-800 dark:text-teal-300 mb-4">Task Manager</h2>
        <p className="text-sm text-teal-600 dark:text-teal-400 mb-6">
          Complete tasks and get alerts at every 5 completed tasks!
        </p>
        
        <div className="flex mb-4">
          <input 
            type="text" 
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 rounded-l-lg border-2 border-teal-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:border-teal-500 dark:focus:border-teal-400 transition-colors duration-300"
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button 
            onClick={addTodo}
            className="bg-teal-500 hover:bg-teal-600 dark:bg-teal-600 dark:hover:bg-teal-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-300"
          >
            Add
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-teal-700 dark:text-teal-300 text-sm font-medium">
            Completed: {completedCount} / {todos.length}
          </p>
        </div>
        
        <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
          {todos.length === 0 ? (
            <p className="text-gray-500 dark:text-gray-400 text-center py-4">No tasks yet. Add some!</p>
          ) : (
            todos.map(todo => (
              <div 
                key={todo.id} 
                className={`flex items-center p-3 rounded-lg ${
                  todo.completed 
                    ? 'bg-teal-100 dark:bg-teal-900/30' 
                    : 'bg-white dark:bg-gray-700'
                } border border-teal-100 dark:border-gray-600 transition-colors duration-300`}
              >
                <input 
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="mr-3 h-5 w-5 text-teal-500 dark:text-teal-400 rounded border-gray-300 dark:border-gray-500 focus:ring-teal-500 dark:focus:ring-teal-400"
                />
                <span className={`flex-grow ${
                  todo.completed 
                    ? 'line-through text-gray-500 dark:text-gray-400' 
                    : 'text-gray-800 dark:text-gray-200'
                }`}>
                  {todo.text}
                </span>
              </div>
            ))
          )}
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={clearTodos}
            className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-700 dark:hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
            disabled={todos.length === 0}
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;