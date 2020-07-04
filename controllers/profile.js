const features = require('../core/features');
const User = require('../models/User');
/**
 * GET /
 * Home page.
 */
exports.index = async (req, res, next) => {

  const isAuthenticatedRequest = !!req.user;

  const ownProfile = req.user && req.user.profile && req.user.profile.username === req.params.id;

  const query = { 'profile.username': req.params.id };

  if (!ownProfile) {
    if (isAuthenticatedRequest) {
      query.$or = [
        { 'profile.visibility': 'public' },
        { 'profile.visibility': 'internal' }
      ]
    } else {
      query.$or = [
        { 'profile.visibility': 'public' }
      ]
    }
  }

  const userProfile = await User.findOne(query);

  if (!userProfile) {
    return next();
  }

  const image = userProfile.gravatar();
  const profile = { ...userProfile.profile, image }

  res.render('profile', {
    title: 'Profile',
    profile,
    coreFeaturesEnabled: features.coreFeaturesEnabled
  });

};