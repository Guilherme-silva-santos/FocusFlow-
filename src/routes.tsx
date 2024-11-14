import { createBrowserRouter } from "react-router-dom";

import Profile from "./pages/profile";
import Timer from "./pages/timer";
import Tasks from "./pages/tasks";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Timer />,
    },
    {
        path: "/tasks",
        element: <Tasks />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
])