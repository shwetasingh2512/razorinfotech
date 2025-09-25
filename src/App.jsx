import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './Layout/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Footer from './Layout/Footer';
import ITSolution from './components/Our-Expertise/ITSolution';
import SoftwareDevelopement from './components/Our-Expertise/SoftwareDevelopement';
import AppDevelopement from './components/Our-Expertise/AppDevelopement';
import WebsiteDevelopement from './components/Our-Expertise/WebsiteDevelopement';
import MarketingBranding from './components/Our-Expertise/MarketingBranding';
import ContentCreationServices from './components/Our-Expertise/ContentCreationServices';
import CustomerSupport from './components/Our-Expertise/CustomerSupport';
import EmailSupport from './components/Our-Expertise/EmailSupport';
import InboundServices from './components/Our-Expertise/InboundServices';
import ContentModeration from './components/Our-Expertise/ContentModeration';

export default function App() {

  const routes = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/products',
      component: Products,
    },
    {
      path: '/it-solutions',
      component: ITSolution,
    },
    {
      path: '/software-developement',
      component: SoftwareDevelopement,
    },
    {
      path: '/app-developement',
      component: AppDevelopement,
    },
    {
      path: '/app-developement',
      component: AppDevelopement,
    },
    {
      path: '/website-developement',
      component: WebsiteDevelopement,
    },
    {
      path: '/marketing-branding',
      component: MarketingBranding,
    },
    {
      path: '/content-creation-services',
      component: ContentCreationServices,
    },
    {
      path: '/customer-support-services',
      component: CustomerSupport,
    },
    {
      path: '/email-support-services',
      component: EmailSupport,
    },
    {
      path: '/inbound-services',
      component: InboundServices,
    },
    {
      path: '/content-moderation-services',
      component: ContentModeration,
    },
  ]


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {
            routes.map((r, index) => (
              <Route key={index} path={r.path} element={<r.component />} />
            ))
          }
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}
