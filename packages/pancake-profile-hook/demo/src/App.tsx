import React from "react";
import usePancakeProfile from "@pancakeswap-libs/profile-hook";

function App() {
  const { username, loading } = usePancakeProfile();
  return (
    <div className="app">
      <label>Enter BSC address</label>
      <input placeholder="0x1111111111111111111111111111111111111111" />
      <button>Get Username</button>
      <div className="results">
        <p>Username: Cheems</p>
      </div>
    </div>
  );
}

export default App;
