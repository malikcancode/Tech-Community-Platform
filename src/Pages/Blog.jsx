import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import blogPosts from "../data/blogposts";
import { useNavigate } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState(blogPosts);
  const [filter, setFilter] = useState("All");
  const [newPost, setNewPost] = useState({
    title: "",
    category: "",
    content: "",
  });
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleLike = (id) => {
    const updatedPosts = posts.map((post) => {
      if (post.id === id) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked,
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  const filteredPosts =
    filter === "All" ? posts : posts.filter((post) => post.category === filter);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPost.title && newPost.category && newPost.content) {
      const newPostData = {
        id: posts.length + 1,
        ...newPost,
        likes: 0,
        liked: false,
      };
      setPosts([newPostData, ...posts]);
      setNewPost({ title: "", category: "", content: "" });
      setShowForm(false);
    }
  };

  const truncateContent = (content, length = 100) => {
    return content.length > length
      ? content.substring(0, length) + "..."
      : content;
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog/Resource Page</h1>

      <div className="mb-4">
        <div className="w-full flex items-start justify-between">
          <div className="w-full sm:text-sm text-[2vw]">
            <button
              className={`px-4 py-2 mr-2 ${
                filter === "All" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleFilterChange("All")}
            >
              All
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                filter === "Community"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleFilterChange("Community")}
            >
              Community
            </button>
            <button
              className={`px-4 py-2 mr-2 ${
                filter === "Open Source"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => handleFilterChange("Open Source")}
            >
              Open Source
            </button>
            <button
              className={`px-4 py-2 ${
                filter === "Events" ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => handleFilterChange("Events")}
            >
              Events
            </button>
          </div>
          <button
            className="px-4 sm:text-sm text-[2vw] whitespace-nowrap py-2 bg-green-500 text-white"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Create New Post"}
          </button>
        </div>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-4 bg-gray-100 p-4 rounded">
          <div className="mb-4">
            <label className="block text-gray-700">Title:</label>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <select
              name="category"
              value={newPost.category}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="Community">Community</option>
              <option value="Open Source">Open Source</option>
              <option value="Events">Events</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Content:</label>
            <textarea
              name="content"
              value={newPost.content}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Add Post
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg shadow-lg text-white"
          >
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="mb-4 text-gray-400">
              {truncateContent(post.content, 100)}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Category: {post.category}
            </p>
            <div className="flex items-center justify-between">
              <button
                className={`flex items-center ${
                  post.liked ? "text-red-500" : "text-blue-500"
                }`}
                onClick={() => handleLike(post.id)}
              >
                {post.liked ? (
                  <FaThumbsDown className="mr-2" />
                ) : (
                  <FaThumbsUp className="mr-2" />
                )}
                {post.likes} {post.liked ? "Unlike" : "Like"}
              </button>
              <button
                onClick={() => navigate(`/blog-details/${post.id}`)}
                className="text-green-400 text-sm"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
