import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { addObject } from "../features/objectSlice";

import Button from "../components/Button";
import Form from "../components/Form";
import FormControl from "../components/FormControl";

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [name, setname] = useState("");

  const submitFunciton = (e) => {
    e.preventDefault();
    dispatch(addObject({ name: name }));
    history.push("/");
  };

  const onChange = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <Button type="primary" text="Back" link="/" />
      {/* Form */}
      <Form submitFunciton={submitFunciton}>
        <FormControl
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name Here"
          label="Name: "
          onChange={onChange}
        />
      </Form>
    </>
  );
};

export default Create;
