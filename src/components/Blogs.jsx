import React, { useMemo, useState, useEffect } from "react";

function LatestPostsSection({ 
  posts = [], 
  title = "Latest Posts", 
  onViewAllHref = "#",
  loading = false,
  error = null 
}) {
  const [active, setActive] = useState("All");

  const FILTERS = useMemo(() => {
    const categories = Array.from(
      new Set((posts || []).map((p) => p.category || "Uncategorized"))
    );
    return ["All", ...categories];
  }, [posts]);

  const filtered = useMemo(() => {
    if (active === "All") return posts;
    return posts.filter((p) => p.category === active);
  }, [active, posts]);

  return (
    <section className="bg-emerald-50 py-10 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold text-emerald-950 md:text-2xl">
            {title}
          </h2>

          <div className="flex w-fit items-center gap-2 rounded-full bg-white/60 p-1 shadow-sm ring-1 ring-black/5">
            {FILTERS.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={[
                    "rounded-full px-4 py-1.5 text-xs transition",
                    isActive
                      ? "bg-emerald-700 font-semibold text-white"
                      : "font-medium text-emerald-950/70 hover:bg-white",
                  ].join(" ")}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="animate-pulse rounded-2xl bg-emerald-100/60 p-4 shadow-sm ring-1 ring-black/5"
              >
                <div className="h-44 w-full rounded-xl bg-emerald-200/50"></div>
                <div className="mt-4 space-y-3">
                  <div className="h-6 w-24 rounded-md bg-emerald-200/50"></div>
                  <div className="h-4 w-full rounded bg-emerald-200/50"></div>
                  <div className="h-4 w-3/4 rounded bg-emerald-200/50"></div>
                  <div className="h-3 w-32 rounded bg-emerald-200/50"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="mt-8 rounded-2xl bg-red-50 p-6 text-center">
            <p className="text-sm text-red-600">
              Failed to load blogs: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filtered.length === 0 && (
          <div className="mt-8 rounded-2xl bg-white/60 p-12 text-center">
            <p className="text-emerald-950/60">No blogs found in this category.</p>
          </div>
        )}

        {/* Posts Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="group rounded-2xl bg-emerald-100/60 p-4 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                  />
                </div>

                <div className="mt-4">
                  <span className="inline-flex rounded-md bg-white/70 px-2 py-1 text-[11px] font-semibold text-emerald-950/80 ring-1 ring-black/5">
                    {post.category === "IT" ? "IT Solutions" : post.category}
                  </span>

                  <h3 className="mt-3 font-semibold text-emerald-950">
                    {post.title}
                  </h3>

                  <p className="mt-2 text-sm text-emerald-950/70">{post.excerpt}</p>

                  <p className="mt-4 text-xs text-emerald-950/60">
                    {post.dateLabel} | {post.readTime}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}

        {!loading && !error && posts.length > 0 && (
          <div className="mt-10 flex justify-center">
            <a
              href={onViewAllHref}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              View All Blogs
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg leading-none">
                ›
              </span>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("https://api.razorinfotech.com/api/blogs/get-blogs");
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const formattedPosts = data.blogs?.map((blog) => (
          
           {
          id: blog._id || blog.id,
          title: blog.title,
          category: blog.category,
          excerpt: blog.excerpt || blog.description?.substring(0, 100) + "...",
          dateLabel: new Date(blog.createdAt || blog.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          readTime: blog.readTime || "4 min read",
          image: blog.image || blog.thumbnail || "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          href: `/blog/${blog.slug || blog._id || blog.id}`,
        })) || [];

        setPosts(formattedPosts);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []); 

  return (
    <>
      <section className="bg-emerald-50 py-10 md:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-emerald-950 md:text-5xl">
              Stay Updated With <br />
              Business Insights &amp; <br />
              Latest Trends
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-emerald-900/70 md:text-base">
              Explore articles for experts' insights, latest updates, and actionable
              strategies to stay informed with information that drive growth.
            </p>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-3 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              View Blogs
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 text-lg leading-none">
                ›
              </span>
            </a>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
            <img
              className="h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1400&q=80"
              alt="Blog/insights"
            />
          </div>
        </div>
      </section>

      <LatestPostsSection 
        posts={posts} 
        loading={loading} 
        error={error}
      />
    </>
  );
}

export default Blogs;
