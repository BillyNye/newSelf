const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `msgDesc`,
    description: `Sends an embed description version of the text you entered after the command prefix. Font is not bold like the plain embed command,but your character limit is higher.`,
    execute(msg) {
  
        //i shoudlnt have to explain this one
        var msgContent = msg.content.slice(6);
        const descEmbed = new Discord.RichEmbed()
            .setDescription(msgContent)
        msg.edit(descEmbed);
    },
};