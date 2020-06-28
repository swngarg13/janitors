const ObservableSlim = require('observable-slim');

let defaultOptions = {}

defaultOptions.added = (obj) => {
    console.log(`object property <${obj.property}> was added with value <${obj.newValue}>`);
}

defaultOptions.deleted = (obj) => {
    console.log(`object property <${obj.property}> was deleted`);
}

defaultOptions.updated = (obj) => {
    console.log(`object property <${obj.property}> value was updated to <${obj.newValue}>`);
}

function observe (options) {
    const modifiedOptions = { ...defaultOptions, ...options };
    return ObservableSlim.create(modifiedOptions.source, true, function(changes) {
        changes.forEach(change => {
            switch(change.type) {
                case 'add':
                    modifiedOptions.added(change)
                    break;
                case 'update':
                    modifiedOptions.updated(change)
                    break;
                case 'delete':
                    modifiedOptions.deleted(change)
                    break;
            }
        });
    });
}



module.exports = {
    observe
}
