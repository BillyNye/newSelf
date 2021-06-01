const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `wiki`,
    description: `Posts link to wiki article of text after command.`,
    execute(msg) {
        var prefixString = `${prefix}`;
        var content;

        if (msg.content.startsWith(prefix + `wiki `)) {
            content = msg.content.slice(5 + prefixString.length);
        }
        else {
            content = msg.content.slice(4 + prefixString.length);
        }
        content = content.replace(/ /g, `_`);
        var wikiContent = `https://en.wikipedia.org/wiki/` + content;
        msg.edit(wikiContent);
    },
};