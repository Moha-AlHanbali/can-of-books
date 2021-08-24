import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BookForm from './BookForm.js';

class BookModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    })
  }

  handleShow = () => {
    this.setState({
      showModal: true,
    })
  }

  render() {

    return (
      <>



        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Add a new book</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <BookForm addBook={this.props.addBook} handleClose={this.handleClose}/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Button variant="primary" type="submit" onClick={this.handleShow}>
          Add New Book
        </Button>


      </>
    )
  }




}

export default BookModal;