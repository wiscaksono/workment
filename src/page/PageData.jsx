import Home from "./Home";
import ForOhFour from "./Error/404";
import StyleGuide from "./StyleGuide";
import Work from "./Work";

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/work",
    element: <Work />,
    title: "Work",
  },
  {
    path: "*",
    element: <ForOhFour />,
    title: "Page Not Found",
  },
  {
    path: "*",
    element: <StyleGuide />,
    title: "Style Guide",
  },
];

export default pagesData;
