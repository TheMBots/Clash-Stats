// require('dotenv').config();
// const Client = require('clash-royale-api');

// module.exports = function(searchOptions){
//     this.cr = new Client(process.env.CLASH_ROYALE_API);
//     this.getCards = async () => {
//         const cards = await this.cr.cards();
//         return { cards };
//     }
//     this.getClanStats = async (searchOptions) => {
//         //return await cr.cards();
//     }
// };
const embeds = require('./embeds');
const SeeClashRoyale = require('see-clash-royale');
const scr = new SeeClashRoyale();
require('dotenv').config();
const Client = require('clash-royale-api');
const client = new Client(process.env.CLASH_ROYALE_API);
module.exports.cards = async function(interaction){
    const cards = await client.cards();
    interaction.reply(`> **Processing...**`).then(() => {
        console.log(cards.data[0])
        //cards.data[0].name
        let cardData = `> **`;
        cards.data.forEach((card) => {
            cardData += `${card.name}, `
        })
        cardData += `**`
        setTimeout(() => {
            interaction.editReply(`${cardData}`)
        }, 1000)
    });
}
module.exports.playerStats = async function(interaction){
    const cards = await client.cards();
    interaction.reply(`> **Processing...**`).then(() => {
        console.log(cards.data[0])
        //cards.data[0].name
        let cardData = `> **`;
        cards.data.forEach((card) => {
            cardData += `${card.name}, `
        })
        cardData += `**`
        setTimeout(() => {
            interaction.editReply(`${cardData}`)
        }, 1000)
    });
}
module.exports.randomCard = async function(interaction){
    const card = await scr.getRandomCard();
    interaction.reply(`> **Processing...**`).then(() => {
        setTimeout(() => {
            interaction.editReply(`**${card.name}**`)
        }, 1000)
    });
}
module.exports.help = async function(interaction){
    const embed = embeds.help(interaction);
    interaction.reply({
        embeds: [embed]
    });
}