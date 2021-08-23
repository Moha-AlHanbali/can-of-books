import React from 'react';
import Header from './Header';
// import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Login';
import { withAuth0 } from '@auth0/auth0-react';
import BestBooks from './BestBooks';
import Profile from './Profile.js';
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
    }
  }


  

  componentDidMount = async () => {

      let booksURL = `http://localhost:3001/books?q=allbooks`

      let retrieveBooks = await axios.get(booksURL);

      await this.setState({
        booksData: retrieveBooks.data,
      });
      }







  render() {
    const { isAuthenticated } = this.props.auth0;

    // console.log('app', this.props);
    return (
      <>
        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {isAuthenticated ? 
              (this.state.booksData && <BestBooks booksData={this.state.booksData} />)
              : <Login />
              }
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path="/profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
          {/* </IsLoadingAndError> */}
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
