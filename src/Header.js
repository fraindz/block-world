import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router";

import store from "./config/store";

const secondAction = data => ({
  type: "SECOND",
  payload: new Promise(res => res({ res: "Final resolution" }))
});

const firstAction = () => {
  console.log("Is itc");
  return dispatch => {
    console.log("calling actm");
    const response = dispatch({
      type: "ACTM",
      payload: new Promise(res => res({ res: "Pomise mlk ans" }))
    });

    response.then(data => {
      console.log("calling second act");
      dispatch(secondAction(data));
    });
  };
};

class Header extends React.Component {
  state = { query: "" };
  onSubmit = e => {
    e.preventDefault();
    store.dispatch(
      /*{
      type: "ACTM",
      payload: new Promise(res => res({ res: "Pomise mlk ans" }))
    }*/
      firstAction()
    );
  };
  onChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  render() {
    return (
      <Navbar bg="light" expand="md">
        <Navbar.Brand href="#home">Block world</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form onSubmit={this.onSubmit}>
            <Form.Control
              type="text"
              placeholder="Search Block/Transaction"
              value={this.state.query}
              onChange={this.onChange}
            />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
