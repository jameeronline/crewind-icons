import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import IconGrid from "./icon-grid";
import { Toaster, toast } from "sonner";

//import icons
import { Balloon, House } from "../components/icons";
import Header from "./header";
import Navbar from "./navbar";

function App() {
  return (
    <div className="container mx-auto px-6">
      <Navbar />
      <Header />
      <IconGrid />
      <Toaster />
    </div>
  );
}

export default App;
