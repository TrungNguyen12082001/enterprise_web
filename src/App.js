import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Admin from "./templates/Admin/Admin";
import CreateUser from "./components/ManageUsersByAdmin/User.admin";
import AddUser from "./components/ManageUsersByAdmin/AddUser";
// import EditUser from "./components/ManageUsersByAdmin/EditUser";
import Client from "./templates/Client/Client";
import CreateIdeas from "./components/CreateIdeas/CreateIdeas";
import IdeaList from "./components/IdeaList/IdeaList";
import { Categories } from "./components/Category/Categories";
import Submission from "./components/Submission/Submission";
import AllCategories from "./components/Category/AllCategories";
import AllSubmissions from "./components/Submission/AllSubmissions";
// import AllUsers from "./components/ManageUsersByAdmin/AllUsers";
import IdeaDetail from "./components/IdeaDetail/IdeaDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<Client />} />
        <Route path="/all-users" element={<CreateUser />} />
        <Route path="/add-user" element={<AddUser />} />
        {/* <Route path="/edit/:id" element={<EditUser />} /> */}
        <Route path="/add-idea/:id" element={<CreateIdeas />} />
        <Route path="/all-ideas/:id" element={<IdeaList />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/all-categories" element={<AllCategories />} />
        <Route path="/submissions" element={<Submission />} />
        <Route path="/all-submissions" element={<AllSubmissions />} />
        <Route path="/idea-detail/:id" element={<IdeaDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
