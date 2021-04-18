import React, { useState } from "react";
import usePancakeProfile from "@pancakeswap-libs/profile-hook";

const ProfileData: React.FC<{ address: string }> = ({ address }) => {
  const { username, loading } = usePancakeProfile(address);
  return (
    <div className="results">
      <p>{loading ? "Loading" : "Not loading"}</p>
      <p>Username: {username}</p>
    </div>
  );
};

function App() {
  const [address, setAddress] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.currentTarget.value);
  };

  return (
    <div className="app">
      <label>Enter BSC address</label>
      <input placeholder="0x1111111111111111111111111111111111111111" value={address} onChange={onChangeHandler} />
      <button>Get Username</button>
      <ProfileData address={address} />
    </div>
  );
}

export default App;
