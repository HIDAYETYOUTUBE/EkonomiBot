const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    const embed = new MessageEmbed()
        .setAuthor("Komutlar")
        .setTitle("Ekonomi Yardım menusu")
        
        .setDescription(`Toplam Komutlar: ${client.commands.size}`)
        .setColor("BLURPLE")
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL)
        .setFooter(message.author.tag, message.author.displayAvatarURL);
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Takma AD: ${cmd.help.aliases.join(", ") || "Yok"}\nKullanım: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "yardım",
    aliases: ["y"],
    usage: `yardım`
}
