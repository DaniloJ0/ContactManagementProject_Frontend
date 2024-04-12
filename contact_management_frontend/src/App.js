import { Route, BrowserRouter as Router, Routes } from "react-router-dom"; 
import './css/main.css'
import UsersPage from "./pages/UsersPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<UsersPage />} />
          <Route path="/contacts/:userId" element={<ContactsPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
