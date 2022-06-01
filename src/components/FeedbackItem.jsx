import React from "react";
import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button
        className="close"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <FaTimes color="purple"></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
