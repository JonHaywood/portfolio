import { useEffect, useState } from "react";

/**
 * Induces a loading state for 1200ms.
 */
export function useLoad() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return load;
}
