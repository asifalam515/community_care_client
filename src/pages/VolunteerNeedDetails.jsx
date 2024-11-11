import { useLoaderData } from "react-router-dom";

const VolunteerNeedDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <div>
      <h1>Need Volunteer Details</h1>
    </div>
  );
};

export default VolunteerNeedDetails;
