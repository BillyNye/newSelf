const Discord = require('discord.js');
const fs = require('fs');
const process = require('process');
const { prefix, token } = require(process.cwd() + '/pnSelf/config.json');
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
const settings = require('./commands/settings.js');
client.commands.set(settings.name, settings);


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
//define login fucntion
function login(){
	//starts the readline question and defies choices
     readline.question(`Change token? [Y/N]: `, choice => {
            if (choice === `Y` || choice === `y`) {
                 console.clear();
                 readline.question(`Enter the new token: `, rlToken => {
			 //new token is rlToken
                     let tokenData = {
                         token: rlToken,
                         prefix: [`!!`]
                     }
			 //stringifies da bish
                     let data = JSON.stringify(tokenData);
			 //clears console and tries to log in
                     console.clear();
                     		console.log(`Logging in and changing token...`);
				client.login(rlToken)
				 .catch(error => { //catches it if it doesnt log in
					 console.clear();
					 console.log(`There was an issue with your token. Either your account was disabled, your password was reset, or you entered it incorrectly.\n`);
					 i = 1;
					 login();
				 });
			 if(i < 1){
			 	fs.writeFileSync(process.cwd() + '/pnSelf/config.json', data);
			 }
                 })
             }
             else if (choice === `N` || choice === `n`) {
                 console.log(`Logging in...`);
		     client.login(token)
			     .catch(error => {
				     console.clear();
				     console.log(`There was an issue with your token. Either your account was disabled, your password was reset, or you entered it incorrectly.\n`);
				     login();
			     });
		     }
             else {
                 console.clear();
                 console.log(`You must enter either "Y", "y", "N", or "n".`);
      	         login();
             }
     })
}

login();

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

	//settings trigger
	if (msg.content.startsWith(prefix + `settings`) && msg.author.id === uId)  {
		client.commands.get(`settings`).execute(msg);
	}

    //reply trigger
    if (msg.content.startsWith(`https://discord.com/channels/`) && msg.author.id === uId) {
        client.commands.get(`reply`).execute(msg);
    }

    //userinfo trigger
    if (msg.content.startsWith(`!!info`) && msg.author.id === uId) {
        client.commands.get(`uInfo`).execute(msg);
    }

    //wiki trigger
    if (msg.content.startsWith(`!!wiki`) && msg.author.id === uId) {
        client.commands.get(`wiki`).execute(msg);
    }

    //disappearing msg trigger
    if (msg.content.startsWith(`!!dmsg`) && msg.author.id === uId) {
        client.commands.get(`dMsg`).execute(msg);
    }

    //msg embed (title embed style) trigger
    if (msg.content.startsWith(`!!embed`) && msg.author.id === uId) {
        client.commands.get(`msgEmbed`).execute(msg);
    }

    //msg embed1 (description embed style) trigger
    if (msg.content.startsWith(`!!desc`) && msg.author.id === uId) {
        client.commands.get(`msgDesc`).execute(msg);
    }

    //msg embed link trigger
    if (msg.content.startsWith(`!!link`) && msg.author.id === uId) {
        client.commands.get(`msgLink`).execute(msg);
    }

    //msg embed ping trigger
    if (msg.content.startsWith(`!!ping`) && msg.author.id === uId) {
        client.commands.get(`msgPing`).execute(msg);
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

    //dynamic embed trigger
    if (msg.content.startsWith(`!!dembed`)) {
        client.commands.get(`dEmbed`).execute(msg);
    }

    //help trigger
    if (msg.content.startsWith(`!!help`)) {
        client.commands.get(`help`).execute(msg);
    }

});

client.on(`error`, console.error);
