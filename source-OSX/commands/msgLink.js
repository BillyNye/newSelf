const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `msgLink`,
    description: `Sends an embed with hyperlink title. Url is defined by command.`,
    execute(msg) {

        //declares our title and url string variables
        var linkTitle;
        var link;

        //splits msg at the `?` and makes the first part the title and the second part the url
        var s = msg.content.split(`?`, 2);
        link = s[1];
        linkTitle = s[0];

        if (link === undefined || linkTitle === undefined) {
            console.log(`That command requires arguments.\nUsage: !!link___?___ (Text after '!!link' is the title. Text after '?' is the url).`);
        }
        else {
            //checks if the title is short enough and if the url is properly formed
            if (linkTitle.length >= 256) {
                console.log(`Your link title needs to be less than 256 characters! (It had ` + linkTitle.length + ` characters)`);
            }
            else if (link.startsWith(`https://`) === false) {
                link = `https://` + link;
            }

            //constructs rich embed
            const linkEmbed = new Discord.RichEmbed()
                .setColor('#363942')
                .setTitle(linkTitle.slice(6))
                .setURL(link)

            msg.edit(linkEmbed);
        }
    },
};