import typescript from '@rollup/plugin-typescript';
import {RollupOptions} from "rollup";
import commonjs from '@rollup/plugin-commonjs';
import {nodeResolve} from '@rollup/plugin-node-resolve';

const config: RollupOptions = {
  input: 'main.ts',
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript()
  ],
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  }
}

export default config;
