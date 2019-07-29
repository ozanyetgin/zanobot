const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;


client.on('ready', () => {
  console.log(`Botun olan ${client.user.tag} sunucuya giriş yaptı ve artık aktif!`);

  client.channels.find(x => x.name === 'zano-online').send('Kendimi yeniledim ve geldim!')
});

client.on('message', msg => {
  if (!msg.content.startsWith(prefix)) {
    return;
}
if (msg.content.toLowerCase() === prefix + 'dünyanın en pro insanı kimdir?')  {
  msg.reply('Tabii ki de Ozan Yetgin xD')
}
if (msg.content.toLowerCase() === prefix + 'sa')  {
msg.reply('Aleyküm Selam!')
}
if (msg.content.toLowerCase() === prefix + 'hi')  {
msg.reply('Hi too!')
}
if (msg.content.toLowerCase() === prefix + 'yardım')  {
msg.reply('Komutlara http://zano.mozello.com adresinden bakabilirsin!')
}
if (msg.content.toLowerCase() === prefix + 'help')  {
msg.reply('Komutlara http://zano.mozello.com adresinden bakabilirsin!')
}
if (msg.content.toLowerCase() === prefix + 'nasılsın')  {
msg.reply('İyiyim sen nasılsın?')
}
if (msg.content.toLowerCase() === prefix + 'şu an ne yapıyorsun?')  {
msg.reply('IQ5000 in yeni bölümünü çekiyoruz Ozanla.')
}
if (msg.content.toLowerCase() === prefix + 'ben de iyiyim')  {
msg.reply('he sevindim')
}
if (msg.content.toLowerCase() === prefix + 'espri')  {
msg.reply('1 Hafta yedi gün ise 2 hafta Fantadır qweqwe')
}
if (msg.content.toLowerCase() === prefix + 'müzik')  {
msg.reply('En popüler 500 müzik: https://www.youtube.com/playlist?list=PLFgquLnL59alcyTM2lkWJU34KtfPXQDaX')
msg.reply('NCS: https://www.youtube.com/user/NoCopyrightSounds')
msg.reply('Ozan Yetgin İyiler Spotify: https://open.spotify.com/playlist/2s7IQTzwIbpFkG1bOt17RB?si=HGuH1zrNSea6b5TfG3mSdQ')
msg.reply('İçerik Üreticiysen: https://www.youtube.com/channel/UCht8qITGkBvXKsR1Byln-wA')
msg.reply('İstersen de ezeli rakibim Rhytm aracılığyla sunucuda müzik dinleyebilirsin!')
}
if (msg.content.toLowerCase() === prefix + 'music')  {
msg.reply('En popüler 500 müzik: https://www.youtube.com/playlist?list=PLFgquLnL59alcyTM2lkWJU34KtfPXQDaX')
msg.reply('NCS: https://www.youtube.com/user/NoCopyrightSounds')
msg.reply('Ozan Yetgin İyiler Spotify: https://open.spotify.com/playlist/2s7IQTzwIbpFkG1bOt17RB?si=HGuH1zrNSea6b5TfG3mSdQ')
msg.reply('İçerik Üreticiysen: https://www.youtube.com/channel/UCht8qITGkBvXKsR1Byln-wA')
msg.reply('İstersen de ezeli rakibim Rhytm aracılığyla sunucuda müzik dinleyebilirsin!')
}
});
client.on('guildBanAdd' , (guild, user) => {
  let girişçıkış = guild.channels.find('name', 'giriş-çıkış');
  if (!girişçıkış) return;
  girişçıkış.send('**Adalet dağıtma zamanı gelmiş!** '+ user.username +' hayatında başarılar... **Bakıyorum da suç işlemiş, yargı dağıtmaya devam!** :writing_hand:' );
});
client.login('NjAwMjMzODM1ODc5MjAyODI2.XSwyYg.xlD4acbLkgC5Gy8kZ7YxU68C7nk');
