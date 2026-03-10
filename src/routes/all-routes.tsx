import { PATH_NAMES } from "@/constants";
import { AboutPage, ContactPage, HomePage, NewsPage, ServicePage } from "@/pages";

export const allRoutes = [
  { path: PATH_NAMES.HOME, component: <HomePage /> },
  { path: PATH_NAMES.ABOUT, component: <AboutPage /> },
  { path: PATH_NAMES.SERVICES, component: <ServicePage /> },
  { path: PATH_NAMES.NEWS, component: <NewsPage /> },
  { path: PATH_NAMES.CONTACT, component: <ContactPage /> },
];
