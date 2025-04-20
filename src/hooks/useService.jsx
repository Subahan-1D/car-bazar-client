import React, { useEffect, useState } from "react";

const useService = () => {
  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/service`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
        setLoading(false);
      });
  }, []);
  return [service, loading];
};

export default useService;
