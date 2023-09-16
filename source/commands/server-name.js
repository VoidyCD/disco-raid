const { Application } = require("discord.js");

module.exports = {
    name: 'server-name',
    description: 'Changes the server name',
    async execute(interaction) {

    const { guild } = interaction;

    defaultserverName = "RAIDED"    

    let userServerName = interaction.options.getString('server_name') || defaultserverName;

    try {

        guild.setName(userServerName)
        interaction.reply(`Changed server name to ${userServerName}`)
    } catch (error) {
        interaction.reply({content: "Failed to change name, INTERNAL ERROR"})
        console.log(error)
    }

    }
}