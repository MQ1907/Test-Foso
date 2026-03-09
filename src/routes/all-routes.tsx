import { PATH_NAMES } from "@/constants";
import { AboutPage, ContactPage, HomePage } from "@/pages";

export const allRoutes = [
  { path: PATH_NAMES.HOME, component: <HomePage /> },
  { path: PATH_NAMES.ABOUT, component: <AboutPage /> },
  { path: PATH_NAMES.CONTACT, component: <ContactPage /> },
];
