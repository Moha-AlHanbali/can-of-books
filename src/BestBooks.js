import React from 'react';
import Book from './Book.js';
import BookModal from './BookModal.js';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import UpdateModal from './UpdateModal.js';

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      currentUser: {},
      showUpdateModal: false,
      bookUpdate: {},
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

  updateBook = async (event) => {
    event.preventDefault();

    console.log(event.target);
    let updatdBook = {
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value,
      email: this.state.currentUser,
    }
    let bookID = this.state.bookUpdate._id;
    let updatedBook = await axios.put(`${process.env.REACT_APP_SERVER_URL}/books/${bookID}`, { params: updatdBook })
    this.setState({
      booksData: updatedBook.data,
    })
  }


  handleUpdateShow = async (selectedBook) => {
    console.log('selectedBook', selectedBook);
    await this.setState({
      showUpdateModal: true,
      bookUpdate: selectedBook,
    })
    console.log('bestbooks', this.state.bookUpdate);
  }

  handleUpdateClose = async () => {
    await this.setState({
      showUpdateModal: false,
    })
  }

  render() {
    return (
      <>
        <BookModal addBook={this.addBook} />
        <UpdateModal updateBook={this.updateBook} handleUpdateClose={this.handleUpdateClose} showUpdateModal={this.state.showUpdateModal} bookUpdate={this.state.bookUpdate} />
        <Book booksData={this.state.booksData} removeBook={this.removeBook} handleUpdateShow={this.handleUpdateShow} />
      </>
    )
  }

}

export default withAuth0(MyFavoriteBooks);
