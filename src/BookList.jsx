import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="mb-4">
      <h5>Books</h5>
      <ul className="list-group">
        {books.map((book, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {book.title} by {book.author} (ISBN: {book.isbn})
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(index)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
