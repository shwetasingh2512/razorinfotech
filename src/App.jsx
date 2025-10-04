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
    {
      path: '/data-entry',
      component: DataEntery,
    },
    {
      path: '/it-help-desk',
      component: ItHelpDesk,
    },
    {
      path: '/seo',
      component: Seo,
    },
    {
      path: '/hr-services',
      component: HrServices,
    },
    {
      path: '/talent-developement',
      component: TalentDevelopement,
    },
    {
      path: '/training',
      component: Training,
    },
    {
      path: '/career',
      component: Career,
    },
    {
      path: '/app-store-optimization',
      component: AppstoreOptimization,
    },
    {
      path: '/Legal-complience',
      component: LegalComplience,
    },
    {
      path: '/angle-investor',
      component: AngleInvester,
    },
    {
      path: '/data-management',
      component: DataManagement,
    },
    {
      path: '/backend-outsource',
      component: BackendOutsource,
    },
    {
      path: '/omnichanel',
      component: Omnichanel,
    },
    {
      path: '/content-management',
      component: ContentManagement,
    },
    {
      path: '/financial-services',
      component: FinancialServices,
    },
    {
      path: '/business-consultancy',
      component: BusinessConsultancy,
    },
    {
      path: '/youtube',
      component: Youtube,
    },
    {
      path: '/google-my-business',
      component: Googlemybusiness,
    },
    {
      path: '/online-reputation-market',
      component: OnlineReputaionMarket,
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
