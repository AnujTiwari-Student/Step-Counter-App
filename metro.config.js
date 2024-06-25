const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformCacheKey: require('./customTransformer').getTransformCacheKey,
    },
    resolver: {
      sourceExts,
      assetExts,
    },
  };
})();
