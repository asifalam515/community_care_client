import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import { Helmet } from "react-helmet-async";

const VolunteerNeedPostDetails = () => {
  const postDetails = useLoaderData();
  const { userInfo } = useContext(AuthContext);
  const user = {
    name: userInfo?.name,
    email: userInfo?.email,
  };

  const {
    _id,
    thumbnail,
    title,
    category,
    location,
    deadline,
    number,
    organizer,
    organizerEmail,
  } = postDetails;

  return (
    <div>
      <Helmet>
        <title>Volunteer Need Post</title>
      </Helmet>
      <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-900 dark:text-gray-100">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <img
            src={thumbnail}
            alt=""
            className="w-full h-60 sm:h-96 dark:bg-gray-700"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-800">
            <div className="space-y-2">
              <a
                rel="noopener noreferrer"
                href="#"
                className="inline-block text-2xl font-semibold sm:text-3xl dark:text-gray-100"
              >
                {title}
              </a>
              <p className="text-xl dark:text-gray-400">{category}</p>
            </div>
            <div className="dark:text-gray-300">
              <p>
                Number of Volunteers Needed: {number ? number : "Not Found"}{" "}
              </p>
              <p>Organizer: {organizer ? organizer : "Not Found"} </p>
              <p>
                Organizer Email: {organizerEmail ? organizerEmail : "Not Found"}{" "}
              </p>
              <p>Location: {location ? location : "Not found"} </p>
              <p>Deadline: {deadline}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center m-2 p-2">
        <Link to={`/volunteer/request/${_id}`} className="btn btn-warning">
          Be A Volunteer
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedPostDetails;
