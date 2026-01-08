import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get("https://api.razorinfotech.com/api/blogs/get-blogs"); 
      setBlogs(res.data?.blogs ?? res.data ?? []);
    } catch (e) {
      setError(e?.response?.data?.message || e?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    const ok = window.confirm("Delete this blog?");
    if (!ok) return;

    setDeletingId(id);
    try {
      await axios.delete(`https://api.razorinfotech.com/api/blogs/delete-blog/${id}`);
      setBlogs((prev) => prev.filter((b) => b._id !== id && b.id !== id)); 
    } catch (e) {
      alert(e?.response?.data?.message || e?.message || "Delete failed");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section className="bg-emerald-50 py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold text-emerald-950 md:text-2xl">
            Admin Blogs
          </h2>

          <div className="flex gap-4">
            <button
            onClick={fetchBlogs}
            className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
          >
            Refresh
          </button>
          <button
            onClick={() => window.location.href = "/create-blog"}
            className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-800"
          >
            Create Blogs
          </button>
          </div>
        </div>

        {loading ? (
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            Loading...
          </div>
        ) : error ? (
          <div className="mt-8 rounded-2xl bg-white p-6 text-red-600 shadow-sm ring-1 ring-black/5">
            {error}
          </div>
        ) : blogs.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-white p-6 text-emerald-950/70 shadow-sm ring-1 ring-black/5">
            No blogs found.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => {
              const id = blog._id || blog.id;

              return (
                <div
                  key={id}
                  className="rounded-2xl bg-emerald-100/60 p-4 shadow-sm ring-1 ring-black/5"
                >
                  <div className="overflow-hidden rounded-xl bg-white">
                    <img
                      className="h-44 w-full object-cover"
                      src={blog.image || blog.thumbnail || "https://img.freepik.com/premium-photo/blogging-concept-web-blog-social-media-information-network-snugly_31965-595886.jpg?semt=ais_hybrid&w=740&q=80"}
                      alt={blog.title || "Blog"}
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-emerald-950">
                          {blog.title || "Untitled"}
                        </p>

                        {blog.category ? (
                          <span className="mt-2 inline-flex rounded-md bg-white/70 px-2 py-1 text-[11px] font-semibold text-emerald-950/80 ring-1 ring-black/5">
                            {blog.category}
                          </span>
                        ) : null}
                      </div>

                      <button
                        onClick={() => handleDelete(id)}
                        disabled={deletingId === id}
                        className="inline-flex items-center rounded-lg bg-red-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
                      >
                        {deletingId === id ? "Deleting..." : "Delete"}
                      </button>
                    </div>

                    {blog.excerpt || blog.description ? (
                      <p className="mt-3 text-sm text-emerald-950/70">
                        {(blog.excerpt || blog.description).slice(0, 120)}
                        {(blog.excerpt || blog.description).length > 120 ? "..." : ""}
                      </p>
                    ) : null}

                    <p className="mt-4 text-xs text-emerald-950/60">
                      {blog.dateLabel || blog.createdAt
                        ? `${blog.dateLabel || new Date(blog.createdAt).toDateString()}`
                        : ""}
                      {blog.readTime ? ` | ${blog.readTime}` : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export default AdminBlogs;
