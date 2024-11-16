import { useEffect, useState } from "react";
import axios from "axios";
import VolunteerNCard from "./VolunteerNCard";
import { Link } from "react-router-dom";

const VolunteerNeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://community-care-server-bkaruozyf-asibul-alams-projects.vercel.app/volunteer"
      )
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
        <Link to="/allNeedVolunteerPost" className="btn btn-warning">
          See All
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeed;
