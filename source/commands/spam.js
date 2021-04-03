const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `spam`,
    description: `PN spam`,
    execute(msg) {
        var i;

        var s = msg.content.split(`?`, 2);
        var filler = s[0].slice(6);
        var p = s[1];

        msg.delete();

        if (p === undefined || p <= 0 || isNaN(p) === true) {
            console.log(`You must set a number of times to spam the message that is greater than 0! Type !!help for usage and tips.`);
        }
        else {
            console.log('Filling chat with ' + p + ' messages in #' + msg.channel.name + '...');
            for (i = 0; i < p; i++) {
                msg.channel.send(filler);
            }
            console.log(`Filled!`);
        }
    },
};