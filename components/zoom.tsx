"use client";

import { useEffect } from "react";

const Zoom = () => {
  useEffect(() => {
    function setZoom() {
      if (!("zoom" in document.body.style)) return;

      if (
        window.matchMedia("(min-height: 720px) and (max-height: 900px)").matches
      ) {
        document.body.style.zoom = "125%";
      } else if (window.matchMedia("(min-height: 901px)").matches) {
        document.body.style.zoom = "140%";
      } else {
        document.body.style.zoom = "100%";
      }
    }

    setZoom();

    window.addEventListener("resize", setZoom);
  }, []);
  return <></>;
};

export default Zoom;
