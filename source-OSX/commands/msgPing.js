const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `msgPing`,
    description: `Sends an embed with hyperlink title (text determined by user). A user is pinged by "@usertag" hidden in url encoding. (under construction)`,
    execute(msg) {
        var linkTitle;
        var link;
        var invSep = new String(` ⁤ ⁤`);
        var s = msg.content.split(`?`, 2);
        link = s[1];
        linkTitle = s[0];
        const linkEmbed = new Discord.RichEmbed()
            .setColor('#363942')
            .setTitle(linkTitle.slice(6))
            .addField(invSep, link)
        msg.edit(linkEmbed)
            .catch(console.error);
    },
};