import MyVolunteerNeedPost from "./MyVolunteerNeedPost";
import VolunteerRequests from "./VolunteerRequests";

const ManageMyPost = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <MyVolunteerNeedPost></MyVolunteerNeedPost>
      <VolunteerRequests></VolunteerRequests>
    </div>
  );
};

export default ManageMyPost;
