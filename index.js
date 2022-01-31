const {Client, Intents} = require('discord.js')
const Discord = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS,] });
const config = require('./config.json')
const server = config.discord_server_id 
const mcserver = config.minecraft_server_ip
const util = require('minecraft-server-util');
const { MessageEmbed } = require('discord.js');
const prefix = config.prefix
client.login(config.token)

client.on('ready', async () => {
    console.log(`Minecraft Server Ping Bot is ready to use`)
})

client.on('messageCreate', async message => {
    if (message.guild.id !== server) return
    if (message.author.bot) return
    const icon = message.member.user.avatarURL({format: 'png'})
    const username = `Requested by ${message.author.tag}`
    const color = [126, 200, 80]
    if (message.content.toLowerCase() === prefix+"ping") {
    message.react('✅')
   let msg = await message.reply(`Fetching Details...`)
   try {
    response = await util.status(mcserver)
 }
 catch(err) {
     let embed = new MessageEmbed()
     embed.setColor(color)
     embed.setFooter({text: username, iconURL: icon})
     embed.setTitle(`Server Not found :(`)
     msg.delete()
     return message.reply({embeds: [embed]})
 }
 embed = new MessageEmbed()
 if (response.favicon) {
  data = response.favicon.split(',')[1]; 
  buf = new Buffer.from(data, 'base64');
 file = new Discord.MessageAttachment(buf, 'img.jpeg');
 embed.setThumbnail('attachment://img.jpeg')
 embed.setTitle(`${mcserver}'s latency:`)
 embed.setDescription(`${response.roundTripLatency} ms`)
 embed.setColor(color)
 embed.setFooter({text: username, iconURL: icon})
 msg.delete()
 message.reply({embeds: [embed], files: [file]})
}
else {
  embed.setTitle(`${mcserver}'s latency:`)
  embed.setDescription(`${response.roundTripLatency} ms`)
  embed.setColor(color)
  embed.setFooter({text: username, iconURL: icon})
  msg.delete()
  message.reply({embeds: [embed]})
}
  }
  if (message.content.toLowerCase() === prefix+"version") {
      message.react('✅')
      let msg = await message.reply(`Fetching Details...`)
      try {
       response = await util.status(mcserver)
    }
    catch(err) {
        let embed = new MessageEmbed()
        embed.setColor(color)
        embed.setFooter({text: username, iconURL: icon})
        embed.setTitle(`Server Not found :(`)
        msg.delete()
        return message.reply({embeds: [embed]})
    }
    embed = new MessageEmbed()
    if (response.favicon) {
      data = response.favicon.split(',')[1]; 
      buf = new Buffer.from(data, 'base64');
     file = new Discord.MessageAttachment(buf, 'img.jpeg');
     embed.setThumbnail('attachment://img.jpeg')
     embed.setTitle(`${mcserver}'s version:`)
     embed.setDescription(response.version.name)
     embed.setFooter({text: username, iconURL: icon})
     embed.setColor(color)
     msg.delete()
     message.reply({embeds: [embed], files: [file]})
   }
   else {
    embed.setTitle(`${mcserver}'s version:`)
    embed.setDescription(response.version.name)
    embed.setFooter({text: username, iconURL: icon})
    embed.setColor(color)
    msg.delete()
    message.reply({embeds: [embed]})
   } 
  }
  if (message.content.toLowerCase() === prefix+"players") {
    message.react('✅')
    let msg = await message.reply(`Fetching Details...`)
    try {
     response = await util.status(mcserver)
  }
  catch(err) {
      let embed = new MessageEmbed()
      embed.setColor(color)
      embed.setFooter({text: username, iconURL: icon})
      embed.setTitle(`Server Not found :(`)
      msg.delete()
    console.log(err)
      return message.reply({embeds: [embed]})
  }
  embed = new MessageEmbed()
  if (response.favicon) {
    data = response.favicon.split(',')[1]; 
    buf = new Buffer.from(data, 'base64');
   file = new Discord.MessageAttachment(buf, 'img.jpeg');
   embed.setThumbnail('attachment://img.jpeg')
   embed.setTitle(`${mcserver}'s Players:`)
   embed.setDescription(`Online: ${response.players.online}
   Max: ${response.players.max}`)
   embed.setFooter({text: username, iconURL: icon})
   embed.setColor(color)
   msg.delete()
   
   message.reply({embeds: [embed], files: [file]})
 }
 else {
  embed.setTitle(`${mcserver}'s Players:`)
  embed.setDescription(`Online: ${response.players.online}
  Max: ${response.players.max}`)
  embed.setFooter({text: username, iconURL: icon})
  embed.setColor(color)
  msg.delete()
  
  message.reply({embeds: [embed]})
 }

  }
  if (message.content.toLowerCase() === prefix+"motd") {
    message.react('✅')
    let msg = await message.reply(`Fetching Details...`)
    try {
     response = await util.status(mcserver, 25565)
  }
  catch(err) {
      let embed = new MessageEmbed()
      embed.setColor(color)
      embed.setFooter({text: username, iconURL: icon})
      embed.setTitle(`Server Not found :(`)
      msg.delete()
      console.log(err)
      return message.reply({embeds: [embed]})
  }
   embed = new MessageEmbed()
  if (response.favicon) {
     data = response.favicon.split(',')[1]; 
     buf = new Buffer.from(data, 'base64');
    file = new Discord.MessageAttachment(buf, 'img.jpeg');
    embed.setThumbnail('attachment://img.jpeg')
    embed.setTitle(`${mcserver}'s MOTD:`)
        embed.setDescription(`${response.motd.clean}`)
        embed.setFooter({text: username, iconURL: icon})
        embed.setColor(color)
        msg.delete()
        message.reply({embeds: [embed], files: [file]})
  }
  else {
   embed.setTitle(`${mcserver}'s MOTD:`)
   embed.setDescription(`${response.motd.clean}`)
    embed.setFooter({text: username, iconURL: icon})
    embed.setColor(color)
    msg.delete()
    message.reply({embeds: [embed]})
  }
  }
})