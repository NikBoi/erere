module.exports = {
    name: 'support',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}support',

    execute(client, message, args) {
        message.channel.send({
            embed: {
                title: 'Support',
                description: `
                For support, please join our discord server. - https://tinyurl.com/3sk9utbk`,
                color: 'BLUE'
            }
        });
    },
};