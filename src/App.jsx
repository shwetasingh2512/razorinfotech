import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
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
import DataEntery from './components/Our-Expertise/DataEntery';
import ItHelpDesk from './components/Our-Expertise/ItHelpDesk';
import Seo from './components/Our-Expertise/Seo';
import HrServices from './components/Our-Expertise/HrServices';
import TalentDevelopement from './components/Our-Expertise/TalentDevelopement';
import Training from './components/Our-Expertise/Training';
import Career from './components/Career';
import AppstoreOptimization from './components/Our-Expertise/AppstoreOptimization';
import LegalComplience from './components/Our-Expertise/LegalComplience';
import AngleInvester from './components/Our-Expertise/AngleInvester';
import DataManagement from './components/Our-Expertise/DataManagement';
import BackendOutsource from './components/Our-Expertise/BackendOutsource';
import Omnichanel from './components/Our-Expertise/Omnichanel';
import ContentManagement from './components/Our-Expertise/ContentManagement';
import FinancialServices from './components/Our-Expertise/FinancialServices';
import BusinessConsultancy from './components/Our-Expertise/BusinessConsultancy';
import Youtube from './components/Our-Expertise/Youtube';
import Googlemybusiness from './components/Our-Expertise/Googlemybusiness';
import OnlineReputaionMarket from './components/Our-Expertise/OnlineReputaionMarket';
import NotFound from './components/NotFound';
import AdminLogin from './components/AdminLogin';
import Jobcreate from './components/Jobcreate';
import Admin from './components/Admin';
import Job from './components/Job';
import Blogs from './components/Blogs';
import Blog from './components/Our-Expertise/Blog';
import AdminBlogs from './components/AdminBlogs';
import CreateBlogs from './components/CreateBlogs';
import Socialmediamarketing from './components/Our-Expertise/Socialmediamarketing';
import Bpo from './components/Our-Expertise/Bpo';
import GraphicDesign from './components/Our-Expertise/GraphicDesign';
import Outbound from './components/Our-Expertise/Outbound';
import Rpo from './components/Our-Expertise/Rpo';

export default function App() {
  const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/products', component: Products },
    { path: '/career', component: Career },
    { path: '/it-solution', component: ITSolution },
    { path: '/software-developement', component: SoftwareDevelopement },
    { path: '/app-developement', component: AppDevelopement },
    { path: '/website-developement', component: WebsiteDevelopement },
    { path: '/marketing-and-branding', component: MarketingBranding },

    { path :"/bpo-services" , component: Bpo},
    { path: '/customer-support-services', component: CustomerSupport },
    { path: '/inbound-service', component: InboundServices },
    { path :"/outbound-service" , component: Outbound},
    { path: '/omnichannel-support', component: Omnichanel },
    { path: '/email-support-service', component: EmailSupport },

    
    { path: '/data-entry-service', component: DataEntery },
    { path: '/data-management-service', component: DataManagement },
    { path: '/content-management', component: ContentManagement },
    { path: '/content-creation-service', component: ContentCreationServices },
    { path: '/content-moderation-service', component: ContentModeration },
    { path: '/it-help-desk', component: ItHelpDesk },
    { path: '/backend-outsourcing-services', component: BackendOutsource },
    {path :"/recruitment-process-outsourcing" , component: Rpo},
    { path: '/training-and-development', component: Training },
    { path: '/talent-developement', component: TalentDevelopement },
    { path: '/seo', component: Seo },
    { path: '/app-store-optimization', component: AppstoreOptimization },
    { path: '/hr-outsourcing', component: HrServices },
    { path: '/Legal-compliance', component: LegalComplience },
    { path: '/financial-service', component: FinancialServices },
    { path: '/business-consultancy', component: BusinessConsultancy },
    { path: '/angel-investor', component: AngleInvester },

    { path: '/youtube-marketing', component: Youtube },
    { path: '/google-my-business', component: Googlemybusiness },
    { path: '/online-reputation-market', component: OnlineReputaionMarket },
    { path: '/job/:id', component: Job },
    { path: '/blogs', component: Blogs },
    { path: '/blog/:id', component: Blog },
    {path :"/social-media-marketing" , component: Socialmediamarketing},
    {path :"/graphic-design" , component: GraphicDesign},
  ];


  const protectedRoutes = [
    { path: '/admin', component: Admin },
    { path: '/jobscreate', component: Jobcreate },
    { path: '/create-blog', component: CreateBlogs },
    { path: '/admin-blogs', component: AdminBlogs },
  ];

  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          {publicRoutes.map((r, index) => (
            <Route key={index} path={r.path} element={<r.component />} />
          ))}
          <Route path="/admin-login" element={<AdminLogin />} />

          {/* Protected Routes */}
          {protectedRoutes.map((r, index) => (
            <Route
              key={`protected-${index}`}
              path={r.path}
              element={
                <ProtectedRoute>
                  <r.component />
                </ProtectedRoute>
              }
            />
          ))}

          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}
