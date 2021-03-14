const Discord = require("discord.io");
const fs = require("fs");
const pats = require("../pats.json");

module.exports.run = async (bot, message, args) => {

    if(!args[0]) {
        message.channel.send("Please Mention Someone!");
    } else if (message.author == message.mentions.users.first() || bot.users.cache.get(args[0])) {
        message.channel.send("You can't pat yourself. Cheater!");
        return;
    } else {
        var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    }

    if(!pats[user.id]) {
        pats[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            pats: 0
        }
        fs.writeFile("./pats.json", JSON.stringify(pats), (err) => {
            if(err) console.log(err);
        });
    }

    pats[user.id] = {
        name: bot.users.cache.get(user.id).tag,
        pats: pats[user.id].pats + 1
    }
    fs.writeFile("./pats.json", JSON.stringify(pats), (err) => {
        if(err) console.log(err);
    });
    message.channel.send(`You gave ${bot.users.cache.get(user.id).username} a nice Carl Pat on the head!\n${bot.users.cache.get(user.id).username} now has ${pats[user.id].pats} Carl Pats!`,{files: ["https://i.imgur.com/jaxCNDS.png"]});
    //const exampleEmbed = new Discord.MessageEmbed()
	//.setColor('#0099ff')
	//.setTitle('Pat!')
	//.setDescription(`You gave ${bot.users.cache.get(user.id).username} a nice Carl Pat on the head!`)
	//.setThumbnail('https://i.imgur.com/jaxCNDS.png')
    //.setFooter(`${bot.users.cache.get(user.id).username} now has ${pats[user.id].pats} Carl Pats.`);
    //channel.send(exampleEmbed);
    return;
}

module.exports.help = {
    name: "pat",
    aliases: []
}
