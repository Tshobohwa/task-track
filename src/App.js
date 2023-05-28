import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./routes/HomePage";
import LoginPage from "./routes/LoginPage";
import ResetPage from "./routes/ResetPage";
import ProjectsPage from "./routes/ProjectsPage";
import NewIssue from "./routes/NewIssue";
import SignUpPage from "./routes/SignUpPage";
import AboutPage from "./routes/AboutPage";
import SettingsPage from "./routes/SettingsPage";
import Header from "./components/Header/Header";

function App() {
  const { darkMode } = useSelector((store) => store.settings);
  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign_up" element={<SignUpPage />} />
        <Route path="/reset_password" element={<ResetPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/new_issue" element={<NewIssue />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
