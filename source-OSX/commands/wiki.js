const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `wiki`,
    description: `Posts link to wiki article of text after command.`,
    execute(msg) {
        var content;

        if (msg.content.startsWith(`!!wiki `)) {
            content = msg.content.slice(7);
        }
        else {
            content = msg.content.slice(6);
        }
        content = content.replace(/ /g, `_`);
        var wikiContent = `https://en.wikipedia.org/wiki/` + content;
        msg.edit(wikiContent);
    },
};