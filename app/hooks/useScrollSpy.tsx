import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 100) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handler = () => {
      for (let i = ids.length - 1; i >= 0; i--) {
        const element = document.getElementById(ids[i]);
        if (element) {
          const top = element.getBoundingClientRect().top;
          if (top < offset) {
            setActiveId(ids[i]);
            return;
          }
        }
      }
      setActiveId("");
    };

    window.addEventListener("scroll", handler);
    handler();

    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return activeId;
}