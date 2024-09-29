import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import projectsData from "../data/ongoingprojects";

function ProjectDetailsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const foundProject = projectsData.find(
      (project) => project.id === parseInt(id)
    );
    if (foundProject) {
      setProject(foundProject);
      setComments(foundProject.comments || []);
    }
  }, [id]);

  const handleLike = () => {
    if (liked) {
      setProject((prev) => ({ ...prev, likes: prev.likes - 1 }));
    } else {
      setProject((prev) => ({ ...prev, likes: prev.likes + 1 }));
    }
    setLiked(!liked);
  };

  const handleAddComment = () => {
    const comment = {
      id: comments.length + 1,
      text: newComment,
      user: "Anonymous",
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-4xl font-bold sm:ml-8 sm:text-start text-center mb-8 text-white">
        {project.title}
      </h1>

      <div className="max-w-8xl mx-auto bg-opacity-10 backdrop-blur-lg border border-white/30 shadow-lg rounded-lg p-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-300 mb-2">
          {project.date} - {project.location}
        </p>
        <p className="text-gray-200 mb-4">{project.description}</p>

        <div className="mb-4">
          <h3 className="text-xl font-bold text-white">Project Details</h3>
          <p className="mt-2 text-gray-300">{project.details}</p>
        </div>

        <div className="mb-4">
          <button onClick={handleLike} className="text-blue-400 mb-2">
            {liked ? "👎 Unlike" : "👍 Like"} {project.likes || 0}
          </button>

          <div className="mt-4">
            <h3 className="text-xl font-bold text-white mb-4">Comments</h3>
            <ul className="mb-4">
              {comments.map((comment) => (
                <li key={comment.id} className="text-gray-300">
                  <span className="text-blue-500">{comment.user}</span> :{" "}
                  {comment.text}
                </li>
              ))}
            </ul>

            <div>
              <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment"
                className="border rounded p-2 w-full bg-gray-900 text-gray-200
                 placeholder-gray-500"
              />
              <button
                onClick={handleAddComment}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Add Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailsPage;
