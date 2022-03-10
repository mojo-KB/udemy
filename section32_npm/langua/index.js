import { franc } from "franc";
import { createRequire } from "module";
const require = createRequire(
    import.meta.url);
const langs = require('langs');
const langCode = franc('Alle menslike wesens word vry');
const language = langs.where("3", langCode);


console.log(language);