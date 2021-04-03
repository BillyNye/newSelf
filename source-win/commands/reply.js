const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./../config.json');

module.exports = {
    name: 'reply',
    description: `asdf.`,
    execute(msg) {

        //sets variables
        var authorId;
        var authorName;
        var oMsgLink;
        var reply;
        var oMsgId;

        //checks what kind of link u are posting so it knows where to slice the snowflake from
        if (msg.content.startsWith(`https://discord.com/channels/@me`)) {
            oMsgLink = msg.content.slice(0, 70);
            reply = msg.content.slice(70);
            oMsgId = msg.content.slice(52, 70);
        }
        else {
            oMsgLink = msg.content.slice(0, 85);
            reply = msg.content.slice(85);
            oMsgId = msg.content.slice(67, 85);
        }

        //delt oringal mesge
        msg.delete();

        //fetches the message we are repling to so we can work with itr
        msg.channel.fetchMessage(oMsgId)
            .then(msg => {

                var channelName;

                if (msg.channel.name === undefined) {
                    channelName = `DMs`;
                }
                else {
                    channelName = `#` + msg.channel.name;
                }

                //constructs new embed for da original message to be displayed in
                const replyEmbed = new Discord.RichEmbed()
                    .setDescription(msg.content + `\n\n[Jump to message!](` + oMsgLink + `)`)
                    .setAuthor(msg.author.username, msg.author.avatarURL)
                    .setTimestamp(msg.createdTimestamp)
                    .setFooter(channelName)

                if (reply.startsWith(` `)) {
                    reply = reply.slice(1);
                }

                //checkasdf if there is conent to make a reply with otherwise it doesnt send the reply message
                if (reply === undefined || reply === ``) {
                    msg.channel.send(replyEmbed);
                }
                else {
                    msg.channel.send(replyEmbed)
                        .then(msg => {
                            setTimeout(function () {
                                msg.channel.send(reply)
                                    .catch(console.error);
                            }, Number(20))
                        });
                }
            })
            .catch(Error)
    },
};