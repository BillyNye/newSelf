const Discord = require('discord.js');
const fs = require('fs');
const { prefix, token, customFiller, activity, type, userId } = require('./../config.json');

module.exports = {
    name: `dEmbed`,
    description: `Sends a custom embed.`,
    execute(msg) {

        //declares marker variable for marking the end of each argument string
        var marker;

        //checks if the image argument is included
        if (msg.content.includes(`?img`)) {

            //declares index variable for the argument so we know what to slice
            var imgIndex = msg.content.indexOf(`?img`);
            marker = msg.content.indexOf(`}?`, imgIndex);

            //slices the string between the index and the marker unless there is no marker (the value would be -1)
            //if there is no marker it just slices everything after the index
            if (marker < 0) {
                img = msg.content.slice(imgIndex + 4);
            }
            else {
                var img = msg.content.slice(imgIndex + 4, marker);
            }
        }

        //checks for color argument
        if (msg.content.includes(`?color`)) {

            var colorIndex = msg.content.indexOf(`?color`);
            marker = msg.content.indexOf(`}?`, colorIndex);

            if (marker < 0) {
                color = msg.content.slice(colorIndex + 6);
            }
            else {
                var color = msg.content.slice(colorIndex + 6, marker);
            }

            if (color.startsWith(`#`) === false) {
                color = `#` + color;
            }
        }

        //checks for url argument
        if (msg.content.includes(`?url`)) {

            var urlIndex = msg.content.indexOf(`?url`);
            marker = msg.content.indexOf(`}?`, urlIndex);

            if (marker < 0) {
                url = msg.content.slice(urlIndex + 4);
            }
            else {
                var url = msg.content.slice(urlIndex + 4, marker);
            }

            if (url.startsWith(`https://`) === false) {
                url = `https://` + url;
            }
        }

        //checks for description argument
        if (msg.content.includes(`?desc`)) {

            var descIndex = msg.content.indexOf(`?desc`);
            marker = msg.content.indexOf(`}?`, descIndex);

            if (marker < 0) {
                desc = msg.content.slice(descIndex + 5);
            }
            else {
                var desc = msg.content.slice(descIndex + 5, marker);
            }
        }

        //checks title argument
        var titleIndex = msg.content.indexOf(`!!dembed`);
        marker = msg.content.indexOf(`}?`, titleIndex);

        if (marker < 0) {
            title = msg.content.slice(titleIndex + 8);
        }
        else {
            var title = msg.content.slice(titleIndex + 8, marker);
        }

        //checks that the title is of an appropriate length
        if (title.length >= 256) {
            console.log(`Your embed title needs to be less than 256 characters! (It had ` + msgContent.length + ` characters)`);
        }
        else if (color != undefined && color.length > 7 || color.length < 6)) {
		console.log(`If you want to specify a color for your embed you must use a 7 character html color code.`);
                console.log(color);
            
        }
        else {

            //constructs new richembed with the features as defined by their corresponding arguments we sliced earlier
            const quoteEmbed = new Discord.RichEmbed()
                .setTitle(title)

            if (msg.content.includes(`?desc`)) {
                quoteEmbed.setDescription(desc);
            }

            if (msg.content.includes(`?img`)) {
                quoteEmbed.setImage(img);
            }

            if (msg.content.includes(`?url`)) {
                quoteEmbed.setURL(url);
            }

            if (msg.content.includes(`?color`)) {
                quoteEmbed.setColor(color);
            }

            //edits message to be embed instead of command
            msg.edit(quoteEmbed);
        }
    },
};
