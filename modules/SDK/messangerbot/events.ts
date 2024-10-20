type ReturnPromise<T extends (...args: any[]) => Event.ReturnType> = T extends (...args: infer ARGS) => infer RET ? (...args: ARGS) => RET | Promise<void> : never;


function printError(err: unknown) {
    console.log("Error occured while handling events: " + err);
};


export class Event<T extends (...args: any[]) => Event.ReturnType> {
    private readonly listeners: ReturnPromise<T>[] = [];
    private installer: (() => void) | null = null;
    private uninstaller: (() => void) | null = null;


    isEmpty(): boolean {
        return this.listeners.length === 0;
    }

    on(listener: ReturnPromise<T>): void {
        if (this.listeners.length === 0 && this.installer !== null) {
            this.installer();
            if (this.uninstaller === null) {
                this.installer = null;
            }
        }
        this.listeners.push(listener);
    }

    once(listener: T): void {
        const that = this;
        function callback(...args: any[]): any {
            that.remove(callback as ReturnPromise<T>);
            return listener(...args);
        }
        this.listeners.push(callback as ReturnPromise<T>);
    }

    onFirst(listener: ReturnPromise<T>): void {
        this.listeners.unshift(listener);
    }

    onLast(listener: ReturnPromise<T>): void {
        this.listeners.push(listener);
    }

    onBefore(listener: ReturnPromise<T>, needle: ReturnPromise<T>): void {
        const idx = this.listeners.indexOf(needle);
        if (idx === -1) throw Error("needle not found");
        this.listeners.splice(idx, 0, listener);
    }

    onAfter(listener: ReturnPromise<T>, needle: ReturnPromise<T>): void {
        const idx = this.listeners.indexOf(needle);
        if (idx === -1) throw Error("needle not found");
        this.listeners.splice(idx + 1, 0, listener);
    }

    remove(listener: ReturnPromise<T>): boolean {
        const idx = this.listeners.indexOf(listener);
        if (idx === -1) return false;
        this.listeners.splice(idx, 1);
        if (this.listeners.length === 0 && this.uninstaller != null) {
            this.uninstaller();
        }
        return true;
    }

    private _fireWithoutErrorHandling(...v: Parameters<T>): ReturnType<T> | undefined {
        for (const listener of this.listeners.slice()) {
            try {
                const ret = listener(...v);
                if (typeof ret === "number") return ret as any;
            } catch (err) {
                printError(err);
            }
        }
        return undefined;
    }

    private static reportError(err: unknown): void {
        const res = Event.errorHandler._fireWithoutErrorHandling(err);
        if (res == null) {
            printError(err as any);
        }
    }

    fire(...v: Parameters<T>): ReturnType<T> | undefined {
        for (const listener of this.listeners.slice()) {
            try {
                const ret = listener(...v);
                if (typeof ret === "number") return ret as any;
            } catch (err) {
                Event.reportError(err);
            }
        }
    }

    /**
     * reverse listener orders
     */
    fireReverse(...v: T extends (...args: infer ARGS) => any ? ARGS : never): (T extends (...args: any[]) => infer RET ? RET : never) | undefined {
        for (const listener of this.listeners.slice().reverse()) {
            try {
                const ret = listener(...v);
                if (typeof ret === "number") return ret as any;
            } catch (err) {
                Event.reportError(err);
            }
        }
    }

    allListeners(): IterableIterator<ReturnPromise<T>> {
        return this.listeners.values();
    }

    /**
     * remove all listeners
     */
    clear(): void {
        this.listeners.length = 0;
    }

    public static errorHandler = new Event<(error: any) => void>();
};


namespace Event {
    export type ReturnType = number | void | Promise<void>;
};

export namespace events {
    export const message = new Event<(messageObject: MessageType) => void>();
    export const command = new Event<(commandObject: CommandType) => void>();
    /**
     * @deprecated I'm not sure this type declaration is correct.
     */
    export const create = new Event<(savedInstanceState: any, activity: android.app.Activity) => void>();
    export const start = new Event<(activity: android.app.Activity) => void>();
    export const resume = new Event<(activity: android.app.Activity) => void>();
    export const pause = new Event<(activity: android.app.Activity) => void>();
    export const stop = new Event<(activity: android.app.Activity) => void>();
    export const restart = new Event<(activity: android.app.Activity) => void>();
    export const destroy = new Event<(activity: android.app.Activity) => void>();
    export const backPressed = new Event<(activity: android.app.Activity) => void>();
    export const notificationPosted = new Event<(statusBarNotification: android.service.notification.StatusBarNotification, SessionManager: sessionManager) => void>();
    export const startCompile = new Event<() => void>();

    /**
     * Listen to a specific command only
     * 
     * @param specificCommand The command string to listen for
     * @param listener The listener function to execute when the command matches
     */
    export function onSpecificCommands(specificCommands: string | string[], listener: (command: CommandType) => void): void {
        events.command.on((command: CommandType) => {
            const cmd = command.command;
            const typeOfSpecificCmd = typeof specificCommands;

            if (typeOfSpecificCmd === "string" && cmd === specificCommands) listener(command);
            else if (typeOfSpecificCmd === "object" && specificCommands.includes(cmd)) listener(command);
        });
    }
}