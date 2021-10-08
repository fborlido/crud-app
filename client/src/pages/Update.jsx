import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { updateObject } from "../features/objectSlice";

import Button from "../components/Button";
import Form from "../components/Form";
import FormControl from "../components/FormControl";

const Update = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let { id } = useParams();

  const [name, setname] = useState("");
  const objects = useSelector((state) => state.object.objects);

  useEffect(() => {
    const selectedObj = objects.find((obj) => obj._id === id);
    setname(selectedObj.name);
  }, [setname]);

  const submitFunciton = (e) => {
    e.preventDefault();
    dispatch(updateObject({ id: id, name: name }));
    history.push("/");
  };

  const onChange = (e) => {
    setname(e.target.value);
  };

  return (
    <>
      <Button type="primary" text="Back" link="/" />
      {/* Form */}
      <Form submitFunciton={submitFunciton} update={true}>
        <FormControl
          type="text"
          name="name"
          id="name"
          placeholder="Enter Name Here"
          label="Name: "
          value={name}
          onChange={onChange}
        />
      </Form>
    </>
  );
};

export default Update;
