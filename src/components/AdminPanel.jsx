import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://port-backend-1-fh54.onrender.com/api/projects";

const AdminPanel = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", technologies: "", image: null, _id: null });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/admin");
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setProjects(data));
  }, [navigate]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("adminToken");
    const form = new FormData();
    form.append("name", formData.name);
    form.append("technologies", JSON.stringify(formData.technologies.split(",")));
    if (formData.image) form.append("image", formData.image);

    const method = formData._id ? "PUT" : "POST";
    const url = formData._id ? `${API_URL}/${formData._id}` : API_URL;

    const res = await fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    });
    if (res.ok) {
      setShowForm(false);
      setFormData({ name: "", technologies: "", image: null, _id: null });
      fetch(API_URL)
        .then(res => res.json())
        .then(data => setProjects(data));
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("adminToken");
    if (window.confirm("Delete this project?")) {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setProjects(projects.filter(p => p._id !== id));
    }
  };

  const handleUpdate = (project) => {
    setFormData({
      name: project.name,
      technologies: Array.isArray(project.technologies) ? project.technologies.join(",") : "",
      image: null,
      _id: project._id,
    });
    setShowForm(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  };

  return (
    <section className="py-16 bg-[#0a192f] min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Admin Panel</h2>
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded">
            Logout
          </button>
        </div>

        {/* Add Project Button */}
        <button
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          onClick={() => { 
            setShowForm(true); 
            setFormData({ name: "", technologies: "", image: null, _id: null }); 
          }}
        >
          Add Project
        </button>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-[#112240] rounded-xl p-6 w-full max-w-lg shadow-xl">
              <h3 className="text-xl font-semibold text-white mb-4">
                {formData._id ? "Update Project" : "Add New Project"}
              </h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Project Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block mb-3 p-2 w-full rounded bg-white/10 text-white placeholder-gray-300"
                />
                <input
                  type="text"
                  name="technologies"
                  placeholder="Technologies (comma separated)"
                  value={formData.technologies}
                  onChange={handleChange}
                  required
                  className="block mb-3 p-2 w-full rounded bg-white/10 text-white placeholder-gray-300"
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="block mb-4 text-white"
                />
                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {formData._id ? "Update" : "Add"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
          {projects.map((item) => (
            <div
              key={item._id}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 transition-transform hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={
                    item.image
                      ? item.image.startsWith("/uploads")
                        ? `https://port-backend-1-fh54.onrender.com${item.image}`
                        : item.image
                      : "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  alt={item.name}
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                <p className="text-white/80 mt-2">
                  {Array.isArray(item.technologies)
                    ? item.technologies.join(", ")
                    : item.technologies}
                </p>
                <button
                  className="mt-2 mr-2 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
                  onClick={() => handleUpdate(item)}
                >
                  Update
                </button>
                <button
                  className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
