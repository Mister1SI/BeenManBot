module.exports.run = async (bot, message, args) => {
    const m = await message.channel.send("Monke!!!");
}

module.exports.help = {
    name: "monke",
    aliases: []
}