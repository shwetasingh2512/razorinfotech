import React, { useMemo, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

function CreateBlogs() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [auther, setAuther] = useState("");

  // Files (instead of URL strings)
  const [thumbnailFile, setThumbnailFile] = useState(null); // File | null
  const [coverFile, setCoverFile] = useState(null); // File | null

  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const BRAND_GREEN = "#2f6f4e";

  const styles = useMemo(
    () => ({
      page: {
        minHeight: "100vh",
        background: "#f6f8fb",
        padding: "28px 14px",
        color: "#0f172a",
        fontFamily:
          'Inter, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, sans-serif',
      },
      container: { maxWidth: 980, margin: "0 auto" },

      header: { marginBottom: 14 },
      title: { fontSize: 24, fontWeight: 800, margin: 0, color: "#0f172a" },
      subtitle: { margin: "6px 0 0", color: "#64748b", fontSize: 14 },

      card: {
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        borderRadius: 16,
        boxShadow: "0 12px 28px rgba(15, 23, 42, 0.08)",
        overflow: "hidden",
      },
      cardBody: { padding: 18 },

      grid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 },

      field: { display: "grid", gap: 6 },
      label: { fontSize: 13, color: "#334155", fontWeight: 700 },

      input: {
        height: 42,
        padding: "0 12px",
        borderRadius: 12,
        border: "1px solid #d1d5db",
        background: "#ffffff",
        color: "#0f172a",
        outline: "none",
      },

      file: {
        height: 42,
        padding: "8px 12px",
        borderRadius: 12,
        border: "1px solid #d1d5db",
        background: "#ffffff",
        color: "#0f172a",
        outline: "none",
      },

      full: { gridColumn: "1 / -1" },

      editorShell: {
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid #d1d5db",
        background: "#ffffff",
      },

      alert: (type) => ({
        gridColumn: "1 / -1",
        padding: "10px 12px",
        borderRadius: 12,
        border: type === "error" ? "1px solid #fecaca" : "1px solid #bbf7d0",
        background: type === "error" ? "#fef2f2" : "#f0fdf4",
        color: type === "error" ? "#991b1b" : "#166534",
        fontSize: 14,
      }),

      actions: {
        display: "flex",
        justifyContent: "flex-end",
        gap: 10,
        marginTop: 6,
        gridColumn: "1 / -1",
      },

      button: (disabled) => ({
        height: 44,
        padding: "0 18px",
        borderRadius: 999,
        border: `1px solid ${BRAND_GREEN}`,
        background: disabled ? "#9bc3ae" : BRAND_GREEN,
        color: "#ffffff",
        fontWeight: 800,
        cursor: disabled ? "not-allowed" : "pointer",
      }),

      small: { color: "#64748b", fontSize: 12, marginTop: 2 },
    }),
    []
  );

  const editorInit = useMemo(
    () => ({
      height: 320,
      menubar: false,
      branding: false,
      plugins: ["lists", "link", "blockquote", "code", "codesample", "wordcount"],
      toolbar:
        "undo redo | blocks | bold italic underline strikethrough | " +
        "alignleft aligncenter alignright | bullist numlist | " +
        "link blockquote codesample | removeformat | code",
      paste_as_text: true,
      content_css: "writer",
      content_style: `
        body { font-family: Inter, Arial, sans-serif; font-size: 15px; line-height: 1.7; padding: 10px 12px; color: #0f172a; }
        a { color: ${BRAND_GREEN}; }
        blockquote { border-left: 4px solid ${BRAND_GREEN}; background: #f0fdf4; padding: 10px 12px; border-radius: 10px; margin: 0.8em 0; }
      `,
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }

    try {
      setLoading(true);

      // Use FormData to send files + fields
      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("category", category);
      formData.append("auther", auther);

      if (thumbnailFile) formData.append("thumbnail", thumbnailFile);
      if (coverFile) formData.append("image", coverFile);

      const res = await fetch("https://api.razorinfotech.com/api/blogs/create-blog", {
        method: "POST",
        body: formData,
        // IMPORTANT: do NOT set Content-Type when sending FormData;
        // browser sets correct multipart boundary automatically. [web:122]
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to create blog");

      setSuccess("Blog created successfully.");
      setTitle("");
      setCategory("");
      setAuther("");
      setThumbnailFile(null);
      setCoverFile(null);
      setContent("");
    } catch (err) {
      setError(err.message || "Failed to create blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>Create Blog</h2>
          <p style={styles.subtitle}>
            Upload thumbnail & cover image, then write the blog content.
          </p>
        </div>

        <div style={styles.card}>
          <div style={styles.cardBody}>
            <form onSubmit={handleSubmit}>
              <div style={styles.grid}>
                <div style={styles.field}>
                  <div style={styles.label}>Title *</div>
                  <input
                    style={styles.input}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Our latest product updates"
                  />
                </div>

                <div style={styles.field}>
                  <div style={styles.label}>Category</div>
                  <input
                    style={styles.input}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="e.g. Company News"
                  />
                </div>

                <div style={styles.field}>
                  <div style={styles.label}>Author</div>
                  <input
                    style={styles.input}
                    value={auther}
                    onChange={(e) => setAuther(e.target.value)}
                    placeholder="e.g. Admin"
                  />
                </div>

                <div style={styles.field}>
                  <div style={styles.label}>Thumbnail (image file)</div>
                  <input
                    style={styles.file}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setThumbnailFile(e.target.files?.[0] || null)}
                  />
                  <div style={styles.small}>
                    {thumbnailFile ? `Selected: ${thumbnailFile.name}` : "Choose an image file"}
                  </div>
                </div>

                <div style={{ ...styles.field, ...styles.full }}>
                  <div style={styles.label}>Cover image (image file)</div>
                  <input
                    style={styles.file}
                    type="file"
                    accept="image/*"
                    onChange={(e) => setCoverFile(e.target.files?.[0] || null)}
                  />
                  <div style={styles.small}>
                    {coverFile ? `Selected: ${coverFile.name}` : "Choose an image file"}
                  </div>
                </div>

                <div style={{ ...styles.field, ...styles.full }}>
                  <div style={styles.label}>Content *</div>
                  <div style={styles.editorShell}>
                    <Editor
                      licenseKey="gpl"
                      tinymceScriptSrc={"tinymce/js/tinymce/tinymce.min.js"}
                      value={content}
                      onEditorChange={(newValue) => setContent(newValue)}
                      init={editorInit}
                    />
                  </div>
                </div>

                {error ? <div style={styles.alert("error")}>{error}</div> : null}
                {success ? <div style={styles.alert("success")}>{success}</div> : null}

                <div style={styles.actions}>
                  <button type="submit" disabled={loading} style={styles.button(loading)}>
                    {loading ? "Creating..." : "Create Blog"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBlogs;
