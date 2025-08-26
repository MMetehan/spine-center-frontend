import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './contexts/AuthContext';

// Main Layout Components
import AppLayout from './layouts/AppLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import TeamMember from './pages/TeamMember';
import Treatments from './pages/Treatments';
import TreatmentDetail from './pages/TreatmentDetail';
import FAQ from './pages/FAQ';
import News from './pages/News';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import Research from './pages/Research';
import Projects from './pages/Projects';
import Innovation from './pages/Innovation';
import Media from './pages/Media';
import Sponsors from './pages/Sponsors';

// Admin Pages
import AdminLogin from './pages/Admin/Login';
import Dashboard from './pages/Admin/Dashboard';
import AdminProjects from './pages/Admin/Projects';
import AdminSponsors from './pages/Admin/Sponsors';
import AdminResearch from './pages/Admin/Research';
import AdminMedia from './pages/Admin/Media';
import AdminInnovation from './pages/Admin/Innovation';
import AdminFAQ from './pages/Admin/FAQ';
import AdminTreatments from './pages/Admin/Treatments';
import AdminTeam from './pages/Admin/Team';
import AdminNews from './pages/Admin/News';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="team" element={<Team />} />
              <Route path="team/:id" element={<TeamMember />} />
              <Route path="treatments" element={<Treatments />} />
              <Route path="treatments/:slug" element={<TreatmentDetail />} />
              <Route path="research" element={<Research />} />
              <Route path="projects" element={<Projects />} />
              <Route path="innovation" element={<Innovation />} />
              <Route path="media" element={<Media />} />
              <Route path="sponsors" element={<Sponsors />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="news" element={<News />} />
              <Route path="contact" element={<Contact />} />
              <Route path="appointment" element={<Appointment />} />
            </Route>

            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<AdminLogin />} />
              <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
              <Route path="projects" element={<RequireAuth><AdminProjects /></RequireAuth>} />
              <Route path="sponsors" element={<RequireAuth><AdminSponsors /></RequireAuth>} />
              <Route path="research" element={<RequireAuth><AdminResearch /></RequireAuth>} />
              <Route path="media" element={<RequireAuth><AdminMedia /></RequireAuth>} />
              <Route path="innovation" element={<RequireAuth><AdminInnovation /></RequireAuth>} />
              <Route path="faq" element={<RequireAuth><AdminFAQ /></RequireAuth>} />
              <Route path="treatments" element={<RequireAuth><AdminTreatments /></RequireAuth>} />
              <Route path="team" element={<RequireAuth><AdminTeam /></RequireAuth>} />
              <Route path="news" element={<RequireAuth><AdminNews /></RequireAuth>} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
