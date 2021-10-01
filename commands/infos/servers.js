module.exports = {
    name: 'servers',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}servers',

    execute(client, message, args) {
        client.guilds.cache.forEach(guild => {
            message.channel.send(`${guild.name}`);
          })
    },
};
