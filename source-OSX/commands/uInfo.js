const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token} = require('./../config.json');

module.exports = {
    name: 'uInfo',
    description: `asdf.`,
    execute(msg) {
        //the overexplained commandfile

        //checks if the post that called us out here is even in a server
        if (msg.guild === null) {
            console.log('This command only works in a server.');
        }
        else {

            //checks if there is even a user mentioned in the message (******maybe add a search user by id feature like discord.id in future)
            if (msg.mentions.users.first() === undefined) {
                console.log(`You must mention a user!`);
            }
            else {

                //checks ifd the user is present in da server still if not gives prefilled discord.id link
                if (msg.guild.member === null) {
                    const foreignUser = new Discord.RichEmbed()
                        .setDescription('This user is not present in this server. However you can still search for the user with [discord.id](' + dIdLink + ')')

                    msg.channel.send(foreignUser);
                }
                else {

                    //declares variable for the user id and takes it from the first user mentioned in the message
                    var userId = msg.mentions.users.first().id;

                    //constructs the member
                    const member = msg.guild.member(userId);

                    //decalres bot variable
                    var bot

                    //checks if bot
                    if (member.user.bot === true) {
                        bot = 'bot';
                    }
                    else {
                        bot = 'user';
                    }

                    //declares nickname variable
                    var nick;

                    //discrod,id link variabe
                    var dIdLink = `https://discord.id/?prefill=` + userId;

                    //join date variabe
                    var joinDate = member.joinedAt.toString();
                    joinDate = joinDate.slice(0, 15);

                    //createion date variable
                    var createDate = member.user.createdAt.toString();
                    createDate = createDate.slice(0, 15);

                    //color of user rille varialbe
                    var color = member.displayHexColor;

                    //checks if user has nickname. if so changes the nick bariabe to it
                    if (member.nickname === null) {
                        nick = 'none';
                    }
                    else {
                        nick = member.nickname;
                    }

                    //finally contructs the embed
                    const uInfoEmbed = new Discord.RichEmbed()
                        .setAuthor(member.user.tag)
                        .setDescription('\n**Joined: **`' + joinDate + '`\n\n**Created: **`' + createDate + '`\n\n**Nickname: **`' + nick + '`\n\n**Bot status: **`' + bot + '`\n\n[Search user on discord.id](' + dIdLink + ')')
                        .setThumbnail(member.user.displayAvatarURL)
                        .setColor(color)

                    //deletes the message that trigere and sends embed
                    msg.delete();
                    msg.channel.send(uInfoEmbed);

                }
            }
        }
    },
};