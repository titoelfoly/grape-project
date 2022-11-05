import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import "grapesjs-swiper-slider";
import basic from "grapesjs-blocks-basic";
function App() {
  useEffect(() => {
    grapesjs.init({
      container: "#gjs",
      width: "100%",
      plugins: [basic, "grapesjs-swiper-slider"],
      storageManager: {
        id: "gjs-",
        type: "local",
        autosave: true,
      },
      deviceManager: {
        devices: [
          {
            id: "desktop",
            name: "Desktop",
            width: "100%",
          },
          {
            id: "tablet",
            name: "Tablet",
            width: "768px",
            widthMedia: "992px",
          },
          {
            id: "mobilePortrait",
            name: "Mobile portrait",
            width: "320px",
            widthMedia: "575px",
          },
        ],
      },

      pluginsOpts: {
        basic: {
          blocks: ["image"],
        },

        "grapesjs-swiper-slider": {
          blocksBasicOpts: {
            blocks: ["swiper-slider"],
          },
          blocks: ["swiper-slider"],
        },
      },
    });
  }, []);
  return <div className="App" id="gjs"></div>;
}

export default App;
