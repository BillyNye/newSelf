﻿const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token } = require('./../config.json');

module.exports = {
    name: `help`,
    description: `Sends an embed with information about the bot and how to use it.`,
    execute(msg) {

        //constructs richembed `helpEmbed` with information about the program and how to use it
        const helpEmbed = new Discord.RichEmbed()
            .setTitle(`Command List:`)
            .setAuthor(`PNSelf`)
            .setDescription(`
                            \n⁤ \n
                            **embed** - Sends message as an embed. Usage: \`\`\`!!embed___\`\`\`(Use !!desc for messages longer than 256 characters)\n\n
                            **link** - Sends message as embed link. Usage: \`\`\`!!link___?___\`\`\`(Text after \`!!link\` is the title. Text after \`?\` is the url)\n\n
                            **spam** - Spams message set in config.json. Usage: \`\`\`!!spam___?___\`\`\`(The filler content is set by the characters before the \`?\`, and the number of messages to spam is set by the number after the \`?\`. For best results use without VPN and wait until each spam has finished coming through before starting a new one)\n\n
                            **dembed** - Sends custom embed. Usage: \`\`\`!!dembed___}?desc___}?url___}?img___}?color___\`\`\`(Text between \`!!dembed\` and the final \`}\` before the next argument is the title. \`?desc\` = description. \`?url\` = url. \`?img\` = image cover for embed)\n\n
                            **dmsg** - Sends disappearing message. Usage: \`\`\`!!dmsg___?____\`\`\`(Text before the \`?\` sets the content of the message, and the number after the \`?\` sets the amount of time in seconds that the message lasts)`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/523212418818637834/788567881239232532/clyde4.png`);
        msg.edit(helpEmbed);
    },
};