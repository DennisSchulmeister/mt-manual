import MiniTutorial from "mini-tutorial.js";
import mtTheme from "mini-tutorial.js/themes/white.css";

import hljs from "highlight.js";
import hljsStyle from "highlight.js/styles/atom-one-light.css";

window.addEventListener("load", () => {
    let mt = new MiniTutorial();
    mt.start();

    document.querySelectorAll("pre code").forEach(el => hljs.highlightBlock(el));
});
