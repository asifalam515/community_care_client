import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import { Link } from "react-router-dom";

const MyVolunteerNeedPost = () => {
  const { user } = useContext(AuthContext);
  const [myPost, setMyPost] = useState([]);
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:5000/needVolunteerPost/${user.email}`)
        .then((res) => setMyPost(res.data))
        .catch((error) => console.error("Error fetching posts:", error));
    }
  }, [user?.email]);

  //   console.log(myPost);

  return (
    <div>
      {/* table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {myPost.map((post, idx) => (
              <tr key={idx}>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{new Date(post.deadline).toLocaleDateString()}</td>
                <td>
                  <Link to={`/update/${post._id}`}>
                    <button className="btn btn-primary">Edit</button>
                  </Link>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVolunteerNeedPost;
