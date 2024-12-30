import { events } from "../SDK/messangerbot/events";

const registeredCommandNames: string[] = [];
const activeCommands: Command[] = [];

export class Command {
    private readonly commands: string[] = [];
    private callback: ((context: CommandType) => void) | undefined = undefined;

    constructor(mainCommand: string, public readonly description: string) {
        if (registeredCommandNames.includes(mainCommand)) throw new Error(`Command, '${mainCommand}' is already registered!`);
        registeredCommandNames.push(mainCommand);
        this.commands.push(mainCommand)
    }

    /**
     * Adds sub-commands
     */
    public alias(subCommand: string): Command {
        if (registeredCommandNames.includes(subCommand)) throw new Error(`Command, '${subCommand}' is already registered!`);
        if (this.callback) {
            throw new Error("After setting the callback, you are not allowed to add any sub-commands!")
        };

        registeredCommandNames.push(subCommand);
        this.commands.push(subCommand);
        return this;
    }

    public getMainCommand(): string {
        return this.commands[0];
    }

    public getSubCommands(): string[] {
        const copiedArr = this.commands;
        copiedArr.slice();
        return copiedArr;
    }

    public onExecute(listener: (context: CommandType) => void) {
        if (this.callback) {
            throw new Error("The callback can only be set once!")
        };

        this.callback = listener;
        activeCommands.push(this);
    }

    public static getAllActiveCommands(): Command[] {
        return activeCommands;
    }

    /**
     * @description Please make sure you have brain before calling this function.
     */
    public fire(ctx: CommandType) {
        if (this.callback) this.callback(ctx);
    }
}

events.command.on((ctx) => {
    for (const cmd of activeCommands) {
        const command = ctx.command.trim();

        if (
            cmd.getMainCommand() === command ||
            cmd.getSubCommands().some((subCmd)=> {
                subCmd === command;
            })
        ) {
            cmd.fire(ctx);
            break;
        }
    }
})