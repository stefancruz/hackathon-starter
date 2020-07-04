const features = require('../config/features.json');
const coreFeaturesEnabled = {};

(features || []).forEach((f) => {
    if (f && f.enabled) {
        coreFeaturesEnabled[f.id] = true
    }
})

module.exports = {
    coreFeaturesEnabled
}