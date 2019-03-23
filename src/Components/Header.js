import React from "react";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { withRouter } from "react-router";

import { search } from "../actions";

class Header extends React.Component {
  state = { query: "" };
  onSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.query);
    this.props.history.push(`/search/${this.state.query}`);
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

function mapDispatchToProps(dispatch) {
  return {
    search: query => {
      dispatch(search(query));
    }
  };
}

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(Header)
);
