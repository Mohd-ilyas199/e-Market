import React, { useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import "../ToDoLists/Home.css";
export const Addtodo = ({ handleAdd }) => {
  const [newtodo, setnewtodo] = useState("");
  return (
    <React.Fragment>
      <Card className="addtodo">
        Add
        <Form.Control
          type="text"
          placeholder="add here"
          onChange={(e) => setnewtodo(e.target.value)}
        ></Form.Control>
        <Button
          className="but"
          onClick={() => handleAdd(newtodo)}
          disabled={newtodo === ""}
        >
          ADD
        </Button>
      </Card>
    </React.Fragment>
  );
};
