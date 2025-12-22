import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Jobcreate() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Full-time',
    experience: '',
    salary: '',
    description: '',
    requirements: '',
    responsibilities: '',
    skills: '',
    applicationDeadline: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3000/api/jobs', formData);
      
      if (response.status === 201) {
        alert('Job posted successfully!');
        navigate('/jobs');
      }
    } catch (err) {
      console.error('Job creation error:', err);
      setError(err.response?.data?.message || 'Failed to post job. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#d4ddd4] py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Create Job Opening</h1>
              <p className="text-gray-500 mt-2">Fill in the details to post a new job opportunity</p>
            </div>
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 font-medium transition-colors"
            >
              ← Back
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-semibold text-gray-700 block">
                  Job Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                  placeholder="e.g., Senior React Developer"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-semibold text-gray-700 block">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                  placeholder="e.g., Tech Corp"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="location" className="text-sm font-semibold text-gray-700 block">
                  Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                  placeholder="e.g., Bangalore, India"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-semibold text-gray-700 block">
                  Job Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="experience" className="text-sm font-semibold text-gray-700 block">
                  Experience Required
                </label>
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                  placeholder="e.g., 2-5 years"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="salary" className="text-sm font-semibold text-gray-700 block">
                  Salary Range
                </label>
                <input
                  type="text"
                  id="salary"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  disabled={loading}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                  placeholder="e.g., ₹8-12 LPA"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-semibold text-gray-700 block">
                Job Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                disabled={loading}
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 resize-none disabled:opacity-50"
                placeholder="Provide a detailed description of the job role..."
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="requirements" className="text-sm font-semibold text-gray-700 block">
                Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleChange}
                disabled={loading}
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 resize-none disabled:opacity-50"
                placeholder="List the key requirements (separate each with a new line)"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="responsibilities" className="text-sm font-semibold text-gray-700 block">
                Responsibilities
              </label>
              <textarea
                id="responsibilities"
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
                disabled={loading}
                rows="4"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 resize-none disabled:opacity-50"
                placeholder="List the key responsibilities (separate each with a new line)"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="skills" className="text-sm font-semibold text-gray-700 block">
                Required Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
                placeholder="e.g., React, Node.js, MongoDB, AWS (comma-separated)"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="applicationDeadline" className="text-sm font-semibold text-gray-700 block">
                Application Deadline
              </label>
              <input
                type="date"
                id="applicationDeadline"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleChange}
                disabled={loading}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#6b8e6b] focus:border-transparent outline-none transition-all bg-gray-50 disabled:opacity-50"
              />
            </div>

            <div className="flex gap-4 pt-6">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-[#6b8e6b] text-white py-3.5 rounded-xl font-semibold hover:bg-[#547054] focus:outline-none focus:ring-2 focus:ring-[#6b8e6b] focus:ring-offset-2 transform transition-all hover:scale-[1.01] active:scale-[0.99] shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {loading ? 'Posting Job...' : 'Post Job Opening →'}
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={() => setFormData({
                  title: '',
                  company: '',
                  location: '',
                  type: 'Full-time',
                  experience: '',
                  salary: '',
                  description: '',
                  requirements: '',
                  responsibilities: '',
                  skills: '',
                  applicationDeadline: ''
                })}
                className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">📋 Quick Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-[#6b8e6b] mr-2">•</span>
              Write a clear and concise job title
            </li>
            <li className="flex items-start">
              <span className="text-[#6b8e6b] mr-2">•</span>
              Provide detailed job description to attract right candidates
            </li>
            <li className="flex items-start">
              <span className="text-[#6b8e6b] mr-2">•</span>
              List specific skills and requirements
            </li>
            <li className="flex items-start">
              <span className="text-[#6b8e6b] mr-2">•</span>
              Include salary range for better transparency
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Jobcreate;
