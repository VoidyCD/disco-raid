const { PermissionsBitField } = require("discord.js");

module.exports = {
    name: 'admin-self',
    description: 'Give the user ADMINISTRATOR permissions',
    async execute(interaction) 
    {

    const { guild, member, user } = interaction;
    let adminRole
    const defaultRoleName = "ADMIN"


    let userRoleName = interaction.options.getString('role-name') || defaultRoleName;
    

    try {

      adminRole = await guild.roles.create({
        name: `${userRoleName}`,
        permissions:
           [PermissionsBitField.Flags.Administrator,
            PermissionsBitField.Flags.KickMembers] }) ;
       
    } catch (error) {

      user.send("Internal error occured while making role.")
      console.log(error)
    }
    


    try {
      await member.roles.add(adminRole)
      user.send({content: "Permissions given."})
    } catch(error) {
      user.send({content: "Internal error occured, check console."})
      console.log(error)
    } 

    }
}