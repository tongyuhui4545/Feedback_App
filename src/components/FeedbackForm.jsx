import React from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { useState } from "react";

const FeedbackForm = () => {
  const [text, settext] = useState("");
  const handleTextChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
