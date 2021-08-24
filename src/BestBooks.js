import React from 'react';
import Book from './Book.js';
import BookModal from './BookModal.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      currentUser: {},
    }
  }

  componentDidMount = async () => {
    const { user } = this.props.auth0;

    await this.setState({
      currentUser: user.email,
    });

    console.log(user);
    let booksURL = `${process.env.REACT_APP_SERVER_URL}/books?userBooks=${user.email}`
    let retrieveBooks = await axios.get(booksURL);

    await this.setState({
      booksData: retrieveBooks.data,
    });
  }

  addBook = async (event) => {
    event.preventDefault();

    let newBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: this.state.currentUser,
    }
    console.log(newBook);
    let sendBook = await axios.post(`${process.env.REACT_APP_SERVER_URL}/books`, { params: newBook })

    this.setState({
      booksData: sendBook.data,
    })
  }

  removeBook = async (bookID) => {

    let removedBook = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/books/${bookID}?userBooks=${this.state.currentUser}`);
    this.setState({
      booksData: removedBook.data,
    });
  }


  render() {
    return (
      <>
        <BookModal addBook={this.addBook} />
        <Book booksData={this.state.booksData} removeBook={this.removeBook} />
      </>
    )
  }

}

export default withAuth0(MyFavoriteBooks);
