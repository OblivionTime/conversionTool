/*
 * @Description: 
 * @Version: 1.0
 * @Autor: solid
 * @Date: 2022-10-25 15:27:32
 * @LastEditors: solid
 * @LastEditTime: 2022-10-26 10:27:41
 */
const fs = require('fs');
const https = require('https');
const path = require('path')
const url = require('url')
window.Download = function (fileUrl) {
    // Download the file
    https.get(fileUrl, (res) => {
        var filename,
            contentDisp = res.headers['content-disposition'];
        if (contentDisp && /^attachment/i.test(contentDisp)) {
            filename = contentDisp.toLowerCase()
                .split('filename=')[1]
                .split(';')[0]
                .replace(/"/g, '');
        } else {
            filename = path.basename(url.parse(fileUrl).path);
        }
        var filePath = utools.getPath('desktop') + "\\" + filename
        const file = fs.createWriteStream(filePath);
        res.pipe(file);
        // Close the file
        file.on('finish', () => {
            file.close();
            console.log(`File downloaded!`);
        });
    }).on("error", (err) => {
        console.log("Error: ", err.message);
    });
}
window.api = {
    Download,
}