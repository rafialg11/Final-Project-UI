import { useState } from "react";
import axios from "axios";

const useCommentForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
    timestamp: new Date().toISOString(), 
    videoId: "", 
  });

  const [error, setError] = useState(null);

  const postComment = async (videoId) => {
    try {
      const newComment = {
        username: formData.username,
        comment: formData.comment,
        timestamp: formData.timestamp,
        videoId: videoId,
      };

      await axios.post(
        `https://tpplaybackend-production.up.railway.app/api/comments/${videoId}`,
        newComment
      );

      setFormData({
        username: "",
        comment: "",
        timestamp: new Date().toISOString(),
        videoId: "",
      });
    } catch (error) {
      setError(error);
      console.error("Error posting comment:", error);
    }
  };

  return {
    formData,
    setFormData,
    error,
    postComment,
  };
};

export default useCommentForm;