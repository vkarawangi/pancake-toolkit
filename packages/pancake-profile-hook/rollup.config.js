import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default {
  input: "src/index.tsx",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [commonjs(), nodeResolve(), typescript()],
  external: ["react", "react-dom", "web3", "web3-eth-contract", "web3-utils"],
};
