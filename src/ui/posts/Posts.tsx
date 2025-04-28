import { useEffect, useState, useRef } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState<number>(1);
  const [searchId, setSearchId] = useState<string>("");
  const observer = useRef<IntersectionObserver | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const isLoadingRef = useRef<boolean>(false);

  const fetchPosts = async (page: number) => {
    if (isLoadingRef.current) return;

    isLoadingRef.current = true;
    setLoading(true);

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      const data = await response.json();
      setPosts((per) => [...per, ...data]);
    } finally {
      setLoading(false);
      isLoadingRef.current = false;
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchId(event.target.value);
  };

  const loadMorePosts = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !isLoadingRef.current && page < 10) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  useEffect(() => {
    const currentObserver = observer.current;
    if (currentObserver) currentObserver.disconnect();

    observer.current = new IntersectionObserver(loadMorePosts);
    const lastPost = document.querySelector("#last-post");
    if (lastPost) observer.current.observe(lastPost);

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [posts]);

  const filteredPosts = posts.filter((post) =>
    post.id.toString().includes(searchId)
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <input
        type="text"
        placeholder="Поиск по ID"
        value={searchId}
        onChange={handleSearch}
        style={{
          padding: "10px",
          fontSize: "16px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          width: "100%",
          boxSizing: "border-box",
        }}
      />
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {filteredPosts.map((post, index) => (
          <li
            style={{
              fontSize: "20px",
              margin: "10px 0",
              padding: "10px",
              border: "1px solid #eee",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
            key={index}
          >
            {post.title}
          </li>
        ))}
      </ul>
      {loading && (
        <p style={{ textAlign: "center", fontSize: "16px" }}>Загрузка...</p>
      )}
      <div id="last-post" style={{ height: "20px" }} />
    </div>
  );
};

export default Posts;
