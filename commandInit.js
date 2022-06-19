require('dotenv').config();
const commands = require('./commands.json');
module.exports = (client) => {
    for(i=0;i<commands.length;i++){
        client.application.commands.create(commands[i]).then((commandInfo) => {
            console.log(`Registered /${commandInfo.name} (ID: ${commandInfo.id})`)
        }).catch(console.error);
    }
}