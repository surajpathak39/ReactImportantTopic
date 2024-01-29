import "./App.css";
import Home from "./components/Home/Home";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Github, { githubInfoLoader } from "./components/Github/Github";
import User from "./components/User/User";
import AboutLayout from "./components/About/AboutLayout";
import Aboutedit from "./components/About/Aboutedit";
// import AboutChild from "./components/About/AboutChild";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout />,
  //     children: [
  //       {
  //         path: "",
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,
  //       },
  //       {
  //         path: "about",
  //         element: <About />,

  //         // children: [
  //         //   // {
  //         //   //   // Redirect to /about/aboutchild when /about is accessed
  //         //   //   index: true,
  //         //   //   element: <Navigate to="aboutchild" replace />,
  //         //   // },
  //         //   // {
  //         //   //   // Render About when /about is accessed
  //         //   //   path: "edit",
  //         //   //   element: <About />,
  //         //   // },
  //         //   {
  //         //     // Render AboutChild when /about/aboutchild is accessed
  //         //     path: "aboutchild",
  //         //     element: <AboutChild />,
  //         //   },
  //         // ],
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact />,
  //       },
  //       {
  //         path: "github",
  //         element: <Github />,
  //       },
  //       {
  //         path: "test",
  //         element: <AboutChild />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route path="" element={<About />} />
          <Route path="edit" element={<Aboutedit />} />
        </Route>
        <Route path="contact" element={<Contact />} />

        <Route path="user/:userid" element={<User />} />
        {/* <Route path="github" element={<Github />} /> */}
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
