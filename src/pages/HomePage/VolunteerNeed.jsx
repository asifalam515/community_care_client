import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerNCard from "./VolunteerNCard";

const VolunteerNeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteer")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.slice(0, 6).map((post) => (
          <VolunteerNCard key={post._id} post={post} />
        ))}
      </div>
      <div className="text-center my-4">
        <button className="btn btn-warning">See All</button>
      </div>
    </div>
  );
};

export default VolunteerNeed;
