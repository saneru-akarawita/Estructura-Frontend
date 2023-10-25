import { createBrowserRouter } from 'react-router-dom';

import FirstPage from '../pages/Algo/FirstPage';
import GetStarted from '../pages/Algo/GetStarted';
import RecommendationsPage from '../pages/Algo/RecommendationsPage';
import Homepage from '../pages/HomePage';
import Chat from '../pages/messages/Chat';
import AdminRoutes from './AdminRoutes';
import AuthRoutes from './AuthRoutes';
import BlogRoutes from './BlogRoutes';
import CustomRequestRoutes from './CustomRequestRoutes';
import ProjectRoutes from './ProjectsRoutes';
import RentingItemRoutes from './RentingRoutes';
import ServiceProviderRoutes from './ServiceProviderRoutes';
import ShopRoutes from './ShopRoutes';

export const altRouter = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/Algo',
    element: <GetStarted />,
  },
  {
    path: '/AlgoStart',
    element: <FirstPage />,
  },
  {
    path: '/AlgoStart',
    element: <FirstPage />,
  },

  {
    path: '/RecommendationsPage',
    element: <RecommendationsPage />,
  },

  {
    path: '/chat/:id',
    element: <Chat />,
  },

  ...AuthRoutes,
  ...AdminRoutes,
  ...BlogRoutes,
  ...RentingItemRoutes,
  ...ShopRoutes,
  ...ProjectRoutes,
  ...ServiceProviderRoutes,
  ...CustomRequestRoutes,
]);

export default altRouter;
