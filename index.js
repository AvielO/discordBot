const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv/config");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log("The bot is ready");
});

client.on("messageCreate", (msg) => {
  let prefix = "!";
  let channel = msg.channel;
  let message = msg.content;

  if (message.startsWith(prefix)) {
    const command = message.slice(prefix.length).split(" ")[0];

    switch (command) {
      case "התאמה": {
        const mentionOne = message.slice(prefix.length).split(" ")[1];
        const mentionTwo = message.slice(prefix.length).split(" ")[2];

        if (!mentionOne) {
            console.log("Need to mention at least one");
            return;
        }
        // User
        if(!mentionTwo) {

        }

        // const lovePrecents = Math.floor(Math.random() * 101).toString();
        // channel.send(lovePrecents);
        break;
      }
      default: {
        console.log(msg);
        break;
      }
    }
  }
});

client.login(process.env.TOKEN);
