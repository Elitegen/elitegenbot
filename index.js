const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const settings = require('./discordaltssettings.json');
const client = new CommandoClient({
    commandPrefix: '!',
    owner: settings.ownerID, 
    disableEveryone: true
});

client.registry.registerGroup('getalt', 'getAlt');
client.registry.registerGroup('setalts', 'setAlts');
client.registry.registerGroup('manipulation', 'manipulation');
client.registry.registerGroup('manipulate', 'manipulate');
client.registry.registerGroup('cooldown', 'cooldown');
client.registry.registerGroup('misc', 'misc');
client.registry.registerGroup('reset', 'reset');
client.registry.registerGroup('info', 'info');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.on('ready', () => {
    console.log('EliteGen is Ready!');   
});
client.login(settings.loginToken); 


