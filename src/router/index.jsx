import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";

import FormContent from "../views/login/FormContent";
import DashboardContent from "../views/dashboard/DashboardContent";
import BookContent from "../views/book/BookContent";
import QuestionContent from "../views/questions/QuestionContent";
import ExamContent from "../views/exams/ExamContent";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <FormContent />,
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <DashboardContent />,
      },
      {
        path: "books",
        element: <BookContent />,
      },
      {
        path: "exams",
        element: <ExamContent />,
      },
      {
        path: "questions",
        element: <QuestionContent />,
      },
    ],
  },
]);

export default router;
