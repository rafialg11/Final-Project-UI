import { useState, useEffect } from "react";
import axios from "axios";

const useComments = (videoId) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {    
    axios
      .get(`https://tpplaybackend-production.up.railway.app/api/comments/${videoId}`)
      .then((response) => {
        setComments(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [videoId]);

  return { comments, loading, error };
};

export default useComments;