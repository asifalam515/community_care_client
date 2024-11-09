import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <span className="loading loading-spinner text-error"></span>;
  }
  if (user) {
    return children;
  }
  return navigate("/login");
};

export default PrivateRoute;
