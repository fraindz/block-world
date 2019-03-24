import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";

class Header extends React.Component {
  state = { query: "" };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.query) {
      this.props.history.push(`/search/${this.state.query}`);
    }
  };

  onChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  render() {
    return (
      <Navbar className="header" bg="dark" expand="md">
        <Navbar.Brand>
          <Link to="/">
            <i className="fa fa-globe mr-2" aria-hidden="true" />
            Block world
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="nav-toggle">
          <i className="fa fa-search" />
        </Navbar.Toggle>
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "flex-end" }}
        >
          <Form onSubmit={this.onSubmit}>
            <Form.Control
              className="search-bar"
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
