const features = require('../core/features');
/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home',
    coreFeaturesEnabled:  features.coreFeaturesEnabled
  });
};
