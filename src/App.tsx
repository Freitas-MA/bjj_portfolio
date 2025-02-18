import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useFetchData } from './hooks/useFetchData';
import { LoadingSpinner } from './components/LoadingSpinner';
import { Navbar } from './components/Navbar';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Classes = lazy(() => import('./pages/Classes'));
const Instructors = lazy(() => import('./pages/Instructors'));
const Dojos = lazy(() => import('./pages/Dojos'));
const Schedule = lazy(() => import('./pages/Schedule'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function App() {
  const { data, loading, error } = useFetchData();

  if (loading) return <LoadingSpinner />;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route 
            path="/" 
            element={<Home data={data.pages.home} />} 
          />
          <Route 
            path="/classes" 
            element={<Classes data={data.pages.classes} />} 
          />
          <Route 
            path="/instructors" 
            element={<Instructors data={data.pages.instructors} />} 
          />
          <Route 
            path="/dojos" 
            element={<Dojos data={data.pages.dojos} />} 
          />
          <Route 
            path="/schedule" 
            element={<Schedule data={data.pages.schedule} />} 
          />
          <Route 
            path="/contact" 
            element={<Contact data={data.pages.contact} />} 
          />
          <Route 
            path="/privacy-policy" 
            element={<PrivacyPolicy data={data.pages.privacyPolicy} />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;