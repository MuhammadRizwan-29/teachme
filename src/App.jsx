import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Student/Home";
import CourseDetails from "./Pages/Student/CourseDetails";
import CoursesList from "./Pages/Student/CoursesList";
import MyEnrollement from "./Pages/Student/MyEnrollment";
import Player from "./Pages/Student/Player";
import Loading from "./components/Students/Loading";
import Educator from "./Pages/Educator/Educator";
import Dashboard from "./Pages/Educator/Dashboard";
import AddCourse from "./Pages/Educator/AddCourse";
import MyCourses from "./Pages/Educator/MyCourses";
import StudentEnrolled from "./Pages/Educator/StudentEnrolled";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollment" element={<MyEnrollement />} />
        <Route path="/player/:courseID" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path="/educator/" element={<Educator />}>
          <Route path="/educator/dashboard/" element={<Dashboard />} />
          <Route path="/educator/add-course/" element={<AddCourse />} />
          <Route path="/educator/my-courses/" element={<MyCourses />} />
          <Route
            path="/educator/student-enrolled/"
            element={<StudentEnrolled />}
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
