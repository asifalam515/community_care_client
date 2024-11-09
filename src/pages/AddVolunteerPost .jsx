import axios from "axios";
import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";

const AddVolunteerPost = () => {
  const { user, userInfo } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(null);

  const handleAddPost = (e) => {
    e.preventDefault();
    const thumbnail = e.target.thumbnail.value;
    const title = e.target.title.value;
    const category = e.target.category.value;
    const location = e.target.location.value;
    const number = e.target.number.value;
    const deadline = startDate;
    const organizer = userInfo.name;
    const organizerEmail = userInfo.email;

    const post = {
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

    axios.post("http://localhost:5000/addVolunteer", post).then((res) => {
      console.log(res.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Post Added",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <section className="p-6 bg-gray-900 text-gray-100">
      <form
        onSubmit={handleAddPost}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-800">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Personal Information</p>
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
                  selected={startDate}
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
                name="organizer"
                id="organizer"
                type="text"
                value={userInfo?.name}
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
                id="organizerEmail"
                type="email"
                value={userInfo?.email}
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-400 border-gray-700 bg-gray-700"
              />
            </div>
          </div>
        </fieldset>
        <button className="btn btn-primary">Add Post</button>
      </form>
    </section>
  );
};

export default AddVolunteerPost;
