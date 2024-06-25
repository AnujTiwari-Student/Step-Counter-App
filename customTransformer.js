const crypto = require('crypto');

module.exports = {
  getTransformCacheKey() {
    return crypto.createHash('md5').update('some-string').digest('hex');
  }
};
