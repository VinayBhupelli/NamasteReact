import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  // check if online & we do it once
  const [onlineStatus, setOnlineStaus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStaus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStaus(true);
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
