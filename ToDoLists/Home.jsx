import React from "react";
import { ToDoList } from "../ToDoLists/Todolist";
import { Addtodo } from "../ToDoLists/Addtodo";
import { Card, Col, Row } from "react-bootstrap";
import "../ToDoLists/Home.css";
import { useState, useEffect } from "react";
export const Home = () => {
  const [todolists, settodolists] = useState([
    // <b>learning react</b>,
    // "having lunch",
    // "playing games",
    // "watching movies",
  ]);
  ////////////uplifting bolte///////
  const handleAdd = (tododata) => {
    settodolists([...todolists, tododata]);
    localStorage.setItem("todo", todolists);
  };
  const handleDelete = (curritem) => {
    const filterd = todolists.filter((item) => item !== curritem);
    settodolists([...filterd]);
  };
  // useEffect(() => {
  //   settodolists(JSON.parse(localStorage.getItem("todo")));
  // }, []);
  return (
    <React.Fragment>
      <Card className="Home">
        <Row>
          <Col>
            <Addtodo handleAdd={handleAdd} />
          </Col>
          <Col>
            <ToDoList todolists={todolists} handleDelete={handleDelete} />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
