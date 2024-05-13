const path = require('path');

function download(localPath, res) {
    return new Promise((resolve, reject) => {
        res.download(localPath, function(err) {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve();
            }
        });
    });
}

async function downloadCV(req, res) {
    filePath = path.join(__dirname, '../public/assets/files/CV/CV_Antoine_CHABANEL.pdf');
    await download(filePath, res);
    res.end();
}

module.exports = {
    downloadCV
};