import React, { useState, useEffect } from "react";
import { getUsername } from "@pancakeswap-libs/profile-sdk";

const usePancakeProfile = async (address: string) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      const name = await getUsername(address);
      setUsername(name);
    };
    fetchUserData();
  }, [address]);
  return { username, loading };
};

export default usePancakeProfile;
