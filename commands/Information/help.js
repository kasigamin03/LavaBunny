const Discord = require('discord.js')
const { MessageEmbed } = require(`discord.js`);
const pagination = require('discord.js-pagination');
module.exports = {
  name: "help",
  description: "The help command, what do you expect?",
  aliases: ["music", "cmds", "musichelp"],
    cooldown: 4,
    usage: "commands",
    description: "Shows all available Commands",
    run: async (client, message, args, user, text, prefix) => {

        //Sort your commands into categories, and make seperate embeds for each category

        const music = new Discord.MessageEmbed()
        .setTitle('Music')
        .addField('`!play`', '<a:tick:811476337537449985> Play command <a:tick:811476337537449985>')
        .addField('`!pause`', '<a:tick:811476337537449985> Pause command <a:tick:811476337537449985>')
        .addField('`!loop`', '<a:tick:811476337537449985> Loop command <a:tick:811476337537449985>')
        .addField('`!np`', '<a:tick:811476337537449985> Now Playing command <a:tick:811476337537449985>')
        .addField('`!queue`', '<a:tick:811476337537449985> Queue command <a:tick:811476337537449985>')
        .addField('`!stop`', '<a:tick:811476337537449985> Stop Music <a:tick:811476337537449985>')
        .addField('`!remove`', '<a:tick:811476337537449985> Remove Song In A Queue! <a:tick:811476337537449985>')
        .addField('`!skip`', '<a:tick:811476337537449985> Skip Song <a:tick:811476337537449985>')
        .addField('`!skipto`', '<a:tick:811476337537449985> Skips To A Particular Song In Queue <a:tick:811476337537449985>')
        .addField('`!volume`', '<a:tick:811476337537449985> Shows and changes volume. <a:tick:811476337537449985>')
        .addField('`!disconnect`', '<a:tick:811476337537449985> disconnect Command. <a:tick:811476337537449985>')
        .addField('`!lyrics`', '<a:tick:811476337537449985> lyrics Command. <a:tick:811476337537449985>')
        .addField('`!forward`', '<a:tick:811476337537449985> forward Command. <a:tick:811476337537449985>')
        .addField('`!save`', '<a:tick:811476337537449985> Saves Song . <a:tick:811476337537449985>')
        .addField('`!seek`', '<a:tick:811476337537449985> Seek Command . <a:tick:811476337537449985>')
        .addField('`!search`', '<a:tick:811476337537449985> Search Songs . <a:tick:811476337537449985>')
        .addField('`!rewind`', '<a:tick:811476337537449985> Rewind Command . <a:tick:811476337537449985>')
        .addField('`!replay`', '<a:tick:811476337537449985> Replay Song. <a:tick:811476337537449985>')
        .addField('`!clear`', '<a:tick:811476337537449985> Clears the whole queue. <a:tick:811476337537449985>')
        .addField('`!loopqueue`', '<a:tick:811476337537449985> looping for the whole queue. <a:tick:811476337537449985>')
        .addField('`!shuffle`', '<a:tick:811476337537449985> Shuffle Song. <a:tick:811476337537449985>')
        .setTimestamp()

        
        const info = new Discord.MessageEmbed()
        .setTitle('Info')
        .addField('`!help`', '<a:tick:811476337537449985> Help Command <a:tick:811476337537449985>' )
        .addField('`!ping`', '<a:tick:811476337537449985> Get the bot\'s API ping <a:tick:811476337537449985>')
        .addField('`!uptime`', '<a:tick:811476337537449985> Uptime <a:tick:811476337537449985>')
        .setTimestamp()
        
        const pages = [
                music,
                info
        ]

   const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}
