"use client";

import { useEffect } from "react";

const Zoom = () => {
  useEffect(() => {
    function setZoom() {
      // stop typescript from yelling :)
      if (!("zoom" in document.body.style)) return;

      // don't zoom in when device in mobile or tablet.
      if (!/Mobi/i.test(navigator.userAgent)) return;

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
