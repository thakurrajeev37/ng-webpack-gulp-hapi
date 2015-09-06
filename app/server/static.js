'use strict';

/** load client folder*/

exports.get = {
    handler: {
        directory: {
            path: 'dist/client',
            index: true,
            listing: true
        }
    }
};