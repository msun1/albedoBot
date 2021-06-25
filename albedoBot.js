//NOTE: since repl is a cloud-based system, it'll get slower as you run the program i think~
//FIRST DISCORD BOT - MELLON - YAYYYY 

//automatically installs Discord library once run is clicked
const Discord = require("discord.js")

//to connect to discord server
const client = new Discord.Client()

//making arrays for specific words the user types
const welcome = ["Hi", "hi", "hello", "Hello"]
const hi = ["Hello there! My name is Albedo and today I'm going to be teaching you about the severe impacts of Climate Change. This will be through an entertaining but informative simulation. Please type `$simulations` to continue."]
//const yn = ["yes", "Yes", "no", "No"]

/*module.exports = {
  name: 'command',
  description: 'Embeds!',
  execute(message, args, Discord){
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('Rules')
    .setUrl("https://youtube.com/codelyon")
    .setDescription("This is an embed for the server rules.")
    .setImage("https://climate.nasa.gov/system/time_series_images/2049_seaice_1980_720x360.jpg")
    .setFooter("Make sure to check out other channels!")

    message.channel.send(newEmbed);
  }
}*/

//Adding images...
module.exports.run = async (client, message, args) => {
  message.channel.send('test', { files: ['oceanSunset.jpg'] });
};
client.on('message', msg => {
  if (msg.content.startsWith ('!image')) {
    msg.channel.send('An Image:', {files: ["./images/oceanSunset.jpg"]});
  }
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

//bot is successfully connected to server and is ready to do things
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

//when we type something, mellon should say something back lol
//when the bot sees message, it brings message event (on), which is a listen-respond kinda concept
//client.on("message", message => {
//  if(message.content === "ping"){
//    message.channel.send("pong") //ping-pong is basically the Hello World of discord haha
//  }
//})
client.on("message", msg => {
  if (msg.author.bot) return //if message is coming from user to the bot, then...
    //.some: array method that goes through each item
    //if message includes word - goes through each word in stemWords list
    //stemWords.some returns true if 1 or more returns true
 /* if(stemWords.some(word => msg.content.includes(word))){
      //random element from queen arrays
      const randomMessage = queen[Math.floor(Math.random() * queen.length)]
      msg.reply(randomMessage)
  }*/
  if(welcome.some(hello => msg.content.includes(hello))){
      const welcomeMsg = hi[Math.floor(Math.random() * hi.length)]
      msg.reply(welcomeMsg)
  }
  /*if(yn.some(word => msg.content.includes(word))){
      //random element from pic arrays
      const picMessage = pic[Math.floor(Math.random() * pic.length)]
      msg.reply(picMessage)
  }*/
  /*if(sim1.some(word => msg.content.includes(word))){
      const msg = simWords[Math.floor(Math.random() * simWords.length)]
      msg.reply(msg)}*/
})

client.on('message', msg => {
  if (msg.content.startsWith ('$simulations')) {
    msg.channel.send('Simulation #1 Beginning: LIGHTS, Camera, Climate change? \nMeet Sara, an avid bookworm and typical college student. She has many friends and a great social circle. However, she doesn\'t know much about climate change! When coming back from school one day, she finds that a light in her dorm had broken down, a very common problem. Sara then goes to the store to buy a new light and finds something called a SOLAR SPOTLIGHT and some LED LIGHTS BULBS. She is more familiar with the LED lights, so she chooses to go with those. \n\nDid Sara make the right choice? (yes/no)', {files: ["./images/oceanSunset.jpg"]})
  };
    
  if (msg.content.startsWith ('yes')) {
    msg.channel.send('Unfortunately, along with Sara, you are incorrect. \nSara should not have picked out the LED lights because they are, in fact, extremely harmful to the environment. They emit something called BLUE LIGHT, which can cause serious consequences for wildlife and can sometimes even make spring come early! Not something good! \nFor more info, feel free to go to the following website: \nhttps://www.nationalgeographic.com/science/article/light-pollution-energy-LED-bulbs-spd \n\nPlease type `$continue` to continue to the next part of Simulation 1.')
  };
  if (msg.content.startsWith ('no')) {
    msg.channel.send('Yes, you are correct! \nSara should not have chosen the LED lights because they emit something called BLUE LIGHT, which can cause serious consequences for wildlife and can sometimes even make spring come early! Not something good! \nFor more info, feel free to go to the following website: \nhttps://www.nationalgeographic.com/science/article/light-pollution-energy-LED-bulbs-spd \n\n However, as you thought, SOLAR-Powered are much better for the climate change crisis, despite being a bit pricier. In the long run, those would be the most beneficial. Feel free to check out this video about why Solar-Powered lights are good: https://www.zenenergy.com.au/blog/five-advantages-of-solar-energy-on-the-environment/ \n\nPlease type `$continue` to continue to the next part of this simulation.')
  };
  if (msg.content.startsWith("$continue")){
    msg.channel.send("Check out this graphic (From NASA) that explains what the Greenhouse Effect is: \n\nType `$ok` when you would like to move on.", {files: ["./images/simulation.gif"]})
  };

  //QUIZ #1
  if (msg.content.startsWith("$ok")){
    msg.channel.send('QUIZ TIME! \n\nBased on the graphic and what you learned about light bulbs with Sara, which light do you think is the most beneficial to GREENHOUSE GAS EMISSIONS? \n 1 = fluorescent lamps\n 2 = LED lights')
  };
  if (msg.content.startsWith("1")){
    msg.channel.send('You are correct! \nIt is believed that the energy-efficient fluorescent lamps (CFLs) have the ability to reduce greenhouse gas emissions and cut household energy costs. \n\nType `$next` to move on to the next question of this simulation.')
  };
  if (msg.content.startsWith("2")){
    msg.channel.send('Unfortunately, you are incorrect. \nIt is believed that the energy-efficient fluorescent lamps (CFLs) have the ability to reduce greenhouse gas emissions and cut household energy costs. \n\nType `$next` to move on to the next question of this simulation.')
  };

  //QUIZ #2
  if (msg.content.startsWith("$next")){
    msg.channel.send('QUIZ TIME! \n\nBased on the graphic below, which statement is true about solar panels/energy: \n3 = Photons are absorbed and then electrons are reflected off the solar panels to produce electric currents. \n4 = Electrons are absorbed and then that bounces off the protons, creating nuclear energy.', {files: ["./images/solar.gif"]})
  };
  if (msg.content.startsWith("3")){
    msg.channel.send('You are correct! \nThe photons (from the sunlight) are absorbed and then the solar panel reflects the electrons, which creates electric currents, therefore creating energy. \n\nType `$gotIt` to move on to the final part of this simulation.')
  };
  if (msg.content.startsWith("4")){
    msg.channel.send('Unfortunately, you are incorrect. \nThe correct process is that the photons (from the sunlight) are absorbed and then the solar panel reflects the electrons, which creates electric currents, therefore creating energy. \n\nType `$gotIt` to move on to the final part of this simulation.')
  };

//ENDING MESSAGE
  if (msg.content.startsWith("$gotIt")){
    msg.channel.send('Congratulations! 🎉🎉 \n\nYou have made it to the end of our LIGHTS, Camera, Climate Change? Simulation! We hope you enjoyed it and don\'t forget to share this info with your friends and family. \n\nClimate change is such an important aspect in our daily lives, but most people fail to fully recognize its future dangers. \nKeep this information in mind the next time you go to the store for lights and enjoy this cool climate change graphic on your way out. Thank you for using this simulation. \n\n-Albedo Bot 🌏', {files: ["./images/climateChange.gif"]})
  };
});
// ^ ready and message event ^

//note: must hide bot token since this repl is public so we're using an environment variable (env)
client.login(process.env.TOKEN)
//NOTE: this phrase: const mySecret = process.env['TOKEN'] is the same as the line above, just written differently


/*SOURCES:
1.) https://climate.nasa.gov/climate_resources/188/graphic-the-greenhouse-effect/
2.) https://www.climate.gov/teaching/resources/mits-greenhouse-gas-simulator
3.) https://www.climateinteractive.org/tools/climate-bathtub-simulation/
4.) https://replit.com/talk/ask/how-to-put-make-the-discord-bot-put-an-image-Nodejs/80601
5.) https://www.nationalgeographic.com/science/article/light-pollution-energy-LED-bulbs-spd
6.) https://www.adb.org/news/philippines-phasing-out-incandescent-bulbs-cut-greenhouse-gas-emissions
7.) https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.planetaid.org%2Fblog%2Fwhat-climate-change-looks-like-in-6-gifs&psig=AOvVaw3H9JJZW0JPOnlyZegcxc8h&ust=1624640055405000&source=images&cd=vfe&ved=0CAsQjhxqFwoTCMiIif3dsPECFQAAAAAdAAAAABAP
8.) https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fdownload-solar-panel-gif.html&psig=AOvVaw3sn0T0K1tD7JANTcRUv7AB&ust=1624655526447000&source=images&cd=vfe&ved=0CAsQjhxqFwoTCMi-7s6XsfECFQAAAAAdAAAAABAm
*/