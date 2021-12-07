const Discord = require('discord.js');
const fetch = require('node-fetch');
const { MessageEmbed } = require("discord.js")
const client = new Discord.Client();

//replace with your token
const token = "";

//replace with your province of choice
const province = "NW";

//replace with your prefix of choice
const prefix = '!';


client.once('ready', () => {
	console.log('coschonabot by m00ba');
});

client.on('message', async message => {
    if (message.content === prefix + 'status') {
            
        var statrespone = await fetch('https://api.corona-zahlen.org/states/').then (response => response.json());

        const answer = statrespone;
        const embed = new MessageEmbed()
                .setColor('00ff94')
                .setTitle('Aktuelle Corona Daten in ' + province)
                .setImage('https://api.corona-zahlen.org/map/states-legend')
                .addFields(
                    {name: 'Inzidenz: ', value: statrespone.data.NW.weekIncidence.toFixed(0), inline: true},
                    {name: 'Einwohner: ', value: statrespone.data.NW.population.toLocaleString(), inline: true},
                    {name: 'Erkrankungen: ', value: statrespone.data.NW.cases.toLocaleString(), inline: true}
                )
        message.channel.send(embed);
    
    }

client.on('message', message => {

    let args = message.content.substring(prefix.length).split(" ");

    switch (args[0]){
        case 'play':
            if(!args[1]){
                message.channel.send('Du hast kein Lied angegeben');
                return;
            }
    }



});
});

client.login(token);
