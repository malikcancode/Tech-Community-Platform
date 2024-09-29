import { useState } from "react";
import { useAuth } from "../Auth/Auth";
import { FiActivity } from "react-icons/fi";
import { MdOutlinePostAdd } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const UserDashboard = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();

  const data = [
    { name: "Week 1", Activities: 3, Posts: 2, Projects: 1 },
    { name: "Week 2", Activities: 4, Posts: 3, Projects: 1 },
    { name: "Week 3", Activities: 5, Posts: 3, Projects: 2 },
    { name: "Week 4", Activities: 3, Posts: 2, Projects: 1 },
  ];

  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Activities",
        data: data.map((item) => item.Activities),
        backgroundColor: "#8884d8",
      },
      {
        label: "Posts",
        data: data.map((item) => item.Posts),
        backgroundColor: "#82ca9d",
      },
      {
        label: "Projects",
        data: data.map((item) => item.Projects),
        backgroundColor: "#ffc658",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return (
      <div className="text-white text-center py-16 text-2xl">
        Please log in to access the dashboard.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 text-white">
      <header className="flex justify-between items-center mb-6 md:mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
        <div className="relative">
          <div
            className="flex items-center cursor-pointer gap-5"
            onClick={toggleDropdown}
          >
            <span className="ml-2 text-lg capitalize">{user.name}</span>

            <div className="bg-gray-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold capitalize">
              {user.name.charAt(0)}
            </div>
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 text-black mt-2 w-48 h-full bg-white rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-gray-800 rounded-lg py-8 p-4 md:py-16 md:p-6 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
              <FiActivity />
              Activity
            </h2>
            <p className="text-sm md:text-base">
              Total Activities: <span className="text-blue-400">15</span>
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-8 p-4 md:py-16 md:p-6 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
              <MdOutlinePostAdd />
              Posts
            </h2>
            <p className="text-sm md:text-base">
              You’ve posted <span className="text-blue-400">12</span> times this
              month.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg py-8 p-4 md:py-16 md:p-6 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold mb-2 flex items-center gap-2">
              <FaProjectDiagram />
              Projects
            </h2>
            <p className="text-sm md:text-base">
              Active in <span className="text-blue-400">3</span> projects.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg col-span-1 h-[60vh] sm:col-span-2 md:col-span-3 p-4 md:p-6 mt-6 md:mt-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4 text-center">
              Weekly Activities Overview
            </h2>
            <Bar data={chartData} options={options} height={300} />
          </div>
        </div>

        <div className="w-full md:w-[25%] flex flex-col gap-4 md:gap-6">
          <div className="bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-lg md:text-xl font-bold mb-4 flex items-center gap-2">
              Notifications <MdNotifications />
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg text-sm">
                <p>
                  <strong>New Comment:</strong> Sarah commented on your post.
                </p>
                <button className="mt-2 text-blue-500 text-xs">
                  Mark as read
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-sm">
                <p>
                  <strong>Project Update:</strong> The design project deadline
                  has been extended.
                </p>
                <button className="mt-2 text-blue-500 text-xs">
                  Mark as read
                </button>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 md:p-8 shadow-lg">
            <h2 className="text-[14px] md:text-[15px] whitespace-nowrap font-bold mb-4 flex items-center gap-2">
              Community Announcements <MdOutlineNotificationsActive />
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg text-sm">
                <p>
                  <strong>Event:</strong> Join the upcoming community hackathon
                  on Oct 1st!
                </p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-sm">
                <p>
                  <strong>Update:</strong> New features have been added to the
                  platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
