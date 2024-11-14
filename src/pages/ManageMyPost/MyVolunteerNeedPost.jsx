import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDeletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to delete this post? This process cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/post/${id}`)
          .then((res) => {
            setMyPost(myPost.filter((post) => post._id !== id));
            Swal.fire("Deleted!", "The post has been deleted.", "success");
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There was an error deleting the post.",
              "error"
            );
          });
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-3xl">My Volunteer Need Post</h1>
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
                    <button className=" mx-2 btn btn-primary">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDeletePost(post._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
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
