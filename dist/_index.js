"use strict";
var refs = require("./refs");
var xlib = refs.xlib;
var log = new xlib.logging.Logger(__filename);
log.info("PhantomJsCloud examples.   uncomment the various lines below to run an example.");
//////////////////////////
//// basic examples
////callback based example
//import * as capturePdf from "./basic/capture-pdf";
//capturePdf.runExample();
////promise based example
//import * as capturePdfPromise from "./basic/capture-pdf-promise";
//capturePdfPromise.runExample()
//	.then(() => {
//		log.info("done!");
//	});
////promise based example
//import * as capturePlaintextPromise from "./basic/capture-plaintext-promise";
//capturePlaintextPromise.runExample()
//	.then(() => {
//		log.info("done!");
//	});
//////////////////////////
//// advanced examples
////advanced example showing how to extract a list of url's from a collection of pages, then mine those url's.
//import * as queryAndMineAlexaTopsites from "./advanced/query-and-mine-alexa-topsites";
//queryAndMineAlexaTopsites.runExample(); 
//# sourceMappingURL=_index.js.map