import React from "react";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

export const Todoitem = ({ items, handleDelete }) => {
  const [chk, setchk] = useState(false);
  return (
    <Card className="todoitem">
      <Row>
        <Col md={2}>
          <Form.Check onClick={() => setchk(!chk)}></Form.Check>
        </Col>
        <Col md={8}>
          <Form.Label>{chk ? <del>{items}</del> : items}</Form.Label>
        </Col>
        <Button className="but" onClick={() => handleDelete(items)}>
          REMOVE ALL
        </Button>{" "}
      </Row>
    </Card>
  );
};
