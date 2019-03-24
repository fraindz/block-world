import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { getLatest } from "../actions";

class Home extends React.Component {
  componentDidMount() {
    this.props.getLatest();
  }

  render() {
    const latest = this.props.latest;
    return (
      <div className="mt-5">
        <h3>
          Welcome to
          <br />
          <br />
          BLOCK WORLD
        </h3>
        <Container className="footer bg-dark" fluid>
          <Row className="mt-2 mb-2">
            <Col xs="12">Latest block</Col>
          </Row>
          {latest.hash ? (
            <Row>
              <Col xs="12" className="hash">
                <Link to={`/search/${latest.hash}`}>{latest.hash}</Link>
              </Col>
            </Row>
          ) : (
            <Spinner animation="grow" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>
          )}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    latest: state.latest
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLatest: () => {
      dispatch(getLatest());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
