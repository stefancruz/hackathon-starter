const features = require('../config/features.json');
const coreFeaturesEnabled = {};

(features || []).forEach((f) => {
    if (f && f.enabled) {
        coreFeaturesEnabled[f.id] = true
    }
})

const isRouteFeatureEnabled = (url) => {
    return (features || []).some((f) => {
        return f.routes && f.routes.indexOf(url.toLowerCase()) > -1 && f.enabled;
    })
}

module.exports = {
    coreFeaturesEnabled,
    isRouteFeatureEnabled
}