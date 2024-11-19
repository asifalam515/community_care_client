import { Helmet } from "react-helmet-async";
import Banner from "../Banner";
import Faq from "./Faq";
import VolunteerNeed from "./VolunteerNeed";

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Homepage</title>
      </Helmet>
      <Banner></Banner>
      <VolunteerNeed></VolunteerNeed>
      <Faq></Faq>
    </div>
  );
};

export default HomePage;
