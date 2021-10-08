import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchObjects, deleteObject } from "../features/objectSlice";

import Button from "../components/Button";
import List from "../components/List";
import ListItem from "../components/ListItem";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchObjects());
  }, [dispatch]);

  const objects = useSelector((state) => state.object.objects);

  const deleteFn = (e, id) => {
    e.preventDefault();
    dispatch(deleteObject(id));
    window.location.reload()
  };

  return (
    <>
      {/* route buttons */}
      <Button type="primary" text="Add new Object" link="/new" />

      {/* list of objects */}
      <List>
        {objects.map((object) => (
          <ListItem
            key={object._id}
            content={object.name}
            deleteFn={(e) => deleteFn(e, object._id)}
            id={object._id}
          />
        ))}
      </List>
    </>
  );
};

export default Landing;
