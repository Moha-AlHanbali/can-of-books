import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';
import './Profile.css';

class Profile extends React.Component {

  render() {
    console.log(this.props.auth0);

    const { user, isAuthenticated } = this.props.auth0;
    console.log(this.props.auth0);

    return isAuthenticated && (

      <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={user.picture} alt={user.name} />
        <Card.Body>
          <Card.Title>{user.name} info</Card.Title>
          <Card.Text>
            e-mail: <a className='emailLink' href={`mailto:  ${user.email}`} > {user.email} </a>
          </Card.Text>
        </Card.Body>
      </Card>

    )
  }

}

export default withAuth0(Profile);