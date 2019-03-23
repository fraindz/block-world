import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { search } from "../actions";

class SearchResult extends React.Component {
  componentDidMount() {
    console.log("nex :", this.props.match.params.query);
    this.props.search(this.props.match.params.query);
  }
  componentDidUpdate(prevProps) {
    console.log("nex :", prevProps.match.params.query);
    if (this.props.match.params.query !== prevProps.match.params.query) {
      this.props.search(this.props.match.params.query);
    }
  }
  render() {
    const searchData = this.props.searchData;
    console.log("Rdn :", searchData);
    if (searchData.loading) {
      return (
        <div className="mt-5">
          <Spinner animation="grow" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
    if (searchData.error) {
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
                <i class="fas fa-times-circle mr-3" />
                No matching block/transaction found for {searchData.query}
              </Alert>
            </Col>
          </Row>
        </Container>
      );
    }

    return (
      <React.Fragment>
        {searchData.success ? (
          <Container>
            <Row>
              <Col xs={12}>
                <Alert
                  variant="success"
                  className="mx-auto mt-5 overflow-ellipsis"
                  style={{ width: "100%" }}
                >
                  <i class="fas fa-check-circle mr-3" />
                  Found matching{" "}
                  {searchData.searchType === "TX" ? "transaction" : "block"}
                  <br />
                  <Link
                    to={
                      searchData.searchType === "TX"
                        ? `/tx/${searchData.query}`
                        : `/block/${searchData.query}`
                    }
                  >
                    {searchData.query}
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
}

function mapStateToProps(state) {
  return {
    searchData: state.search
  };
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
    mapStateToProps,
    mapDispatchToProps
  )(SearchResult)
);
