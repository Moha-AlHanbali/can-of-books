import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class MyFavoriteBooks extends React.Component {
  render() {
    console.log(this.props.booksData);
    return (
      <Jumbotron>
        <Row xs={1} md={4} className="g-4">

          {
            this.props.booksData.map((book, index) => {
              return (
                <Col key = {index} >
                  <Card style={{ width: '18rem' }}>
                    <Card.Header><h4>{book.title}</h4></Card.Header>
                    <ListGroup variant="flush">
                      <ListGroup.Item><p>Book Description: {book.description}</p></ListGroup.Item>
                      <ListGroup.Item><p>Book Status: {book.status}</p></ListGroup.Item>
                      <ListGroup.Item><p>Added by : {book.email}</p></ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Col>
              )
            })
          }

        </Row>
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
