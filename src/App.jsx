import { Suspense, lazy, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./Pages/Loading";
import RegistrationForm from "./Pages/RegistrationForm";
import Dashboard from "./Pages/Dashboard";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Layout from "./Pages/Layout";

const LandingPage = lazy(() => import("./Pages/LandingPage"));
const TextReveal = lazy(() => import("./Pages/TextReveal"));
const VideoSection = lazy(() => import("./Pages/VideoSection"));
const Testimonials = lazy(() => import("./Pages/Testimonials"));
const Marquee = lazy(() => import("./Pages/Marquee"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const EventsProjectsPage = lazy(() => import("./Pages/EventsProjectPage"));
const EventDetailsPage = lazy(() => import("./Pages/EventDetailsPage"));
const ProjectDetailsPage = lazy(() => import("./Pages/ProjectsDetailsPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <TextReveal />
                <VideoSection />
                <Testimonials />
                <Marquee />
              </>
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/events" element={<EventsProjectsPage />} />
          <Route path="/event/:id" element={<EventDetailsPage />} />
          <Route path="/project/:id" element={<ProjectDetailsPage />} />
          <Route path="/registrationform" element={<RegistrationForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details/:id" element={<BlogDetails />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
