import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerNCard from "./VolunteerNCard";

const AllNeedVolunteer = () => {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Fetch all posts when the component mounts
    axios
      .get("http://localhost:5000/volunteer")
      .then((res) => setPosts(res.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    // If query is empty, fetch all posts again
    axios
      .get("http://localhost:5000/volunteer")
      .then((res) => setPosts(res.data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search volunteers..."
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-2"
        >
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map((post) => <VolunteerNCard key={post._id} post={post} />)
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default AllNeedVolunteer;
