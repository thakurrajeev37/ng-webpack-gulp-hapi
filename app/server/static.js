'use strict';

/** load client folder*/

exports.get = {
    handler: {
        directory: {
            path: 'dist',
            index: true,
            listing: true
        }
    }
};