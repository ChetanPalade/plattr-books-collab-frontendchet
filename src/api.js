import axios from 'axios';
const API_URL = 'https://plattr-backend-2.onrender.com/api/books';
    
export const fetchBooks = () => axios.get(API_URL);
export const addBook = (newBook) => axios.post(API_URL, newBook);
export const upvoteBook = (id) => axios.put(`${API_URL}/${id}/upvote`);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);
