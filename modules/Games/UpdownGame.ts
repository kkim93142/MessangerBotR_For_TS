//Game class example


import { events } from "SDK/messangerbot/events";
import { Game } from "Games/Game";

export class UpdownGame extends Game {
    protected gameName: string = "Updown";
    public static readonly commands: string[] = ["updown", "업다운"];

    constructor(
        protected readonly commandObject: CommandType, 
        protected readonly players: UserType[],
    ) {
        super(commandObject, players);
        this.start();
    };

    private readonly numberToGuess = Math.floor(Math.random() * 101);
    private readonly player = this.players[0];
    private readonly playerName = this.player.name;

    private readonly maxLifes = 6;
    private lifes = this.maxLifes;

    private upHintCount = 0;
    private downHintCount = 0;

    public guess(number: number) {
        //JS doesn't care types.
        if (isNaN(number)) return;
        this.lifes--;

        if (number === this.numberToGuess) {
            this.sendMessage(
                "축하합니다, @" + this.playerName + "님!" + "\n" + 
                "정답은 " + this.numberToGuess + "입니다!" + "\n" + 
                "총 " + (this.maxLifes - this.lifes) + "번 만에 맞추셨습니다! (Up Hint: " + this.upHintCount + ", Down Hint: " + this.downHintCount + ")"
            );
            this.end();
            return;
        };

        if (this.lifes <= 0) {
            this.sendMessage(
                "아쉽네요, @" + this.playerName + "님!\n" + 
                "정답은 " + this.numberToGuess + "였습니다!\n" + 
                "(Up Hint: " + this.upHintCount + ", Down Hint: " + this.downHintCount + ")"
            );
            this.end();
            return;
        };

        if (number < this.numberToGuess) {
            this.upHintCount++;
            this.sendMessage("@" + this.playerName + ", UP! (남은 기회: " + this.lifes + ")");
        } else {
            this.downHintCount++;
            this.sendMessage("@" + this.playerName + ", Down! (남은 기회: " + this.lifes + ")");
        };
    };

    public start(): void {
        this.sendMessage(
            "@" + this.playerName + "님, 게임이 시작되었습니다!" + "\n" +
            "/<1~100> 으로 맞춰보세요! 기회는 총 " + this.maxLifes + "번!"
        );
    };

    public end(): void {
        delete UpdownGames[this.player.hash!];
    };
};


const UpdownGames: Record<string, UpdownGame> = {};


events.command.on((obj)=> {
    const cmd = obj.command.trim().toLowerCase();
    const userHash = obj.author.hash;

    if (!userHash) return;

    if (UpdownGames[userHash]) UpdownGames[userHash].guess(Number(cmd));
});

events.onSpecificCommands(UpdownGame.commands, (obj)=> {
    const user = obj.author;
    const userHash = user.hash;

    if (!userHash) return;

    if (!UpdownGames[userHash]) UpdownGames[userHash] = new UpdownGame(obj, [user]);
});