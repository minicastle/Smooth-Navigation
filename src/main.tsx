import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const BaseNavItem: { Text: string; Target: string }[] = [
  { Text: "Home", Target: "/" },
  { Text: "Show", Target: "/" },
  { Text: "Member", Target: "/" },
  { Text: "Contents", Target: "/" },
  { Text: "About", Target: "/" },
];

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App
      BaseColor={"#D6ECFA"}
      TextColor={"#aaaaaa"}
      MainColor={"#F15C5C"}
      HeaderIcon={"./public/Header Icon.png"}
      SiteName={"Design Code"}
      NavItems={BaseNavItem}
    />
  </React.StrictMode>
);
