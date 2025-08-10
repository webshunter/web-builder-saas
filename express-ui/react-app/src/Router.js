import { useState } from 'react';
import App from './App';
import FeaturesPage from './pages/FeaturesPage';
import TemplatesPage from './pages/TemplatesPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';

// Simple hash-based router for SPA
import { useEffect } from 'react';

export default function Router() {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  if (route === '#features') return <FeaturesPage />;
  if (route === '#templates') return <TemplatesPage />;
  if (route === '#pricing') return <PricingPage />;
  if (route === '#footer' || route === '#contact') return <ContactPage />;
  return <App />;
}
