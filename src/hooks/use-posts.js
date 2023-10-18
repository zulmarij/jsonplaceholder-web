import { useCallback, useEffect, useState } from "react";

const usePosts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [refetchIndex, setRefetchIndex] = useState(0)

  const refetch = () => setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1)

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await response.json();

      const detailsPromises = posts.map(async (post) => {
        const userResponse = await fetch(
          `https://jsonplaceholder.typicode.com/users/${post.userId}`
        );
        const user = await userResponse.json();

        const commentsResponse = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
        );
        const comments = await commentsResponse.json();

        return { ...post, user, comments };
      });

      const combinedData = await Promise.all(detailsPromises);
      setData(combinedData);
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, refetchIndex]);

  return { data, isLoading, hasError, errorMessage, refetch };
};

export default usePosts;
