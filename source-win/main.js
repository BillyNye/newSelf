const Discord = require('discord.js');
const fs = require('fs');
const process = require('process');
const { prefix, token, ascii } = require(process.cwd() + '/config.json');
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
var i = 0;

//define start page viewthinsfdgksdgsdgfsdfgdswg
function start() {

    console.clear();
    if (ascii === `1`) {
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
    }

    console.log(`Logged in as ${client.user.tag}`);

}

//define loginrejectred function
function loginRejected() {

    //readline quesrirtansetd for choice
    readline.question(`Would you like to enter a new token [1] or exit the program? [2]\n`, choice => {

        //trigger for new token
        if (choice === `1`) {

            console.clear();

            //readline questiuon for new token
            readline.question(`Enter the new token: `, rlToken => {

                //defines tokenData
                let tokenData = {

                    token: rlToken,
                    prefix: `${prefix}`,
                    ascii: `${ascii}`

                }

                //stringifies tokenmData
                let data = JSON.stringify(tokenData);

                //changes token and clears screen
                console.clear();
                console.log(`Logging in and changing token...`);

                //attempts login with new token and if it doesnt work it recurses
                client.login(rlToken)
                    .catch(error => {
                        console.clear();
                        console.log(`There was an issue with your token. Either your account was disabled, your password was reset, or you entered it incorrectly.\n`);
                        loginRejected();
                    });

                //writes stringified tokenData (aka data) to config.json
                fs.writeFileSync(process.cwd() + '/config.json', data);

            });

        }

        //trigger for exit
        else if (choice === `2`) {

            //exits process
            process.exit();

        }

        //trigger for incorrect entry
        else {

            //tells dumb user how to do it properly (as if it needed any explanation >:|) and recusreserssd
            console.log(`You must enter either "1" to change your token, or "2" to exit the program`);
            loginRejected();

        }

    });
}

//checks if provided token is valid
client.login(token)
    .catch(error => {
        console.clear();
        console.log(`There was an issue with your token. Either your account was disabled, your password was reset, or you entered it incorrectly.\n`);
        loginRejected();
    });


client.on('ready', () => {

    start();

});

client.on('message', msg => {

    //variable defs
    var uId = client.user.id;
    var linkTitle;
    var link;
    var msgContent;
    var invSep = new String(` ⁤ ⁤`);

	//settings trigger
	if (msg.content.startsWith(prefix + `settings`) && msg.author.id === uId)  {
		client.commands.get(`settings`).execute(msg);
	}

    //reply trigger
    if (msg.content.startsWith(`https://discord.com/channels/`) && msg.author.id === uId) {
        client.commands.get(`reply`).execute(msg);
    }

    //userinfo trigger
    if (msg.content.startsWith(prefix + `info`) && msg.author.id === uId) {
        client.commands.get(`uInfo`).execute(msg);
    }

    //wiki trigger
    if (msg.content.startsWith(prefix + `wiki`) && msg.author.id === uId) {
        client.commands.get(`wiki`).execute(msg);
    }

    //disappearing msg trigger
    if (msg.content.startsWith(prefix + `dmsg`) && msg.author.id === uId) {
        client.commands.get(`dMsg`).execute(msg);
    }

    //msg embed (title embed style) trigger
    if (msg.content.startsWith(prefix + `embed`) && msg.author.id === uId) {
        client.commands.get(`msgEmbed`).execute(msg);
    }

    //msg embed1 (description embed style) trigger
    if (msg.content.startsWith(prefix + `desc`) && msg.author.id === uId) {
        client.commands.get(`msgDesc`).execute(msg);
    }

    //msg embed link trigger
    if (msg.content.startsWith(prefix + `link`) && msg.author.id === uId) {
        client.commands.get(`msgLink`).execute(msg);
    }

    //msg embed ping trigger
    if (msg.content.startsWith(prefix + `ping`) && msg.author.id === uId) {
        client.commands.get(`msgPing`).execute(msg);
    }

    //spam trigger
    if (msg.content.startsWith(prefix + `spam`) && msg.author.id === uId) {
        client.commands.get(`spam`).execute(msg);
    }

    //dynamic embed trigger
    if (msg.content.startsWith(prefix + `dembed`)) {
        client.commands.get(`dEmbed`).execute(msg);
    }

    //help trigger
    if (msg.content.startsWith(prefix + `help`)) {
        client.commands.get(`help`).execute(msg);
    }

});

client.on(`error`, console.error);
