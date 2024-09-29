import { useParams } from "react-router-dom";
import blogPosts from "../data/blogposts";
import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

function BlogDetails() {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = blogPosts.find((post) => post.id === postId);
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(post.liked);

  if (!post) {
    return <div className="text-center text-white">Post not found!</div>;
  }

  const handleLike = () => {
    setLikes(liked ? likes - 1 : likes + 1);
    setLiked(!liked);
  };

  return (
    <div className="h-full p-6 mt-16">
      <div className="max-w-4xl w-full p-6 rounded-lg shadow-lg">
        <h1 className="text-5xl w-full font-bold mb-6 text-white">
          {post.title}
        </h1>
        <p className="text-gray-400 mb-2 text-start">
          Category :{" "}
          <span className="text-green-400 px-2">{post.category}</span>
        </p>
        <p className="mb-4 text-xl text-white">{post.content}</p>
        <div className="flex items-center">
          <button
            className={`flex items-center ${
              liked ? "text-red-500" : "text-blue-500"
            }`}
            onClick={handleLike}
          >
            {liked ? (
              <FaThumbsDown className="mr-2" />
            ) : (
              <FaThumbsUp className="mr-2" />
            )}
            {likes} {liked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
