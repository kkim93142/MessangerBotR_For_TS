import { Abstract } from "./abstract";

type AnyFunction = (this: any, ...args: any[]) => any;

export class Bot {
    /**
     * @deprecated Use MessangerBotManager.getCurrentBot() instead.
     */
    constructor() {};

    /**
     * @returns if the compilation is successful.
     */
    public compile(): boolean { return Abstract(); };
    public getName(): string { return Abstract(); };
    /**
     * Returns if the current bot is on.
     */
    public getPower(): boolean { return Abstract(); };
    public setPower(isOn: boolean): void {};
    /**
     * @deprecated If you need more events, just let me know.
     */
    public addListener(eventName: string, listener: AnyFunction): void {};
    /**
     * @param packageName Default value is last notification app's package name.
     */
    public canReply(room: string, packageName: string = ""): boolean { return Abstract(); };
    /**
     * @param packageName Default value is last notification app's package name.
     */
    public markAsRead(room: string, packageName: string = ""): void {};

    /**
     * @deprecated Use events.eventName.clear() instead. It will make all of the custom events BROKEN until reload(compile).
     */
    public removeAllListener(): void {};
    /**
     * @deprecated Use events.eventName.clear() instead. It will make the custom event that is eventName matches BROKEN until reload(compile).
     */
    public removeListener(evnetName: string): void {};

    public setCommandPrefix(prefix: string): void {};

    /**
     * @param packageName Default value is last notification app's package name.
     */
    public send(room: string, message: string, packageName: string = ""): boolean { return Abstract(); };
}