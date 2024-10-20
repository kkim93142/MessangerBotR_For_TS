export class Game {
    constructor(
        protected readonly commandObject: CommandType, 
        protected readonly players: UserType[],
    ) {};

    /**
     * @description only lowercase
     */
    public static readonly commands: string[];
    protected gameName: string;

    public getPlayers(): UserType[] {
        return this.players;
    };

    public getGameName(): string {
        return this.gameName;
    }

    public sendMessage(message: string): void {
        this.commandObject.reply(message);
    };

    public start(): void {};
    public end(): void {};
}