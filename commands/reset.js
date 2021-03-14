const fs = require("fs");
const pats = require("../pats.json");

module.exports.run = async (bot, message, args) => {

    if(message.member.roles.cache.find(role => role.name === 'CarlPats Admin')) {
        if(!args[0]) {
            var user = message.author;
        } else {
            var user = message.mentions.users.first() || bot.users.cache.get(args[0]);
        }
        pats[user.id] = {
            name: bot.users.cache.get(user.id).tag,
            pats: 0
        }
        fs.writeFile("./pats.json", JSON.stringify(pats), (err) => {
            if(err) console.log(err);
        });
        message.channel.send(`Reset ${bot.users.cache.get(user.id).username}'s Carl Pats!`);
    }

}

module.exports.help = {
    name: "reset",
    aliases: []
}