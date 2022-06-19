require('dotenv').config();
const {
    Client,
    //MessageActionRow,
    //MessageEmbed,
    //Permissions,
    //MessageAttachment,
    //MessageButton
} = require('discord.js');
const commandSetup = require('./commandInit');
const commands = require('./commands');
const client = new Client({intents: 98045});
client.on('ready', async () => {
    //commandSetup(client);
    client.user.setPresence({ status: 'online', activities: [ { name: `Clash Royale`, type: 'PLAYING' } ] });
    console.log('Discord connected!');
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;
    const { commandName } = interaction;

    switch(commandName){
        case 'player':{
            switch(interaction.options.getSubcommand()){
                case 'stats': return commands.playerStats(interaction);
                case 'chests': return commands.playerChests(interaction);
                case 'battles': return commands.playerBattles(interaction);
            }
            break;
        }
        case 'clan':{
            switch(interaction.options.getSubcommand()){
                case 'stats': return commands.clanStats(interaction);
                case 'wars': return commands.clanWarlog(interaction);
                case 'currentwar': return commands.clanCurrentWar(interaction);
            }
            break;
        }
        case 'cards': return commands.help(interaction, interaction.member.id);///return commands.cards(interaction);
    }
});

client.login(process.env.DISCORD_TOKEN);