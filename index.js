const path=require('path');
const loader = require('handlebars-dir-import');
(async () => {
    await loader.loadPartials(path.resolve(__dirname,'partials'));
    await loader.loadHelpers(path.resolve(__dirname,'helpers'));
})();
