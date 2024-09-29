import { useNavigate } from "react-router-dom";
import eventsData from "../data/eventdata";
import projectsData from "../data/ongoingprojects";

function EventsProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-white sm:text-start sm:ml-4">
        Upcoming Tech Events & Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div
            key={event.id}
            className="border border-white/30 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6"
          >
            <img
              src={event.image}
              className="w-full h-40 object-cover rounded-lg mb-4"
              alt={event.title}
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              {event.title}
            </h2>
            <p className="text-sm text-gray-300 mb-4">
              {event.date} - {event.location}
            </p>
            <p className="text-gray-200 mb-4">{event.description}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(`/event/${event.id}`)}
                className="text-blue-400"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-4xl font-bold sm:text-start py-8 sm:ml-4 text-center my-8 text-white">
        Ongoing Tech Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="border border-white/30 bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-sm text-gray-300 mb-4">{project.date}</p>
            <p className="text-gray-200 mb-4">{project.description}</p>
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(`/project/${project.id}`)}
                className="text-blue-400"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsProjectsPage;
