import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';
import BookList from './BookList';
import AuthorList from './AuthorList';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const [editingAuthor, setEditingAuthor] = useState(null);

  const handleAddBook = (values) => {
    if (editingBook) {
      const updatedBooks = books.map((book, index) =>
        index === editingBook.index ? values : book
      );
      setBooks(updatedBooks);
      setEditingBook(null); // Reset editing state
    } else {
      setBooks([...books, values]);
    }
  };

  const handleEditBook = (index) => {
    setEditingBook({ index, ...books[index] });
  };

  const handleDeleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const handleAddAuthor = (values) => {
    if (editingAuthor) {
      const updatedAuthors = authors.map((author, index) =>
        index === editingAuthor.index ? values : author
      );
      setAuthors(updatedAuthors);
      setEditingAuthor(null); // Reset editing state
    } else {
      setAuthors([...authors, values]);
    }
  };

  const handleEditAuthor = (index) => {
    setEditingAuthor({ index, ...authors[index] });
  };

  const handleDeleteAuthor = (index) => {
    setAuthors(authors.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="my-4">Library Management Dashboard</h1>

      <BookForm
        onSubmit={handleAddBook}
        initialValues={
          editingBook
            ? { title: editingBook.title, author: editingBook.author, isbn: editingBook.isbn, publicationDate: editingBook.publicationDate }
            : { title: '', author: '', isbn: '', publicationDate: '' }
        }
      />
      <BookList books={books} onEdit={handleEditBook} onDelete={handleDeleteBook} />

      <AuthorForm
        onSubmit={handleAddAuthor}
        initialValues={
          editingAuthor
            ? { name: editingAuthor.name, birthDate: editingAuthor.birthDate, biography: editingAuthor.biography }
            : { name: '', birthDate: '', biography: '' }
        }
      />
      <AuthorList authors={authors} onEdit={handleEditAuthor} onDelete={handleDeleteAuthor} />
    </div>
  );
};

export default Dashboard;
