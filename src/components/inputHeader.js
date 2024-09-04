import { Button, Input } from "antd";
import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions/todoAction";

export default function InputHeader() {
  const [name, setName] = useState("");
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodoAction(name))
    .then(()=>{
      setName('')
    })
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Input.Group compact>
      <Input
        value={name}
        onChange={handleChangeName}
        style={{ width: "300px" }}
        defaultValue=""
        onKeyDown={handleKeyDown}
      />

      <Button type="primary" loading={loading} onClick={handleSubmit}>
        Submit
      </Button>
    </Input.Group>
  );
}
