const fs = require("fs");
var pats = require("../pats.json");

module.exports.run = async (bot, message, args) => {

    if(message.member.roles.cache.find(role => role.name === 'CarlPats Admin')) {
        pats = {
        }
        fs.writeFile("./pats.json", JSON.stringify(pats), (err) => {
            if(err) console.log(err);
        });
        message.channel.send(`Nuked all values of Carl Pats. o.O`);
    }

}

module.exports.help = {
    name: "nuke",
    aliases: []
}