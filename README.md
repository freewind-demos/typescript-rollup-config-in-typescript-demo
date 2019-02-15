TypeScript Rollup Config in TypeScript Demo
===========================================

看起来rollup不支持在config文件中使用typescript语法。

虽然我们可以把config文件名设为`rollup.config.ts`，并且使用`rollup -c rollup.config.ts`来运行它，
但是里面实际上只能使用javascript语法。

提个了问：<https://stackoverflow.com/questions/54711437/does-rollup-support-typescript-in-rollup-config-file>

```
npm install
npm run demo
```

Reports error:

```
$ rollup -c rollup.config.ts
[!] Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)
rollup.config.ts (4:12)
2: import {RollupFileOptions} from "rollup";
3:
4: const config: RollupFileOptions = {
               ^
5:   input: 'main.ts',
```
