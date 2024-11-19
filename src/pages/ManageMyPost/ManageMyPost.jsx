import { Helmet } from "react-helmet-async";
import MyVolunteerNeedPost from "./MyVolunteerNeedPost";
import VolunteerRequests from "./VolunteerRequests";

const ManageMyPost = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <Helmet>
        <title>Manage My Post</title>
      </Helmet>
      <MyVolunteerNeedPost></MyVolunteerNeedPost>
      <VolunteerRequests></VolunteerRequests>
    </div>
  );
};

export default ManageMyPost;
