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
import ManageMyPost from "./pages/ManageMyPost/ManageMyPost.jsx";
import UpdateVolunteerNeedPost from "./pages/ManageMyPost/UpdateVolunteerNeedPost.jsx";
import { ThemeProvider } from "./providers/ThemeProvider.jsx";
import { HelmetProvider } from "react-helmet-async";
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
        path: "/needVolunteer",
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
          return fetch(
            `https://community-care-server-asibul-alams-projects.vercel.app/volunteer/${params.id}`
          );
        },
      },
      {
        path: "/volunteer/request/:postId",
        element: (
          <PrivateRoute>
            <BeVolunteerForm></BeVolunteerForm>
          </PrivateRoute>
        ),
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
      {
        path: "/manageMyPost",
        element: (
          <PrivateRoute>
            <ManageMyPost></ManageMyPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteerNeedPost></UpdateVolunteerNeedPost>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProviders>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProviders>
    </HelmetProvider>
  </StrictMode>
);
