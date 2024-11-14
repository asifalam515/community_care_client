import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";

const UpdateVolunteerNeedPost = () => {
  const { id } = useParams();
  const [startDate, setStartDate] = useState(null);
  const navigate = useNavigate();
  const { user, userInfo } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  console.log("my frontend post is", post);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/update/${id}`)
      .then((res) => {
        const data = res.data;
        data.deadline = new Date(data.deadline);
        setPost(data);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const thumbnail = e.target.thumbnail.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const number = e.target.number.value;
    const deadline = startDate;
    const organizer = userInfo.name;
    const organizerEmail = userInfo.email;

    const updatedPost = {
      user,
      thumbnail,
      title,
      category,
      location,
      deadline,
      number,
      organizer,
      organizerEmail,
    };
    axios
      .put(`http://localhost:5000/update/${id}`, updatedPost)
      .then(() => {
        Swal.fire("Volunteer Need Post Updated Successfully");
        navigate("/"); // Navigate back to the main page or a success page
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-center text-2xl m-2">
        Update Volunteer Need Post for {post.title}{" "}
      </h2>
      <form
        onSubmit={handleSubmit}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-800">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Update Information</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Thumbnail" className="text-sm">
                Thumbnail
              </label>
              <input
                name="thumbnail"
                defaultValue={post.thumbnail}
                id="Thumbnail"
                type="text"
                placeholder="Thumbnail"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="PostTitle" className="text-sm">
                Post Title
              </label>
              <input
                defaultValue={post?.title}
                name="title"
                id="PostTitle"
                type="text"
                placeholder="Post Title"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="Category" className="text-sm">
                Category
              </label>
              <input
                name="category"
                defaultValue={post?.category}
                id="Category"
                type="text"
                placeholder="Category"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="location" className="text-sm">
                Location
              </label>
              <input
                name="location"
                defaultValue={post?.location}
                id="location"
                type="text"
                placeholder="Location"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="number" className="text-sm">
                Number of volunteers Needed
              </label>
              <input
                name="number"
                defaultValue={post?.number}
                id="number"
                type="number"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="deadline" className="text-sm">
                Deadline:
                <DatePicker
                  selected={post?.deadline}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="yyyy/MM/dd"
                  placeholderText=""
                  className="block w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
                />
              </label>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="organizer" className="text-sm">
                Organizer Name
              </label>
              <input
                defaultValue={post?.organizer}
                name="organizer"
                id="organizer"
                type="text"
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="organizerEmail" className="text-sm">
                Organizer Email
              </label>
              <input
                name="organizerEmail"
                defaultValue={post.organizerEmail}
                id="organizerEmail"
                type="email"
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
          </div>
        </fieldset>
        <button className="btn btn-primary">Update your Post</button>
      </form>
    </div>
  );
};

export default UpdateVolunteerNeedPost;
