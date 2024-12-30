import { events } from "SDK/messangerbot/events";
import { Command } from "Utils/command";

events.message.on((ctx) => {
    if (ctx.content === "하이") ctx.reply("Hi");
});

//command register
const hiCommand = new Command("하이", "'/하이' 나 '/hello'를 치면 hi를 대답함").alias("hello");

hiCommand.onExecute((ctx)=> {
    ctx.reply("hi");
})