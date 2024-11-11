import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import AuthProviders from "./providers/AuthProviders.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AddVolunteerPost from "./pages/AddVolunteerPost .jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AllNeedVolunteer from "./pages/HomePage/AllNeedVolunteer.jsx";
import VolunteerNeedPostDetails from "./pages/VolunteerNeedPostDetails.jsx";
import BeVolunteerForm from "./pages/BeVolunteerForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/allNeedVolunteerPost",
        element: (
          <PrivateRoute>
            {" "}
            <AllNeedVolunteer></AllNeedVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/allNeedVolunteerPost/:id",
        element: (
          <PrivateRoute>
            <VolunteerNeedPostDetails></VolunteerNeedPostDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/volunteer/${params.id}`);
        },
      },
      {
        path: "/volunteer/request/:postId",
        element: <BeVolunteerForm></BeVolunteerForm>,
      },

      {
        path: "/AddVolunteerPost",
        element: (
          <PrivateRoute>
            {" "}
            <AddVolunteerPost></AddVolunteerPost>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </StrictMode>
);
