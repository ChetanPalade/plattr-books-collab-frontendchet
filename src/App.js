
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import { motion } from 'framer-motion';
import './App.css'

const App = () => {
  const [reload, setReload] = useState(false);

  const handleBookAdded = () => {
    setReload(!reload); // Trigger reloading of BookList after adding a new book
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="App"
    >
      <h1 className="text-center my-4">Collaborative Book List</h1>
      <AddBookForm onBookAdded={handleBookAdded} />
      <BookList reload={reload} />
    </motion.div>
  );
};

export default App;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BookList from './components/BookList';
// import AddBookForm from './components/AddBook';

// const App = () => {
//   const [reload, setReload] = useState(false);

//   const handleBookAdded = () => {
//     setReload(!reload);
//   };

//   return (
//     <div className="App">
//       <h1 className="form-title text-center my-4">Collaborative Book List</h1>
//       <AddBookForm onBookAdded={handleBookAdded} />
//       <BookList reload={reload} />
//     </div>
//   );
// };

// export default App;
