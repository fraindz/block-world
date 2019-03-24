import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { search } from "../actions";

class SearchResult extends React.Component {
  componentDidMount() {
    this.props.search(this.props.match.params.query);
  }
  componentDidUpdate(prevProps) {
    const { searchData, match, history, search } = this.props;
    if (match.params.query !== prevProps.match.params.query) {
      search(match.params.query);
    }
    if (!prevProps.searchData.success && searchData.success) {
      history.replace(
        `/${searchData.searchType.toLowerCase()}/${match.params.query}`
      );
    }
  }
  render() {
    const searchData = this.props.searchData;
    if (searchData.loading) {
      return (
        <div className="mt-5">
          <Spinner animation="grow" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      );
    }
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col xs={12}>
              {searchData.error && (
                <Alert
                  variant="danger"
                  className="mx-auto mt-5 overflow-ellipsis"
                  style={{ width: "100%" }}
                >
                  <i className="fas fa-times-circle mr-3" />
                  No matching block/transaction found for {searchData.query}
                </Alert>
              )}
            </Col>
          </Row>
        </Container>
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
