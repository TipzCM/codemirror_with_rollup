import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: "src/codemirror.js",
    output: {
        file: "./out/bundle.js",
        format: "iife",
        name: "CodeMirror"
    },
    plugins: [ 
        nodeResolve()
    ]
}