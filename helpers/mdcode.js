const handlebars = require('handlebars');
module.exports = function (code, style, option) {
    if (code)
        return new handlebars.SafeString('```' + `${style}\n` + code + '```');
}
