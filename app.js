const Discord = require('discord.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js")

const client = new Discord.Client();
const prefix = '!';

const trim = (str, max) => str.length > max ? `${str.slice(0, max - 3)}...` : str;

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
    if (message.content === 'cat') {
        message.reply('schmock');
      
      
		const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

		message.channel.send(file);

        //Es ist fucking 2 uhr wieso bau ich ne Katzen Funkiton ein was ist falsch in meinem leben 
    }else if (message.content === '!status') {
    
        var statrespone = await fetch('https://api.corona-zahlen.org/states/').then (response => response.json());

        const answer = statrespone;
        const embed = new MessageEmbed()
                .setColor('00ff94')
                .setTitle('Aktuelle Daten')
                .setImage('https://api.corona-zahlen.org/map/states-legend')
                .addFields(
                    {name: 'Inzidenz: ', value: statrespone.data.NW.weekIncidence},
                    {name: 'Einwohner: ', value: statrespone.data.NW.population},
                    {name: 'Erkrankungen: ', value: statrespone.data.NW.cases}
                )
        message.channel.send(embed);
    }
});

client.login('your token');
