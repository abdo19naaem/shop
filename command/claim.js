  const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('claim')
        .setDescription('Claim the ticket'),
    async execute(interaction) {
        if (!interaction.user.bot) {
            await interaction.deferReply();

            await interaction.deleteReply();
            await interaction.channel.send(`تم استلام التكت من قبل ${interaction.user}`);
            await interaction.guild.channels.cache.find(channel => channel.name === `by-${interaction.user.username}`).setName(`by-${interaction.user.username}`);
        }
    },
};