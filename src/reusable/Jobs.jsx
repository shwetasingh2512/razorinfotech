import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [categories, setCategories] = useState([]);
    const [activeCategory, setActiveCategory] = useState("All");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res= await axios.get('https://api.razorinfotech.com/api/jobs');
                console.log("Fetched jobs:", res.data);
                setJobs(res.data);

                const uniqueCategories = [
                    "All",
                    ...new Set(res.data.map((job) => job.title)),
                ];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs();
    }, []);

    const filteredJobs =
        activeCategory === "All"
            ? jobs
            : jobs.filter((job) => job.category === activeCategory);

    const openJob = (job) => {
        const slug = job.toLowerCase().replace(/ /g, "-");
        navigate(`/job/${slug}`, { state: job });
    };

    return (
        <section className="min-h-screen px-8 py-10 bg-white">
            <h2 className="text-center text-3xl font-bold mb-10">
                We have {jobs.length} open positions now!
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                <aside className="col-span-1 bg-white p-4 rounded-lg">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`w-full text-left px-4 py-2 rounded-md mb-2 ${activeCategory === cat
                                    ? "bg-green-700 text-white"
                                    : "bg-green-100 text-green-800"
                                }`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </aside>
                <div className="col-span-3 space-y-6">
                    {filteredJobs?.map((job) => (
                        <div
                            key={job._id}
                            className="bg-green-50 p-6 rounded-2xl border border-green-200 shadow-sm flex justify-between items-start"
                        >
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {job.title}
                                </h3>
                                <p className="text-gray-600 mt-2 max-w-xl">{job.description}</p>
                            </div>

                            <button
                                className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full transition flex items-center gap-2"
                                onClick={() => openJob(job._id)}
                            >
                                See positions →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
