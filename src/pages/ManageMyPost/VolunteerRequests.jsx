import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProviders";

const VolunteerRequests = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [requests, setRequest] = useState([]);
  useEffect(() => {
    if (user?.email) {
      axios
        .get("http://localhost:5000/volunteerRequest", {
          params: { email: user.email },
        })
        .then((res) => setRequest(res.data))
        .catch((error) => console.error("Error fetching requests:", error));
    }
  }, [user?.email]);
  const handleDeleteRequest = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you really want to cancel this request? This process cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:5000/volunteerRequest/${id}`)
          .then((res) => {
            setRequest(requests.filter((post) => post._id !== id));
            Swal.fire("Deleted!", "The request has been cancelled.", "success");
          })
          .catch((error) => {
            Swal.fire(
              "Error!",
              "There was an error cancel the request.",
              "error"
            );
          });
      }
    });
  };
  return (
    <div>
      <h1 className="text-3xl">My volunteer Request</h1>
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
            {requests ? (
              requests.map((request, idx) => (
                <tr key={idx}>
                  <td>{request.title}</td>
                  <td>{request.category}</td>
                  <td>{new Date(request.deadline).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteRequest(request._id)}
                      className="btn btn-warning"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <h1 className="text-5xl  text-center">
                No Volunteer Request Found!!!
              </h1>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VolunteerRequests;
