const features = require('./features');

module.exports = {
    isEnabled: (req, res, next) => {

        const isRouteFeatureEnabled = features.isRouteFeatureEnabled(req.url);

        if (isRouteFeatureEnabled) {
            next();
        } else {
            res
                .status(404)
                .type('text')
                .send('Not Found');
        }
    }
}