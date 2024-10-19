import { Bot } from "messangerbot/bot";

export namespace MessangerBotManager {
    export function compile(botName: string): boolean { 
        //@ts-expect-error
        return BotManager.compile(botName);
    };

    export function getBot(botName: string): Bot { 
        //@ts-expect-error
        return BotManager.getBot(botName);
    };

    /**
     * Returns all of the bots.
     */
    export function getBotList(): Bot[] { 
        //@ts-expect-error
        return BotManager.getBotList();
    };


    export function getCurrentBot(): Bot { 
        //@ts-expect-error
        return BotManager.getCurrentBot();
    };

    /**
     * Returns if the bot is on.
     */
    export function getPower(): boolean { 
        //@ts-expect-error
        return BotManager.getPower();
    };

    export function setPower(botName: string, isOn: boolean): void {
        //@ts-expect-error
        return BotManager.setPower(botName, isOn);
    };

    /**
     * Returns an array of room namee that the session is not expired.
     * @param packageName Default value is last notification app's package name.
     */
    export function getRooms(packageName: string | undefined = undefined): string[] { 
        if (packageName) {
            //@ts-expect-error
            return BotManager.getRooms(packageName);
        } else {
            //@ts-expect-error
            return BotManager.getRooms();
        };
    };
}