import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

export default {
    /**
     * Create an instance of CodeMirror.
     * 
     * Can be used to create a basic instance of the CodeMirror editor.
     * Optionally can provide additional state values.
     * 
     * Eg:
     * 
     * CodeMirror.create(document.getElementById('my-element-id'), {
     *      "doc": "function() {\n\tconsole.log('hello world');\n}"
     * })
     * 
     * @param {} el - the element that you want to be the code mirror
     *              elemetn
     * @param {*} state - https://codemirror.net/docs/ref/#state - codemirror state obj.
     */
    create : function(el, state) {
        if (state) {
            state.extensions = state.extentions || [
                javascript(),
                basicSetup
            ];
            state.parent = el;
            return new EditorView(state);
        } else {
            return new EditorView({
                extensions: [
                    basicSetup,
                    javascript()
                ],
                parent: el
            });
        }
    }
}