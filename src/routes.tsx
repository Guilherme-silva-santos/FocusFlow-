import { createBrowserRouter } from "react-router-dom";

import Pomodoro from "./pages/pomodoro";
import Profile from "./pages/profile";
import Tasks from "./pages/tasks";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Pomodoro />,
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