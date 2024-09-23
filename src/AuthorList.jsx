import React from 'react';

const AuthorList = ({ authors, onEdit, onDelete }) => {
  return (
    <div className="mb-4">
      <h5>Authors</h5>
      <ul className="list-group">
        {authors.map((author, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {author.name}
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

export default AuthorList;
