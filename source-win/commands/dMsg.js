const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./../config.json');

module.exports = {
    name: 'dMsg',
    description: `Sends a message that disappears after a few moments.`,
    execute(msg) {

        //i shoudlnt have to explain this one

        var s = msg.content.split(`?`, 2)
        var time = s[1] + `000`;
        var msgContent = s[0].slice(6);
        const descEmbed = new Discord.RichEmbed()
            .setDescription(msgContent)

        if (time === undefined || time <= 0 || isNaN(time) === true) {
            console.log(`You must set an amount of time for the message to remain that is greater than 0! Type !!help for usage and tips.`);
        }
        else {
            console.log(`Sending disappearing message in #` + msg.channel.name + `that lasts for ` + s[1] + ` seconds.`);
            msg.edit(descEmbed)
                .then(
                    msg => {
                        setTimeout(function () {
                            msg.delete()
                                .then(msg => console.log(`Poof!`))
                                .catch(console.error);
                        }, Number(time))
                    })
        }
    },
};