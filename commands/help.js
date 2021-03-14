module.exports.run = async (bot, message, args) => {
    message.channel.send("Send this message - .help\nCheck Balance of Carl Pats - .bal <mention>\nGive someone a nice Carl Pat on the head! - .pat <mention>\nGets your ping - .ping\nMonke - .monke");
}

module.exports.help = {
    name: "help",
    aliases: ["h"]
}