import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/navbar.jsx';
import Landing from './components/Homepage/Landing.jsx';
import Login from './components/auth/Login';
import CreateTask from './components/Homepage/CreateTask';
import FindWork from './components/Homepage/FindWork.jsx';
import HireTalent from './components/Homepage/HireTalent.jsx';
import Footer from './components/Footer/Footer.jsx';
import ClientDashboard from './components/Client/ClientDashboard.jsx';
import UserDashboard from './components/User/UserDashboard.jsx';
import MyProject from './components/Client/MyProject.jsx';
import PostJob from './components/Client/PostJob.jsx';
import MyJobs from './components/Client/MyJobs.jsx';
import PostProject from './components/Client/PostProject.jsx';
import About from './components/Navbar/About.jsx';
import Explore from './components/Navbar/Explore.jsx';
import Contact from './components/Navbar/Contact.jsx';

function App() {
  const location = useLocation();

  const showNavbarRoutes = [
    '/', '/about', '/explore', '/contact', '/find-work', '/hire-talent', '/client-dashboard','/user-dashboard', '/my-project', '/post-job', '/my-jobs', '/post-project'
  ];

  // Define the routes where you want the footer to appear
  const showFooterRoutes = ['/about', '/explore', '/contact', '/'];

  const shouldShowFooter = showFooterRoutes.includes(location.pathname);
  const shouldShowNavbar = showNavbarRoutes.includes(location.pathname);
  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/find-work" element={<FindWork />} />
        <Route path="/hire-talent" element={<HireTalent />} />
        <Route path="/client-dashboard" element={<ClientDashboard />} />
        <Route path="/my-project" element={<MyProject />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/my-jobs" element={<MyJobs />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/post-project" element={<PostProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        

      </Routes>
      {shouldShowFooter && <Footer />}
    </>
  );
}

export default App;
