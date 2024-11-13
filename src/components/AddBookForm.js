import React, { useState } from 'react';
import { addBook } from '../api';
import { Form, Button, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../App.css'

const AddBookForm = ({ onBookAdded }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBook({ title, author, description });
    setTitle('');
    setAuthor('');
    setDescription('');
    onBookAdded();
  };

  return (
    <Container className="my-4">
      <h2 className="text-center">Add a New Book</h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter book title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter author name" 
              value={author} 
              onChange={(e) => setAuthor(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Enter a short description (optional)" 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">Add Book</Button>
        </Form>
      </motion.div>
    </Container>
  );
};

export default AddBookForm;

// import React, { useState } from 'react';
// import { addBook } from '../api';
// import { Form, Button, Container } from 'react-bootstrap';

// const AddBookForm = ({ onBookAdded }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addBook({ title, author, description });
//     setTitle('');
//     setAuthor('');
//     setDescription('');
//     onBookAdded();
//   };

//   return (
//     <Container className="my-4">
//       <h2 className="text-center">Add a New Book</h2>
//       <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
//         <Form.Group className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Enter book title" 
//             value={title} 
//             className
//             onChange={(e) => setTitle(e.target.value)} 
//             required 
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Author</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Enter author name" 
//             value={author} 
//             onChange={(e) => setAuthor(e.target.value)} 
//             required 
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control 
//             as="textarea" 
//             rows={3} 
//             placeholder="Enter a short description (optional)" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)} 
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="w-100">Add Book</Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddBookForm;

// import React, { useState } from 'react';
// import { addBook } from '../services/api';
// import { Form, Button, Container } from 'react-bootstrap';

// const AddBookForm = ({ onBookAdded }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addBook({ title, author, description });
//     setTitle('');
//     setAuthor('');
//     setDescription('');
//     onBookAdded();
//   };

//   return (
//     <Container className="my-4">
//       <h2 className="text-center">Add a New Book</h2>
//       <Form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
//         <Form.Group className="mb-3">
//           <Form.Label>Title</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Enter book title" 
//             value={title} 
//             onChange={(e) => setTitle(e.target.value)} 
//             required 
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Author</Form.Label>
//           <Form.Control 
//             type="text" 
//             placeholder="Enter author name" 
//             value={author} 
//             onChange={(e) => setAuthor(e.target.value)} 
//             required 
//           />
//         </Form.Group>
//         <Form.Group className="mb-3">
//           <Form.Label>Description</Form.Label>
//           <Form.Control 
//             as="textarea" 
//             rows={3} 
//             placeholder="Enter a short description (optional)" 
//             value={description} 
//             onChange={(e) => setDescription(e.target.value)} 
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className="w-100">Add Book</Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddBookForm;


// import React, { useState } from 'react';
// import { addBook } from '../services/api';
// import { Form, Button, Container } from 'react-bootstrap';

// const AddBookForm = ({ onBookAdded }) => {
//   const [title, setTitle] = useState('');
//   const [author, setAuthor] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addBook({ title, author, description });
//     setTitle('');
//     setAuthor('');
//     setDescription('');
//     onBookAdded();
//   };

//   return (
//     <Container>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Title</Form.Label>
//           <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} required />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Author</Form.Label>
//           <Form.Control value={author} onChange={(e) => setAuthor(e.target.value)} required />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Description</Form.Label>
//           <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
//         </Form.Group>
//         <Button type="submit" variant="primary">Add Book</Button>
//       </Form>
//     </Container>
//   );
// };

// export default AddBookForm;
