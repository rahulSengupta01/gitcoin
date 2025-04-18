import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig"; // Ensure your firebase config is correctly imported
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import './MyProject.css'; // Make sure to add the relevant CSS
import PostProject from "../Client/PostProject"; // Import the PostProject component

const MyProjects = () => {
  const [projects, setProjects] = useState([]);
  const [noProjects, setNoProjects] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      // Query Firestore to get all projects of the client
      const clientUID = "clientUID"; // You should replace this with the actual UID of the logged-in client
      const q = query(collection(db, "projects"), where("postedBy", "==", clientUID));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      setProjects(projectsData);
      setNoProjects(projectsData.length === 0);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  const handlePostProject = () => {
    navigate("/post-project"); // Navigate to your "Post Project" page
  };

  return (
    <div className="my-projects-container">
      <h2>Your Projects</h2>
      
      {loading ? (
        <p>Loading...</p>
      ) : noProjects ? (
        <div className="no-projects-container">
          <p>No projects posted yet.</p>
          <button onClick={handlePostProject} className="post-project-btn">Post a New Project</button>
        </div>
      ) : (
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={`project-status ${project.status.toLowerCase()}`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProjects;
