import { useEffect, useState } from "react";

type TBrakepoint = "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export default function useBrakepoint() {
  const [brakepoint, setBrakepoint] = useState<TBrakepoint>("none");

  const handleSetBrakepoint = () => {
    if (window.innerWidth >= 1536) setBrakepoint("2xl");
    else if (window.innerWidth >= 1280) setBrakepoint("xl");
    else if (window.innerWidth >= 1024) setBrakepoint("lg");
    else if (window.innerWidth >= 768) setBrakepoint("md");
    else if (window.innerWidth >= 576) setBrakepoint("sm");
    else if (window.innerWidth >= 320) setBrakepoint("xs");
    else setBrakepoint("none");
  };

  useEffect(() => {
    window.addEventListener("resize", handleSetBrakepoint);
  });

  useEffect(() => {
    handleSetBrakepoint();
  }, []);

  return { brakepoint };
}
