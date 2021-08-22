import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        
        <p>
          This is a collection of my favorite books
        </p>

        <ul>
          <li>Book 1</li>
          <li>Book 2</li>
          <li>Book 3</li>
          <li>Book 4</li>
          <li>Book 5</li>
        </ul>

      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
