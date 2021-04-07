const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `msgEmbed`,
    description: `Sends an embed title version of the text you entered after the command prefix.`,
    execute(msg) {

        //creates msgContent string with what is sliced after the `!!embed`
        var msgContent = msg.content.slice(7);

        //checks that msgContent will fit the richembed title constraints
        if (msgContent.length >= 256) {
            console.log(`Your embed title needs to be less than 256 characters! (It had ` + msgContent.length + ` characters)`);
        }
        else {

            //constructs richembed
            const quoteEmbed = new Discord.RichEmbed()
                .setTitle(msgContent)

            //edits message so it is the richembed `quoteEmbed` instead of the bot command
            msg.edit(quoteEmbed);
        }
    },
};