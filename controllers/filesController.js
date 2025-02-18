const path = require("path");

function download(localPath, res) {
  return new Promise((resolve, reject) => {
    res.download(localPath, function (err) {
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
  const type = req.query.cvtype;
  if (!type)
    filePath = path.join(
      __dirname,
      "../public/assets/files/CV/CV_Antoine_CHABANEL_global.pdf"
    );
  else
    filePath = path.join(
      __dirname,
      "../public/assets/files/CV/CV_Antoine_CHABANEL_" + type + ".pdf"
    );
  try {
    await download(filePath, res);
  } catch {
    res.status(500).send("Error downloading the file. Does it exists ?");
    return;
  }
  res.end();
}

module.exports = {
  downloadCV,
};
