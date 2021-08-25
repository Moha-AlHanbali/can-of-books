import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UpdateForm from './UpdateForm';

class UpdateModal extends React.Component {


  handleUpdateClose = () => {
    this.setState({
      showUpdateModal: false,
    })
  }

  handleUpdateShow = async () => {
    console.log('inmodal', this.state);
    await this.setState({
      showUpdateModal: this.props.showUpdateModal,
    })
  }


  render() {
    console.log(this.state, this.props.showUpdateModal);

    return (

      <>

        <Modal show={this.props.showUpdateModal} >
          <Modal.Header>
            <Modal.Title>Update book</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <UpdateForm updateBook={this.props.updateBook} bookUpdate={this.props.bookUpdate} handleUpdateClose={this.props.handleUpdateClose}/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleUpdateClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    )
  }

}

export default UpdateModal;