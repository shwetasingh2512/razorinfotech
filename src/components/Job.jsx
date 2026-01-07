import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Job() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
        console.log("Fetching job with ID:", id);
      try {
        const response = await axios.get(`http://localhost:3000/api/jobs/${id}`);
        console.log("Fetched job:", response.data);
        setJob(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job:', error);
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (!job) return <div className="flex justify-center items-center min-h-screen">Job not found</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <p className="text-gray-600">{job.tagline || 'Join our team. Be part of something great'}</p>
            <button className="mt-4 bg-green-700 text-white px-8 py-2 rounded hover:bg-green-800">
              Apply Now
            </button>
          </div>
          
          {/* Hero Image */}
          {job.image && (
            <img 
              src={job.image} 
              alt={job.title}
              className="w-full h-64 object-cover rounded-lg"
            />
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Job Details */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-4">{job.title}</h2>

              <p className="text-gray-700 mb-2">{job.whyLooking || job.description}</p>
            {/* Why Are We Looking For */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Why Are We Looking For</h3>
              {job.requirements && (
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {job.requirements}
                </ul>
              )}
            </section>

            {/* What you will be doing */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-3">What you will be doing</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {job.responsibilities}
              </ul>
            </section>

            {/* Bonus Point familiarity with */}
            {job.bonusSkills && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Bonus Point familiarity with</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {job.bonusSkills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Salary */}
            {job.salary && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Salary</h3>
                <p className="text-gray-700">{job.salary}</p>
              </section>
            )}

            {/* Working Hours */}
            {job.workingHours && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Working Hours</h3>
                <p className="text-gray-700">{job.workingHours}</p>
              </section>
            )}

            {/* Working Days */}
            {job.workingDays && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Working Days</h3>
                <p className="text-gray-700">{job.workingDays}</p>
              </section>
            )}

            {/* Perks and Benefits */}
            {/* {job.perks && (
              <section className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Perks and Benefits</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {job.perks.map((perk, index) => (
                    <li key={index}>{perk}</li>
                  ))}
                </ul>
              </section>
            )} */}
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
              {/* Job Info Icons */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-700">📅</span>
                  <div>
                    <p className="font-semibold">Job Seniority</p>
                    <p className="text-sm text-gray-600">{job.seniority || 'Mid-level'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-700">💼</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-sm text-gray-600">{job.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-700">📧</span>
                  <div>
                    <p className="font-semibold">Send email</p>
                    <p className="text-sm text-gray-600">{job.email || 'hr@razorinfotech.com'}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-green-700">💰</span>
                  <div>
                    <p className="font-semibold">Experience</p>
                    <p className="text-sm text-gray-600">{job.experience || '2+ years'}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded mb-6">
                <p className="font-semibold mb-2">Working hours</p>
                <p className="text-sm text-gray-600">{job.workingHours || '9 AM - 6 PM'}</p>
                
                <p className="font-semibold mt-3 mb-2">Working days</p>
                <p className="text-sm text-gray-600">{job.workingDays || 'Monday to Friday'}</p>
              </div>
              <button className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-800 mb-4">
                Apply Now
              </button>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Share this</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="text-gray-600 hover:text-green-700">🐦</a>
                  <a href="#" className="text-gray-600 hover:text-green-700">📘</a>
                  <a href="#" className="text-gray-600 hover:text-green-700">💼</a>
                  <a href="#" className="text-gray-600 hover:text-green-700">📸</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
