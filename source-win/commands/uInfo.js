const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token} = require('./../config.json');

module.exports = {
    name: 'uInfo',
    description: `asdf.`,
    execute(msg) {

        if (msg.guild === null) {
            console.log('This command only works in a server.');
        }
        else {

            if (msg.mentions.users.first() === undefined) {
                console.log(`You must mention a user!`);
            }
            else {

                var userId = msg.mentions.users.first().id;

                const member = msg.guild.member(userId);

                var bot

                if (member.user.bot === true) {
                    bot = 'bot';
                }
                else {
                    bot = 'user';
                }

                var nick;

                var dIdLink = `https://discord.id/?prefill=` + userId;

                var joinDate = member.joinedAt.toString();
                joinDate = joinDate.slice(0, 15);

                var createDate = member.user.createdAt.toString();
                createDate = createDate.slice(0, 15);

                var color = member.displayHexColor;

                if (member.nickname === null) {
                    nick = 'none';
                }
                else {
                    nick = member.nickname;
                }

                if (msg.guild.member === null) {
                    const foreignUser = new Discord.RichEmbed()
                        .setDescription('This user is not present in this server. However you can still search for the user with [discord.id](' + dIdLink + ')')

                    msg.channel.send(foreignUser);
                }
                else {
                    const uInfoEmbed = new Discord.RichEmbed()
                        .setAuthor(member.user.tag)
                        .setDescription('\n**Joined: **`' + joinDate + '`\n\n**Created: **`' + createDate + '`\n\n**Nickname: **`' + nick + '`\n\n**Bot status: **`' + bot + '`\n\n[Search user on discord.id](' + dIdLink + ')')
                        .setThumbnail(member.user.displayAvatarURL)
                        .setColor(color)

                    msg.delete();
                    msg.channel.send(uInfoEmbed);
                }
            }
        }
    },
};