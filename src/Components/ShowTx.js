import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SummaryItem from "./SummaryItem";

class ShowTx extends React.Component {
  componentDidMount() {
    if (!this.props.tx.hash) {
      console.log("pou :", `/search/${this.props.match.params.hash}`);
      this.props.history.push(`/search/${this.props.match.params.hash}`);
    }
  }

  render() {
    const tx = this.props.tx;
    const totalDr = getTotalValue(tx.inputs);
    const totalCr = getTotalValue(tx.out);
    function toBTC(value = 0) {
      return value / 100000000;
    }
    function getTotalValue(t = []) {
      return t.reduce(
        (p, c) => p + (c.prev_out ? c.prev_out.value : c.value || 0),
        0
      );
    }
    const summary = (
      <Container className="summary">
        <SummaryItem label="Summary" />
        <SummaryItem label="Block Height" value={tx.block_height} />
        <SummaryItem label="Size" value={`${tx.size} (bytes)`} />
        <SummaryItem label="Weight" value={tx.weight} />
        <SummaryItem label="Received Time" value={new Date(tx.time)} />
        <SummaryItem label="Relayed By" value={tx.relayed_by} />
      </Container>
    );
    const inputOutput = (
      <Container className="summary">
        <SummaryItem label="In/Out" />
        <SummaryItem label="Total Sent" value={`${toBTC(totalDr)} BTC`} />
        <SummaryItem label="Total Received" value={`${toBTC(totalCr)} BTC`} />
        <SummaryItem label="Fee" value={`${toBTC(totalDr - totalCr)} BTC`} />
        <SummaryItem label="Fee (per byte)" value={tx.size} />
      </Container>
    );
    return (
      <div className="transaction mt-4">
        <h3 className="mb-3">Transaction</h3>
        <Container>
          <Row>
            <Col xs={10} sm={10} md={10} className="overflow-ellipsis hash">
              {tx.hash}
            </Col>
            <Col xs={12} sm={12} md={6}>
              {summary}
            </Col>
            <Col xs={12} sm={12} md={6}>
              {inputOutput}
            </Col>
          </Row>
        </Container>
        <h3 className="mt-3 mb-3">Transfer details</h3>
        <Container>
          <Row>
            <Col xs={5} sm={5} md={4}>
              {tx.inputs &&
                tx.inputs.map((i = { prev_out: {} }) => (
                  <div className="overflow-ellipsis hash">
                    {i.prev_out.addr}
                  </div>
                ))}
            </Col>
            <Col xs={1} sm={1} md={1}>
              <i class="fa fa-arrow-right" aria-hidden="true" />
            </Col>
            <Col xs={5} sm={5} md={7}>
              {tx.out &&
                tx.out.map(o => (
                  <div className="row">
                    <div className="overflow-ellipsis hash">{o.addr}</div>
                    <div className="ml-2 fs-12">{`${toBTC(o.value)} BTC`}</div>
                  </div>
                ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tx: state.tx
  };
}

export default withRouter(connect(mapStateToProps)(ShowTx));
