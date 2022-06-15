import React from "react";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList() {

const {feedback} = useContext(FeedbackContext)

  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  } else {
    return (
      <div className="feedback-list">
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
              ></FeedbackItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
}

export default FeedbackList;
