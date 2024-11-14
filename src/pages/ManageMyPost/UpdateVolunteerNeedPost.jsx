import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateVolunteerNeedPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/needVolunteerPost/${id}`)
      .then((res) => setPost(res.data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date) => {
    setPost((prev) => ({ ...prev, deadline: date }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/needVolunteerPost/${id}`, post)
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Update Volunteer Need Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Thumbnail:</label>
          <input
            type="text"
            name="thumbnail"
            value={post.thumbnail}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Post Title:</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={post.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category:</label>
          <select name="category" value={post.category} onChange={handleChange}>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="social_service">Social Service</option>
            <option value="animal_welfare">Animal Welfare</option>
          </select>
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={post.location}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No. of Volunteers Needed:</label>
          <input
            type="number"
            name="number"
            value={post.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Deadline:</label>
          <DatePicker
            selected={new Date(post.deadline)}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label>Organizer Name:</label>
          <input
            type="text"
            name="organizer"
            value={user.displayName}
            readOnly
          />
        </div>
        <div>
          <label>Organizer Email:</label>
          <input
            type="email"
            name="organizerEmail"
            value={user.email}
            readOnly
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdateVolunteerNeedPost;
