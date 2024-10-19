//여기에다가 코딩하세요

//EXAMPLES
import { MessangerBotManager } from "messangerbot/botManager";
import { events } from "messangerbot/events";

const bot = MessangerBotManager.getCurrentBot();

events.receiveMessage.on((msg)=> {
    msg.reply(bot.getName());
    msg.reply(msg.author.name);
})

events.onSpecificCommand("test", (msg) => {
    msg.reply(`'${msg.command}' command has been registered succesfully!`);
});

events.onSpecificCommand("test2", (msg) => {
    msg.reply(`'${msg.command}' command has been registered succesfully!`);
});
