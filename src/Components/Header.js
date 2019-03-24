import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

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
          <Link to="/">Block world</Link>
        </Navbar.Brand>
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
