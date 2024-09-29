import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import eventsData from "../data/eventdata";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

function EventDetailsPage() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [liked, setLiked] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const foundEvent = eventsData.find((event) => event.id === parseInt(id));
    if (foundEvent) {
      setEvent(foundEvent);
      setComments(foundEvent.comments);
    }
  }, [id]);

  const handleLike = () => {
    if (liked) {
      setEvent((prev) => ({ ...prev, likes: prev.likes - 1 }));
    } else {
      setEvent((prev) => ({ ...prev, likes: prev.likes + 1 }));
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

  if (!event) return <div>Loading...</div>;

  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-4xl font-bold sm:ml-4 sm:text-start text-center mb-8 text-white">
        {event.title}
      </h1>

      <div
        className="max-w-8xl mx-auto bg-opacity-10
       backdrop-blur-lg border border-white/30 shadow-lg rounded-lg p-6"
      >
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />
        <p className="text-sm text-gray-300 mb-2">
          {event.date} - {event.location}
        </p>
        <p className="text-gray-200 mb-4">{event.description}</p>

        <div className="mb-6">
          <h3 className="text-xl font-bold text-white">
            Registration Information
          </h3>
          <p className="mt-2 text-gray-300">
            To register for this event, visit the official event website.
          </p>
        </div>

        <div className="mb-4">
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
              {liked} {liked ? "Unlike" : "Like"} {event.likes}
            </button>
          </div>
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

export default EventDetailsPage;
