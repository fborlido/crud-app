import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ content, deleteFn, id }) => {
  return (
    <li>
      <div className="content">
        <p>{content}</p>
      </div>
      <div className="actions">
        <Link to={"/update/" + id} className="btn update">
          Update
        </Link>
        <button className="btn delete" onClick={deleteFn}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default ListItem;
