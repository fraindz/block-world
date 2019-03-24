import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SummaryItem from "./SummaryItem";

class ShowBlock extends React.Component {
  componentDidMount() {
    if (!this.props.block.hash) {
      console.log("pou :", `/search/${this.props.match.params.hash}`);
      this.props.history.push(`/search/${this.props.match.params.hash}`);
    }
  }

  render() {
    const block = this.props.block;
    const totalDr = getTotalValue(block.tx, "totalDr");
    const totalCr = getTotalValue(block.tx, "totalCr");
    function toBTC(value = 0) {
      return value / 100000000;
    }
    function getTotalValue(t = [], type) {
      return t.reduce((p, c) => p + c[type], 0);
    }
    const summary = (
      <Container className="summary">
        <SummaryItem label="Summary" />
        <SummaryItem label="Number of trans" value={block.n_tx} />
        <SummaryItem label="Total DR" value={`${toBTC(totalDr)} BTC`} />
        <SummaryItem label="Total CR" value={`${toBTC(totalCr)} BTC`} />
        <SummaryItem label="Height" value={block.height} />
        <SummaryItem label="Received Time" value={new Date(block.time)} />
      </Container>
    );
    const hashes = (
      <Container className="summary">
        <SummaryItem label="Hashes" />
        <SummaryItem
          label="Hash"
          value={block.hash}
          valueClass="hash overflow-ellipsis"
        />
        <SummaryItem
          label="Previous"
          value={block.prev_block}
          valueClass="hash overflow-ellipsis"
        />
        <SummaryItem
          label="Next"
          value={block.next_block}
          valueClass="hash overflow-ellipsis"
        />
      </Container>
    );
    return (
      <div className="transaction mt-4">
        <h3 className="mb-3">Block</h3>
        <Container>
          <Row>
            <Col sm={10} md={10} className="overflow-ellipsis hash">
              {block.hash}
            </Col>
            <Col sm={12} md={6}>
              {summary}
            </Col>
            <Col sm={12} md={6}>
              {hashes}
            </Col>
          </Row>
        </Container>
        <h3 className="mt-3 mb-3">Transactions</h3>
        <Container className="tx">
          {block.tx &&
            block.tx.map(t => (
              <Row>
                <Col xs={5} sm={5} md={5} className="overflow-ellipsis hash">
                  {t.hash}
                </Col>
                <Col xs={3} sm={3} md={3} className="fs-12">
                  {new Date(t.time).toGMTString()}
                </Col>
                <Col xs={3} sm={3} md={2} className="fs-12">
                  {`${toBTC(t.totalCr)} BTC`}
                </Col>
              </Row>
            ))}
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    block: state.block
  };
}

export default withRouter(connect(mapStateToProps)(ShowBlock));
