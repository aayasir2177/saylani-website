import "./App.css";
import 'antd/dist/reset.css';

import { Layout } from "antd";

import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";

import Courses from "./pages/courses/courses";
import Course1 from "./pages/courses/course-1";
import Course2 from "./pages/courses/course-2";
import Course3 from "./pages/courses/course-3";
import Course4 from "./pages/courses/course-4";
import Course5 from "./pages/courses/course-5";
import Course6 from "./pages/courses/course-6";

import Gallery from "./pages/gallery/gallery";
import MediaUpdates from "./pages/media-updates/media-updates";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import VerifyCertificate from "./pages/verify-certificate/verify-certificate";
import AppFooter from "./components/app-footer/app-footer";
import NoMatch from "./components/no-match/no-match";

import type { RouteObject } from "react-router-dom";
import { useRoutes } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/courses",
      element: <Courses />,
      children: [
        {
          path: "/courses/course1",
          element: <Course1 />,
        },
        {
          path: "/courses/course2",
          element: <Course2 />,
        },
        {
          path: "/courses/course3",
          element: <Course3 />,
        },
        {
          path: "/courses/course4",
          element: <Course4 />,
        },
        {
          path: "/courses/course5",
          element: <Course5 />,
        },
        {
          path: "/courses/course6",
          element: <Course6 />,
        },
      ],
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/media-updates",
      element: <MediaUpdates />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },

    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/verify-certificate",
      element: <VerifyCertificate />,
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ];

  let element = useRoutes(routes);

  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <Navbar />
      </Header>

      <Content className="site-layout px-[0px] sm:px-[50px]">
        <div style={{ padding: 24, minHeight: 380 }} className="bgGray">
          {element}
        </div>
      </Content>

      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default App;
