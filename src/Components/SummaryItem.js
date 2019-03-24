import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SummaryItem = ({ label, value, valueClass = "" }) => {
  const displayValue = value instanceof Date ? value.toGMTString() : value;
  return (
    <Row>
      <Col xs={4}>{label}</Col>
      <Col xs={7} className={valueClass}>
        {displayValue}
      </Col>
    </Row>
  );
};

export default SummaryItem;
