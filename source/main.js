const Discord = require('discord.js');
const fs = require('fs');
const process = require('process');
const { prefix, token} = require(process.cwd() + '/config.json');

const client = new Discord.Client();
const testClient = new Discord.Client();
client.commands = new Discord.Collection();

//const commandFiles = fs.readdirSync(`./commands`).filter(file => file.endsWith(`.js`));

//adds command files to collection
const dmsg = require('./commands/dMsg.js');
client.commands.set(dmsg.name, dmsg);
const help = require('./commands/help.js');
client.commands.set(help.name, help);
const msgdesc = require('./commands/msgDesc.js');
client.commands.set(msgdesc.name, msgdesc);
const msgembed = require('./commands/msgEmbed.js');
client.commands.set(msgembed.name, msgembed);
const msglink = require('./commands/msgLink.js');
client.commands.set(msglink.name, msglink);
const msgping = require('./commands/msgPing.js');
client.commands.set(msgping.name, msgping);
const spam = require('./commands/spam.js');
client.commands.set(spam.name, spam);
const dEmbed = require('./commands/dEmbed.js');
client.commands.set(dEmbed.name, dEmbed);
const wiki = require('./commands/wiki.js');
client.commands.set(wiki.name, wiki);
const uInfo = require('./commands/uInfo.js');
client.commands.set(uInfo.name, uInfo);
const reply = require('./commands/reply.js');
client.commands.set(reply.name, reply);


/*
 * for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    //sets a new item in the Collection
    //with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}
*/


//starts new Discord clients with provided tokens from config.json

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question(`Change token? [Y/N]: `, choice => {
        if (choice === `Y` || choice === `y`) {
            console.clear();
            readline.question(`Enter the new token: `, rlToken => {
                let tokenData = {
                    token: rlToken,
                    prefix: [`!!`]
                }
                let data = JSON.stringify(tokenData);
                console.clear();
                console.log(`Changing token and logging in...`);
                fs.writeFileSync(process.cwd() + '/config.json', data);
                client.login(rlToken);
                i = 1;
            })
        }
        else if (choice === `N` || choice === `n`) {
            console.log(`Logging in...`);
            client.login(token);
            i = 1;
        }
        else {
            console.clear();
            console.log(`You must enter either "Y", "y", "N", or "n".`);
        }
})

client.on('ready', () => {

    console.clear();
    console.log(`
      :::::::::  ::::    :::          ::::::::  :::::::::: :::        :::::::::: 
     :+:    :+: :+:+:   :+:         :+:    :+: :+:        :+:        :+:         
    +:+    +:+ :+:+:+  +:+         +:+        +:+        +:+        +:+          
   +#++:++#+  +#+ +:+ +#+         +#++:++#++ +#++:++#   +#+        :#::+::#      
  +#+        +#+  +#+#+#                +#+ +#+        +#+        +#+            
 #+#        #+#   #+#+#         #+#    #+# #+#        #+#        #+#             
###        ###    ####          ########  ########## ########## ###              
\n
`);

    console.log(`Logged in as "${client.user.tag.slice()}"!`);

});

client.on('message', msg => {

    //variable defs
    var uId = client.user.id;
    var linkTitle;
    var link;
    var msgContent;
    var invSep = new String(` ⁤ ⁤`);

    //reply trigger
    if (msg.content.startsWith(`https://discord.com/channels/`) && msg.author.id === uId) {
        client.commands.get(`reply`).execute(msg);
    }
    else if (msg.content.startsWith(`https://discord.com/channels/`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use info feature in ` + msg.channel.name);
    }

    //userinfo trigger
    if (msg.content.startsWith(`!!info`) && msg.author.id === uId) {
        client.commands.get(`uInfo`).execute(msg);
    }
    else if (msg.content.startsWith(`!!info`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use info feature in ` + msg.channel.name);
    }

    //wiki trigger
    if (msg.content.startsWith(`!!wiki`) && msg.author.id === uId) {
        client.commands.get(`wiki`).execute(msg);
    }
    else if (msg.content.startsWith(`!!wiki`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use wiki feature in ` + msg.channel.name);
    }

    //disappearing msg trigger
    if (msg.content.startsWith(`!!dmsg`) && msg.author.id === uId) {
        client.commands.get(`dMsg`).execute(msg);
    }
    else if (msg.content.startsWith(`!!dmsg`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use disappearing msg feature in ` + msg.channel.name);
    }

    //msg embed (title embed style) trigger
    if (msg.content.startsWith(`!!embed`) && msg.author.id === uId) {
        client.commands.get(`msgEmbed`).execute(msg);
    }
    else if (msg.content.startsWith(`!!embed`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use embed message feature in ` + msg.channel.name);
    }

    //msg embed1 (description embed style) trigger
    if (msg.content.startsWith(`!!desc`) && msg.author.id === uId) {
        client.commands.get(`msgDesc`).execute(msg);
    }
    else if (msg.content.startsWith(`!!desc`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use embed message feature in ` + msg.channel.name);
    }

    //msg embed link trigger
    if (msg.content.startsWith(`!!link`) && msg.author.id === uId) {
        client.commands.get(`msgLink`).execute(msg);
    }
    else if (msg.content.startsWith(`!!link`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use embed link feature in ` + msg.channel.name);
    }

    //msg embed ping trigger
    if (msg.content.startsWith(`!!ping`) && msg.author.id === uId) {
        client.commands.get(`msgPing`).execute(msg);
    }
    else if (msg.content.startsWith(`!!ping`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use embed ping feature in ` + msg.channel.name);
    }

    //PEOPLE WILL BE ABLE TO TELL YOU ARE USING A SELFBOT IF THIS IS ENABLED/NOT COMMENTED OUT
    //reaction trigger for "hot" emoji shit
    /*
    if (msg.content === 'hot' || msg.content === 'Hot' || msg.content === 'HOT') {
        msg.react('🔥');
        console.log('Reacted to the heat in #' + msg.channel.name);
    }
    */

    //spam trigger
    if (msg.content.startsWith(`${prefix[0]}spam`) && msg.author.id === uId) {
        client.commands.get(`spam`).execute(msg);
    }
    else if (msg.content.startsWith(`${prefix[0]} spam`)) {
        console.log(`User ` + msg.author.tag + ` attempted to use spam feature`);
    }

    //dynamic embed trigger
    if (msg.content.startsWith(`!!dembed`)) {
        client.commands.get(`dEmbed`).execute(msg);
    }

    //help trigger
    if (msg.content.startsWith(`!!help`)) {
        client.commands.get(`help`).execute(msg);
    }

});
