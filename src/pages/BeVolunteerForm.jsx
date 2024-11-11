import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const BeVolunteerForm = () => {
  const { postId } = useParams();
  const { userInfo, user } = useContext(AuthContext);
  const [postData, setPostData] = useState(null);
  const [suggestion, setSuggestion] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/volunteer/${postId}`
        );
        setPostData(response.data);
      } catch (error) {
        console.error("Error fetching post data", error);
      }
    };

    fetchPostData();
  }, [postId]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const volunteerRequest = {
      thumbnail: postData.thumbnail,
      title: postData.title,
      description: postData.description,
      category: postData.category,
      location: postData.location,
      number: parseInt(postData.number, 10), // Ensure number is sent as a numeric type
      deadline: postData.deadline,
      organizer: postData.organizer,
      organizerEmail: postData.organizerEmail,
      volunteerName: userInfo?.name,
      volunteerEmail: userInfo?.email,
      suggestion,
      status: "requested",
    };

    try {
      await axios.post(
        "http://localhost:5000/volunteer/request",
        volunteerRequest,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      Swal.fire("Request Successfully");
    } catch (error) {
      Swal.fire(error);
    }
  };

  if (!postData) {
    return <span className="loading loading-spinner text-error"></span>;
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Be a Volunteer!</h1>
          <p className="py-6">
            Join us and make a difference! Fill out the form below to volunteer
            for this post.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="text"
                value={postData.thumbnail}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                value={postData.title}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                value={postData.description}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                value={postData.category}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                value={postData.location}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">No. of volunteers needed</span>
              </label>
              <input
                type="number"
                value={postData.number}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <input
                type="text"
                value={postData.deadline}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Organizer name</span>
              </label>
              <input
                type="text"
                value={postData.organizer}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Organizer email</span>
              </label>
              <input
                type="text"
                value={postData.organizerEmail}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Volunteer name</span>
              </label>
              <input
                type="text"
                value={userInfo?.name}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Volunteer email</span>
              </label>
              <input
                type="text"
                value={userInfo?.email}
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Suggestion</span>
              </label>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="textarea textarea-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Status</span>
              </label>
              <input
                type="text"
                value="requested"
                readOnly
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeVolunteerForm;
