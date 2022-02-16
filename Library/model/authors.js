const bookshelf = require('./bookshelf');

const Authors = bookshelf.Model({
    tableName: "Authors"
});

module.exports = Authors;