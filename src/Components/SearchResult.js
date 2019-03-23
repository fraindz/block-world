import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

function SearchResult({ search }) {
  if (search.loading) {
    return (
      <div className="mt-5">
        <Spinner animation="grow" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  }
  if (search.error) {
    return (
      <Container>
        <Row>
          <Col md={2} />
          <Col xs={12} md={8}>
            <Alert
              variant="danger"
              className="mx-auto mt-5"
              style={{ width: "100%" }}
            >
              No matching block/transaction found for {search.query}
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <React.Fragment>
      {search.success ? (
        <Container>
          <Row>
            <Col xs={12}>
              <Alert
                variant="success"
                className="mx-auto mt-5 overflow-ellipsis"
                style={{ width: "100%" }}
              >
                Found matching{" "}
                {search.searchType === "TX" ? "transaction" : "block"}
                <br />
                <Link
                  to={
                    search.searchType === "TX"
                      ? `/tx/${search.query}`
                      : `/block/${search.query}`
                  }
                >
                  {search.query}
                </Link>
              </Alert>
            </Col>
          </Row>
        </Container>
      ) : (
        ""
      )}
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  return {
    search: state.search
  };
}

export default connect(mapStateToProps)(SearchResult);
