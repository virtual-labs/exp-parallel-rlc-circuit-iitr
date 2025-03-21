importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"57e437929ef9caba72e5812ba3e81c80","url":"details.json"},{"revision":"c97941be34b52dc744a3d54180137918","url":"feedback.html"},{"revision":"43a62eb4a46af5204e8f91b3497ba949","url":"images/iitb_logo_30dpi.png"},{"revision":"5b9627597dd43b74d8a4c5f95c66a0bf","url":"images/iitrLogo.png"},{"revision":"5a44898ac61cfb1230378b1e6148bf2a","url":"images/parallel1.png"},{"revision":"f1b38a2c02754dec122f0404fbff94d1","url":"images/parallel2.png"},{"revision":"1a781178cb7c185d2ce1390c70ec64d6","url":"images/parallel3.png"},{"revision":"f2e7021fcdcc2900a2b3013789b83dab","url":"images/posttest1.png"},{"revision":"4b08d06dfc36c10a2512a7429da597a2","url":"images/posttest2.png"},{"revision":"4b08d06dfc36c10a2512a7429da597a2","url":"images/posttest3.png"},{"revision":"178b41f399d731c46f0c022ae57c2587","url":"images/posttest4.png"},{"revision":"5e91785eb858108fb0ae09bb9947709e","url":"images/posttest5.png"},{"revision":"178b41f399d731c46f0c022ae57c2587","url":"images/posttest6.png"},{"revision":"178b41f399d731c46f0c022ae57c2587","url":"images/posttest7.png"},{"revision":"37ff8b3915057d9dd73d38a21e76bd60","url":"index.html"},{"revision":"705a10b49619b297a9b813a00dd301d5","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"90c3bafaa2d9aa951fa3855c61b46748","url":"posttest.html"},{"revision":"5614685bcc642f2f0d15a2cfad87626d","url":"posttest.json"},{"revision":"943af9494ea1684a82b5d36832a1152a","url":"pretest.html"},{"revision":"581604127c16c64539cb254829bca707","url":"pretest.json"},{"revision":"44a110230ee0b9614ce9fa50ebcaeac0","url":"procedure.html"},{"revision":"d220e02bf59aeb1a72c52ba8abb169ae","url":"references.html"},{"revision":"33b9a4b05185c906b1665d6b54185e71","url":"simulation.html"},{"revision":"efb82a942cb22280a20001f1e724a95f","url":"simulation/CDN_folder/ChartCDN.js"},{"revision":"574630a28a18ce70f02f1b0d0889cbbb","url":"simulation/CDN_folder/Font(foco-trial).css"},{"revision":"e2e15d79805c9f58bf12cec2405f69b8","url":"simulation/CDN_folder/Font(zacbel-x).css"},{"revision":"4e052b6a17bbe1f8f5b2dcef4fab4a12","url":"simulation/CDN_folder/JS_Plumb.js"},{"revision":"9c503bfe2634adb4841ac6995b5ac51a","url":"simulation/CDN_folder/JS_Plumb(2).js"},{"revision":"dc7130cdc866593293dbb5dde11ceb40","url":"simulation/CDN_folder/latexCDN.js"},{"revision":"5ed6612c03c47dcd1a787a247d70ece2","url":"simulation/CDN_folder/SevenSegmentFont.css"},{"revision":"640b7b1012e4cf72f0c16c8fbcf5157a","url":"simulation/css/disabledrag.css"},{"revision":"6f77f82f7ac5d09c6d9beb7be2c46e92","url":"simulation/css/style.css"},{"revision":"fbe70befd0ae8e6d450010a544bc8da9","url":"simulation/images/6.png"},{"revision":"f846f3ec1a3d5d52fe1f4610fb2b09ae","url":"simulation/images/A.png"},{"revision":"58ff44d4555e8f0d45c31d6640ade6db","url":"simulation/images/A1.png"},{"revision":"01213e828717bb7e24487407b4ede010","url":"simulation/images/A2.png"},{"revision":"c37335ae818f5cd2a1b7df67860b6073","url":"simulation/images/A3.png"},{"revision":"57d58ac59cd5a99586e1f5f150c31fce","url":"simulation/images/capacitor.png"},{"revision":"62e98080c25f2d2bb4b79182e6e5faeb","url":"simulation/images/Copy of calculation.png"},{"revision":"426e522429fdee5c1a104a8c07a939e2","url":"simulation/images/inductor.png"},{"revision":"6f905e00218398dc5a7954e9a8c1e0f2","url":"simulation/images/MCB_off.png"},{"revision":"b4ad65ffc816e379c57997b9a813e348","url":"simulation/images/MCB_ON.png"},{"revision":"8710f4c62c7339fa39d244e3c349f52a","url":"simulation/images/Parallel_RLC.png"},{"revision":"d3c109bd5f385613f8a731cc55ea9dd3","url":"simulation/images/Pointer.png"},{"revision":"fc75f47b41ab266befdaae1c84e689a9","url":"simulation/images/resistor.png"},{"revision":"ee075c0c9dafa985e9947ff0c929d043","url":"simulation/images/V1.png"},{"revision":"d31aa904efcb12f2548b9705269d1e70","url":"simulation/images/Variac_Knob.png"},{"revision":"f8e7d4ec94e646a6256c236044aa78d6","url":"simulation/images/Variac_OFF.png"},{"revision":"cff55ad9b5f7fdf9466d2902b0b20a84","url":"simulation/images/Variac_ON.png"},{"revision":"b39b8c40a85a3507f731cf4dec694870","url":"simulation/images/wattmeter.png"},{"revision":"4959b100919ffbaac26d0d2c744c7dc8","url":"simulation/index.html"},{"revision":"2e45293565c507057f4203bdf9d2fb8b","url":"simulation/js/function.js"},{"revision":"165c882f9840338d12ffbd8bd5001426","url":"theory.html"},{"revision":"a1bcc2c4fb4cb5b7343d7e20f44af483","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );