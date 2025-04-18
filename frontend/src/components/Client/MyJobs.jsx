import React, { useEffect, useState } from "react";
import { auth, db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        navigate("/login");
        return;
      }

      try {
        const q = query(collection(db, "jobs"), where("postedBy", "==", user.uid));
        const querySnapshot = await getDocs(q);

        const jobList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Posted Jobs</h2>
      {loading ? (
        <p>Loading jobs...</p>
      ) : jobs.length === 0 ? (
        <p>No jobs posted yet.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id} style={{ marginBottom: "10px" }}>
              <strong>{job.title}</strong> — {job.status || "No status"}
              <br />
              <span>{job.description || "No description"}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyJobs;
