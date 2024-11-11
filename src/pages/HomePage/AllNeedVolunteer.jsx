import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerNCard from "./VolunteerNCard";
import { Link } from "react-router-dom";

const AllNeedVolunteer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/volunteer")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <VolunteerNCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllNeedVolunteer;
