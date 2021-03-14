const fs = require("fs");
const pats = require("../pats.json");

module.exports.run = async (bot, message, args) => {
    
    if(!args[0]) {
        var user = message.author;
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

    return message.channel.send(`${bot.users.cache.get(user.id).username} has ${pats[user.id].pats} Carl Pats!`);
}

module.exports.help = {
    name: "balance",
    aliases: ["bal"]
}
