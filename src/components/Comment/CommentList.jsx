import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentList = ({ ideaId }) => {
  const [comments, setComments] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const data = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  const fetchData = async () => {
    const res = await axios.get(
      `https://localhost:7133/api/Idea/GetAllComments/${ideaId}`,
      data
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderComments}</ul>;
};

export default CommentList;
