import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiClock, FiUser, FiTag, FiArrowLeft, FiShare2 } from 'react-icons/fi';

function Blog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [readTime, setReadTime] = useState(0);

  useEffect(() => {
    if (!id) return;
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://api.razorinfotech.com/api/blogs/get-blog/${id}`);
        if (!res.ok) throw new Error('Failed to fetch blog');
        const data = await res.json();
        setBlog(data.blog);
        
        // Calculate read time (average 200 words per minute)
        const wordCount = data.blog.content.replace(/<[^>]*>/g, '').split(/\s+/).length;
        setReadTime(Math.ceil(wordCount / 200));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: `Check out this article: ${blog.title}`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent"></div>
          <p className="mt-4 text-lg text-slate-600 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
        <div className="text-center max-w-md px-6">
          <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Oops! Something went wrong</h2>
          <p className="text-slate-600 mb-6">{error}</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            <FiArrowLeft /> Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="text-center max-w-md px-6">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Blog Not Found</h2>
          <p className="text-slate-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors duration-200"
          >
            <FiArrowLeft /> Browse All Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section with Thumbnail */}
      <div className="relative w-full bg-gradient-to-br from-slate-900 to-emerald-900 overflow-hidden">
        {blog.thumbnail && (
          <div className="absolute inset-0 opacity-30">
            <img 
              src={blog.thumbnail} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
          </div>
        )}
        
        <div className="relative max-w-4xl mx-auto px-6 py-12 sm:py-16 md:py-20">
          {/* Back Button */}
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-200 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm font-medium">Back to Articles</span>
          </Link>

          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-200 px-4 py-1.5 rounded-full text-sm font-semibold border border-emerald-400/30">
              <FiTag size={14} />
              {blog.category}
            </span>
            <span className="flex items-center gap-2 text-white/70 text-sm">
              <FiClock size={14} />
              {readTime} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl">
            {blog.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
                {blog.auther?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm text-white/60">Written by</p>
                <p className="font-semibold text-white">{blog.auther}</p>
              </div>
            </div>

            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-all duration-200 border border-white/20"
            >
              <FiShare2 size={16} />
              <span className="text-sm font-medium">Share</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 sm:py-16">
        {/* Featured Image (if different from thumbnail) */}
        {blog.thumbnail && (
          <div className="mb-12 -mt-20 relative z-10">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src={blog.thumbnail} 
                alt={blog.title} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <div 
          className="prose prose-lg prose-slate max-w-none
            prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-emerald-200 prose-h2:pb-3
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:text-emerald-700 hover:prose-a:underline
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ol:my-6
            prose-li:text-slate-700 prose-li:mb-2
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
            prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:my-8
            prose-code:bg-slate-100 prose-code:text-emerald-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm
            prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl prose-pre:shadow-lg"
          dangerouslySetInnerHTML={{ __html: blog.content }} 
        />

        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t-2 border-slate-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* Author Card */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                {blog.auther?.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="text-sm text-slate-500">Article by</p>
                <p className="font-bold text-lg text-slate-900">{blog.auther}</p>
              </div>
            </div>

            {/* Share Again */}
            <button
              onClick={handleShare}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <FiShare2 size={18} />
              <span className="font-medium">Share Article</span>
            </button>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 transition-colors duration-200 font-medium"
          >
            <span>Back to Top</span>
            <span className="text-xl">↑</span>
          </button>
        </div>
      </article>
    </div>
  );
}

export default Blog;
