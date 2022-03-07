//import * as fs from 'fs';
const fs = require('fs');
const folderName = process.argv[2];

try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`);
    fs.writeFileSync(`${folderName}/app.js`);
    fs.writeFileSync(`${folderName}/styles.css`);
} catch (e) {
    console.log(e);
}
// fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     if (err) throw err;
// });
// import { unlinkSync } from 'fs';

// try {
//     unlinkSync('/tmp/hello');
//     console.log('successfully deleted /tmp/hello');
// } catch (err) {
//     // handle the error
// }