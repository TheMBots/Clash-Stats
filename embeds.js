const commands = require('./commands.json');
require('dotenv').config();
const {
    //Client,
    //MessageActionRow,
    MessageEmbed,
    //Permissions,
    //MessageAttachment,
    MessageButton
} = require('discord.js');

module.exports.help = (interaction) => {
    const embed = new MessageEmbed()
        .setColor("LUMINOUS_VIVID_PINK")
        .setFooter({ text: `Clash Stats`, iconURL: `https://clashroyalekingdom.com/wp-content/uploads/2017/10/League-9.jpg` })
        .setTitle(`Help Menu`)
        .setURL(`https://discord.gg/t3xxnCfd3k`)
    let description = ``;
    commands.forEach((cmd) => {
        description += `> **\`/${cmd.name}\` - ${cmd.description}**\n`;
    })
    description += `\n**Requested by <@${interaction.member.id}>**`;
    embed.setDescription(description)
    return embed
}