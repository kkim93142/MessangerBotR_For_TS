declare module BotManager {
    function compile(botName: string): boolean;

    function compileAll(): void;

    function getBot(botName: string): Bot;

    /**
     * Returns all of the bots.
     */
    function getBotList(): Bot[];


    function getCurrentBot(): Bot;

    /**
     * Returns if the bot is on.
     */
    function getPower(): boolean;

    function setPower(botName: string, isOn: boolean): void
    /**
     * Returns an array of room namee that the session is not expired.
     * @param packageName Default value is last notification app's package name.
     */
    function getRooms(packageName?: string): string[];
}

declare abstract class Bot {
    /**
     * @deprecated Use MessangerBotManager.getCurrentBot() instead.
     */
    constructor();

    /**
     * @returns if the compilation is successful.
     */
    public abstract compile(): boolean;
    public abstract getName(): string;
    /**
     * Returns if the current bot is on.
     */
    public abstract getPower(): boolean;
    public abstract setPower(isOn: boolean): void;
    /**
     * @deprecated If you need more events, just let me know.
     */
    public abstract addListener(eventName: string, listener: AnyFunction): void;
    /**
     * @param packageName Default value is last notification app's package name.
     */
    public abstract canReply(room: string, packageName?: string): boolean;
    /**
     * @param packageName Default value is last notification app's package name.
     */
    public abstract markAsRead(room: string, packageName?: string): void;

    /**
     * @deprecated Use events.eventName.clear() instead. It will make all of the custom events BROKEN until reload(compile).
     */
    public abstract removeAllListener(): void;
    /**
     * @deprecated Use events.eventName.clear() instead. It will make the custom event that is eventName matches BROKEN until reload(compile).
     */
    public abstract removeListener(eventName: string): void;

    public abstract setCommandPrefix(prefix: string): void;

    /**
     * @param packageName Default value is last notification app's package name.
     */
    public abstract send(room: string, message: string, packageName?: string): boolean;
}