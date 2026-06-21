import React, { useState } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [savedJobs, setSavedJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      role: "Frontend Developer",
      company: "TechNova",
      location: "Bangalore",
      salary: "₹8 LPA",
      skills: "React, JavaScript, CSS",
      description:
        "Develop responsive user interfaces and collaborate with backend teams."
    },
    {
      id: 2,
      role: "Backend Developer",
      company: "CloudSoft",
      location: "Hyderabad",
      salary: "₹10 LPA",
      skills: "Node.js, Express, MongoDB",
      description:
        "Build scalable APIs and manage server-side applications."
    },
    {
      id: 3,
      role: "Full Stack Developer",
      company: "Infosys",
      location: "Chennai",
      salary: "₹9 LPA",
      skills: "React, Node.js, MySQL",
      description:
        "Work on both frontend and backend systems."
    },
    {
      id: 4,
      role: "UI/UX Designer",
      company: "Wipro",
      location: "Pune",
      salary: "₹7 LPA",
      skills: "Figma, Adobe XD",
      description:
        "Design modern and user-friendly interfaces."
    },
    {
      id: 5,
      role: "Data Analyst",
      company: "TCS",
      location: "Mumbai",
      salary: "₹8.5 LPA",
      skills: "Python, SQL, Power BI",
      description:
        "Analyze business data and create insightful reports."
    }
  ];

  const saveJob = (job) => {
    if (!savedJobs.find((j) => j.id === job.id)) {
      setSavedJobs([...savedJobs, job]);
    }
  };

  const removeJob = (id) => {
    setSavedJobs(savedJobs.filter((job) => job.id !== id));
  };

  const filteredJobs = jobs.filter(
    (job) =>
      job.role.toLowerCase().includes(search.toLowerCase()) &&
      (location === "" || job.location === location)
  );

  const containerStyle = {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb,#38bdf8)",
    color: "white",
    fontFamily: "Arial, sans-serif",
    padding: "20px"
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
  };

  const buttonStyle = {
    background: "#2563eb",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    margin: "5px"
  };

  return (
    <div style={containerStyle}>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          alignItems: "center",
          marginBottom: "20px"
        }}
      >
        <h2>🎓 Placement Cell Portal</h2>

        <div>
          <button style={buttonStyle} onClick={() => setPage("home")}>
            Home
          </button>

          <button style={buttonStyle} onClick={() => setPage("jobs")}>
            Jobs
          </button>

          <button style={buttonStyle} onClick={() => setPage("saved")}>
            Saved ({savedJobs.length})
          </button>

          <button style={buttonStyle} onClick={() => setPage("apply")}>
            Apply
          </button>

          <button style={buttonStyle} onClick={() => setPage("contact")}>
            Contact
          </button>
        </div>
      </nav>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          <div style={cardStyle}>
            <h1>Welcome to Placement Cell Job Portal</h1>
            <p>
              Discover exciting career opportunities and apply to top
              companies through our placement cell.
            </p>

            <button
              style={buttonStyle}
              onClick={() => setPage("jobs")}
            >
              Explore Jobs
            </button>
          </div>

          <h2>Placement Statistics</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))"
            }}
          >
            <div style={cardStyle}>
              <h2>500+</h2>
              <p>Students Placed</p>
            </div>

            <div style={cardStyle}>
              <h2>150+</h2>
              <p>Recruiting Companies</p>
            </div>

            <div style={cardStyle}>
              <h2>95%</h2>
              <p>Placement Rate</p>
            </div>

            <div style={cardStyle}>
              <h2>1000+</h2>
              <p>Job Opportunities</p>
            </div>
          </div>

          <h2>Featured Companies</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))"
            }}
          >
            {[
              "Google",
              "Microsoft",
              "Amazon",
              "Infosys",
              "TCS",
              "Wipro"
            ].map((company) => (
              <div key={company} style={cardStyle}>
                <h3>{company}</h3>
              </div>
            ))}
          </div>

          <h2>Success Stories</h2>

          <div style={cardStyle}>
            <p>👨‍💻 Arun Kumar - Software Engineer at Infosys</p>
            <p>👩‍💻 Priya Sharma - Data Analyst at TCS</p>
            <p>👨‍💻 Rahul Singh - Frontend Developer at Wipro</p>
          </div>
        </>
      )}

      {/* JOBS PAGE */}
      {page === "jobs" && (
        <>
          <h1>Available Jobs</h1>

          <input
            type="text"
            placeholder="Search by Role"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px",
              width: "250px"
            }}
          />

          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              padding: "10px",
              margin: "10px"
            }}
          >
            <option value="">All Locations</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Pune</option>
            <option>Mumbai</option>
          </select>

          {filteredJobs.map((job) => (
            <div key={job.id} style={cardStyle}>
              <h2>{job.role}</h2>
              <p>🏢 {job.company}</p>
              <p>📍 {job.location}</p>
              <p>💰 {job.salary}</p>

              <button
                style={buttonStyle}
                onClick={() => setSelectedJob(job)}
              >
                View Details
              </button>

              <button
                style={buttonStyle}
                onClick={() => saveJob(job)}
              >
                Bookmark
              </button>
            </div>
          ))}
        </>
      )}

      {/* JOB DETAILS MODAL */}
      {selectedJob && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              background: "white",
              color: "black",
              padding: "30px",
              borderRadius: "15px",
              width: "90%",
              maxWidth: "600px"
            }}
          >
            <h2>{selectedJob.role}</h2>
            <p><b>Company:</b> {selectedJob.company}</p>
            <p><b>Location:</b> {selectedJob.location}</p>
            <p><b>Salary:</b> {selectedJob.salary}</p>
            <p><b>Skills:</b> {selectedJob.skills}</p>
            <p>{selectedJob.description}</p>

            <button
              style={buttonStyle}
              onClick={() => {
                setPage("apply");
                setSelectedJob(null);
              }}
            >
              Apply Now
            </button>

            <button
              style={buttonStyle}
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* APPLY PAGE */}
      {page === "apply" && (
        <div style={cardStyle}>
          <h1>Apply for Job</h1>

          <input
            placeholder="Full Name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <input
            placeholder="Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <input
            placeholder="Phone Number"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <input
            placeholder="Resume Link"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <button
            style={buttonStyle}
            onClick={() => alert("Application Submitted Successfully")}
          >
            Submit Application
          </button>
        </div>
      )}

      {/* SAVED JOBS PAGE */}
      {page === "saved" && (
        <>
          <h1>Saved Jobs ({savedJobs.length})</h1>

          {savedJobs.length === 0 ? (
            <div style={cardStyle}>
              <p>No saved jobs yet.</p>
            </div>
          ) : (
            savedJobs.map((job) => (
              <div key={job.id} style={cardStyle}>
                <h2>{job.role}</h2>
                <p>{job.company}</p>
                <p>{job.location}</p>

                <button
                  style={buttonStyle}
                  onClick={() => removeJob(job.id)}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </>
      )}

      {/* CONTACT PAGE */}
      {page === "contact" && (
        <div style={cardStyle}>
          <h1>Contact Placement Cell</h1>

          <p>📧 placement@college.edu</p>
          <p>📞 +91 9876543210</p>
          <p>📍 College Placement Office</p>

          <input
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <input
            placeholder="Your Email"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <textarea
            placeholder="Message"
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px"
            }}
          />

          <button
            style={buttonStyle}
            onClick={() => alert("Message Sent")}
          >
            Send Message
          </button>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          marginTop: "40px",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <hr />
        <p>
          © 2026 Placement Cell Job Portal | Built with React
        </p>
      </footer>
    </div>
  );
}
