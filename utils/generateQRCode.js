const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    const url = await QRCode.toDataURL(text);
    return url;
  } catch (err) {
    console.error(err);
    return null;
  }
};

module.exports = generateQRCode;
