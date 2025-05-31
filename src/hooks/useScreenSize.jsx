import { useEffect, useState } from "react";

function useScreenSize() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const isMobileSize = window.matchMedia("screen and (max-width: 768px)");
    setIsMobile(isMobileSize.matches);

    function updateScreenWidth(e) {
      setIsMobile(e.matches);
    }

    isMobileSize.addEventListener("change", updateScreenWidth);

    return function cleanup() {
      isMobileSize.removeEventListener("change", updateScreenWidth);
    };
  }, []);
  return isMobile;
}

export default useScreenSize;
