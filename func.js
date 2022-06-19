require('dotenv').config();
const Client = require('clash-royale-api');

module.exports = function(searchOptions){
    this.cr = new Client(process.env.CLASH_ROYALE_API);
    this.getCards = async () => {
        const cards = await this.cr.cards();
        return { cards };
    }
    this.getClanStats = async (searchOptions) => {
        //return await cr.cards();
    }
};