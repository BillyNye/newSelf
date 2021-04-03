const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token} = require('./../config.json');

module.exports = {
    name: 'uInfo',
    description: `asdf.`,
    execute(msg) {

        var msgContent = msg.content.slice(6);

        var userId = msg.mentions.users.first().id;

        console.log(userId);

        if (userId === undefined) {
            console.log(`You must mention a user!`);
        }
        else {
            const uInfoEmbed = new Discord.RichEmbed()
                .setTitle()
                .setDescription()
        }

    },
};