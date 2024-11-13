import React, { useState, useEffect } from 'react';
import { fetchBooks, upvoteBook, deleteBook } from '../api';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../App.css'

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks().then((response) => setBooks(response.data));
  }, []);

  const handleUpvote = async (id) => {
    await upvoteBook(id);
    setBooks(books.map(book => book._id === id ? { ...book, upvotes: book.upvotes + 1 } : book));
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    setBooks(books.filter(book => book._id !== id));
  };

  return (
    <Container>
      <h2 className="text-center my-4">Book List</h2>
      <Row>
        {books.map((book) => (
          <Col md={6} lg={4} sm={12} xs={12} key={book._id} className="mb-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              layout
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="h-100 shadow-sm book-card">
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
                  <Card.Text>{book.description}</Card.Text>
                  <Card.Text><strong>Upvotes:</strong> {book.upvotes}</Card.Text>
                  <Button variant="outline-success" size="sm" onClick={() => handleUpvote(book._id)}>
                    Upvote
                  </Button>{' '}
                  <Button variant="outline-danger" size="sm" onClick={() => handleDelete(book._id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;


// import React, { useState, useEffect } from 'react';
// import { fetchBooks, upvoteBook, deleteBook } from '../api';
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';

// const BookList = ({ reload }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetchBooks().then((response) => setBooks(response.data));
//   }, [reload]);

//   const handleUpvote = async (id) => {
//     await upvoteBook(id);
//     setBooks(books.map(book => book._id === id ? { ...book, upvotes: book.upvotes + 1 } : book));
//   };

//   const handleDelete = async (id) => {
//     await deleteBook(id);
//     setBooks(books.filter(book => book._id !== id));
//   };

//   return (
//     <Container className="mt-4">
//       <h2 className="text-center">Book List</h2>
//       <Row>
//         {books.map((book) => (
//           <Col md={4} sm={6} xs={12} key={book._id} className="mb-4">
//             <Card className="h-100 shadow-sm">
//               <Card.Body>
//                 <Card.Title>{book.title}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
//                 <Card.Text>{book.description}</Card.Text>
//                 <Card.Text><strong>Upvotes:</strong> {book.upvotes}</Card.Text>
//                 <Button variant="outline-success" size="sm" onClick={() => handleUpvote(book._id)}>
//                   Upvote
//                 </Button>{' '}
//                 <Button variant="outline-danger" size="sm" onClick={() => handleDelete(book._id)}>
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default BookList;




// import React, { useState, useEffect } from 'react';
// import { fetchBooks, upvoteBook, deleteBook } from '../services/api';
// import { Button, Card, Container, Row, Col } from 'react-bootstrap';

// const BookList = ({ reload }) => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     fetchBooks().then((response) => setBooks(response.data));
//   }, [reload]);

//   const handleUpvote = async (id) => {
//     await upvoteBook(id);
//     setBooks(books.map(book => book._id === id ? { ...book, upvotes: book.upvotes + 1 } : book));
//   };

//   const handleDelete = async (id) => {
//     await deleteBook(id);
//     setBooks(books.filter(book => book._id !== id));
//   };

//   return (
//     <Container className="mt-4">
//       <h2 className="text-center">Book List</h2>
//       <Row>
//         {books.map((book) => (
//           <Col md={4} sm={6} xs={12} key={book._id} className="mb-4">
//             <Card className="h-100 shadow-sm">
//               <Card.Body>
//                 <Card.Title>{book.title}</Card.Title>
//                 <Card.Subtitle className="mb-2 text-muted">By {book.author}</Card.Subtitle>
//                 <Card.Text>{book.description}</Card.Text>
//                 <Card.Text><strong>Upvotes:</strong> {book.upvotes}</Card.Text>
//                 <Button variant="outline-success" size="sm" onClick={() => handleUpvote(book._id)}>
//                   Upvote
//                 </Button>{' '}
//                 <Button variant="outline-danger" size="sm" onClick={() => handleDelete(book._id)}>
//                   Delete
//                 </Button>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default BookList;
