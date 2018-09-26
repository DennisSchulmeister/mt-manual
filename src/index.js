import MiniTutorial from "mini-tutorial.js";
import mtTheme from "mini-tutorial.js/themes/white.css"; // Must be first
import mtCommonCSS from "mini-tutorial.js/themes/common.css";

import hljs from "highlight.js/lib/highlight";
import hljsLangXML from "highlight.js/lib/languages/xml";
import hljsLangCSS from "highlight.js/lib/languages/css";
import hljsLangJS from "highlight.js/lib/languages/javascript";
import hljsStyle from "highlight.js/styles/atom-one-light.css";

window.addEventListener("load", () => {
    let mt = new MiniTutorial();
    mt.start();

    hljs.registerLanguage("html", hljsLangXML);
    hljs.registerLanguage("css", hljsLangCSS);
    hljs.registerLanguage("javascript", hljsLangJS);
    document.querySelectorAll("pre code").forEach(el => hljs.highlightBlock(el));
});
