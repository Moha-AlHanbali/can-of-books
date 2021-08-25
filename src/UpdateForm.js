import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class UpdateForm extends React.Component{

render() {
console.log('Update Form', this.props.bookUpdate);
  return (

    <>

    <Form onSubmit={this.props.updateBook} >

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" defaultValue={this.props.bookUpdate.title} name="title" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} defaultValue={this.props.bookUpdate.description} name="description" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" defaultValue={this.props.bookUpdate.status} name="status" required />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={this.props.handleUpdateClose}>
        Update Book
      </Button>

    </Form>
  </>

  )
}





}

export default UpdateForm;