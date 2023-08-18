import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: "index.js",
    output: {
        file: "./out/bundle.js",
        format: "iife"
    },
    plugins: [ 
        nodeResolve()
    ]
}