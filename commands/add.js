const fs = require("fs");
const pats = require("../pats.json");

module.exports.run = async (bot, message, args) => {
    if(message.member.roles.cache.find(role => role.name === 'CarlPats Admin')) {
        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        }
        if(!args[1]) {
            message.channel.send("You need to specify an amount!");
            return;
        } else if(Number.isInteger(parseInt(args[1]))) {
            var add = parseInt(args[1])
        } else {
            message.channel.send("You need to specify an amount!");
            return;
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
            pats: pats[user.id].pats + add
        }
        fs.writeFile("./pats.json", JSON.stringify(pats), (err) => {
            if(err) console.log(err);
        });
        message.channel.send(`You gave ${bot.users.cache.get(user.id).username} ${add} Carl Pats on the head!`);
        message.channel.send(`https://cdn.discordapp.com/attachments/748552802200190997/820149667785998366/carl_pat.png`);
        message.channel.send(`${bot.users.cache.get(user.id).username} now has ${pats[user.id].pats} Carl Pats!`);
    } else {
        message.channel.send("You do not have permission to run this command!");
        return;
    }
}

module.exports.help = {
    name: "add",
    aliases: []
}