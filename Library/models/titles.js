const bookshelf = require('./bookshelf');

const Title = bookshelf.Model({
    tableName: "Title"
});

module.exports = Title;