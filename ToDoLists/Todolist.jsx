import React from "react";
import { Card, Button } from "react-bootstrap";
import "../ToDoLists/Home.css";
import { Todoitem } from "../ToDoLists/Todoitem";

export const ToDoList = ({ todolists, handleDelete }) => {
  return (
    <React.Fragment>
      <Card className="todolist">
        {todolists.map((items) => {
          return <Todoitem items={items} handleDelete={handleDelete} />;
        })}
      </Card>
    </React.Fragment>
  );
};
