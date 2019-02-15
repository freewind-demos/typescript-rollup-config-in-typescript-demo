import typescript from 'rollup-plugin-typescript2';
import {RollupFileOptions} from "rollup";

const config: RollupFileOptions = {
  input: 'main.ts',
  plugins: [typescript()],
  output: {
    file: 'bundle.js',
    format: 'cjs',
  },
  external: ['lodash']
}

export default config;
