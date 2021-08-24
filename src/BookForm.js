import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class BookForm extends React.Component {

  render() {

    return (
      <>

        <Form onSubmit={this.props.addBook} >

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="book title" name="title" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="book description" name="description" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="book status" name="status" required />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.props.handleClose}>
            Add Book
          </Button>

        </Form>
      </>
    )
  }
}

export default BookForm;